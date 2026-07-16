import { UCC28881DR } from "./imports/UCC28881DR"
import { STTH1R06 } from "./imports/STTH1R06"
import { MMSZ5232B } from "./imports/MMSZ5232B"
import { ZECD43_102K } from "./imports/ZECD43_102K"

export const HighVoltagePowerSupply = () => (
  <group name="high-voltage-power-supply">
    {/* Ports according to SCUD Port Mapping */}
    <pinheader name="J_IN" pinCount={2} schX={0} schY={0} />
    <pinheader name="J_OUT" pinCount={2} schX={23} schY={3} schRotation={180} />

    {/* Primary Controller */}
    <UCC28881DR name="U1" schX={17} schY={0} />

    {/* Input Stage: Fuse, Reverse Polarity Protection, and LC Filter (C1-L1-C2) */}
    <fuse name="F1" footprint="0603" currentRating="0.5A" schX={2} schY={4} />
    <STTH1R06 name="D_IN" schX={4} schY={4} />
    <capacitor name="C1" capacitance="10uF" voltageRating="400V" footprint="kicad:Capacitor_THT/C_Radial_D12.5mm_H20.0mm_P5.00mm" schX={6} schY={4} />
    <ZECD43_102K name="L1" schX={9} schY={4} />
    <capacitor name="C2" capacitance="10uF" voltageRating="400V" footprint="kicad:Capacitor_THT/C_Radial_D12.5mm_H20.0mm_P5.00mm" schX={12} schY={4} />

    {/* Power Stage Components: Freewheeling Diode, Buck Inductor, Output Filter, and Zener Clamp */}
    <STTH1R06 name="D4" schX={15} schY={3} />
    <inductor name="L2" inductance="1mH" footprint="kicad:Inductor_THT/L_Radial_D7.0mm_P3.00mm" schX={17} schY={3} />
    <capacitor name="C5" capacitance="330uF" voltageRating="10V" footprint="kicad:Capacitor_SMD/CP_Elec_6.3x7.7" schX={19} schY={3} />
    <MMSZ5232B name="D5" schX={21} schY={3} />

    {/* Feedback Loop Components: Rectifier Diode, Smoothing Cap, and Resistor Divider */}
    <STTH1R06 name="D3" schX={15} schY={-2} />
    <capacitor name="C4" capacitance="15nF" voltageRating="100V" footprint="0805" schX={17} schY={-2} />
    <resistor name="R3" resistance="40.2k" tolerance="1%" footprint="0805" schX={19} schY={-2} />
    <resistor name="R4" resistance="10.0k" tolerance="1%" footprint="0805" schX={21} schY={-2} />

    {/* 1. HV Input Stage Connections */}
    <trace name="t_hv_in" path={["J_IN.pin1", "F1.pin1"]} />
    <trace name="t_fuse_diode" path={["F1.pin2", "D_IN.anode"]} />
    <trace name="t_diode_c1" path={["D_IN.cathode", "C1.pin1"]} />
    <trace name="t_c1_l1" path={["C1.pin1", "L1.pin1"]} />
    <trace name="t_l1_c2" path={["L1.pin2", "C2.pin1"]} />
    <trace name="t_c2_hvin" path={["C2.pin1", "U1.HVIN"]} />
    <trace name="t_hvin_drain" path={["U1.HVIN", "U1.DRAIN"]} />
    
    {/* 2. GND_HV / HV- Return Connections */}
    <trace name="t_gnd_hv_1" path={["J_IN.pin2", "C1.pin2"]} />
    <trace name="t_gnd_hv_2" path={["C1.pin2", "C2.pin2"]} />
    <trace name="t_gnd_hv_3" path={["C2.pin2", "D4.anode"]} />
    <trace name="t_gnd_hv_4" path={["D4.anode", "C5.pin2"]} />
    <trace name="t_gnd_hv_5" path={["C5.pin2", "D5.anode"]} />
    <trace name="t_gnd_common" path={["J_IN.pin2", "J_OUT.pin2"]} />

    {/* 3. Switch Node (U1 SOURCE / GND) Connections */}
    {/* In High-Side Buck, IC GND pins are connected to the switch node */}
    <trace name="t_switch_1" path={["U1.GND1", "U1.GND2"]} />
    <trace name="t_switch_2" path={["U1.GND2", "L2.pin1"]} />
    <trace name="t_switch_3" path={["L2.pin1", "D4.cathode"]} />

    {/* 4. Output Stage (VDD1) Connections */}
    <trace name="t_vout_1" path={["J_OUT.pin1", "L2.pin2"]} />
    <trace name="t_vout_2" path={["L2.pin2", "C5.pin1"]} />
    <trace name="t_vout_3" path={["C5.pin1", "D3.anode"]} />
    <trace name="t_vout_4" path={["D3.anode", "D5.cathode"]} />
    
    {/* 5. Feedback Loop Connections */}
    <trace name="t_feedback_1" path={["D3.cathode", "C4.pin1"]} />
    <trace name="t_feedback_2" path={["C4.pin1", "R3.pin1"]} />
    <trace name="t_fb_node_1" path={["R3.pin2", "R4.pin1"]} />
    <trace name="t_fb_node_2" path={["R4.pin1", "U1.FB"]} />
    <trace name="t_fb_node_3" path={["R4.pin2", "U1.GND1"]} />
    <trace name="t_c4_gnd" path={["C4.pin2", "U1.GND1"]} />

    {/* VDD pin decoupling */}
    <capacitor name="C_VDD" capacitance="0.1uF" voltageRating="16V" footprint="0603" schX={17} schY={2} />
    <trace name="t_vdd_decouple" path={["U1.VDD", "C_VDD.pin1"]} />
    <trace name="t_vdd_gnd" path={["C_VDD.pin2", "U1.GND1"]} />

  </group>
)
