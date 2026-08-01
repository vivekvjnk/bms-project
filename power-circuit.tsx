import { BmsMonitorModule } from "bms-monitor-module/Workspace/bms-monitor-module";
import { CommunicationBridge } from "communication-bridge/Workspace/communication-bridge";
import { CurrentSensing } from "current-sensing/Workspace/current-sensing";
import { HighVoltagePowerSupply } from "high-voltage-power-supply/Workspace/high-voltage-power-supply";
import { SwitchingCircuit } from "switching_circuit/Workspace/switching_circuit";

/**
 * power-circuit
 * 
 * Integrates:
 * - bms-monitor-module: Cell monitoring and balancing
 * - high-voltage-power-supply: Logic power from traction bus
 * - current-sensing: Isolated pack current measurement
 * - switching-circuit: Isolated low-side power switching and shunt
 * - communication-bridge: Isolated host-to-daisy-chain interface
 */
export const PowerCircuit = () => {
  return (
    <board width="100mm" height="100mm" routingDisabled={true}>
      {/* 1. Module Instantiation */}
      <BmsMonitorModule 
        name="BMM" 
        schX={0} 
        schY={0} 
        showAsSchematicBox={true} 
      />
      <CommunicationBridge 
        name="CB" 
        schX={10} 
        schY={0} 
        showAsSchematicBox={true} 
      />
      <CurrentSensing 
        name="CS" 
        schX={0} 
        schY={-5} 
        showAsSchematicBox={true} 
      />
      <HighVoltagePowerSupply 
        name="HVPS" 
        schX={-5} 
        schY={-5} 
        showAsSchematicBox={true} 
      />
      <SwitchingCircuit 
        name="SWC"
        schX={6.2}
        schY={-5}
        showAsSchematicBox={true}
      />

      {/* 2. External System Interface Connectors */}

      {/* Dedicated High-Voltage / High-Current Connectors */}
      <pinheader 
        name="J_HV_POS" 
        pinCount={1} 
        pinLabels={["HV_BUS_POS"]} 
        schX={-8} 
        schY={-4} 
      />
      <pinheader 
        name="J_HV_NEG" 
        pinCount={1} 
        pinLabels={["HV_BUS_NEG"]} 
        schX={-8} 
        schY={-6} 
      />
      <pinheader 
        name="J_PACK_NEG" 
        pinCount={1} 
        pinLabels={["PACK_NEG"]} 
        schX={10} 
        schY={-5} 
        schRotation={180}
      />
      
      {/* Connector for Control Circuit (MCU & LVPS) */}
      <pinheader
        name="J_CTRL"
        pinCount={13}
        pinLabels={[
          "BAT_12V", "VIO_3V3", "GND_LV", 
          "CS_OUT", "HOST_SCLK", "HOST_nCS", "HOST_MOSI", "HOST_MISO",
          "HOST_CTRL_CHG", "HOST_CTRL_DSG", "HOST_STAT_CHG", "HOST_STAT_DSG",
          "HOST_NFAULT"
        ]}
        schX={5}
        schY={0}
      />

      {/* Connector for Battery Stack Cell Taps (0-16) */}
      <pinheader
        name="J_CELLS"
        pinCount={17}
        pinLabels={Array.from({ length: 17 }).map((_, i) => `CELL_TAP_${i}`)}
        schX={-5}
        schY={-0.1}
      />

      {/* Connector for Thermistor Sensors (8x NTC + VREF + GND) */}
      <pinheader
        name="J_NTC"
        pinCount={10}
        pinLabels={[
          "NTC_CH1", "NTC_CH2", "NTC_CH3", "NTC_CH4", 
          "NTC_CH5", "NTC_CH6", "NTC_CH7", "NTC_CH8", 
          "VREF_NTC", "GND_NTC"
        ]}
        schX={-5}
        schY={5}
      />

      {/* 3. Inter-Module and External Routing */}
      
      {/* --- Power Distribution --- */}
      {/* HV Inflow */}
      <trace name="t_hv_pos" path={["J_HV_POS.pin1", "HVPS.HV_IN_POS"]} />
      
      {/* Common HV Negative Return / System HV Reference */}
      <trace name="t_hv_neg_1" path={["J_HV_NEG.pin1", "HVPS.HV_IN_NEG"]} />
      <trace name="t_hv_neg_2" path={["HVPS.HV_IN_NEG", "SWC.BAT_NEG"]} />
      <trace name="t_hv_neg_3" path={["SWC.BAT_NEG", "SWC.GND_B"]} />
      <trace name="t_hv_neg_4" path={["SWC.GND_B", "CS.GND1"]} />
      <trace name="t_hv_neg_5" path={["CS.GND1", "BMM.CELL_TAP_0"]} />
      
      {/* Isolated 5V Rail for Current Sensing Hot-side */}
      <trace name="t_vdd1_iso" path={["HVPS.VDD1", "CS.VDD1"]} />
      
      {/* Gate Drive Supply */}
      <trace name="t_vdd12v_iso" path={["HVPS.VDD12V", "SWC.VDD_12V"]} />

      {/* Logic Power Rails (Shared with Communication Bridge and Current Sense Cold-side) */}
      <trace name="t_bat_12v" path={["J_CTRL.pin1", "CB.BAT"]} />
      <trace name="t_vio_3v3_1" path={["J_CTRL.pin2", "CB.VIO"]} />
      <trace name="t_vio_3v3_2" path={["CB.VIO", "CS.VDD2"]} />
      <trace name="t_gnd_lv_1" path={["J_CTRL.pin3", "CB.GND"]} />
      <trace name="t_gnd_lv_2" path={["CB.GND", "CS.GND2"]} />
      <trace name="t_gnd_lv_3" path={["CS.GND2", "SWC.GND_LV"]} />

      {/* Pack Return */}
      <trace name="t_pack_neg" path={["SWC.PACK_NEG", "J_PACK_NEG.pin1"]} />

      {/* --- Signal Interconnects --- */}
      
      {/* Daisy Chain (Head Node) */}
      <trace name="t_daisy_p" path={["CB.COMH_P", "BMM.COM_LP"]} />
      <trace name="t_daisy_n" path={["CB.COMH_N", "BMM.COM_LN"]} />

      {/* Integrated Shunt Sensing */}
      <trace name="t_shunt_p" path={["SWC.SRP", "CS.INP"]} />
      <trace name="t_shunt_n" path={["SWC.SRN", "CS.INN"]} />

      {/* Cell Tap Voltage Sensing & Balancing Paths */}
      {Array.from({ length: 17 }).map((_, i) => (
        <trace key={`t_tap_${i}`} path={[`J_CELLS.pin${i+1}`, `BMM.CELL_TAP_${i}`]} />
      ))}
      
      {/* Thermistor Routing */}
      {Array.from({ length: 8 }).map((_, i) => (
        <trace key={`t_ntc_${i+1}`} path={[`J_NTC.pin${i+1}`, `BMM.NTC_CH${i+1}`]} />
      ))}
      <trace name="t_ntc_vref" path={["J_NTC.pin9", "BMM.VREF_NTC"]} />
      <trace name="t_ntc_gnd" path={["J_NTC.pin10", "BMM.GND_NTC"]} />
      
      {/* Power Monitor Module from top of stack potential */}
      <trace name="t_bmm_pwr" path={["BMM.BAT", "BMM.CELL_TAP_16"]} />

      {/* --- System Controller / MCU Interface Breakouts --- */}
      <trace name="t_cs_analog_out" path={["CS.OUT", "J_CTRL.pin4"]} />
      <trace name="t_spi_sclk" path={["CB.SCLK", "J_CTRL.pin5"]} />
      <trace name="t_spi_ncs" path={["CB.nCS", "J_CTRL.pin6"]} />
      <trace name="t_spi_mosi" path={["CB.MOSI", "J_CTRL.pin7"]} />
      <trace name="t_spi_miso" path={["CB.MISO", "J_CTRL.pin8"]} />

      {/* Switching Circuit Breakouts */}
      <trace name="t_swc_ctrl_chg" path={["SWC.CTRL_CHG", "J_CTRL.pin9"]} />
      <trace name="t_swc_ctrl_dsg" path={["SWC.CTRL_DSG", "J_CTRL.pin10"]} />
      <trace name="t_swc_stat_chg" path={["SWC.STAT_CHG", "J_CTRL.pin11"]} />
      <trace name="t_swc_stat_dsg" path={["SWC.STAT_DSG", "J_CTRL.pin12"]} />

      {/* System Fault Indicator */}
      <trace name="t_cb_nfault" path={["CB.NFAULT", "J_CTRL.pin13"]} />

    </board>
  );
};

export default PowerCircuit;
