import { BmsMonitorModule } from "bms-monitor-module/Workspace/bms-monitor-module";
import { CommunicationBridge } from "communication-bridge/Workspace/communication-bridge";
import { CurrentSensing } from "current-sensing/Workspace/current-sensing";
import { HighVoltagePowerSupply } from "high-voltage-power-supply/Workspace/high-voltage-power-supply";

/**
 * power-circuit
 * 
 * Integrates:
 * - bms-monitor-module: Cell monitoring and balancing
 * - high-voltage-power-supply: Logic power from traction bus
 * - current-sensing: Isolated pack current measurement
 * - communication-bridge: Isolated host-to-daisy-chain interface
 */
export const PowerCircuit = () => {
  return (
    <board name="power-circuit">
      {/* 1. Module Instantiation */}
      <BmsMonitorModule 
        name="BMM" 
        schX={0} 
        schY={0} 
        showAsSchematicBox={true} 
      />
      <CommunicationBridge 
        name="CB" 
        schX={20} 
        schY={0} 
        showAsSchematicBox={true} 
      />
      <CurrentSensing 
        name="CS" 
        schX={0} 
        schY={-20} 
        showAsSchematicBox={true} 
      />
      <HighVoltagePowerSupply 
        name="HVPS" 
        schX={-20} 
        schY={0} 
        showAsSchematicBox={true} 
      />

      {/* 2. External System Interface Ports */}
      
      {/* High-Voltage Traction Bus */}
      <port name="HV_BUS_POS" direction="up" />
      <port name="HV_BUS_NEG" direction="down" />
      
      {/* Low-Voltage Logic Power (from LVPS) */}
      <port name="BAT_12V" direction="left" />
      <port name="VIO_3V3" direction="left" />
      <port name="GND_LV" direction="left" />
      
      {/* Shunt Kelvin Sense Connections */}
      <port name="SHUNT_P" direction="up" />
      <port name="SHUNT_N" direction="up" />

      {/* Battery Stack Cell Taps (0-16) */}
      {Array.from({ length: 17 }).map((_, i) => (
        <port key={`p_cell_tap_${i}`} name={`CELL_TAP_${i}`} direction="right" />
      ))}

      {/* Host Logic / MCU Interfaces */}
      <port name="CS_OUT" direction="left" />
      <port name="HOST_SCLK" direction="left" />
      <port name="HOST_nCS" direction="left" />
      <port name="HOST_MOSI" direction="left" />
      <port name="HOST_MISO" direction="left" />

      {/* 3. Inter-Module and External Routing */}
      
      {/* --- Power Distribution --- */}
      {/* HV Inflow */}
      <trace name="t_hv_pos" path={["HV_BUS_POS", "HVPS.HV_IN_POS"]} />
      
      {/* Common HV Negative Return / System HV Reference */}
      <trace 
        name="t_hv_neg" 
        path={["HV_BUS_NEG", "HVPS.HV_IN_NEG", "CS.GND1", "BMM.CELL_TAP_0"]} 
      />
      
      {/* Isolated 5V Rail for Current Sensing Hot-side */}
      <trace name="t_vdd1_iso" path={["HVPS.VDD1", "CS.VDD1"]} />
      
      {/* Logic Power Rails (Shared with Communication Bridge and Current Sense Cold-side) */}
      <trace name="t_bat_12v" path={["BAT_12V", "CB.BAT"]} />
      <trace name="t_vio_3v3" path={["VIO_3V3", "CB.VIO", "CS.VDD2"]} />
      <trace name="t_gnd_lv" path={["GND_LV", "CB.GND", "CS.GND2"]} />

      {/* --- Signal Interconnects --- */}
      
      {/* Daisy Chain (Head Node) */}
      <trace name="t_daisy_p" path={["CB.COMH_P", "BMM.COM_LP"]} />
      <trace name="t_daisy_n" path={["CB.COMH_N", "BMM.COM_LN"]} />

      {/* Shunt Analog Input to Isolated Amp */}
      <trace name="t_shunt_p" path={["SHUNT_P", "CS.INP"]} />
      <trace name="t_shunt_n" path={["SHUNT_N", "CS.INN"]} />

      {/* Cell Tap Voltage Sensing & Balancing Paths */}
      {Array.from({ length: 17 }).map((_, i) => (
        <trace key={`t_tap_${i}`} path={[`CELL_TAP_${i}`, `BMM.CELL_TAP_${i}`]} />
      ))}
      
      {/* Power Monitor Module from top of stack potential */}
      <trace name="t_bmm_pwr" path={["BMM.BAT", "BMM.CELL_TAP_16"]} />

      {/* --- System Controller / MCU Interface Breakouts --- */}
      <trace name="t_cs_analog_out" path={["CS.OUT", "CS_OUT"]} />
      <trace name="t_spi_sclk" path={["CB.SCLK", "HOST_SCLK"]} />
      <trace name="t_spi_ncs" path={["CB.nCS", "HOST_nCS"]} />
      <trace name="t_spi_mosi" path={["CB.MOSI", "HOST_MOSI"]} />
      <trace name="t_spi_miso" path={["CB.MISO", "HOST_MISO"]} />

    </board>
  );
};

export default PowerCircuit;
