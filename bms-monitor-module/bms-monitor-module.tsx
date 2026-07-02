import { BQ79616PAPRQ1 } from "./imports/BQ79616PAPRQ1";
import { BSMD0603_010_33V } from "./imports/BSMD0603_010_33V";
import { MJD44H11T4G } from "./imports/MJD44H11T4G";
import { PZ254V_11_20P } from "./imports/PZ254V_11_20P";
import { ZX_XH2_54_10PZZ_GW } from "./imports/ZX_XH2_54_10PZZ_GW";
import { ZX_XH2_54_4PZZ } from "./imports/ZX_XH2_54_4PZZ";

/**
 * BmsMonitorModule - High-voltage BMS Monitor Module
 * Based on BQ79616, supports 16 series cells, passive balancing,
 * and 8-channel temperature sensing.
 */
export const BmsMonitorModule = () => {
  return (
    <group name="bms-monitor-module">
      {/* Main ASIC: BQ79616 16-Series Battery Monitor */}
      <BQ79616PAPRQ1 name="U1" />

      {/* Pre-regulator NPN Transistor for LDOIN supply */}
      <MJD44H11T4G name="Q1" />

      {/* External Connectors */}
      <PZ254V_11_20P name="P1" /> {/* Cell Taps (VC0-VC16, CB0-CB16) */}
      <ZX_XH2_54_4PZZ name="P2" /> {/* Isolated Daisy Chain (COMH/COML) */}
      <ZX_XH2_54_4PZZ name="P3" /> {/* Ancillary Interface (CVDD, NFAULT) */}
      <ZX_XH2_54_10PZZ_GW name="P4" /> {/* Thermistor Interface (8x NTC) */}

      {/* 
         Cell Sensing & Balancing Interface
         For each cell tap (0-16):
         - Balancing current path (direct to bypass 100mA sensing fuse)
         - Voltage sensing path (fused and RC-filtered)
      */}
      {Array.from({ length: 17 }).map((_, i) => {
        const nodeIndex = 16 - i; // Start from top cell
        const p1Pin = i + 1; // P1.pin1 is Node 16 (Top)
        
        return (
          <group key={`cell_node_${nodeIndex}`}>
             {/* 
                Passive Balancing Path 
                Current flows through external 22 ohm resistor and internal MOSFETs.
                Bypasses the 100mA sense fuse to handle ~240mA balancing current.
             */}
             <resistor name={`R_CB${nodeIndex}`} resistance="22ohm" />
             <net from={`P1.pin${p1Pin}`} to={`R_CB${nodeIndex}.pin1`} />
             <net from={`R_CB${nodeIndex}.pin2`} to={`U1.CB${nodeIndex}`} />

             {/* 
                Voltage Sensing Path 
                Includes 100mA SMD fuse at the point of contact for safety.
                RC filter (1k / 100nF) for VC1-VC16; VC0 is direct sensing.
             */}
             <BSMD0603_010_33V name={`F${nodeIndex + 1}`} />
             <net from={`P1.pin${p1Pin}`} to={`F${nodeIndex + 1}.pin1`} />
             
             {nodeIndex > 0 ? (
               <group>
                 <resistor name={`R_VC${nodeIndex}`} resistance="1kohm" />
                 <net from={`F${nodeIndex + 1}.pin2`} to={`R_VC${nodeIndex}.pin1`} />
                 <net from={`R_VC${nodeIndex}.pin2`} to={`U1.VC${nodeIndex}`} />
                 
                 {/* Differential filter capacitor between VC(n) and VC(n-1) */}
                 <capacitor name={`C_VC${nodeIndex}`} capacitance="100nF" />
                 <net from={`U1.VC${nodeIndex}`} to={`C_VC${nodeIndex}.pin1`} />
                 <net from={`U1.VC${nodeIndex - 1}`} to={`C_VC${nodeIndex}.pin2`} />
               </group>
             ) : (
               /* VC0 is the bottom reference, direct connection after fuse */
               <net from={`F${nodeIndex + 1}.pin2`} to="U1.VC0" />
             )}
          </group>
        );
      })}

      {/* Main Ground Reference (Negative of the lowest cell) */}
      <net from="P1.pin17" to="GND_HV" />
      <net from="GND_HV" to="U1.AVSS" />
      <net from="GND_HV" to="U1.DVSS" />
      <net from="GND_HV" to="U1.CVSS" />
      <net from="GND_HV" to="U1.PAD" />
      <net from="GND_HV" to="P4.pin10" />
      <net from="GND_HV" to="P3.pin3" />

      {/* Power Supply Infrastructure */}
      {/* Device power input (BAT) draws from top tap (VC16) */}
      <net from="P1.pin1" to="U1.BAT" />
      <capacitor name="C_BAT" capacitance="10uF" />
      <net from="U1.BAT" to="C_BAT.pin1" />
      <net from="GND_HV" to="C_BAT.pin2" />

      {/* Pre-regulator for LDOIN using external NPN */}
      <net from="U1.BAT" to="Q1.C" />
      <net from="U1.NPNB" to="Q1.B" />
      <net from="Q1.E" to="U1.LDOIN" />
      
      <capacitor name="C_LDOIN" capacitance="0.1uF" />
      <net from="U1.LDOIN" to="C_LDOIN.pin1" />
      <net from="GND_HV" to="C_LDOIN.pin2" />

      {/* Internal LDO Decoupling Capacitors */}
      <capacitor name="C_AVDD" capacitance="1uF" />
      <net from="U1.AVDD" to="C_AVDD.pin1" />
      <net from="GND_HV" to="C_AVDD.pin2" />

      <capacitor name="C_DVDD" capacitance="1uF" />
      <net from="U1.DVDD" to="C_DVDD.pin1" />
      <net from="GND_HV" to="C_DVDD.pin2" />

      <capacitor name="C_CVDD" capacitance="1uF" />
      <net from="U1.CVDD" to="C_CVDD.pin1" />
      <net from="GND_HV" to="C_CVDD.pin2" />

      {/* ADC Reference and Internal Support Rails */}
      <capacitor name="C_REF" capacitance="1uF" />
      <net from="U1.REFHP" to="C_REF.pin1" />
      <net from="U1.REFHM" to="C_REF.pin2" />
      <net from="U1.REFHM" to="GND_HV" />

      <capacitor name="C_BBP" capacitance="1uF" />
      <net from="U1.BBP" to="C_BBP.pin1" />
      <net from="U1.BBN" to="C_BBP.pin2" />

      <capacitor name="C_NEG5V" capacitance="1uF" />
      <net from="U1.NEG5V" to="C_NEG5V.pin1" />
      <net from="GND_HV" to="C_NEG5V.pin2" />

      {/* Isolated Daisy Chain Interface (AC Coupled via 2kV Capacitors) */}
      {/* Port H - Upstream/Downstream */}
      <capacitor name="C_COMHP" capacitance="100nF" />
      <net from="U1.COMHP" to="C_COMHP.pin1" />
      <net from="C_COMHP.pin2" to="P2.pin1" />

      <capacitor name="C_COMHN" capacitance="100nF" />
      <net from="U1.COMHN" to="C_COMHN.pin1" />
      <net from="C_COMHN.pin2" to="P2.pin2" />

      {/* Port L - Downstream/Upstream */}
      <capacitor name="C_COMLP" capacitance="100nF" />
      <net from="U1.COMLP" to="C_COMLP.pin1" />
      <net from="C_COMLP.pin2" to="P2.pin3" />

      <capacitor name="C_COMLN" capacitance="100nF" />
      <net from="U1.COMLN" to="C_COMLN.pin1" />
      <net from="C_COMLN.pin2" to="P2.pin4" />

      {/* Ancillary Interface (Ancillary Current Sensing Power & Fault) */}
      <net from="U1.CVDD" to="P3.pin1" /> {/* 5V output for AMC1301 */}
      <net from="U1.NFAULT" to="P3.pin2" />
      
      {/* Hardware Fault Pull-up */}
      <resistor name="R_FAULT_PU" resistance="10kohm" />
      <net from="U1.CVDD" to="R_FAULT_PU.pin1" />
      <net from="U1.NFAULT" to="R_FAULT_PU.pin2" />

      {/* Thermistor Sensing Network (8-Channel GPIO Analog Input) */}
      {Array.from({ length: 8 }).map((_, i) => {
        const gpioIndex = i + 1;
        return (
          <group key={`ntc_pullup_${gpioIndex}`}>
            <net from={`U1.GPIO${gpioIndex}`} to={`P4.pin${gpioIndex}`} />
            
            {/* Bias pull-up resistors for external NTCs */}
            <resistor name={`R_PU_GPIO${gpioIndex}`} resistance="10kohm" />
            <net from="U1.TSREF" to={`R_PU_GPIO${gpioIndex}.pin1`} />
            <net from={`U1.GPIO${gpioIndex}`} to={`R_PU_GPIO${gpioIndex}.pin2`} />
          </group>
        );
      })}
      {/* Shared TSREF bias output */}
      <net from="U1.TSREF" to="P4.pin9" />
    </group>
  );
};
