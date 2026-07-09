import { UCC287506DBVR } from "./imports/UCC287506DBVR"
import { CSD19532KTT } from "./imports/CSD19532KTT"
import { LTV_817S_TA1_C } from "./imports/LTV_817S_TA1_C"
import { MBR1060CT } from "./imports/MBR1060CT"
import { TL431ACDBZR } from "./imports/TL431ACDBZR"
import { TPS62130RGTR } from "./imports/TPS62130RGTR"
import { TPS62133RGTR } from "./imports/TPS62133RGTR"

export const LowVoltagePowerSupply = () => {
  return (
    <group name="LVPS">
      {/* Input Stage */}
      <port name="VIN_AUX" direction="in" />
      <port name="VIN_LVBUS" direction="in" />
      <port name="CHASSIS_GND" direction="in" />

      {/* Output Rails */}
      <port name="SYS_12V" direction="out" />
      <port name="SYS_5V" direction="out" />
      <port name="SYS_3_3V" direction="out" />
      <port name="SYS_1_2V" direction="out" />
      <port name="ISO_GND" direction="out" />

      {/* Input OR-ing Diodes */}
      <diode name="D_or_aux" pcbId="D1" />
      <diode name="D_or_bus" pcbId="D2" />

      {/* Reverse Polarity Protection (P-MOSFET) */}
      <chip
        name="Q_rev"
        pcbId="Q2"
        manufacturerPartNumber="Generic-P-MOSFET"
        pinLabels={{ pin1: "G", pin2: "D", pin3: "S" }}
      />
      <resistor name="R_rev_g" resistance="10k" pcbId="R_rev_g" />
      <net name="Q_REV_G" pins={["Q_rev.pin1", "R_rev_g.pin1"]} />
      <net name="PGND_REF" pins={["R_rev_g.pin2", "PGND"]} />
      
      <capacitor name="C_in_bulk1" capacity="220uF" voltage="100V" pcbId="C9" />
      <capacitor name="C_in_bulk2" capacity="220uF" voltage="100V" pcbId="C10" />
      
      {/* 12V-to-18V Charge Pump (for Start-up from 12V Aux) */}
      <component
        name="U_cp"
        pcbId="U10"
        manufacturerPartNumber="Charge-Pump-12to18-Discrete"
        pinLabels={{ vin: "VIN", vout: "VOUT", gnd: "GND" }}
      />
      <diode name="D_cp" pcbId="D10" />

      {/* 64V Start-up Resistor */}
      <resistor name="R_start" resistance="100k" pcbId="R_start" />
      <diode name="D_start" pcbId="D11" />

      {/* Flyback Controller */}
      <UCC287506DBVR name="U1" pcbId="U1" />
      <capacitor name="C_vdd" capacity="10uF" voltage="25V" pcbId="C_vdd" />
      
      {/* Brownout Sensing (9.0V threshold) */}
      <resistor name="R_flt_up" resistance="100k" pcbId="R21" />
      <resistor name="R_flt_low" resistance="10k" pcbId="R22" />
      
      {/* Primary Switch */}
      <CSD19532KTT name="Q1" pcbId="Q1" />
      <resistor name="R_gate" resistance="10" pcbId="R11" />
      
      {/* Current Sense */}
      <resistor name="R_cs1" resistance="0.1" pcbId="R12" />
      <resistor name="R_cs2" resistance="0.1" pcbId="R13" />

      {/* Transformer T1 (PQ2620, 1:1.2) */}
      <component
        name="T1"
        pcbId="T1"
        manufacturerPartNumber="Custom-Flyback-PQ2620"
        pinLabels={{
          pin1: "PRI_DOT",
          pin2: "PRI",
          pin3: "SEC_DOT",
          pin4: "SEC"
        }}
      />

      {/* Secondary Rectifier */}
      <MBR1060CT name="D4" pcbId="D4" />
      <capacitor name="C_out12v" capacity="470uF" voltage="25V" pcbId="C15" />

      {/* Feedback Isolation */}
      <LTV_817S_TA1_C name="U2" pcbId="U2" />
      <TL431ACDBZR name="U3" pcbId="U3" />

      {/* SSR Feedback Resistors (12.0V target) */}
      <resistor name="R_up" resistance="38.3k" tolerance="0.1%" pcbId="R_up" />
      <resistor name="R_low" resistance="10k" tolerance="0.1%" pcbId="R_low" />

      {/* Post Regulators (Bucks) */}
      <TPS62130RGTR name="U4" pcbId="U4" /> {/* 12V to 5V */}
      <inductor name="L1" inductance="2.2uH" pcbId="L1" />
      <resistor name="R_u4_up" resistance="400k" pcbId="R_u4_up" />
      <resistor name="R_u4_low" resistance="75k" pcbId="R_u4_low" />
      <capacitor name="C_out5v" capacity="47uF" pcbId="C16" />
      
      <TPS62130RGTR name="U5" pcbId="U5" /> {/* 12V to 3.3V */}
      <inductor name="L2" inductance="2.2uH" pcbId="L2" />
      <resistor name="R_u5_up" resistance="400k" pcbId="R_u5_up" />
      <resistor name="R_u5_low" resistance="120k" pcbId="R_u5_low" />
      <capacitor name="C_out3v3" capacity="47uF" pcbId="C17" />

      <TPS62133RGTR name="U6" pcbId="U6" /> {/* 5V to 1.2V */}
      <inductor name="L3" inductance="2.2uH" pcbId="L3" />
      <capacitor name="C_out1v2" capacity="47uF" pcbId="C18" />

      {/* Connectivity */}
      
      {/* Input Stage Connectivity */}
      <net name="VIN_AUX_CONN" pins={["VIN_AUX", "D_or_aux.pin1", "U_cp.vin", "R_flt_up.pin1"]} />
      <net name="VIN_BUS_CONN" pins={["VIN_LVBUS", "D_or_bus.pin1", "R_start.pin1"]} />
      <net name="V_IN_OR" pins={["D_or_aux.pin2", "D_or_bus.pin2", "Q_rev.pin3"]} />
      <net name="VIN_PROT" pins={["Q_rev.pin2", "C_in_bulk1.pin1", "C_in_bulk2.pin1", "T1.pin1"]} />
      
      {/* Start-up Logic */}
      <net name="R_START_OUT" pins={["R_start.pin2", "D_start.pin1"]} />
      <net name="CP_OUT" pins={["U_cp.vout", "D_cp.pin1"]} />
      <net name="U1_VDD_NET" pins={["D_start.pin2", "D_cp.pin2", "U1.pin5", "C_vdd.pin1"]} />

      {/* Brownout Sensing */}
      <net name="U1_FLT_DIV" pins={["R_flt_up.pin2", "R_flt_low.pin1", "U1.pin3"]} />

      {/* Primary Side Power Stage */}
      <net name="U1_DRV" pins={["U1.pin6", "R_gate.pin1"]} />
      <net name="Q1_G" pins={["R_gate.pin2", "Q1.pin1"]} />
      <net name="SW_NODE" pins={["Q1.pin2", "T1.pin2"]} />
      <net name="CS_NET" pins={["Q1.pin3", "R_cs1.pin1", "R_cs2.pin1", "U1.pin4"]} />
      
      {/* Primary Ground Net */}
      <net name="PGND" pins={[
        "R_cs1.pin2", "R_cs2.pin2", 
        "U1.pin1", 
        "CHASSIS_GND", 
        "C_in_bulk1.pin2", "C_in_bulk2.pin2", 
        "C_vdd.pin2",
        "U_cp.gnd",
        "R_flt_low.pin2",
        "U2.pin3",
        "R_rev_g.pin2"
      ]} />
      <net name="Q_REV_G" pins={["Q_rev.pin1", "R_rev_g.pin1"]} />

      {/* Feedback to U1 */}
      <net name="U1_FB" pins={["U1.pin2", "U2.pin4"]} />

      {/* Secondary Side Power Stage */}
      <net name="SEC_SW" pins={["T1.pin3", "D4.pin1", "D4.pin3"]} />
      <net name="SYS_12V_NET" pins={["D4.pin2", "C_out12v.pin1", "R_up.pin1", "U2.pin1", "U4.pin10", "U4.pin11", "U4.pin12", "U4.pin13", "U5.pin10", "U5.pin11", "U5.pin12", "U5.pin13", "SYS_12V"]} />
      
      {/* Buck 1 (5V) */}
      <net name="U4_SW" pins={["U4.pin1", "U4.pin2", "U4.pin3", "L1.pin1"]} />
      <net name="SYS_5V_NET" pins={["L1.pin2", "C_out5v.pin1", "R_u4_up.pin1", "U6.pin10", "U6.pin11", "U6.pin12", "U6.pin13", "U4.pin14", "SYS_5V"]} />
      <net name="U4_FB" pins={["R_u4_up.pin2", "R_u4_low.pin1", "U4.pin5"]} />

      {/* Buck 2 (3.3V) */}
      <net name="U5_SW" pins={["U5.pin1", "U5.pin2", "U5.pin3", "L2.pin1"]} />
      <net name="SYS_3_3V_NET" pins={["L2.pin2", "C_out3v3.pin1", "R_u5_up.pin1", "U5.pin14", "SYS_3_3V"]} />
      <net name="U5_FB" pins={["R_u5_up.pin2", "R_u5_low.pin1", "U5.pin5"]} />

      {/* Buck 3 (1.2V) */}
      <net name="U6_SW" pins={["U6.pin1", "U6.pin2", "U6.pin3", "L3.pin1"]} />
      <net name="SYS_1_2V_NET" pins={["L3.pin2", "C_out1v2.pin1", "U6.pin14", "SYS_1_2V"]} />

      {/* TL431 Feedback */}
      <net name="FB_DIV" pins={["R_up.pin2", "R_low.pin1", "U3.pin2"]} />
      <net name="TL431_CATH" pins={["U3.pin1", "U2.pin2"]} />
      
      {/* Isolated Ground Net */}
      <net name="ISOGND" pins={[
        "T1.pin4", 
        "C_out12v.pin2", 
        "R_low.pin2", 
        "U3.pin3", 
        "ISO_GND",
        "U4.pin6", "U4.pin15", "U4.pin16", "U4.pin17", "R_u4_low.pin2", "C_out5v.pin2",
        "U5.pin6", "U5.pin15", "U5.pin16", "U5.pin17", "R_u5_low.pin2", "C_out3v3.pin2",
        "U6.pin6", "U6.pin15", "U6.pin16", "U6.pin17", "C_out1v2.pin2"
      ]} />


    </group>
  )
}
