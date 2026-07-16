import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const PK0608_102MB = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C27237"
  ]
}}
      manufacturerPartNumber="PK0608_102MB"
      footprint={<footprint>
        <platedhole  portHints={["pin2"]} pcbX="1.249934mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="0.9500108mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="-1.249934mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="0.9500108mm" shape="circle" />
<silkscreenpath route={[{"x":3.5001200000001518,"y":0},{"x":3.3808563031109315,"y":-0.9058977161441817},{"x":3.0311928362940534,"y":-1.7500599999999622},{"x":2.47495858696675,"y":-2.474958586966636},{"x":1.7500599999999622,"y":-3.0311928362940534},{"x":0.9058977161441817,"y":-3.380856303110818},{"x":0,"y":-3.5001199999999244},{"x":-0.9058977161442954,"y":-3.380856303110818},{"x":-1.7500599999999622,"y":-3.0311928362940534},{"x":-2.474958586966636,"y":-2.474958586966636},{"x":-3.031192836294167,"y":-1.7500599999999622},{"x":-3.3808563031109315,"y":-0.9058977161441817},{"x":-3.500120000000038,"y":0},{"x":-3.3808563031109315,"y":0.9058977161442954},{"x":-3.031192836294167,"y":1.7500599999999622},{"x":-2.474958586966636,"y":2.474958586966636},{"x":-1.7500599999999622,"y":3.0311928362939398},{"x":-0.9058977161442954,"y":3.3808563031109315},{"x":0,"y":3.500120000000038},{"x":0.9058977161441817,"y":3.3808563031109315},{"x":1.7500599999999622,"y":3.0311928362940534},{"x":2.47495858696675,"y":2.474958586966636},{"x":3.0311928362940534,"y":1.7500599999999622},{"x":3.3808563031109315,"y":0.9058977161442954},{"x":3.5001200000001518,"y":0}]} />
<silkscreentext text="{NAME}" pcbX="-0.002794mm" pcbY="4.5052mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-3.7706940000000486,"y":3.7552000000001726},{"x":3.76510600000006,"y":3.7552000000001726},{"x":3.76510600000006,"y":-3.780599999999936},{"x":-3.7706940000000486,"y":-3.780599999999936},{"x":-3.7706940000000486,"y":3.7552000000001726}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C27237.obj?uuid=bb94bf2e11f842838afc9659a301212c",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C27237.step?uuid=bb94bf2e11f842838afc9659a301212c",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.004487099999958888, y: 0, z: 0.7199930000000005 },
      }}
      {...props}
    />
  )
}