import { BQ79600PWRQ1 } from "./imports/BQ79600PWRQ1"
import { HX1188NLT } from "./imports/HX1188NLT"
import { ACT45B_101_2P_TL003 } from "./imports/ACT45B_101_2P_TL003"

export const CommunicationBridge = () => {
  return (
    <board width="100mm" height="80mm">
      <pinheader
        name="P1"
        pinCount={5}
        pcbX={50}
        pcbY={0}
        schX={10}
        schY={0}
        pinLabels={["1_P", "1_N", "2_P", "2_N", "3_CVDD"]}
      />

      <pinheader
        name="P2"
        pinCount={11}
        pcbX={-50}
        pcbY={0}
        schX={-10}
        schY={0}
        pinLabels={["1_BAT", "2_VIO", "3_GND", "4_SCLK", "5_nCS", "6_MOSI", "7_MISO", "8_nUART_SPI", "9_NFAULT", "10_INH", "11_DVDD"]}
      />

      {/* Component declarations */}
      <BQ79600PWRQ1 name="U1" pcbX={0} pcbY={0} schX={0} schY={0} />

      {/* Isolation Transformers for Daisy Chain */}
      <HX1188NLT name="T1" pcbX={25} pcbY={15} schX={0} schY={5} />
      <HX1188NLT name="T2" pcbX={25} pcbY={-15} schX={0} schY={-5} />

      {/* Common Mode Chokes for EMC */}
      <ACT45B_101_2P_TL003 name="L1" pcbX={45} pcbY={15} schX={5} schY={5} />
      <ACT45B_101_2P_TL003 name="L2" pcbX={45} pcbY={-15} schX={5} schY={-5} />

      {/* Power Supply Decoupling Capacitors */}
      <capacitor name="C1" capacitance="0.1uF" footprint="0603" pcbX={-10} pcbY={10} schX={-15} schY={5} />
      <capacitor name="C2" capacitance="10uF" footprint="0805" pcbX={-10} pcbY={15} schX={-15} schY={8} />
      <capacitor name="C10" capacitance="4.7uF" footprint="0603" pcbX={-10} pcbY={-10} schX={-10} schY={-10} />
      <capacitor name="C11" capacitance="0.1uF" footprint="0402" pcbX={-10} pcbY={-15} schX={-10} schY={-13} />
      <capacitor name="C12" capacitance="1uF" footprint="0402" pcbX={-10} pcbY={-20} schX={-10} schY={-16} />

      {/* Configuration and Host Interface Pull-up/down Resistors */}
      <resistor name="R1" resistance="10k" footprint="0402" pcbX={-20} pcbY={10} schX={-15} schY={-2} />
      <resistor name="R2" resistance="10k" footprint="0402" pcbX={-20} pcbY={15} schX={-15} schY={-5} />
      <resistor name="R3" resistance="10k" footprint="0402" pcbX={-20} pcbY={20} schX={-15} schY={-8} />
      {/* Daisy Chain Differential Termination (Pin Side) */}
      <resistor name="R4" resistance="49.9" footprint="0402" pcbX={15} pcbY={10} schX={-2} schY={8} />
      <resistor name="R5" resistance="49.9" footprint="0402" pcbX={15} pcbY={5} schX={2} schY={8} />
      <resistor name="R6" resistance="49.9" footprint="0402" pcbX={15} pcbY={-5} schX={-2} schY={-8} />
      <resistor name="R7" resistance="49.9" footprint="0402" pcbX={15} pcbY={-10} schX={2} schY={-8} />

      {/* Power Connectivity */}
      <trace name="N_BAT" from="U1.pin15" to="C1.pin1" />
      <trace name="N_BAT" from="C1.pin1" to="C2.pin1" />
      <trace name="N_BAT" from="C2.pin1" to="P2.pin1" />

      <trace name="N_VIO" from="U1.pin3" to="C11.pin1" />
      <trace name="N_VIO" from="C11.pin1" to="R1.pin2" />
      <trace name="N_VIO" from="R1.pin2" to="R2.pin2" />
      <trace name="N_VIO" from="R2.pin2" to="P2.pin2" />

      <trace name="N_GND" from="U1.pin9" to="C1.pin2" />
      <trace name="N_GND" from="C1.pin2" to="C2.pin2" />
      <trace name="N_GND" from="C2.pin2" to="C10.pin2" />
      <trace name="N_GND" from="C10.pin2" to="C11.pin2" />
      <trace name="N_GND" from="C11.pin2" to="C12.pin2" />
      <trace name="N_GND" from="C12.pin2" to="R3.pin2" />
      <trace name="N_GND" from="R3.pin2" to="P2.pin3" />

      <trace name="N_CVDD" from="U1.pin14" to="C10.pin1" />
      <trace name="N_CVDD" from="C10.pin1" to="R4.pin2" />
      <trace name="N_CVDD" from="R4.pin2" to="R6.pin2" />
      <trace name="N_CVDD" from="R6.pin2" to="T1.pin15" />
      <trace name="N_CVDD" from="T1.pin15" to="T2.pin15" />
      <trace name="N_CVDD" from="T2.pin15" to="P1.pin5" />

      <trace name="N_DVDD" from="U1.pin1" to="C12.pin1" />
      <trace name="N_DVDD" from="C12.pin1" to="P2.pin11" />

      {/* Host Interface Connectivity (SPI Mode Configuration) */}
      <trace name="SCLK" from="U1.pin6" to="R3.pin1" />
      <trace name="SCLK" from="U1.pin6" to="P2.pin4" />

      <trace name="nCS" from="U1.pin7" to="R1.pin1" />
      <trace name="nCS" from="U1.pin7" to="P2.pin5" />

      <trace name="MOSI" from="U1.pin4" to="R2.pin1" />
      <trace name="MOSI" from="U1.pin4" to="P2.pin6" />
      
      <trace name="MISO" from="U1.pin5" to="P2.pin7" />

      {/* COMH Daisy Chain Signal Path */}
      <trace name="COMH_P" from="U1.pin13" to="R4.pin1" />
      <trace name="COMH_P" from="U1.pin13" to="T1.pin16" />
      <trace name="COMH_P" from="T1.pin1" to="L1.pin1" />
      <trace name="COMH_P" from="L1.pin1" to="P1.pin1" />

      <trace name="COMH_N" from="U1.pin12" to="R5.pin1" />
      <trace name="COMH_N" from="R5.pin2" to="T1.pin14" />
      <trace name="COMH_N" from="T1.pin3" to="L1.pin2" />
      <trace name="COMH_N" from="L1.pin2" to="P1.pin2" />

      {/* COML Daisy Chain Signal Path */}
      <trace name="COML_P" from="U1.pin10" to="R6.pin1" />
      <trace name="COML_P" from="U1.pin10" to="T2.pin16" />
      <trace name="COML_P" from="T2.pin1" to="L2.pin1" />
      <trace name="COML_P" from="L2.pin1" to="P1.pin3" />

      <trace name="COML_N" from="U1.pin11" to="R7.pin1" />
      <trace name="COML_N" from="R7.pin2" to="T2.pin14" />
      <trace name="COML_N" from="T2.pin3" to="L2.pin2" />
      <trace name="COML_N" from="L2.pin2" to="P1.pin4" />

      {/* System Level Port Mappings (Additional) */}
      <trace name="nUART_SPI" from="U1.pin8" to="P2.pin8" />
      <trace name="NFAULT" from="U1.pin2" to="P2.pin9" />
      <trace name="INH" from="U1.pin16" to="P2.pin10" />
    </board>
  )
}

export default CommunicationBridge
