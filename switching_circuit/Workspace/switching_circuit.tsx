import React from "react";
import { CRSS042N10N } from "./imports/CRSS042N10N";
import { TLP250_F_ } from "./imports/TLP250_F_";

interface ModuleProps {
  showAsSchematicBox?: boolean;
  name?: string;
  schX?: number;
  schY?: number;
}

export const SwitchingCircuit = ({ name, schX, schY, showAsSchematicBox }: ModuleProps) => {
  return (
    <subcircuit exposeNets name={name} showAsSchematicBox={showAsSchematicBox} schX={schX} schY={schY}>
      {/* External Ports */}
      <port name="BAT_NEG" direction="left" connectsTo={["R_SHUNT.pin2"]} />
      <port name="PACK_NEG" direction="right" connectsTo={["Q1.pin3"]} />
      <port name="SRP" direction="right" connectsTo={["R_FILTER_SRP.pin2"]} />
      <port name="SRN" direction="right" connectsTo={["R_FILTER_SRN.pin2"]} />
      <port name="VDD_12V" direction="left" connectsTo={["U_CHG.pin8", "U_DSG.pin8"]} />
      <port name="GND_B" direction="left" connectsTo={["U_CHG.pin5", "U_DSG.pin5", "C_FILTER_SRP.pin2", "C_FILTER_SRN.pin2"]} />
      <port name="CTRL_CHG" direction="left" connectsTo={["U_CHG.pin2"]} />
      <port name="CTRL_DSG" direction="left" connectsTo={["U_DSG.pin2"]} />

      {/* Gate Drivers */}
      <TLP250_F_ name="U_CHG" pcbX="-30mm" pcbY="0mm" schX="-9" schY="-5" />
      <TLP250_F_ name="U_DSG" pcbX="30mm" pcbY="0mm" schX="-9" schY="5" />

      {/* MOSFET Array (CHG: Q1-Q4, DSG: Q5-Q8) */}
      {Array.from({ length: 4 }).map((_, i) => (
        <CRSS042N10N key={i} name={`Q${i + 1}`} pcbX={`${(i - 2) * 15}mm`} pcbY="15mm" schX="2" schY={`${-8 + i * 2}`} />
      ))}
      {Array.from({ length: 4 }).map((_, i) => (
        <CRSS042N10N key={i + 4} name={`Q${i + 5}`} pcbX={`${(i - 2) * 15}mm`} pcbY="30mm" schX="2" schY={`${2 + i * 2}`} />
      ))}

      {/* Common Gate Resistors */}
      <resistor name="R_GATE_CHG" resistance="330ohm" footprint="0603" pcbX="-15mm" pcbY="8mm" schX="-4" schY="-6" schRotation="0" />
      <resistor name="R_GATE_DSG" resistance="330ohm" footprint="0603" pcbX="15mm" pcbY="23mm" schX="-4" schY="4" schRotation="0" />

      {/* Gate-Source Pull-down Resistors (5.1Mohm) */}
      <resistor name="R_PD_CHG" resistance="5.1Mohm" footprint="0603" pcbX="0mm" pcbY="8mm" schX="4" schY="-6" schRotation="0" />
      <resistor name="R_PD_DSG" resistance="5.1Mohm" footprint="0603" pcbX="0mm" pcbY="37mm" schX="4" schY="4" schRotation="0" />

      {/* Current Sense Shunt */}
      <resistor name="R_SHUNT" resistance="1mohm" footprint="2512" pcbX="0mm" pcbY="-20mm" schX="2" schY="-10" />
      
      {/* Current Sense Filter */}
      <resistor name="R_FILTER_SRP" resistance="100ohm" footprint="0603" pcbX="-10mm" pcbY="-20mm" schX="0" schY="-10" schRotation="270" />
      <resistor name="R_FILTER_SRN" resistance="100ohm" footprint="0603" pcbX="10mm" pcbY="-20mm" schX="5" schY="-10" schRotation="270" />
      <capacitor name="C_FILTER_SRP" capacitance="100nF" footprint="0603" pcbX="-10mm" pcbY="-25mm" schX="0" schY="-11" schRotation="270" />
      <capacitor name="C_FILTER_SRN" capacitance="100nF" footprint="0603" pcbX="10mm" pcbY="-25mm" schX="5" schY="-11" schRotation="270" />

      {/* Connections */}
      {/* Gate Drive Traces */}
      <trace name="TR_CHG_DRV_GATE" from="U_CHG.pin6" to="R_GATE_CHG.pin1" />
      <trace name="TR_CHG_GATE_RES" from="R_GATE_CHG.pin2" to="Q1.pin1" />
      <trace name="TR_DSG_DRV_GATE" from="U_DSG.pin6" to="R_GATE_DSG.pin1" />
      <trace name="TR_DSG_GATE_RES" from="R_GATE_DSG.pin2" to="Q5.pin1" />

      {/* Parallel MOSFET Gates */}
      <trace name="TR_Q_CHG_GATES" from="Q1.pin1" to="Q2.pin1" />
      <trace name="TR_Q_CHG_GATES_2" from="Q2.pin1" to="Q3.pin1" />
      <trace name="TR_Q_CHG_GATES_3" from="Q3.pin1" to="Q4.pin1" />

      <trace name="TR_Q_DSG_GATES" from="Q5.pin1" to="Q6.pin1" />
      <trace name="TR_Q_DSG_GATES_2" from="Q6.pin1" to="Q7.pin1" />
      <trace name="TR_Q_DSG_GATES_3" from="Q7.pin1" to="Q8.pin1" />

      {/* Parallel MOSFET Sources */}
      {/* CHG sources connected together and to PACK_NEG */}
      <trace name="TR_Q_CHG_SOURCES" from="Q1.pin3" to="Q2.pin3" />
      <trace name="TR_Q_CHG_SOURCES_2" from="Q2.pin3" to="Q3.pin3" />
      <trace name="TR_Q_CHG_SOURCES_3" from="Q3.pin3" to="Q4.pin3" />

      {/* DSG sources connected together and to R_SHUNT.pin1 */}
      <trace name="TR_Q_DSG_SOURCES" from="Q5.pin3" to="Q6.pin3" />
      <trace name="TR_Q_DSG_SOURCES_2" from="Q6.pin3" to="Q7.pin3" />
      <trace name="TR_Q_DSG_SOURCES_3" from="Q7.pin3" to="Q8.pin3" />
      <trace name="TR_DSG_SOURCES_TO_SHUNT" from="Q8.pin3" to="R_SHUNT.pin1" />

      {/* Back-to-Back Drains Shorted Together (Common Drain Configuration) */}
      <trace name="TR_Q_CHG_DRAINS" from="Q1.pin2" to="Q2.pin2" />
      <trace name="TR_Q_CHG_DRAINS_2" from="Q2.pin2" to="Q3.pin2" />
      <trace name="TR_Q_CHG_DRAINS_3" from="Q3.pin2" to="Q4.pin2" />

      <trace name="TR_Q_DSG_DRAINS" from="Q5.pin2" to="Q6.pin2" />
      <trace name="TR_Q_DSG_DRAINS_2" from="Q6.pin2" to="Q7.pin2" />
      <trace name="TR_Q_DSG_DRAINS_3" from="Q7.pin2" to="Q8.pin2" />

      <trace name="TR_CHG_DSG_COMMON_DRAINS" from="Q1.pin2" to="Q5.pin2" />

      {/* Pull-down Resistors between Gate and Source */}
      <trace name="TR_PD_CHG_GATE" from="R_PD_CHG.pin1" to="Q1.pin1" />
      <trace name="TR_PD_CHG_SOURCE" from="R_PD_CHG.pin2" to="Q1.pin3" />

      <trace name="TR_PD_DSG_GATE" from="R_PD_DSG.pin1" to="Q5.pin1" />
      <trace name="TR_PD_DSG_SOURCE" from="R_PD_DSG.pin2" to="Q5.pin3" />

      {/* Shunt & Power Path */}
      <trace name="TR_SHUNT_OUT" from="R_SHUNT.pin2" to="R_SHUNT.pin2" />
      <trace name="TR_SHUNT_SRP" from="R_SHUNT.pin1" to="R_FILTER_SRP.pin1" />
      <trace name="TR_SHUNT_SRN" from="R_SHUNT.pin2" to="R_FILTER_SRN.pin1" />
      <trace name="TR_FILTER_SRP_OUT" from="R_FILTER_SRP.pin2" to="C_FILTER_SRP.pin1" />
      <trace name="TR_FILTER_SRN_OUT" from="R_FILTER_SRN.pin2" to="C_FILTER_SRN.pin1" />
      <trace name="TR_C_FILTER_SRP_GND" from="C_FILTER_SRP.pin2" to="U_CHG.pin5" />
      <trace name="TR_C_FILTER_SRN_GND" from="C_FILTER_SRN.pin2" to="U_CHG.pin5" />

    </subcircuit>
  );
};

export default SwitchingCircuit;
