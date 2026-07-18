import { STM32F411CEU6 } from "./imports/STM32F411CEU6"

interface ModuleProps {
  name?: string;
  schX?: number;
  schY?: number;
  showAsSchematicBox?: boolean;
}

export const MicrocontrollerModule = ({ name, schX, schY, showAsSchematicBox }:ModuleProps) => {
  return (
    <group name={name} showAsSchematicBox={showAsSchematicBox} schX={schX} schY={schY}>
      {/* 1. Module Ports (Automatically route to target pins) */}
      <port name="SWDIO" direction="left" connectsTo={["U1.pin34"]} />
      <port name="SWCLK" direction="left" connectsTo={["U1.pin37"]} />
      <port name="NRST" direction="left" connectsTo={["C10.pin1"]} />
      <port name="GND" direction="left" connectsTo={["C10.pin2"]} />
      <port name="3V3" direction="left" connectsTo={["C6.pin1"]} />

      <port name="ADC_IN" direction="right" connectsTo={["U1.pin10"]} />
      <port name="UART_TX" direction="right" connectsTo={["U1.pin30"]} />
      <port name="UART_RX" direction="right" connectsTo={["U1.pin31"]} />
      <port name="SPI_SCK" direction="right" connectsTo={["U1.pin15"]} />
      <port name="SPI_MISO" direction="right" connectsTo={["U1.pin16"]} />
      <port name="SPI_MOSI" direction="right" connectsTo={["U1.pin17"]} />
      <port name="SYNC_GPIO" direction="right" connectsTo={["U1.pin21"]} />
      <port name="CONTACTOR_GPIO" direction="right" connectsTo={["U1.pin42"]} />

      {/* 2. Microcontroller */}
      <STM32F411CEU6 name="U1" schX={0} schY={0} />
      
      {/* 3. Decoupling Capacitors */}
      <capacitor name="C1" capacitance="0.1uF" footprint="0402" schX={-5} schY={2} />
      <capacitor name="C2" capacitance="4.7uF" footprint="0603" schX={-5} schY={3} />
      <capacitor name="C3" capacitance="0.1uF" footprint="0402" schX={0} schY={7} />
      <capacitor name="C4" capacitance="4.7uF" footprint="0603" schX={0} schY={8} />
      <capacitor name="C5" capacitance="0.1uF" footprint="0402" schX={2} schY={2} />
      <capacitor name="C6" capacitance="4.7uF" footprint="0603" schX={2} schY={3} />
      <capacitor name="C7" capacitance="2.2uF" footprint="0603" schX={-2} schY={-2} />

      {/* 4. Oscillator (8MHz HSE) */}
      <crystal name="X1" frequency="8MHz" loadCapacitance="20pF" footprint="crystal_smd_3225" schX={4} schY={0} />
      <capacitor name="C8" capacitance="22pF" footprint="0402" schX={4} schY={-1} />
      <capacitor name="C9" capacitance="22pF" footprint="0402" schX={5} schY={-1} />

      {/* 5. Passive Support */}
      <resistor name="R1" resistance="10kohm" footprint="0402" schX={-2} schY={-3} /> {/* BOOT0 pull-down */}
      <resistor name="R2" resistance="10kohm" footprint="0402" schX={-4} schY={-5} /> {/* NRST pull-up */}
      <capacitor name="C10" capacitance="0.1uF" footprint="0402" schX={-5} schY={-2} /> {/* NRST cap */}

      {/* 6. ADC Input Filter */}
      <resistor name="R3" resistance="1kohm" footprint="0402" schX={8} schY={0} />
      <capacitor name="C11" capacitance="100nF" footprint="0402" schX={8} schY={1} />

      {/* 7. Internal Power Connections (3V3 Net) */}
      <trace name="t3v3_2" path={["C6.pin1", "C5.pin1"]} />
      <trace name="t3v3_3" path={["C5.pin1", "C4.pin1"]} />
      <trace name="t3v3_4" path={["C4.pin1", "C3.pin1"]} />
      <trace name="t3v3_5" path={["C3.pin1", "C2.pin1"]} />
      <trace name="t3v3_6" path={["C2.pin1", "C1.pin1"]} />
      <trace name="t3v3_7" path={["C1.pin1", "U1.pin24"]} />
      <trace name="t3v3_8" path={["U1.pin24", "U1.pin36"]} />
      <trace name="t3v3_9" path={["U1.pin36", "U1.pin48"]} />
      <trace name="t3v3_10" path={["U1.pin48", "R2.pin1"]} />
      
      {/* 7. Internal Ground Connections (GND Net) */}
      <trace name="tgnd_2" path={["C10.pin2", "C9.pin2"]} />
      <trace name="tgnd_3" path={["C9.pin2", "C8.pin2"]} />
      <trace name="tgnd_4" path={["C8.pin2", "C6.pin2"]} />
      <trace name="tgnd_5" path={["C6.pin2", "C5.pin2"]} />
      <trace name="tgnd_6" path={["C5.pin2", "C4.pin2"]} />
      <trace name="tgnd_7" path={["C4.pin2", "C3.pin2"]} />
      <trace name="tgnd_8" path={["C3.pin2", "C2.pin2"]} />
      <trace name="tgnd_9" path={["C2.pin2", "C1.pin2"]} />
      <trace name="tgnd_10" path={["C1.pin2", "U1.pin23"]} />
      <trace name="tgnd_11" path={["U1.pin23", "U1.pin35"]} />
      <trace name="tgnd_12" path={["U1.pin35", "U1.pin47"]} />
      <trace name="tgnd_13" path={["U1.pin47", "R1.pin2"]} />
      
      {/* 8. Auxiliary/Analog Internal Connections */}
      <trace name="tvcap_1" path={["U1.pin22", "C7.pin1"]} />
      <trace name="tgnd_c7" path={["C7.pin2", "U1.pin23"]} />
      
      <trace name="txtal_1" path={["U1.pin5", "X1.pin1"]} />
      <trace name="txtal_2" path={["X1.pin1", "C8.pin1"]} />
      <trace name="txtal_3" path={["U1.pin6", "X1.pin2"]} />
      <trace name="txtal_4" path={["X1.pin2", "C9.pin1"]} />
      
      <trace name="tboot" path={["U1.pin44", "R1.pin1"]} />
      
      <trace name="tnrst_1" path={["U1.pin7", "R2.pin2"]} />
      <trace name="tnrst_2" path={["R2.pin2", "C10.pin1"]} />
      
      {/* 9. ADC Input Filter Connections */}
      <trace name="tadc_filter" path={["ADC_IN", "R3.pin1"]} />
      <trace name="tadc_to_mcu" path={["R3.pin2", "U1.pin10"]} />
      <trace name="tadc_cap" path={["R3.pin2", "C11.pin1"]} />
      <trace name="tadc_gnd" path={["C11.pin2", "U1.pin23"]} />
    </group>
  )
}