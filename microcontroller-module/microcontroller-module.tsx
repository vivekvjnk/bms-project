import { STM32F411CEU6 } from "./imports/STM32F411CEU6"

export default function MicrocontrollerModule() {
  return (
    <board width="50mm" height="50mm">
      <STM32F411CEU6 name="U1" />
      
      {/* 1. Decoupling Capacitors */}
      {/* 
        Datasheet (STM32F411) recommends 0.1uF + 4.7uF for VDD/VDDA.
        Pins: 
        VDD1: pin 24
        VDD2: pin 36
        VDD3: pin 48
        VSS1: pin 23
        VSS2: pin 35
        VSS3: pin 47
        VCAP1: pin 22 (needs 2.2uF cap to VSS)
      */}
      <capacitor name="C1" capacitance="0.1uF" footprint="0402" />
      <capacitor name="C2" capacitance="4.7uF" footprint="0603" />
      <capacitor name="C3" capacitance="0.1uF" footprint="0402" />
      <capacitor name="C4" capacitance="4.7uF" footprint="0603" />
      <capacitor name="C5" capacitance="0.1uF" footprint="0402" />
      <capacitor name="C6" capacitance="4.7uF" footprint="0603" />
      <capacitor name="C7" capacitance="2.2uF" footprint="0603" />

      {/* 2. Oscillator (8MHz HSE) */}
      <crystal name="X1" frequency="8MHz" />
      <capacitor name="C8" capacitance="22pF" footprint="0402" />
      <capacitor name="C9" capacitance="22pF" footprint="0402" />

      {/* 3. Passive Support */}
      <resistor name="R1" resistance="10kohm" footprint="0402" /> {/* BOOT0 pull-down */}
      <resistor name="R2" resistance="10kohm" footprint="0402" /> {/* NRST pull-up */}
      <capacitor name="C10" capacitance="0.1uF" footprint="0402" /> {/* NRST cap */}

      {/* 4. Connectors */}
      {/* SWD Header (Pins 34/37, 34=SWDIO, 37=SWCLK + GND + 3V3) */}
      <connector name="J1" pins={4} footprint="pinrow4">
        <port name="SWDIO" portHints={["U1.pin34"]} />
        <port name="SWCLK" portHints={["U1.pin37"]} />
        <port name="GND" portHints={["GND"]} />
        <port name="3V3" portHints={["3V3"]} />
      </connector>
      
      {/* Module Interface Header (Power, UART/SPI, GPIO, ADC) */}
      <connector name="J2" pins={10} footprint="pinrow10">
        <port name="ADC_IN" portHints={["U1.pin10"]} /> {/* PA0 - ADC1_0 */}
        <port name="UART_TX" portHints={["U1.pin30"]} /> {/* PA9 - USART1_TX */}
        <port name="UART_RX" portHints={["U1.pin31"]} /> {/* PA10 - USART1_RX */}
        <port name="SPI_SCK" portHints={["U1.pin15"]} /> {/* PA5 - SPI1_SCK */}
        <port name="SPI_MISO" portHints={["U1.pin16"]} /> {/* PA6 - SPI1_MISO */}
        <port name="SPI_MOSI" portHints={["U1.pin17"]} /> {/* PA7 - SPI1_MOSI */}
        <port name="SYNC_GPIO" portHints={["U1.pin21"]} /> {/* PB10 - GPIO */}
        <port name="CONTACTOR_GPIO" portHints={["U1.pin42"]} /> {/* PB6 - GPIO */}
        <port name="GND" portHints={["GND"]} />
        <port name="3V3" portHints={["3V3"]} />
      </connector>

      {/* Connections (Logical) */}
      <trace path={["U1.pin24", "C1.1", "C2.1"]} />
      <trace path={["U1.pin23", "C1.2", "C2.2"]} />

      <trace path={["U1.pin36", "C3.1", "C4.1"]} />
      <trace path={["U1.pin35", "C3.2", "C4.2"]} />

      <trace path={["U1.pin48", "C5.1", "C6.1"]} />
      <trace path={["U1.pin47", "C5.2", "C6.2"]} />

      <trace path={["U1.pin22", "C7.1"]} />
      <trace path={["C7.2", "U1.pin23"]} />

      <trace path={["U1.pin5", "X1.1"]} />
      <trace path={["U1.pin6", "X1.2"]} />
      <trace path={["X1.1", "C8.1"]} />
      <trace path={["X1.2", "C9.1"]} />
      <trace path={["C8.2", "GND"]} />
      <trace path={["C9.2", "GND"]} />

      <trace path={["U1.pin44", "R1.1"]} />
      <trace path={["R1.2", "GND"]} />

      <trace path={["U1.pin7", "R2.1", "C10.1"]} />
      <trace path={["R2.2", "3V3"]} />
      <trace path={["C10.2", "GND"]} />

      <trace path={["J1.SWDIO", "U1.pin34"]} />
      <trace path={["J1.SWCLK", "U1.pin37"]} />
      <trace path={["J1.GND", "GND"]} />
      <trace path={["J1.3V3", "3V3"]} />

      <trace path={["J2.ADC_IN", "U1.pin10"]} />
      <trace path={["J2.UART_TX", "U1.pin30"]} />
      <trace path={["J2.UART_RX", "U1.pin31"]} />
      <trace path={["J2.SPI_SCK", "U1.pin15"]} />
      <trace path={["J2.SPI_MISO", "U1.pin16"]} />
      <trace path={["J2.SPI_MOSI", "U1.pin17"]} />
      <trace path={["J2.SYNC_GPIO", "U1.pin21"]} />
      <trace path={["J2.CONTACTOR_GPIO", "U1.pin42"]} />
      <trace path={["J2.GND", "GND"]} />
      <trace path={["J2.3V3", "3V3"]} />

      <trace path={["U1.pin5", "X1.1"]} />
      <trace path={["U1.pin6", "X1.2"]} />
      <trace path={["X1.1", "C8.1"]} />
      <trace path={["X1.2", "C9.1"]} />
      <trace path={["C8.2", "GND"]} />
      <trace path={["C9.2", "GND"]} />

      <trace path={["U1.pin44", "R1.1"]} />
      <trace path={["R1.2", "GND"]} />

      <trace path={["U1.pin7", "R2.1", "C10.1"]} />
      <trace path={["R2.2", "3V3"]} />
      <trace path={["C10.2", "GND"]} />

    </board>
  )
}
