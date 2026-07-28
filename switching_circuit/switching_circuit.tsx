import { CRSS042N10N } from "./imports/CRSS042N10N";
import { SI8233BD_D_ISR } from "./imports/SI8233BD_D_ISR";

export const SwitchingCircuit = () => {
  return (
    <board width="100mm" height="100mm">
      {/* MOSFET Array (8x Parallel) */}
      {Array.from({ length: 8 }).map((_, i) => (
        <CRSS042N10N key={i} name={`Q${i + 1}`} />
      ))}

      {/* Gate Driver */}
      <SI8233BD_D_ISR name="U1" />

      {/* Passive components */}
      {Array.from({ length: 8 }).map((_, i) => (
        <resistor key={i} name={`R_GATE_${i + 1}`} resistance="10ohm" />
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <resistor key={i} name={`R_PD_${i + 1}`} resistance="10kohm" />
      ))}

      {/* Connections (Q1 as example) */}
      <trace from=".U1.VOA" to=".R_GATE_1.1" />
      <trace from=".R_GATE_1.2" to=".Q1.pin1" />
      <trace from=".Q1.pin1" to=".R_PD_1.1" />
      <trace from=".R_PD_1.2" to=".U1.pin14" />
    </board>
  );
};
