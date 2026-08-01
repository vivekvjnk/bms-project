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
    // <group name={name} showAsSchematicBox={showAsSchematicBox} schX={schX} schY={schY}>
      <board width="50mm" height="50mm" routingDisabled={true}>
        {/* 1. Module Instantiation */}
        <LowVoltagePowerSupply name="lvps" schX={0} schY={0} showAsSchematicBox={true} />
        <MicrocontrollerModule name="mcu" schX={5} schY={0} showAsSchematicBox={true} />

        {/* 2. Pin Header Connectors */}
        {/* Power Input Connector (J_PWR_IN) */}
        <pinheader name="J_PWR_IN" pinCount={2} schX={-3} schY={0} />
        
        {/* Main System Interface (J_SYSTEM) */}
        <pinheader name="J_SYSTEM" pinCount={15} schX={-3} schY={-3} />

        {/* Debug Connector (J_DEBUG) */}
        <pinheader name="J_DEBUG" pinCount={4} schX={-3} schY={2} />

        {/* 3. Inter-Module Routing (Power & Ground) */}
        <trace name="t_v3v3_link" path={[".lvps .VOUT_3V3", ".mcu .3V3"]} />
        <trace name="t_gnd_link" path={[".lvps .SEC_GND", ".mcu .GND"]} />

        {/* 4. External Connectivity (Module to Header Traces) */}
        
        {/* Power Input Header Traces */}
        <trace name="t_vin_p" path={[".lvps .VIN_P", ".J_PWR_IN .pin1"]} />
        <trace name="t_pri_gnd" path={[".lvps .PRI_GND", ".J_PWR_IN .pin2"]} />

        {/* System Interface Header Traces (Power Rails) */}
        <trace name="t_vout_12v" path={[".lvps .VOUT_12V", ".J_SYSTEM .pin1"]} />
        <trace name="t_vout_5v" path={[".lvps .VOUT_5V", ".J_SYSTEM .pin2"]} />
        <trace name="t_vout_1v2" path={[".lvps .VOUT_1V2", ".J_SYSTEM .pin3"]} />

        {/* System Interface Header Traces (MCU Signals) */}
        <trace name="t_uart_tx" path={[".mcu .UART_TX", ".J_SYSTEM .pin4"]} />
        <trace name="t_uart_rx" path={[".mcu .UART_RX", ".J_SYSTEM .pin5"]} />
        <trace name="t_adc_in" path={[".mcu .ADC_IN", ".J_SYSTEM .pin6"]} />
        <trace name="t_sync_gpio" path={[".mcu .SYNC_GPIO", ".J_SYSTEM .pin7"]} />
        <trace name="t_ctrl_chg" path={[".mcu .CTRL_CHG", ".J_SYSTEM .pin8"]} />
        <trace name="t_ctrl_dsg" path={[".mcu .CTRL_DSG", ".J_SYSTEM .pin9"]} />
        <trace name="t_spi_sck" path={[".mcu .SPI_SCK", ".J_SYSTEM .pin10"]} />
        <trace name="t_spi_miso" path={[".mcu .SPI_MISO", ".J_SYSTEM .pin11"]} />
        <trace name="t_spi_mosi" path={[".mcu .SPI_MOSI", ".J_SYSTEM .pin12"]} />
        <trace name="t_spi_cs" path={[".mcu .SPI_CS", ".J_SYSTEM .pin13"]} />
        <trace name="t_system_gnd" path={[".lvps .SEC_GND", ".J_SYSTEM .pin14"]} />
        <trace name="t_nfault" path={[".mcu .NFAULT", ".J_SYSTEM .pin15"]} />

        {/* Debug Header Traces */}
        <trace name="t_swdio" path={[".mcu .SWDIO", ".J_DEBUG .pin1"]} />
        <trace name="t_swclk" path={[".mcu .SWCLK", ".J_DEBUG .pin2"]} />
        <trace name="t_nrst" path={[".mcu .NRST", ".J_DEBUG .pin3"]} />
        <trace name="t_debug_gnd" path={[".mcu .GND", ".J_DEBUG .pin4"]} />
    {/* </group> */}
    </board>
  );
};

export default ControlCircuit;

