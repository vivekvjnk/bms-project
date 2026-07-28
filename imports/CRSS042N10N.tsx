import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["G"],
  pin2: ["D"],
  pin3: ["S"]
} as const

export const CRSS042N10N = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C410926"
  ]
}}
      manufacturerPartNumber="CRSS042N10N"
      footprint={<footprint>
        <smtpad portHints={["pin2"]} pcbX="3.8874192mm" pcbY="0mm" width="8.3799934mm" height="10.700004mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-6.3254128mm" pcbY="-2.539746mm" width="3.5040062mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-6.3254128mm" pcbY="2.540254mm" width="3.5040062mm" height="1.499997mm" shape="rect" />
<silkscreenpath route={[{"x":-2.212568600000054,"y":3.0003750000000764},{"x":-4.112463200000093,"y":3.0003750000000764},{"x":-4.112463200000093,"y":2.1004022000001896},{"x":-2.212568600000054,"y":2.1004022000001896}]} />
<silkscreenpath route={[{"x":-1.5125192000001562,"y":-4.999634399999991},{"x":-2.212568600000054,"y":-4.999634399999991},{"x":-2.212568600000054,"y":5.0003710000000865},{"x":-1.5125192000001562,"y":5.0003710000000865}]} />
<silkscreenpath route={[{"x":-2.212568600000054,"y":-2.079625000000078},{"x":-4.112463200000093,"y":-2.079625000000078},{"x":-4.112463200000093,"y":-2.9795977999997376},{"x":-2.212568600000054,"y":-2.9795977999997376}]} />
<silkscreenpath route={[{"x":-3.1126938000002156,"y":3.8002210000000787},{"x":-2.9235187857839264,"y":3.6613035508059966},{"x":-2.9966125711033555,"y":3.4382731891017784},{"x":-3.231315028896688,"y":3.4382731891016647},{"x":-3.304408814216117,"y":3.661303550805883},{"x":-3.1152338000000555,"y":3.8002210000000787}]} />
<silkscreentext text="{NAME}" pcbX="-0.0013208mm" pcbY="6.359654mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-8.328520800000092,"y":5.609653999999978},{"x":8.325879199999804,"y":5.609653999999978},{"x":8.325879199999804,"y":-5.583746000000019},{"x":-8.328520800000092,"y":-5.583746000000019},{"x":-8.328520800000092,"y":5.609653999999978}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C410926.obj?uuid=a052344bf7ff4cd3acd0571b5809d84e",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C410926.step?uuid=a052344bf7ff4cd3acd0571b5809d84e",
        pcbRotationOffset: 270,
        modelOriginPosition: { x: 0.0003556000000344284, y: 7.50345310000021, z: 0 },
      }}
      {...props}
    />
  )
}