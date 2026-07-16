import { Circuit } from "@tscircuit/core"
import { Transformer } from "./imports/SUOT-EE16V-12"
import { SBR20U150CT } from "./imports/SBR20U150CT"
import { UCC287506DBVR } from "./imports/UCC287506DBVR"
import { FODM217AR2 } from "./imports/FODM217AR2"
import { ATL431LIBQDBZR } from "./imports/ATL431LIBQDBZR"
import { IPA65R400CE } from "./imports/IPA65R400CE"
import { L78L05ACD13TR } from "./imports/L78L05ACD13TR"
import { LM1117S_3_3 } from "./imports/LM1117S_3_3"
import { TLV70012DDCR } from "./imports/TLV70012DDCR"

interface ModuleProps {
  name?: string;
  schX?: number;
  schY?: number;
  showAsSchematicBox?: boolean;
}

export const LowVoltagePowerSupply = ({ name, schX, schY, showAsSchematicBox }:ModuleProps) => {
  return (
    <group name={name} showAsSchematicBox={showAsSchematicBox} schX={schX} schY={schY}>
      {/* Ports replacing physical input/output connectors */}
      <port name="VIN_P" direction="left" connectsTo={["C_in.pin1"]} />
      <port name="PRI_GND" direction="left" connectsTo={["C_in.pin2"]} />

      <port name="VOUT_12V" direction="right" connectsTo={["C13.pin1"]} />
      <port name="VOUT_5V" direction="right" connectsTo={["C_5v_2.pin1"]} />
      <port name="VOUT_3V3" direction="right" connectsTo={["C18.pin1"]} />
      <port name="VOUT_1V2" direction="right" connectsTo={["C19.pin1"]} />
      <port name="SEC_GND" direction="right" connectsTo={["C19.pin2"]} />

      {/* Input Filtering */}
      <capacitor name="C_in" capacitance="10uF" voltageRating="450V" footprint="1206" schX={2} schY={5} />

      {/* Startup resistors */}
      <resistor name="R_startup1" resistance="2M" footprint="0603" schX={5} schY={5} />
      <resistor name="R_startup2" resistance="2M" footprint="0603" schX={5} schY={7} />
      <resistor name="R_startup3" resistance="2M" footprint="0603" schX={5} schY={9} />

      {/* Transformer T1 */}
      <Transformer name="T1" footprint="SUOT-EE16V-12" schX={10} schY={10} />

      {/* Primary Side Active Components */}
      <UCC287506DBVR name="U1" schX={8} schY={15} />
      <capacitor name="C_fb_filter" capacitance="1nF" footprint="0603" schX={8} schY={17} />
      <IPA65R400CE name="Q1" schX={12} schY={5} />

      {/* Snubber Circuit */}
      <diode name="D1" footprint="SOD123" schX={12} schY={9} />
      <resistor name="R6" resistance="100k" footprint="0603" schX={14} schY={9} />
      <capacitor name="C5" capacitance="330pF" footprint="0603" schX={14} schY={7} />
      <resistor name="R_snub_series" resistance="22" footprint="0603" schX={12} schY={7} />

      {/* Primary Current Sense */}
      <resistor name="R15" resistance="0.390" footprint="1206" schX={13} schY={3} />
      <resistor name="R11" resistance="1k" footprint="0603" schX={10} schY={14} />
      <capacitor name="C8" capacitance="22pF" footprint="0603" schX={10} schY={16} />

      {/* Gate Drive */}
      <resistor name="R14" resistance="22" footprint="0603" schX={12} schY={14} />
      <resistor name="R13" resistance="10k" footprint="0603" schX={8} schY={9} />

      {/* Auxiliary Power */}
      <diode name="D2" footprint="SOD123" schX={3} schY={21} />
      <resistor name="R7" resistance="4.99" footprint="0603" schX={5} schY={19} rotation={180} />
      <capacitor name="C6" capacitance="1uF" footprint="0603" schX={3} schY={13} />
      <capacitor name="C7" capacitance="47uF" footprint="0603" schX={3} schY={17} />
      <diode name="ZD1" zenerVoltage="33V" footprint="SOD123" schX={3} schY={19} />
      
      {/* Fault Divider & OVP */}
      <resistor name="R8" resistance="2M" footprint="0603" schX={0} schY={15} rotation={90} />
      <resistor name="R9" resistance="2M" footprint="0603" schX={2} schY={15} rotation={90} />
      <resistor name="R_flt_bulk" resistance="2M" footprint="0603" schX={3} schY={18} rotation={90} />
      <resistor name="R10" resistance="100k" footprint="0603" schX={3} schY={24} rotation={90} />
      <resistor name="R_ovp" resistance="100k" footprint="0603" schX={5} schY={13} />

      {/* Optocoupler */}
      <FODM217AR2 name="U2" schX={15} schY={15} />

      {/* Secondary Rectifier & Output Caps */}
      <SBR20U150CT name="D3" schX={18} schY={10} />
      <capacitor name="C9" capacitance="4.7uF" footprint="1206" schX={20} schY={8} />
      <capacitor name="C10" capacitance="4.7uF" footprint="1206" schX={20} schY={6} />
      <capacitor name="C11" capacitance="470uF" footprint="0603" schX={20} schY={12} />

      {/* Output LC Filter */}
      <inductor name="L3" inductance="1uH" footprint="0603" schX={22} schY={13} />
      <capacitor name="C13" capacitance="470uF" footprint="0603" schX={24} schY={13} />
      <capacitor name="C14" capacitance="4.7uF" footprint="0603" schX={24} schY={15} />
      <resistor name="R_filter_51" resistance="51" footprint="0603" schX={24} schY={17} />

      {/* D3 Snubber */}
      <resistor name="R_snubber_d3" resistance="100" footprint="0603" schX={18} schY={8} />
      <capacitor name="C_snubber_d3" capacitance="470pF" footprint="0603" schX={18} schY={6} />

      {/* Voltage Feedback */}
      <ATL431LIBQDBZR name="U3" schX={18} schY={20} />
      <resistor name="R21" resistance="86.6k" footprint="0603" schX={18} schY={22} />
      <resistor name="R24" resistance="10k" footprint="0603" schX={18} schY={24} />
      <resistor name="R_led" resistance="10k" footprint="0603" schX={15} schY={23} />
      <resistor name="R23" resistance="133k" footprint="0603" schX={15} schY={22} />
      <capacitor name="C15" capacitance="680pF" footprint="0603" schX={15} schY={24} />
      <capacitor name="C_feedback_new" capacitance="56pF" footprint="0603" schX={20} schY={23} />
      <resistor name="R_feedback_new" resistance="2.49k" footprint="0603" schX={20} schY={22} />

      {/* Derived Rails - 5V */}
      <L78L05ACD13TR name="U4" schX={28} schY={10} />
      <capacitor name="C_5v_1" capacitance="10uF" footprint="0603" schX={26} schY={13} />
      <capacitor name="C_5v_2" capacitance="10uF" footprint="0603" schX={30} schY={13} />

      {/* Derived Rails - 3.3V */}
      <LM1117S_3_3 name="U5" schX={28} schY={15} />
      <capacitor name="C16" capacitance="10uF" footprint="0603" schX={26} schY={16} />
      <capacitor name="C17" capacitance="10uF" footprint="0603" schX={30} schY={15} />

      {/* Derived Rails - 1.2V */}
      <TLV70012DDCR name="U6" schX={28} schY={20} />
      <capacitor name="C18" capacitance="1uF" footprint="0603" schX={26} schY={20} />
      <capacitor name="C19" capacitance="1uF" footprint="0603" schX={30} schY={20} />

      {/* ================= NETS & CONNECTIONS ================= */}

      {/* Net: PRI_GND */}
      <trace name="tr_pgnd_cin_r15" from=".C_in .pin2" to=".R15 .pin2" />
      <trace name="tr_pgnd_r15_r13" from=".R15 .pin2" to=".R13 .pin2" />
      <trace name="tr_pgnd_r13_c8" from=".R13 .pin2" to=".C8 .pin2" />
      <trace name="tr_pgnd_c8_r10" from=".C8 .pin2" to=".R10 .pin2" />
      <trace name="tr_pgnd_r10_t1" from=".R10 .pin2" to=".T1 .AUX_2" />
      <trace name="tr_pgnd_t1_u1" from=".T1 .AUX_2" to=".U1 .GND" />
      <trace name="tr_pgnd_u1_c6" from=".U1 .GND" to=".C6 .pin2" />
      <trace name="tr_pgnd_c6_c7" from=".C6 .pin2" to=".C7 .pin2" />
      <trace name="tr_pgnd_c7_u2" from=".C7 .pin2" to=".U2 .pin3" />

      {/* Net: SEC_GND */}
      <trace name="tr_sgnd_t1_c9" from=".T1 .SEC_2" to=".C9 .pin2" />
      <trace name="tr_sgnd_c9_c10" from=".C9 .pin2" to=".C10 .pin2" />
      <trace name="tr_sgnd_c10_c11" from=".C10 .pin2" to=".C11 .pin2" />
      <trace name="tr_sgnd_c11_c13" from=".C11 .pin2" to=".C13 .pin2" />
      <trace name="tr_sgnd_c13_c14" from=".C13 .pin2" to=".C14 .pin2" />
      <trace name="tr_sgnd_c14_r24" from=".C14 .pin2" to=".R24 .pin2" />
      <trace name="tr_sgnd_r24_u3" from=".R24 .pin2" to=".U3 .ANODE" />
      <trace name="tr_sgnd_u3_u4" from=".U3 .ANODE" to=".U4 .GND1" />
      <trace name="tr_sgnd_u4_gnd2" from=".U4 .GND1" to=".U4 .GND2" />
      <trace name="tr_sgnd_u4_gnd3" from=".U4 .GND2" to=".U4 .GND3" />
      <trace name="tr_sgnd_u4_gnd4" from=".U4 .GND3" to=".U4 .GND4" />
      <trace name="tr_sgnd_u4_c5v1" from=".U4 .GND4" to=".C_5v_1 .pin2" />
      <trace name="tr_sgnd_c5v1_c5v2" from=".C_5v_1 .pin2" to=".C_5v_2 .pin2" />
      <trace name="tr_sgnd_c5v2_u5" from=".C_5v_2 .pin2" to=".U5 .pin1" />
      <trace name="tr_sgnd_u5_c16" from=".U5 .pin1" to=".C16 .pin2" />
      <trace name="tr_sgnd_c16_c17" from=".C16 .pin2" to=".C17 .pin2" />
      <trace name="tr_sgnd_c17_u6" from=".C17 .pin2" to=".U6 .GND" />
      <trace name="tr_sgnd_u6_c18" from=".U6 .GND" to=".C18 .pin2" />
      <trace name="tr_sgnd_c18_c19" from=".C18 .pin2" to=".C19 .pin2" />

      {/* Net: VOUT_12V */}
      <trace name="tr_v12_d3_c9" from=".D3 .pin2" to=".C9 .pin1" />
      <trace name="tr_v12_c9_c10" from=".C9 .pin1" to=".C10 .pin1" />
      <trace name="tr_v12_c10_c11" from=".C10 .pin1" to=".C11 .pin1" />
      <trace name="tr_v12_c11_l3" from=".C11 .pin1" to=".L3 .pin2" />
      <trace name="tr_v12_l3_c13" from=".L3 .pin1" to=".C13 .pin1" />
      <trace name="tr_v12_c13_c14" from=".C13 .pin1" to=".C14 .pin1" />
      <trace name="tr_v12_c14_rfilter" from=".C14 .pin1" to=".R_filter_51 .pin1" />
      <trace name="tr_v12_rfilter_r21" from=".R_filter_51 .pin2" to=".R21 .pin1" />
      <trace name="tr_v12_r21_rled" from=".R21 .pin1" to=".R_led .pin1" />
      <trace name="tr_v12_u4_vin" from=".U4 .VIN" to=".C13 .pin1" />
      <trace name="tr_v12_c5v1_u5" from=".C_5v_1 .pin1" to=".U5 .IN" />
      <trace name="tr_v12_u5_c16" from=".U5 .IN" to=".C16 .pin1" />
      <trace name="tr_v12_u5_to_vout12" from=".U5 .IN" to=".C13 .pin1" />

      {/* Net: VOUT_5V */}
      <trace name="tr_v5_u4_c5v2" from=".U4 .VOUT" to=".C_5v_2 .pin1" />

      {/* Net: VOUT_3V3 */}
      <trace name="tr_v33_u5_u5t" from=".U5 .OUT" to=".U5 .TAB" />
      <trace name="tr_v33_u5t_c17" from=".U5 .TAB" to=".C17 .pin1" />
      <trace name="tr_v33_c17_u6" from=".C17 .pin1" to=".U6 .IN" />
      <trace name="tr_v33_u6_en" from=".U6 .IN" to=".U6 .EN" />
      <trace name="tr_v33_u6_c18" from=".U6 .EN" to=".C18 .pin1" />

      {/* Net: VOUT_1V2 */}
      <trace name="tr_v12_u6_c19" from=".U6 .OUT" to=".C19 .pin1" />

      {/* VIN_pos */}
      <trace name="tr_vinp_cin_t1" from=".C_in .pin1" to=".T1 .PRI_1" />
      <trace name="tr_vinp_t1_r6" from=".T1 .PRI_1" to=".R6 .pin2" />
      <trace name="tr_vinp_r6_c5" from=".R6 .pin2" to=".C5 .pin2" />
      <trace name="tr_vinp_c5_r8" from=".C5 .pin2" to=".R8 .pin1" />
      <trace name="tr_vinp_r8_rst1" from=".R8 .pin1" to=".R_startup1 .pin1" />

      {/* ================= EXPLICIT TRACES ================= */}

      {/* Primary Switch */}
      <trace name="tr_pri_sw_t1_q1" from=".T1 .PRI_2" to=".Q1 .D" />
      <trace name="tr_pri_sw_q1_r15" from=".Q1 .S" to=".R15 .pin1" />
      <trace name="tr_pri_sw_q1_r14" from=".Q1 .G" to=".R14 .pin1" />
      <trace name="tr_pri_sw_r14_u1" from=".R14 .pin2" to=".U1 .DRV" />
      <trace name="tr_pri_sw_q1_r13" from=".Q1 .G" to=".R13 .pin1" />

      {/* Snubber */}
      <trace name="tr_snub_t1_d1" from=".T1 .PRI_2" to=".D1 .pin1" />
      <trace name="tr_snub_d1_rsnub" from=".D1 .pin2" to=".R_snub_series .pin1" />
      <trace name="tr_snub_rsnub_r6" from=".R_snub_series .pin2" to=".R6 .pin1" />
      <trace name="tr_snub_rsnub_c5" from=".R_snub_series .pin2" to=".C5 .pin1" />

      {/* Current Sense */}
      <trace name="tr_cs_q1_r11" from=".Q1 .S" to=".R11 .pin1" />
      <trace name="tr_cs_r11_u1" from=".R11 .pin2" to=".U1 .CS" />
      <trace name="tr_cs_u1_c8" from=".U1 .CS" to=".C8 .pin1" />

      {/* Fault sensing (Brownout / Bulk OVP) */}
      <trace name="tr_flt_r8_r9" from=".R8 .pin2" to=".R9 .pin1" />
      <trace name="tr_flt_r9_rflt" from=".R9 .pin2" to=".R_flt_bulk .pin1" />
      <trace name="tr_flt_rflt_u1" from=".R_flt_bulk .pin2" to=".U1 .FLT" />
      <trace name="tr_flt_u1_r10" from=".U1 .FLT" to=".R10 .pin1" />

      {/* Aux OVP Feedback */}
      <trace name="tr_aux_ovp_d2_rovp" from=".D2 .pin2" to=".R_ovp .pin1" />
      <trace name="tr_aux_ovp_rovp_u1" from=".R_ovp .pin2" to=".U1 .FLT" />

      {/* Aux & Startup */}
      <trace name="tr_aux_rst1_rst2" from=".R_startup1 .pin2" to=".R_startup2 .pin1" />
      <trace name="tr_aux_rst2_rst3" from=".R_startup2 .pin2" to=".R_startup3 .pin1" />
      <trace name="tr_aux_rst3_u1" from=".R_startup3 .pin2" to=".U1 .VDD" />

      <trace name="tr_aux_t1_d2" from=".T1 .AUX_1" to=".D2 .pin1" />
      <trace name="tr_aux_d2_r7" from=".D2 .pin2" to=".R7 .pin1" />
      <trace name="tr_aux_r7_u1" from=".R7 .pin2" to=".U1 .VDD" />

      <trace name="tr_aux_u1_c6" from=".U1 .VDD" to=".C6 .pin1" />
      <trace name="tr_aux_u1_zd1" from=".U1 .VDD" to=".ZD1 .pin2" />
      <trace name="tr_pgnd_zd1" from=".ZD1 .pin1" to=".U1 .GND" />
      <trace name="tr_aux_u1_c7" from=".U1 .VDD" to=".C7 .pin1" />

      {/* Opto Feedback on Primary */}
      <trace name="tr_opto_u2_u1" from=".U2 .pin4" to=".U1 .FB" />
      <trace name="tr_fb_filter_u1_fb" from=".C_fb_filter .pin1" to=".U1 .FB" />
      <trace name="tr_fb_filter_u1_gnd" from=".C_fb_filter .pin2" to=".U1 .GND" />

      <trace name="tr_snubber_d3_t1" from=".T1 .SEC_1" to=".C_snubber_d3 .pin1" />
      <trace name="tr_snubber_d3_cr" from=".C_snubber_d3 .pin2" to=".R_snubber_d3 .pin1" />
      <trace name="tr_snubber_d3_d3" from=".R_snubber_d3 .pin2" to=".D3 .pin2" />
      {/* Secondary Rectification */}
      <trace name="tr_sec_t1_d3a" from=".T1 .SEC_1" to=".D3 .pin1" />
      <trace name="tr_sec_t1_d3b" from=".T1 .SEC_1" to=".D3 .pin3" />

      {/* Feedback loop */}
      <trace name="tr_fb_r21_u3" from=".R21 .pin2" to=".U3 .REF" />
      <trace name="tr_fb_u3_r24" from=".U3 .REF" to=".R24 .pin1" />

      <trace name="tr_fb_rled_u2" from=".R_led .pin2" to=".U2 .pin1" />
      <trace name="tr_fb_u2_u3" from=".U2 .pin2" to=".U3 .CATHODE" />

      {/* 56pF capacitor between U3.cathode and R24.pin1 */}
      <trace name="tr_fb_c_new" from=".C_feedback_new .pin1" to=".U3 .CATHODE" />
      <trace name="tr_fb_c_new_r24" from=".C_feedback_new .pin2" to=".R24 .pin1" />
      
      {/* 2.49k resistor between U3.cathode and U2.pin1 */}
      <trace name="tr_fb_r_new" from=".R_feedback_new .pin1" to=".U3 .CATHODE" />
      <trace name="tr_fb_r_new_u2" from=".R_feedback_new .pin2" to=".U2 .pin1" />

      <trace name="tr_fb_u3_r23" from=".U3 .CATHODE" to=".R23 .pin1" />
      <trace name="tr_fb_r23_c15" from=".R23 .pin2" to=".C15 .pin1" />
      <trace name="tr_fb_c15_u3" from=".C15 .pin2" to=".U3 .REF" />

    </group>
  )
}