import { MicrocontrollerModule } from "./microcontroller-module/Workspace/microcontroller-module"
import { LowVoltagePowerSupply } from "./low-voltage-power-supply/Workspace/low-voltage-power-supply"

interface ModuleProps {
  name?: string;
  schX?: number;
  schY?: number;
  showAsSchematicBox?: boolean;
}

export const ControlCircuit = ({ name, schX, schY, showAsSchematicBox }: ModuleProps) => {
  return (
    <group name={name} showAsSchematicBox={showAsSchematicBox} schX={schX} schY={schY}>
        {/* 1. Module Instantiation */}
        <LowVoltagePowerSupply name="lvps" schX={0} schY={0} showAsSchematicBox={true} />
        <MicrocontrollerModule name="mcu" schX={10} schY={0} showAsSchematicBox={true} />

        {/* 2. Inter-Module Routing (Power & Ground) */}
        {/* Power: LVPS 3.3V to MCU 3.3V */}
        <trace name="t_v3v3_link" path={["lvps.VOUT_3V3", "mcu.3V3"]} />
        
        {/* Ground: LVPS SEC_GND to MCU GND */}
        <trace name="t_gnd_link" path={["lvps.SEC_GND", "mcu.GND"]} />

        {/* 3. Top-Level External Ports */}
        {/* Power Inputs */}
        <port name="VIN_P" direction="left" connectsTo={["lvps.VIN_P"]} />
        <port name="PRI_GND" direction="left" connectsTo={["lvps.PRI_GND"]} />

        {/* Regulated Output Rails (for other system modules) */}
        <port name="VOUT_12V" direction="right" connectsTo={["lvps.VOUT_12V"]} />
        <port name="VOUT_5V" direction="right" connectsTo={["lvps.VOUT_5V"]} />
        <port name="VOUT_1V2" direction="right" connectsTo={["lvps.VOUT_1V2"]} />

        {/* MCU Signal Interfaces */}
        <port name="UART_TX" direction="right" connectsTo={["mcu.UART_TX"]} />
        <port name="UART_RX" direction="right" connectsTo={["mcu.UART_RX"]} />
        <port name="ADC_IN" direction="right" connectsTo={["mcu.ADC_IN"]} />
        <port name="SYNC_GPIO" direction="right" connectsTo={["mcu.SYNC_GPIO"]} />
        <port name="CONTACTOR_GPIO" direction="right" connectsTo={["mcu.CONTACTOR_GPIO"]} />
        
        {/* Debug/Programming Ports */}
        <port name="SWDIO" direction="left" connectsTo={["mcu.SWDIO"]} />
        <port name="SWCLK" direction="left" connectsTo={["mcu.SWCLK"]} />
        <port name="NRST" direction="left" connectsTo={["mcu.NRST"]} />
    </group>
  );
};

export default ControlCircuit;

