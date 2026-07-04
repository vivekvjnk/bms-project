import { BQ79600PWRQ1 } from "./imports/BQ79600PWRQ1"
import { HX1188NLT } from "./imports/HX1188NLT"
import { ACT45B_101_2P_TL003 } from "./imports/ACT45B_101_2P_TL003"

export const CommunicationBridge = () => {
  return (
    <board>
      {/* Bridge IC: BQ79600-Q1 */}
      <BQ79600PWRQ1 name="U1" />

      {/* Isolation Transformers for Daisy Chain */}
      <HX1188NLT name="T1" />
      <HX1188NLT name="T2" />

      {/* Common Mode Chokes for EMC */}
      <ACT45B_101_2P_TL003 name="L1" />
      <ACT45B_101_2P_TL003 name="L2" />

      {/* Power Supply Decoupling Capacitors */}
      <capacitor
        name="C1"
        capacity="0.1uF"
        footprint="0603"
        voltageRating="50V"
      />
      <capacitor
        name="C2"
        capacity="10uF"
        footprint="0805"
        voltageRating="50V"
      />
      <capacitor
        name="C10"
        capacity="4.7uF"
        footprint="0603"
        voltageRating="10V"
      />
      <capacitor
        name="C11"
        capacity="0.1uF"
        footprint="0402"
        voltageRating="10V"
      />
      <capacitor
        name="C12"
        capacity="1uF"
        footprint="0402"
        voltageRating="10V"
      />

      {/* Configuration and Host Interface Pull-up/down Resistors */}
      <resistor name="R1" resistance="10k" footprint="0402" />{" "}
      {/* nCS pull-up to VIO */}
      <resistor name="R2" resistance="10k" footprint="0402" />{" "}
      {/* RX/MOSI pull-up to VIO */}
      <resistor name="R3" resistance="10k" footprint="0402" />{" "}
      {/* SCLK pull-down to GND */}
      {/* Daisy Chain Differential Termination (Pin Side) */}
      <resistor name="R4" resistance="49.9" footprint="0402" />
      <resistor name="R5" resistance="49.9" footprint="0402" />
      <resistor name="R6" resistance="49.9" footprint="0402" />
      <resistor name="R7" resistance="49.9" footprint="0402" />

      {/* Main Power and Ground Nets */}
      <net name="GND" />
      <net name="BAT" />
      <net name="VIO" />
      <net name="CVDD" />
      <net name="DVDD" />

      {/* Power Connectivity */}
      <trace from=".U1 > BAT" to="net.BAT" />
      <trace from=".U1 > VIO" to="net.VIO" />
      <trace from=".U1 > GND" to="net.GND" />
      <trace from=".U1 > CVDD" to="net.CVDD" />
      <trace from=".U1 > DVDD" to="net.DVDD" />

      {/* Decoupling Connectivity */}
      <trace from=".C1 > pin1" to="net.BAT" />
      <trace from=".C1 > pin2" to="net.GND" />
      <trace from=".C2 > pin1" to="net.BAT" />
      <trace from=".C2 > pin2" to="net.GND" />
      <trace from=".C10 > pin1" to="net.CVDD" />
      <trace from=".C10 > pin2" to="net.GND" />
      <trace from=".C11 > pin1" to="net.VIO" />
      <trace from=".C11 > pin2" to="net.GND" />
      <trace from=".C12 > pin1" to="net.DVDD" />
      <trace from=".C12 > pin2" to="net.GND" />

      {/* Host Interface Connectivity (SPI Mode Configuration) */}
      <trace from=".U1 > SCLK" to=".R3 > pin1" />
      <trace from=".R3 > pin2" to="net.GND" />

      <trace from=".U1 > nCS" to=".R1 > pin1" />
      <trace from=".R1 > pin2" to="net.VIO" />

      <trace from=".U1 > pin4" to=".R2 > pin1" /> {/* RX/MOSI */}
      <trace from=".R2 > pin2" to="net.VIO" />

      {/* COMH Daisy Chain Signal Path */}
      {/* Termination resistors with center-tap to CVDD */}
      <trace from=".U1 > COMHP" to=".R4 > pin1" />
      <trace from=".R4 > pin2" to=".R5 > pin1" />
      <trace from=".R5 > pin2" to=".U1 > COMHN" />
      <trace from=".R4 > pin2" to="net.CVDD" />

      {/* Transformer coupling for COMH */}
      <trace from=".U1 > COMHP" to=".T1 > pin16" />
      <trace from=".U1 > COMHN" to=".T1 > pin14" />
      <trace from=".T1 > pin15" to="net.CVDD" />

      <trace from=".T1 > pin1" to=".L1 > pin1" />
      <trace from=".T1 > pin3" to=".L1 > pin2" />

      {/* COML Daisy Chain Signal Path */}
      {/* Termination resistors with center-tap to CVDD */}
      <trace from=".U1 > COMLP" to=".R6 > pin1" />
      <trace from=".R6 > pin2" to=".R7 > pin1" />
      <trace from=".R7 > pin2" to=".U1 > COMLN" />
      <trace from=".R6 > pin2" to="net.CVDD" />

      {/* Transformer coupling for COML */}
      <trace from=".U1 > COMLP" to=".T2 > pin16" />
      <trace from=".U1 > COMLN" to=".T2 > pin14" />
      <trace from=".T2 > pin15" to="net.CVDD" />

      <trace from=".T2 > pin1" to=".L2 > pin1" />
      <trace from=".T2 > pin3" to=".L2 > pin2" />

      {/* System Level Port Mappings (from Module Boundary) */}
      {/* Daisy Chain Interface (Hot Side) */}
      <net name="P1_1_P" /> <trace from=".L1 > pin4" to="net.P1_1_P" />
      <net name="P1_1_N" /> <trace from=".L1 > pin3" to="net.P1_1_N" />
      <net name="P1_2_P" /> <trace from=".L2 > pin4" to="net.P1_2_P" />
      <net name="P1_2_N" /> <trace from=".L2 > pin3" to="net.P1_2_N" />
      {/* P1.3 is net.CVDD */}

      {/* Host & Power Interface (Cold Side) */}
      <net name="P2_4_SCLK" /> <trace from=".U1 > SCLK" to="net.P2_4_SCLK" />
      <net name="P2_5_nCS" /> <trace from=".U1 > nCS" to="net.P2_5_nCS" />
      <net name="P2_6_MOSI" /> <trace from=".U1 > pin4" to="net.P2_6_MOSI" />
      <net name="P2_7_MISO" /> <trace from=".U1 > pin5" to="net.P2_7_MISO" />
      <net name="P2_8_nUART_SPI" /> <trace from=".U1 > pin8" to="net.P2_8_nUART_SPI" />
      <net name="P2_9_NFAULT" /> <trace from=".U1 > NFAULT" to="net.P2_9_NFAULT" />
      <net name="P2_10_INH" /> <trace from=".U1 > INH" to="net.P2_10_INH" />
      {/* P2.1, P2.2, P2.3, P2.11 are net.BAT, net.VIO, net.GND, net.DVDD respectively */}
    </board>
  )
}

export default CommunicationBridge
