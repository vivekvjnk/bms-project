import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["EN"],
  pin4: ["NC"],
  pin5: ["VOUT"]
} as const

export const TPTLV70012DDCR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2940624"
  ]
}}
      manufacturerPartNumber="TPTLV70012DDCR"
      footprint={<footprint>
        <smtpad portHints={["pin5"]} pcbX="-0.94996mm" pcbY="1.100074mm" width="0.5999988mm" height="0.999998mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.94996mm" pcbY="1.100074mm" width="0.5999988mm" height="0.999998mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-0.94996mm" pcbY="-1.100074mm" width="0.5999988mm" height="0.999998mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.94996mm" pcbY="-1.100074mm" width="0.5999988mm" height="0.999998mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="0mm" pcbY="-1.100074mm" width="0.5999988mm" height="0.999998mm" shape="rect" />
<silkscreenpath route={[{"x":-1.5240000000001146,"y":0.6984999999999673},{"x":-1.5240000000001146,"y":-0.6984999999999673}]} />
<silkscreenpath route={[{"x":1.3969999999999345,"y":0.4224020000000337},{"x":1.3969999999999345,"y":-0.4223765999998932}]} />
<silkscreenpath route={[{"x":-0.3810000000000855,"y":0.8890000000001237},{"x":0.3809999999999718,"y":0.8890000000001237}]} />
<silkscreentext text="{NAME}" pcbX="-0.0381mm" pcbY="2.6002mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-1.7740000000001146,"y":1.8502000000000862},{"x":1.6977999999999156,"y":1.8502000000000862},{"x":1.6977999999999156,"y":-2.1803999999999633},{"x":-1.7740000000001146,"y":-2.1803999999999633},{"x":-1.7740000000001146,"y":1.8502000000000862}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2940624.obj?uuid=de83a77687e64788a98e316d865b3813",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2940624.step?uuid=de83a77687e64788a98e316d865b3813",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.75 },
      }}
      {...props}
    />
  )
}