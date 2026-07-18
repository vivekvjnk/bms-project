import { BQ79616PAPRQ1 } from "./imports/BQ79616PAPRQ1";
import { BSMD0603_010_33V } from "./imports/BSMD0603_010_33V";
import { MJD44H11T4G } from "./imports/MJD44H11T4G";

interface BmsMonitorModuleProps {
  showAsSchematicBox?: boolean;
  name?: string;
  schX?: number;
  schY?: number;
}

/**
 * BmsMonitorModule - High-voltage BMS Monitor Module
 * Based on BQ79616, supports 16 series cells, passive balancing,
 * and 8-channel temperature sensing. All hardware connectors are externalized as ports.
 */
export const BmsMonitorModule = ({ name, schX, schY, showAsSchematicBox }: BmsMonitorModuleProps) => {
  return (
    <group name={name} schX={schX} schY={schY} showAsSchematicBox={showAsSchematicBox}>
        
        {/* ==========================================
           EXTERNAL INTERFACE PORTS
           ========================================== */}
        
        {/* Interface: Battery Stack Power */}
        <port name="BAT" direction="left" />

        {/* Interface: Cell Taps (17 Taps: 0-16) */}
        {Array.from({ length: 17 }).map((_, i) => (
          <port key={`port_cell_tap_${i}`} name={`CELL_TAP_${i}`} direction="left" />
        ))}

        {/* Interface: Daisy Chain Communications */}
        <port name="COM_HP" direction="right" />
        <port name="COM_HN" direction="right" />
        <port name="COM_LP" direction="right" />
        <port name="COM_LN" direction="right" />

        {/* Interface: Ancillary Signals / Power Rail Breakouts */}
        <port name="CVDD" direction="right" connectsTo={["U1.pin45"]} />
        <port name="NFAULT" direction="right" connectsTo={["U1.pin62"]} />
        <port name="PAD" direction="right" connectsTo={["U1.pin65"]} />
        <port name="GND_ANCILLARY" direction="right" />

        {/* Interface: Thermistor Channels (8 Analog Inputs + VREF + GND) */}
        {Array.from({ length: 8 }).map((_, i) => (
          <port key={`port_ntc_${i + 1}`} name={`NTC_CH${i + 1}`} direction="right" />
        ))}
        <port name="VREF_NTC" direction="right" connectsTo={["U1.pin51"]} />
        <port name="GND_NTC" direction="right" />

        {/* Main ASIC: BQ79616 16-Series Battery Monitor */}
        <BQ79616PAPRQ1 name="U1" schX={0} schY={0} />

        {/* Pre-regulator NPN Transistor for LDOIN supply */}
        <MJD44H11T4G name="Q1" schX={0} schY={-5} />

        {/* ==========================================
           CELL SENSING & BALANCING INTERFACE
           ========================================== */}
        {Array.from({ length: 17 }).map((_, i) => {
          const tapIndex = i; // CELL_TAP_0 to CELL_TAP_16
          const yPos = 12 - i * 1.5;
          
          return (
            <group key={`cell_tap_${tapIndex}`}>
               {tapIndex > 0 ? (
                 <group>
                   {/* Balancing components */}
                   <resistor name={`R_CB${tapIndex}`} resistance="22ohm" footprint="0603" schX={-11} schY={yPos + 0.3} />
                   <trace name={`t_cbp_${tapIndex}`} from={`CELL_TAP_${tapIndex}`} to={`R_CB${tapIndex}.1`} />
                   <trace name={`t_cbu_${tapIndex}`} from={`R_CB${tapIndex}.2`} to={`U1.pin${4 + (tapIndex - 1) * 2}`} />

                   {/* Sensing components */}
                   <BSMD0603_010_33V name={`F${tapIndex}`} schX={-12.5} schY={yPos} />
                   <trace name={`t_fin_${tapIndex}`} from={`CELL_TAP_${tapIndex}`} to={`F${tapIndex}.pin1`} />
                   
                   <resistor name={`R_VC${tapIndex}`} resistance="1kohm" footprint="0603" schX={-9.5} schY={yPos - 0.3} />
                   <trace name={`t_fout_${tapIndex}`} from={`F${tapIndex}.pin2`} to={`R_VC${tapIndex}.1`} />
                   <trace name={`t_vcu_${tapIndex}`} from={`R_VC${tapIndex}.2`} to={`U1.pin${5 + (tapIndex - 1) * 2}`} />
                   
                   <capacitor name={`C_VC${tapIndex}`} capacitance="100nF" footprint="0603" schX={-7} schY={yPos - 0.6} />
                   <trace name={`t_cvcu1_${tapIndex}`} from={`U1.pin${5 + (tapIndex - 1) * 2}`} to={`C_VC${tapIndex}.1`} />
                   <trace name={`t_cvcu2_${tapIndex}`} from={`U1.pin${tapIndex === 1 ? 39 : 5 + (tapIndex - 2) * 2}`} to={`C_VC${tapIndex}.2`} />
                 </group>
               ) : (
                 /* Ground Tap */
                 <group>
                   <BSMD0603_010_33V name={`F0`} schX={-12.5} schY={yPos} />
                   <trace name={`t_fin_0`} from={`CELL_TAP_0`} to={`F0.pin1`} />
                   <trace name={`t_f0out`} from={`F0.pin2`} to={`U1.pin39`} />
                 </group>
               )}
            </group>
          );
        })}

        {/* Power Supply Components */}
        <capacitor name="C_BAT" capacitance="10uF" footprint="0603" schX={-3} schY={6} />
        <trace name="t_bat_u1_1" from="BAT" to="U1.pin1" />
        <trace name="t_u1_1_cbat1" from="U1.pin1" to="C_BAT.1" />
        <trace name="t_u1_39_cbat2" from="U1.pin39" to="C_BAT.2" />

        <capacitor name="C_LDOIN" capacitance="0.1uF" footprint="0603" schX={-4.5} schY={4.5} />
        <trace name="t_u1_1_q1c" from="U1.pin1" to="Q1.C" />
        <trace name="t_u1_48_q1b" from="U1.pin48" to="Q1.B" />
        <trace name="t_q1e_u1_47" from="Q1.E" to="U1.pin47" />
        <trace name="t_u1_47_cldoin1" from="U1.pin47" to="C_LDOIN.1" />
        <trace name="t_u1_39_cldoin2" from="U1.pin39" to="C_LDOIN.2" />

        {/* Internal LDO Decoupling - Grouped near U1 */}
        <capacitor name="C_AVDD" capacitance="1uF" footprint="0603" schX={3} schY={4.5} />
        <trace name="t_u1_38_cavdd1" from="U1.pin38" to="C_AVDD.1" />
        <trace name="t_u1_39_cavdd2" from="U1.pin39" to="C_AVDD.2" />

        <capacitor name="C_DVDD" capacitance="1uF" footprint="0603" schX={3.75} schY={5.25} />
        <trace name="t_u1_49_cdvdd1" from="U1.pin49" to="C_DVDD.1" />
        <trace name="t_u1_39_cdvdd2" from="U1.pin39" to="C_DVDD.2" />

        <capacitor name="C_CVDD" capacitance="1uF" footprint="0603" schX={4.5} schY={6} />
        <trace name="t_u1_45_ccvdd1" from="U1.pin45" to="C_CVDD.1" />
        <trace name="t_u1_39_ccvdd2" from="U1.pin39" to="C_CVDD.2" />

        <capacitor name="C_REF" capacitance="1uF" footprint="0603" schX={5.25} schY={6.75} />
        <trace name="t_u1_37_cref1" from="U1.pin37" to="C_REF.1" />
        <trace name="t_u1_36_cref2" from="U1.pin36" to="C_REF.2" />
        <trace name="t_u1_36_u1_39" from="U1.pin36" to="U1.pin39" />

        <capacitor name="C_BBP" capacitance="1uF" footprint="0603" schX={6} schY={7.5} />
        <trace name="t_u1_64_cbbp1" from="U1.pin64" to="C_BBP.1" />
        <trace name="t_u1_63_cbbp2" from="U1.pin63" to="C_BBP.2" />

        <capacitor name="C_NEG5V" capacitance="1uF" footprint="0603" schX={6.75} schY={8.25} />
        <trace name="t_u1_44_cneg5v1" from="U1.pin44" to="C_NEG5V.1" />
        <trace name="t_u1_39_cneg5v2" from="U1.pin39" to="C_NEG5V.2" />

        {/* Daisy Chain Capacitors to Ports */}
        <capacitor name="C_COMHP" capacitance="100nF" footprint="0603" schX={-6} schY={16} />
        <trace name="t_u1_43_ccomhp1" from="U1.pin43" to="C_COMHP.1" />
        <trace name="t_ccomhp2_p2_1" from="C_COMHP.2" to="COM_HP" />

        <capacitor name="C_COMHN" capacitance="100nF" footprint="0603" schX={-2} schY={16} />
        <trace name="t_u1_42_ccomhn1" from="U1.pin42" to="C_COMHN.1" />
        <trace name="t_ccomhn2_p2_2" from="C_COMHN.2" to="COM_HN" />

        <capacitor name="C_COMLP" capacitance="100nF" footprint="0603" schX={-2} schY={14.5} />
        <trace name="t_u1_40_ccomlp1" from="U1.pin40" to="C_COMLP.1" />
        <trace name="t_ccomlp2_p2_3" from="C_COMLP.2" to="COM_LP" />

        <capacitor name="C_COMLN" capacitance="100nF" footprint="0603" schX={-6} schY={14.5} />
        <trace name="t_u1_41_ccomln1" from="U1.pin41" to="C_COMLN.1" />
        <trace name="t_ccomln2_p2_4" from="C_COMLN.2" to="COM_LN" />

        {/* Ground Infrastructure & Returns */}
        <trace name="t_p1_17_u1_39" from="CELL_TAP_17" to="U1.pin39" />
        <trace name="t_u1_39_u1_50" from="U1.pin39" to="U1.pin50" />
        <trace name="t_u1_50_u1_46" from="U1.pin50" to="U1.pin46" />
        <trace name="t_u1_46_u1_65" from="U1.pin46" to="U1.pin65" />
        <trace name="t_u1_65_p4_10" from="U1.pin65" to="GND_NTC" />
        <trace name="t_p4_10_p3_3" from="GND_NTC" to="GND_ANCILLARY" />

        {/* Ancillary Passive Pull-ups & Routing */}
        <resistor name="R_FAULT_PU" resistance="10kohm" footprint="0603" schX={7.5} schY={10.5} />
        <trace name="t_u1_45_rfpu1" from="U1.pin45" to="R_FAULT_PU.1" />
        <trace name="t_u1_62_rfpu2" from="U1.pin62" to="R_FAULT_PU.2" />

        {/* Terminate unused/optional mapping pins safely to device reference ground */}
        <trace name="t_p1_18_u1_39" from="CELL_TAP_18" to="U1.pin39" />
        <trace name="t_p1_19_u1_39" from="CELL_TAP_19" to="U1.pin39" />
        <trace name="t_p1_20_u1_39" from="CELL_TAP_20" to="U1.pin39" />

        {/* Thermistor Network Routing */}
        {Array.from({ length: 8 }).map((_, i) => {
          const gpioIndex = i + 1;
          const yPos = 5.25 - i * 1.5;
          const u1Pin = 62 - gpioIndex; 
          return (
            <group key={`ntc_pullup_${gpioIndex}`}>
              <trace name={`t_u1_${u1Pin}_p4_${gpioIndex}`} from={`U1.pin${u1Pin}`} to={`NTC_CH${gpioIndex}`} />
              <resistor name={`R_PU_GPIO${gpioIndex}`} resistance="10kohm" footprint="0603" schX={10.5} schY={yPos} />
              <trace name={`t_u1_51_rpu1_${gpioIndex}`} from="U1.pin51" to={`R_PU_GPIO${gpioIndex}.1`} />
              <trace name={`t_u1_${u1Pin}_rpu2_${gpioIndex}`} from={`U1.pin${u1Pin}`} to={`R_PU_GPIO${gpioIndex}.2`} />
            </group>
          );
        })}
    </group>
  );
};