import { SN65HVD230DR } from "./imports/SN65HVD230DR"
import { X49SM16MSD2SC } from "./imports/X49SM16MSD2SC"
import { BSS138 } from "./imports/BSS138"

export const MicrocontrollerModule = () => (
  <board width="100mm" height="100mm">
    {/* MCU */}
    <chip name="U1" footprint="lqfp144" />

    {/* CAN Transceiver */}
    <SN65HVD230DR name="U2" />

    {/* Crystal Oscillator */}
    <X49SM16MSD2SC name="Y1" />

    {/* Contactor Driver */}
    <BSS138 name="Q1" />

    {/* Wiring - Power (Represented as net labels) */}
    <net name="VCC_1V2" />
    <net name="VCC_3V3" />
    <net name="GND" />

    {/* Wiring - MCU to CAN Transceiver */}
    <trace from=".U1.DCAN1_TX" to=".U2.D" />
    <trace from=".U1.DCAN1_RX" to=".U2.R" />

    {/* Wiring - MCU to Contactor Driver */}
    <trace from=".U1.GIOB0" to=".Q1.G" />
    
    {/* Wiring - Crystal */}
    <trace from=".U1.OSC1" to=".Y1.OSC1" />
    <trace from=".U1.OSC2" to=".Y1.OSC2" />
  </board>
)
