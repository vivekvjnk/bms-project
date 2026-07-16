import {BmsMonitorModule} from "bms-monitor-module/Workspace/bms-monitor-module"
import {CurrentSensing} from "current-sensing/Workspace/current-sensing"
import {HighVoltagePowerSupply} from "high-voltage-power-supply/Workspace/high-voltage-power-supply"
import {CommunicationBridge} from "communication-bridge/Workspace/communication-bridge"


export const power_circuit = () => {
  return (
    <board name="main-power-circuit" routingDisabled={true}>
        <BmsMonitorModule name="monitor_module" schX={0} showAsSchematicBox = {true}/>
        <CurrentSensing name="current_sensing" schX={5} showAsSchematicBox = {true}/>
        
        <HighVoltagePowerSupply name="hv_supply" schY={5} showAsSchematicBox = {true}/>
        <CommunicationBridge name="com_bridge" schX={5} schY={5} showAsSchematicBox = {true}/>
        
        <trace name="tr_cvdd" from="monitor_module.CVDD" to="hv_supply.LV_OUT"/>

    </board>
  );
};

