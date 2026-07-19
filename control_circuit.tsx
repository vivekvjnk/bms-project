import {MicrocontrollerModule} from "microcontroller-module/Workspace/microcontroller-module"
import {LowVoltagePowerSupply} from "low-voltage-power-supply/Workspace/low-voltage-power-supply"


export const power_circuit = () => {
  return (
    <board name="main-power-circuit" routingDisabled={true}>
        <MicrocontrollerModule name="microcontroller_module" schX={0} showAsSchematicBox = {true}/>
        <LowVoltagePowerSupply name="low_voltage_power_supply" schX={5} showAsSchematicBox = {true}/>
        
    </board>
  );
};