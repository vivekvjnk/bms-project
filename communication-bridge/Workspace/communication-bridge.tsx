import { BQ79600PWRQ1 } from "./imports/BQ79600PWRQ1"
import { HMU1228NLT_CND } from "./imports/HMU1228NLT_CND"
import { PESD5V0L2BTN } from "./imports/PESD5V0L2BTN"

interface ModuleProps {
  name?: string;
  schX?: number;
  schY?: number;
  showAsSchematicBox?: boolean;
}
export const CommunicationBridge = ({ showAsSchematicBox, name, schX, schY }:ModuleProps) => {
  return (
    <group name={name} schX={schX} schY={schY} showAsSchematicBox={showAsSchematicBox}>
      {/* External Interface Ports (P1 Replacement) */}
      <port name="COMH_P" direction="right" connectsTo={["R4.pin1", "C3.pin1", "D1.pin1"]} />
      <port name="COMH_N" direction="right" connectsTo={["R5.pin1", "C4.pin1", "D1.pin2"]} />
      <port name="COML_P" direction="right" connectsTo={["R6.pin1", "C5.pin1", "D3.pin1"]} />
      <port name="COML_N" direction="right" connectsTo={["R7.pin1", "C6.pin1", "D3.pin2"]} />
      <port name="BAT_POWER" direction="right" connectsTo={["R15.pin1"]} />
      <port name="INH_OUT" direction="right" connectsTo={["R20.pin1", "U1.pin16"]} />

      {/* Host Interface Ports (P2 Replacement) */}
      <port name="VIO" direction="left" connectsTo={["R12.pin2", "R13.pin1"]} />
      <port name="GND" direction="left" connectsTo={["R3.pin2", "C3.pin2", "D1.pin3", "C4.pin2", "R5.pin2", "C5.pin2", "D3.pin3", "C6.pin2", "R7.pin2", "R20.pin2"]} />
      <port name="SCLK" direction="left" connectsTo={["U1.pin6"]} />
      <port name="nCS" direction="left" connectsTo={["U1.pin7"]} />
      <port name="MOSI" direction="left" connectsTo={["U1.pin4"]} />
      <port name="MISO" direction="left" connectsTo={["U1.pin5"]} />
      <port name="nUART_SPI" direction="left" connectsTo={["R12.pin1"]} />
      <port name="NFAULT" direction="left" connectsTo={["U1.pin2", "R13.pin2"]} />
      <port name="DVDD" direction="left" connectsTo={["C12.pin1"]} />

      {/* Component declarations */}
      <BQ79600PWRQ1 name="U1" pcbX={0} pcbY={0} schX={0} schY={0} />

      {/* Isolation Transformers for Daisy Chain */}
      <HMU1228NLT_CND name="T1" pcbX={25} pcbY={15} schX={0} schY={5} />
      <HMU1228NLT_CND name="T2" pcbX={25} pcbY={-15} schX={0} schY={-5} />

      {/* Power Supply Decoupling Capacitors */}
      <capacitor name="C1" capacitance="0.1uF" footprint="0603" pcbX={0} pcbY={5} schX={2} schY={2} />
      <capacitor name="C10" capacitance="0.47uF" footprint="0603" pcbX={-10} pcbY={-10} schX={-5} schY={-2} />
      <capacitor name="C11" capacitance="0.1uF" footprint="0402" pcbX={-10} pcbY={-15} schX={-5} schY={-4} />
      <capacitor name="C12" capacitance="0.47uF" footprint="0402" pcbX={-10} pcbY={-20} schX={-5} schY={-6} />

      {/* Configuration and Host Interface Pull-up/down Resistors */}
      <resistor name="R1" resistance="10k" footprint="0402" pcbX={-20} pcbY={10} schX={-12} schY={-2} />
      <resistor name="R2" resistance="10k" footprint="0402" pcbX={-20} pcbY={15} schX={-12} schY={-4} />
      <resistor name="R3" resistance="10k" footprint="0402" pcbX={-20} pcbY={20} schX={-15} schY={0} />
      <resistor name="R12" resistance="10k" footprint="0402" pcbX={-20} pcbY={25} schX={-12} schY={-6} />
      <resistor name="R13" resistance="100k" footprint="0402" pcbX={-20} pcbY={30} schX={-10} schY={-5} />
      <resistor name="R15" resistance="10" footprint="0402" pcbX={20} pcbY={20} schX={10} schY={-3} />
      <resistor name="R20" resistance="100k" footprint="0402" pcbX={50} pcbY={5} schX={12} schY={2} />
      <resistor name="R16" resistance="51" footprint="0402" pcbX={40} pcbY={12} schX={8} schY={12} />
      <resistor name="R17" resistance="51" footprint="0402" pcbX={40} pcbY={7} schX={8} schY={10} />
      <resistor name="R18" resistance="51" footprint="0402" pcbX={40} pcbY={-7} schX={8} schY={-10} />
      <resistor name="R19" resistance="51" footprint="0402" pcbX={40} pcbY={-12} schX={8} schY={-12} />
      
      {/* Daisy Chain Differential Termination (Pin Side) */}
      <resistor name="R4" resistance="499" footprint="0402" pcbX={35} pcbY={10} schX={5} schY={10} schRotation={180} />
      <resistor name="R5" resistance="499" footprint="0402" pcbX={35} pcbY={5} schX={5} schY={8} schRotation={180} />
      <resistor name="R6" resistance="499" footprint="0402" pcbX={35} pcbY={-5} schX={5} schY={-8} schRotation={180} />
      <resistor name="R7" resistance="499" footprint="0402" pcbX={35} pcbY={-10} schX={5} schY={-10} schRotation={180} />

      {/* Differential Filtering and TVS Protection */}
      <capacitor name="C3" capacitance="100pF" footprint="0402" pcbX={45} pcbY={12} schX={10} schY={12} />
      <capacitor name="C4" capacitance="100pF" footprint="0402" pcbX={45} pcbY={7} schX={10} schY={10} />
      <capacitor name="C5" capacitance="100pF" footprint="0402" pcbX={45} pcbY={-7} schX={10} schY={-10} />
      <capacitor name="C6" capacitance="100pF" footprint="0402" pcbX={45} pcbY={-12} schX={10} schY={-12} />
      <PESD5V0L2BTN name="D1" pcbX={42} pcbY={9} schX={9} schY={9} />
      <PESD5V0L2BTN name="D3" pcbX={42} pcbY={-6} schX={9} schY={-9} />

      {/* Power Connectivity */}
      <trace name="N_BAT_DEC" from="U1.pin15" to="C1.pin1" />
      <trace name="N_BAT_1" from="U1.pin15" to="R15.pin2" />

      <trace name="N_VIO_1" from="U1.pin3" to="C11.pin1" />
      <trace name="N_VIO_2" from="C11.pin1" to="R1.pin2" />
      <trace name="N_VIO_3" from="R1.pin2" to="R2.pin2" />
      <trace name="N_VIO_4" from="R2.pin2" to="R12.pin2" />

      <trace name="N_GND_1" from="U1.pin9" to="C1.pin2" />
      <trace name="N_GND_2" from="C1.pin2" to="C10.pin2" />
      <trace name="N_GND_3" from="C10.pin2" to="C11.pin2" />
      <trace name="N_GND_4" from="C11.pin2" to="C12.pin2" />
      <trace name="N_GND_5" from="C12.pin2" to="R3.pin2" />

      <trace name="N_CVDD_1" from="U1.pin14" to="C10.pin1" />
      <trace name="N_DVDD_1" from="U1.pin1" to="C12.pin1" />

      {/* Host Interface Connectivity (SPI Mode Configuration) */}
      <trace name="SCLK_1" from="U1.pin6" to="R3.pin1" />
      <trace name="nCS_1" from="U1.pin7" to="R1.pin1" />
      <trace name="MOSI_1" from="U1.pin4" to="R2.pin1" />

      {/* COMH Daisy Chain Signal Path */}
      <trace name="COMH_IC_P" from="U1.pin13" to="T1.pin1" />
      <trace name="COMH_SEC_P" from="T1.pin6" to="R16.pin1" />
      <trace name="COMH_SEC_P_R" from="R16.pin2" to="R4.pin1" />

      <trace name="COMH_IC_N" from="U1.pin12" to="T1.pin3" />
      <trace name="COMH_SEC_N" from="T1.pin4" to="R17.pin1" />
      <trace name="COMH_SEC_N_R" from="R17.pin2" to="R5.pin1" />
      
      <trace name="COMH_TERM" from="R4.pin2" to="R5.pin2" />

      {/* COML Daisy Chain Signal Path */}
      <trace name="COML_IC_P" from="U1.pin10" to="T2.pin1" />
      <trace name="COML_SEC_P" from="T2.pin6" to="R18.pin1" />
      <trace name="COML_SEC_P_R" from="R18.pin2" to="R6.pin1" />

      <trace name="COML_IC_N" from="U1.pin11" to="T2.pin3" />
      <trace name="COML_SEC_N" from="T2.pin4" to="R19.pin1" />
      <trace name="COML_SEC_N_R" from="R19.pin2" to="R7.pin1" />

      <trace name="COML_TERM" from="R6.pin2" to="R7.pin2" />
    </group>
  )
}

export default CommunicationBridge