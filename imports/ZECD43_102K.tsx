import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const ZECD43_102K = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C41408560"
  ]
}}
      manufacturerPartNumber="ZECD43_102K"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="1.625092mm" width="4.1999916mm" height="1.7500092mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="0mm" pcbY="-1.625092mm" width="4.1999916mm" height="1.7500092mm" shape="rect" />
<silkscreenpath route={[{"x":2.158999999999992,"y":-0.5188458000000082},{"x":2.158999999999992,"y":0.5188712000000351}]} />
<silkscreenpath route={[{"x":-2.1590000000001055,"y":0.5188458000000082},{"x":-2.1590000000001055,"y":-0.5188712000000351}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="3.4892mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-2.4090000000001055,"y":2.7392000000000962},{"x":2.408999999999992,"y":2.7392000000000962},{"x":2.408999999999992,"y":-2.7645999999998594},{"x":-2.4090000000001055,"y":-2.7645999999998594},{"x":-2.4090000000001055,"y":2.7392000000000962}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C41408560.obj?uuid=b8f6c44bfe4343f08aee21363cd397f7",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C41408560.step?uuid=b8f6c44bfe4343f08aee21363cd397f7",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0, y: -0.0009397999999298801, z: -0.01 },
      }}
      {...props}
    />
  )
}