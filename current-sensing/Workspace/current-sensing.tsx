import { AMC1301DWVR } from "./imports/AMC1301DWVR"
import { SH1_0_4P_S__ } from "./imports/SH1_0_4P_S__"

/**
 * CurrentSensing Module
 * Measures pack current via an external shunt resistor using the AMC1301 isolated amplifier.
 * 
 * Port Mapping (per current-sensing-boundary.md):
 * P1.1 (INP/INN): Kelvin sense connection to External Shunt.
 * P1.2 (VDD1): Isolated supply (3.3V - 5.5V).
 * P1.3 (GND1): Isolated reference ground (HV-).
 * P2.1 (OUTP/OUTN): Differential analog output to MCU.
 * P2.2 (VDD2): Low-voltage supply (3.3V/5V).
 * P2.3 (GND2): System digital ground (LV GND).
 */
export const CurrentSensing = () => {
  return (
    <board width="30mm" height="20mm">
      {/* P1: HV Side Connector (4-pin JST SH) */}
      {/* P1.1: INP/INN (Kelvin Sense), P1.2: VDD1, P1.3: GND1 */}
      <SH1_0_4P_S__
        name="P1"
        schX="-10mm"
        schY="0mm"
      />

      {/* P2: LV Side Connector (4-pin JST SH) */}
      {/* P2.1: OUTP/OUTN, P2.2: VDD2, P2.3: GND2 */}
      <SH1_0_4P_S__
        name="P2"
        schX="10mm"
        schY="0mm"
      />

      {/* U2: Precision Isolated Amplifier */}
      <AMC1301DWVR
        name="U2"
        schX="0mm"
        schY="0mm"
      />

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

      {/* Connectivity: HV Domain Power (P1.2 -> VDD1, P1.3 -> GND1) */}
      <trace name="VDD1_P1_U2" from="P1.pin3" to="U2.pin1" />
      <trace name="VDD1_U2_C7" from="U2.pin1" to="C7.pin1" />
      <trace name="VDD1_C7_C10" from="C7.pin1" to="C10.pin1" />

      <trace name="GND1_P1_U2" from="P1.pin4" to="U2.pin4" />
      <trace name="GND1_U2_C7" from="U2.pin4" to="C7.pin2" />
      <trace name="GND1_C7_C10" from="C7.pin2" to="C10.pin2" />
      <trace name="GND1_C10_C4" from="C10.pin2" to="C4.pin2" />
      <trace name="GND1_C4_C8" from="C4.pin2" to="C8.pin2" />

      {/* Connectivity: LV Domain Power (P2.2 -> VDD2, P2.3 -> GND2) */}
      <trace name="VDD2_P2_U2" from="P2.pin3" to="U2.pin8" />
      <trace name="VDD2_U2_C9" from="U2.pin8" to="C9.pin1" />
      <trace name="VDD2_C9_C11" from="C9.pin1" to="C11.pin1" />

      <trace name="GND2_P2_U2" from="P2.pin4" to="U2.pin5" />
      <trace name="GND2_U2_C9" from="U2.pin5" to="C9.pin2" />
      <trace name="GND2_C9_C11" from="C9.pin2" to="C11.pin2" />

      {/* Connectivity: Input Signal Path (P1.1 -> INP/INN) */}
      <trace name="INP_P1_R1" from="P1.pin1" to="R1.pin1" />
      <trace name="INN_P1_R2" from="P1.pin2" to="R2.pin1" />

      <trace name="INP_F_R1_U2" from="R1.pin2" to="U2.pin2" />
      <trace name="INP_F_U2_C5" from="U2.pin2" to="C5.pin1" />
      <trace name="INP_F_C5_C4" from="C5.pin1" to="C4.pin1" />

      <trace name="INN_F_R2_U2" from="R2.pin2" to="U2.pin3" />
      <trace name="INN_F_U2_C5" from="U2.pin3" to="C5.pin2" />
      <trace name="INN_F_C5_C8" from="C5.pin2" to="C8.pin1" />

      {/* Connectivity: Output Signal Path (P2.1 -> OUTP/OUTN) */}
      <trace name="OUTP_P2_U2" from="P2.pin1" to="U2.pin7" />
      <trace name="OUTN_P2_U2" from="P2.pin2" to="U2.pin6" />
    </board>
  )
}
export default CurrentSensing
