import { AMC1301DWVR } from "./imports/AMC1301DWVR"
import { TLV6001IDBVR } from "./imports/TLV6001IDBVR"

interface ModuleProps {
  showAsSchematicBox?: boolean;
  name?: string;
  schX?: number;
  schY?: number;
}

/**
 * CurrentSensing Module
 * Measures pack current via an external shunt resistor using the AMC1301 isolated amplifier.
 * 
 * Port Mapping:
 * INP / INN: Kelvin sense connection to External Shunt.
 * VDD1 / GND1: Isolated supply domain (High-Voltage side).
 * OUTP / OUTN: Differential analog output to MCU.
 * VDD2 / GND2: Low-voltage supply domain (System Low-Voltage side).
 */
export const CurrentSensing = ({ name, schX, schY, showAsSchematicBox }:ModuleProps) => {
  return (
    <group name={name} showAsSchematicBox={showAsSchematicBox} schX={schX} schY={schY}>
      {/* High-Voltage (HV) Side Ports */}
      <port name="INP" direction="left" connectsTo={["R1.pin1"]} />
      <port name="INN" direction="left" connectsTo={["R2.pin1"]} />
      <port name="VDD1" direction="left" connectsTo={["U2.pin1", "C7.pin1", "C10.pin1"]} />
      <port name="GND1" direction="left" connectsTo={["U2.pin4", "C7.pin2", "C10.pin2", "C4.pin2", "C8.pin2"]} />

      {/* Low-Voltage (LV) Side Ports */}
      <port name="OUT" direction="right" connectsTo={["U3.pin1"]} />
      <port name="VDD2" direction="right" connectsTo={["U2.pin8", "U3.pin5", "C9.pin1", "C11.pin1"]} />
      <port name="GND2" direction="right" connectsTo={["U2.pin5", "U3.pin2", "C9.pin2", "C11.pin2"]} />

      {/* U2: Precision Isolated Amplifier */}
      <AMC1301DWVR
        name="U2"
        schX="0mm"
        schY="0mm"
      />

      {/* U3: Signal Conditioning Buffer */}
      <TLV6001IDBVR
        name="U3"
        schX="8mm"
        schY="0mm"
      />

      {/* Difference Amplifier Resistors (0.1% Tolerance) */}
      <resistor name="R3" resistance="10k" footprint="0603" schX="6mm" schY="-1.5mm" />
      <resistor name="R4" resistance="10k" footprint="0603" schX="6mm" schY="1.5mm" />
      <resistor name="R5" resistance="8.06k" footprint="0603" schX="10mm" schY="-1.5mm" />
      <resistor name="R6" resistance="8.06k" footprint="0603" schX="10mm" schY="1.5mm" />

      {/* VCM Bias Divider (VDD2 / 2) */}
      <resistor name="R7" resistance="100k" footprint="0603" schX="7mm" schY="3mm" />
      <resistor name="R8" resistance="100k" footprint="0603" schX="9mm" schY="3mm" />

      {/* Input Filter Resistors */}
      <resistor name="R1" resistance="10" footprint="0603" schX="-6.67mm" schY="-1.5mm" />
      <resistor name="R2" resistance="10" footprint="0603" schX="-6.67mm" schY="1.5mm" />

      {/* Input Filter Capacitors */}
      <capacitor name="C5" capacitance="1nF" footprint="0603" schX="-3.33mm" schY="0mm" />
      <capacitor name="C4" capacitance="100pF" footprint="0603" schX="-3.33mm" schY="-3mm" />
      <capacitor name="C8" capacitance="100pF" footprint="0603" schX="-3.33mm" schY="3mm" />

      {/* HV Side Bypass Capacitors */}
      <capacitor name="C7" capacitance="0.1uF" footprint="0603" schX="-1mm" schY="-2.5mm" />
      <capacitor name="C10" capacitance="1.0uF" footprint="0603" schX="-2mm" schY="-2.5mm" />

      {/* LV Side Bypass Capacitors */}
      <capacitor name="C9" capacitance="0.1uF" footprint="0603" schX="1mm" schY="2.5mm" />
      <capacitor name="C11" capacitance="10uF" footprint="0603" schX="2mm" schY="2.5mm" />

      {/* Connectivity: HV Domain Power internal nodes */}
      <trace name="INP_to_R1" from="INP" to="R1.pin1" />
      <trace name="INN_to_R2" from="INN" to="R2.pin1" />
      <trace name="VDD1_U2_C7" from="U2.pin1" to="C7.pin1" />
      <trace name="VDD1_C7_C10" from="C7.pin1" to="C10.pin1" />

      <trace name="GND1_U2_C7" from="U2.pin4" to="C7.pin2" />
      <trace name="GND1_C7_C10" from="C7.pin2" to="C10.pin2" />
      <trace name="GND1_C10_C4" from="C10.pin2" to="C4.pin2" />
      <trace name="GND1_C4_C8" from="C4.pin2" to="C8.pin2" />

      {/* Connectivity: LV Domain Power internal nodes */}
      <trace name="VDD2_U2_C9" from="U2.pin8" to="C9.pin1" />
      <trace name="VDD2_C9_C11" from="C9.pin1" to="C11.pin1" />
      <trace name="VDD2_C11_U3" from="C11.pin1" to="U3.pin5" />
      <trace name="VDD2_R7" from="C11.pin1" to="R7.pin1" />

      <trace name="GND2_U2_C9" from="U2.pin5" to="C9.pin2" />
      <trace name="GND2_C9_C11" from="C9.pin2" to="C11.pin2" />
      <trace name="GND2_C11_U3" from="C11.pin2" to="U3.pin2" />
      <trace name="GND2_R8" from="C11.pin2" to="R8.pin2" />
      <trace name="VCM_R8" from="R7.pin2" to="R8.pin1" />

      {/* Connectivity: Signal Conditioning Stage */}
      <trace name="U2_OUTP_R3" from="U2.pin7" to="R3.pin1" />
      <trace name="R3_U3_IN_P" from="R3.pin2" to="U3.pin3" />
      
      <trace name="VCM_R6" from="R7.pin2" to="R6.pin1" />
      <trace name="R6_U3_IN_P" from="R6.pin2" to="U3.pin3" />
      
      <trace name="U2_OUTN_R4" from="U2.pin6" to="R4.pin1" />
      <trace name="R4_U3_IN_N" from="R4.pin2" to="U3.pin4" />
      
      <trace name="R5_U3_IN_N" from="R5.pin1" to="U3.pin4" />
      <trace name="R5_U3_OUT" from="R5.pin2" to="U3.pin1" />


      {/* Connectivity: Input Signal Filter Network */}
      <trace name="INP_F_R1_U2" from="R1.pin2" to="U2.pin2" />
      <trace name="INP_F_U2_C5" from="U2.pin2" to="C5.pin1" />
      <trace name="INP_F_C5_C4" from="C5.pin1" to="C4.pin1" />

      <trace name="INN_F_R2_U2" from="R2.pin2" to="U2.pin3" />
      <trace name="INN_F_U2_C5" from="U2.pin3" to="C5.pin2" />
      <trace name="INN_F_C5_C8" from="C5.pin2" to="C8.pin1" />
    </group>
  )
}

export default CurrentSensing