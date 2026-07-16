import { AMC1301DWVR } from "./imports/AMC1301DWVR"

export default () => (
  <board>
    {/* U2: Precision Isolated Amplifier */}
    <AMC1301DWVR
      name="U2"
      pin1=".VDD1"
      pin4=".GND1"
      pin8=".VDD2"
      pin5=".GND2"
      pin7=".OUTP"
      pin6=".OUTN"
    />

    {/* Input Filter Resistors */}
    <resistor name="R1" resistance="10" footprint="0603" />
    <resistor name="R2" resistance="10" footprint="0603" />

    {/* Input Filter Capacitors */}
    <capacitor name="C5" capacitance="1nF" footprint="0603" />
    <capacitor name="C4" capacitance="100pF" footprint="0603" />
    <capacitor name="C8" capacitance="100pF" footprint="0603" />

    {/* HV Side Bypass Capacitors */}
    <capacitor name="C7" capacitance="0.1uF" footprint="0603" />
    <capacitor name="C10" capacitance="1.0uF" footprint="0603" />

    {/* LV Side Bypass Capacitors */}
    <capacitor name="C9" capacitance="0.1uF" footprint="0603" />
    <capacitor name="C11" capacitance="10uF" footprint="0603" />

    {/* Connectivity: HV Domain Power */}
    <net name="VDD1_HV" pins={[".VDD1", "C7 > pin1", "C10 > pin1"]} />
    <net name="GND1_HV" pins={[".GND1", "C7 > pin2", "C10 > pin2", "C4 > pin2", "C8 > pin2"]} />

    {/* Connectivity: LV Domain Power */}
    <net name="VDD2_LV" pins={[".VDD2", "C9 > pin1", "C11 > pin1"]} />
    <net name="GND2_LV" pins={[".GND2", "C9 > pin2", "C11 > pin2"]} />

    {/* Connectivity: Input Signal Path */}
    <net name="INP_SHUNT" pins={[".INP", "R1 > pin1"]} />
    <net name="INN_SHUNT" pins={[".INN", "R2 > pin1"]} />

    <net name="VINP_U2" pins={["R1 > pin2", "U2 > pin2", "C5 > pin1", "C4 > pin1"]} />
    <net name="VINN_U2" pins={["R2 > pin2", "U2 > pin3", "C5 > pin2", "C8 > pin1"]} />

    {/* Connectivity: Output Signal Path */}
    {/* OUTP and OUTN are connected via U2 props */}
  </board>
)
