import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["G"],
  pin2: ["D"],
  pin3: ["S"]
} as const

export const IPA65R400CE = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C501513"
  ]
}}
      manufacturerPartNumber="IPA65R400CE"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-2.065001mm" pcbY="0mm" outerDiameter="1.999996mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="3.014999mm" pcbY="0mm" holeWidth="1.1999976mm" holeHeight="1.1999976mm" outerWidth="1.999996mm" outerHeight="1.999996mm" shape="pill" />
<platedhole  portHints={["pin2"]} pcbX="0.474999mm" pcbY="0mm" holeWidth="1.1999976mm" holeHeight="1.1999976mm" outerWidth="1.999996mm" outerHeight="1.999996mm" shape="pill" />
<silkscreenpath route={[{"x":-3.2926083999999918,"y":-1.7399254000000184},{"x":5.674988600000006,"y":-1.7399254000000184}]} />
<silkscreenpath route={[{"x":-4.724990599999998,"y":-1.7399254000000184},{"x":-3.2926083999999918,"y":-1.7399254000000184}]} />
<silkscreenpath route={[{"x":5.674988600000006,"y":2.8600653999999963},{"x":-4.724990599999998,"y":2.8600653999999963}]} />
<silkscreenpath route={[{"x":5.674988600000006,"y":2.8600653999999963},{"x":5.674988600000006,"y":-1.7399254000000184}]} />
<silkscreenpath route={[{"x":-4.724990599999998,"y":1.5208504000000005},{"x":5.674988600000006,"y":1.5208504000000005}]} />
<silkscreenpath route={[{"x":-4.724990599999998,"y":2.8600653999999963},{"x":-4.724990599999998,"y":-1.7399254000000184}]} />
<silkscreenpath route={[{"x":-4.864995399999984,"y":-2.3099267999999995},{"x":-5.053131750304814,"y":-2.1702953755021355},{"x":-4.979600844868045,"y":-1.9478421737742906},{"x":-4.745309955131958,"y":-1.9478421737742906},{"x":-4.671779049695175,"y":-2.1702953755021355},{"x":-4.8599154000000055,"y":-2.3099267999999995}]} />
<silkscreentext text="{NAME}" pcbX="0.309899mm" pcbY="3.862072mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.312201000000002,"y":3.1120719999999977},{"x":5.931999000000005,"y":3.1120719999999977},{"x":5.931999000000005,"y":-2.9505279999999914},{"x":-5.312201000000002,"y":-2.9505279999999914},{"x":-5.312201000000002,"y":3.1120719999999977}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C501513.obj?uuid=3a6bd284f04947ca9d4988f63fad5ee2",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C501513.step?uuid=3a6bd284f04947ca9d4988f63fad5ee2",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.47499899999999684, y: -2.1879788999999934, z: -8.010005 },
      }}
      {...props}
    />
  )
}