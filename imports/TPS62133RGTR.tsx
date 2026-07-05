import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["SW3"],
  pin2: ["SW2"],
  pin3: ["SW1"],
  pin4: ["PG"],
  pin5: ["FB"],
  pin6: ["AGND"],
  pin7: ["FSW"],
  pin8: ["DEF"],
  pin9: ["pin9"],
  pin10: ["AVIN"],
  pin11: ["PVIN2"],
  pin12: ["PVIN1"],
  pin13: ["EN"],
  pin14: ["VOS"],
  pin15: ["PGND2"],
  pin16: ["PGND1"],
  pin17: ["EP"]
} as const

export const TPS62133RGTR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C73973"
  ]
}}
      manufacturerPartNumber="TPS62133RGTR"
      footprint={<footprint>
        <smtpad portHints={["pin17"]} pcbX="0mm" pcbY="-0mm" width="1.5999968mm" height="1.5999968mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-0.7493mm" pcbY="1.39954mm" width="0.2800096mm" height="0.7999984mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin15"]} pcbX="-0.24892mm" pcbY="1.39954mm" width="0.2800096mm" height="0.7999984mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin14"]} pcbX="0.24892mm" pcbY="1.39954mm" width="0.2800096mm" height="0.7999984mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin13"]} pcbX="0.7493mm" pcbY="1.39954mm" width="0.2800096mm" height="0.7999984mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin12"]} pcbX="1.39954mm" pcbY="0.7493mm" width="0.7999984mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin11"]} pcbX="1.39954mm" pcbY="0.24892mm" width="0.7999984mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin10"]} pcbX="1.39954mm" pcbY="-0.24892mm" width="0.7999984mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin9"]} pcbX="1.39954mm" pcbY="-0.7493mm" width="0.7999984mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin8"]} pcbX="0.7493mm" pcbY="-1.39954mm" width="0.2800096mm" height="0.7999984mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin7"]} pcbX="0.24892mm" pcbY="-1.39954mm" width="0.2800096mm" height="0.7999984mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin6"]} pcbX="-0.24892mm" pcbY="-1.39954mm" width="0.2800096mm" height="0.7999984mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="-0.7493mm" pcbY="-1.39954mm" width="0.2800096mm" height="0.7999984mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin4"]} pcbX="-1.39954mm" pcbY="-0.7493mm" width="0.7999984mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin3"]} pcbX="-1.39954mm" pcbY="-0.24892mm" width="0.7999984mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin2"]} pcbX="-1.39954mm" pcbY="0.24892mm" width="0.7999984mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin1"]} pcbX="-1.39954mm" pcbY="0.7493mm" width="0.7999984mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<silkscreenpath route={[{"x":1.044219400000003,"y":-1.4998191999999904},{"x":1.499971600000002,"y":-1.4998191999999904}]} />
<silkscreenpath route={[{"x":-1.5000223999999989,"y":-1.4998191999999904},{"x":-1.0442702000000068,"y":-1.4998191999999904}]} />
<silkscreenpath route={[{"x":-1.0442702000000068,"y":1.5001748000000106},{"x":-1.5000223999999989,"y":1.5001748000000106}]} />
<silkscreenpath route={[{"x":1.499971600000002,"y":1.5001748000000106},{"x":1.044219400000003,"y":1.5001748000000106}]} />
<silkscreenpath route={[{"x":-1.5000223999999989,"y":-1.0440669999999983},{"x":-1.5000223999999989,"y":-1.4998191999999904}]} />
<silkscreenpath route={[{"x":-1.5000223999999989,"y":1.5001748000000106},{"x":-1.5000223999999989,"y":1.0444226000000185}]} />
<silkscreenpath route={[{"x":1.499971600000002,"y":-1.0440669999999983},{"x":1.499971600000002,"y":-1.4998191999999904}]} />
<silkscreenpath route={[{"x":1.499971600000002,"y":1.5001748000000106},{"x":1.499971600000002,"y":1.0444226000000185}]} />
<silkscreenpath route={[{"x":-1.7400778000000088,"y":1.2514326000000153},{"x":-1.720143510835939,"y":1.2501626000000101},{"x":-1.7400778000000017,"y":1.248892600000005}]} />
<silkscreentext text="{NAME}" pcbX="-0.032512mm" pcbY="2.810512mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-2.111312000000005,"y":2.060512000000017},{"x":2.046287999999997,"y":2.060512000000017},{"x":2.046287999999997,"y":-2.04628799999999},{"x":-2.111312000000005,"y":-2.04628799999999},{"x":-2.111312000000005,"y":2.060512000000017}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C73973.obj?uuid=3393915cc74240b786c7d7578739d4d7",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C73973.step?uuid=3393915cc74240b786c7d7578739d4d7",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.050114200000002995, y: -0.0001015999999935957, z: -0.02 },
      }}
      {...props}
    />
  )
}