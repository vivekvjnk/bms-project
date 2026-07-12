import { STM32F411CEU6 } from "./imports/STM32F411CEU6"

export const MicrocontrollerModule = () => {
  return (
    <board width="100mm" height="100mm">
      <STM32F411CEU6 name="U1" schX={0} schY={0} />
      
      {/* 1. Decoupling Capacitors */}
      <capacitor name="C1" capacitance="0.1uF" footprint="0402" schX={-5} schY={2} />
      <capacitor name="C2" capacitance="4.7uF" footprint="0603" schX={-5} schY={3} />
      <capacitor name="C3" capacitance="0.1uF" footprint="0402" schX={0} schY={7} />
      <capacitor name="C4" capacitance="4.7uF" footprint="0603" schX={0} schY={8} />
      <capacitor name="C5" capacitance="0.1uF" footprint="0402" schX={2} schY={2} />
      <capacitor name="C6" capacitance="4.7uF" footprint="0603" schX={2} schY={3} />
      <capacitor name="C7" capacitance="2.2uF" footprint="0603" schX={-2} schY={-2} />

      {/* 2. Oscillator (8MHz HSE) */}
      <crystal name="X1" frequency="8MHz" loadCapacitance="20pF" footprint="crystal_smd_3225" schX={4} schY={0} />
      <capacitor name="C8" capacitance="22pF" footprint="0402" schX={4} schY={-1} />
      <capacitor name="C9" capacitance="22pF" footprint="0402" schX={5} schY={-1} />

      {/* 3. Passive Support */}
      <resistor name="R1" resistance="10kohm" footprint="0402" schX={-2} schY={-3} /> {/* BOOT0 pull-down */}
      <resistor name="R2" resistance="10kohm" footprint="0402" schX={-4} schY={-5} /> {/* NRST pull-up */}
      <capacitor name="C10" capacitance="0.1uF" footprint="0402" schX={-5} schY={-2} /> {/* NRST cap */}

      {/* 4. Connectors */}
      <pinheader
        name="J1"
        pinCount={5}
        gender="male"
        pitch="2.54mm"
        footprint="pinrow5"
        doubleRow={false}
        showSilkscreenPinLabels={true}
        pinLabels={["SWDIO", "SWCLK", "NRST", "GND", "3V3"]}
        pcbX={-1}
        pcbY={0}
        schX={-8}
        schY={0}
      />
      
      <pinheader
        name="J2"
        pinCount={10}
        gender="male"
        pitch="2.54mm"
        footprint="pinrow10"
        doubleRow={false}
        showSilkscreenPinLabels={true}
        pinLabels={["ADC_IN", "UART_TX", "UART_RX", "SPI_SCK", "SPI_MISO", "SPI_MOSI", "SYNC_GPIO", "CONTACTOR_GPIO", "GND", "3V3"]}
        pcbX={11}
        pcbY={0}
        schX={8}
        schY={0}
      />

      {/* Connections (Point-to-Point) */}
      {/* Power (3V3) */}
      <trace name="t3v3_1" path={["J1.pin5", "J2.pin10"]} />
      <trace name="t3v3_2" path={["J2.pin10", "C6.pin1"]} />
      <trace name="t3v3_3" path={["C6.pin1", "C5.pin1"]} />
      <trace name="t3v3_4" path={["C5.pin1", "C4.pin1"]} />
      <trace name="t3v3_5" path={["C4.pin1", "C3.pin1"]} />
      <trace name="t3v3_6" path={["C3.pin1", "C2.pin1"]} />
      <trace name="t3v3_7" path={["C2.pin1", "C1.pin1"]} />
      <trace name="t3v3_8" path={["C1.pin1", "U1.pin24"]} />
      <trace name="t3v3_9" path={["U1.pin24", "U1.pin36"]} />
      <trace name="t3v3_10" path={["U1.pin36", "U1.pin48"]} />
      <trace name="t3v3_11" path={["U1.pin48", "R2.pin1"]} />
      
      {/* Ground (GND) */}
      <trace name="tgnd_1" path={["J1.pin4", "J2.pin9"]} />
      <trace name="tgnd_2" path={["J2.pin9", "C10.pin2"]} />
      <trace name="tgnd_3" path={["C10.pin2", "C9.pin2"]} />
      <trace name="tgnd_4" path={["C9.pin2", "C8.pin2"]} />
      <trace name="tgnd_5" path={["C8.pin2", "C6.pin2"]} />
      <trace name="tgnd_6" path={["C6.pin2", "C5.pin2"]} />
      <trace name="tgnd_7" path={["C5.pin2", "C4.pin2"]} />
      <trace name="tgnd_8" path={["C4.pin2", "C3.pin2"]} />
      <trace name="tgnd_9" path={["C3.pin2", "C2.pin2"]} />
      <trace name="tgnd_10" path={["C2.pin2", "C1.pin2"]} />
      <trace name="tgnd_11" path={["C1.pin2", "U1.pin23"]} />
      <trace name="tgnd_12" path={["U1.pin23", "U1.pin35"]} />
      <trace name="tgnd_13" path={["U1.pin35", "U1.pin47"]} />
      <trace name="tgnd_14" path={["U1.pin47", "R1.pin2"]} />
      
      <trace name="tvcap_1" path={["U1.pin22", "C7.pin1"]} />
      <trace name="tgnd_c7" path={["C7.pin2", "U1.pin23"]} />
      
      <trace name="txtal_1" path={["U1.pin5", "X1.pin1"]} />
      <trace name="txtal_2" path={["X1.pin1", "C8.pin1"]} />
      <trace name="txtal_3" path={["U1.pin6", "X1.pin2"]} />
      <trace name="txtal_4" path={["X1.pin2", "C9.pin1"]} />
      
      <trace name="tboot" path={["U1.pin44", "R1.pin1"]} />
      
      <trace name="tnrst_1" path={["U1.pin7", "R2.pin2"]} />
      <trace name="tnrst_2" path={["R2.pin2", "C10.pin1"]} />
      <trace name="tnrst_3" path={["C10.pin1", "J1.pin3"]} />
      
      <trace name="tswdio" path={["J1.pin1", "U1.pin34"]} />
      <trace name="tswclk" path={["J1.pin2", "U1.pin37"]} />
      
      <trace name="tadc" path={["J2.pin1", "U1.pin10"]} />
      <trace name="ttx" path={["J2.pin2", "U1.pin30"]} />
      <trace name="trx" path={["J2.pin3", "U1.pin31"]} />
      <trace name="tsck" path={["J2.pin4", "U1.pin15"]} />
      <trace name="tmiso" path={["J2.pin5", "U1.pin16"]} />
      <trace name="tmosi" path={["J2.pin6", "U1.pin17"]} />
      <trace name="tsync" path={["J2.pin7", "U1.pin21"]} />
      <trace name="tcont" path={["J2.pin8", "U1.pin42"]} />
    </board>
  )
}
