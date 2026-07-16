import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"]
} as const

export const KF128_5_08_3P_AA = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C474953"
  ]
}}
      manufacturerPartNumber="KF128_5_08_3P_AA"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-5.08mm" pcbY="0mm" outerDiameter="2.3999952mm" holeDiameter="1.3999972mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="0mm" pcbY="0mm" outerDiameter="2.3999952mm" holeDiameter="1.3999972mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="5.08mm" pcbY="0mm" outerDiameter="2.3999952mm" holeDiameter="1.3999972mm" shape="circle" />
<silkscreenpath route={[{"x":7.620000000000118,"y":5.399963800000023},{"x":7.620000000000118,"y":-5.300014799999985}]} />
<silkscreenpath route={[{"x":7.620076200000085,"y":-4.450435599999992},{"x":8.382076200000029,"y":-4.450435599999992},{"x":8.382076200000029,"y":-3.652774000000022},{"x":7.620076200000085,"y":-3.652774000000022}]} />
<silkscreenpath route={[{"x":7.620076200000085,"y":2.879928199999995},{"x":8.382076200000029,"y":2.879928199999995},{"x":8.382076200000029,"y":3.677564400000051},{"x":7.620076200000085,"y":3.677564400000051}]} />
<silkscreenpath route={[{"x":-7.619949200000065,"y":5.399963800000023},{"x":-7.619949200000065,"y":-5.299963999999932}]} />
<silkscreenpath route={[{"x":-7.6200000000000045,"y":5.399989199999936},{"x":7.620000000000118,"y":5.399989199999936}]} />
<silkscreenpath route={[{"x":-6.147231799999986,"y":-5.300014799999985},{"x":-6.147231799999986,"y":-3.330016199999932},{"x":-3.959936199999902,"y":-3.330016199999932},{"x":-3.959936199999902,"y":-5.300014799999985}]} />
<silkscreenpath route={[{"x":4.012717400000042,"y":-5.300014799999985},{"x":4.012717400000042,"y":-3.329990799999905},{"x":6.200013000000126,"y":-3.329990799999905},{"x":6.200013000000126,"y":-5.300014799999985}]} />
<silkscreenpath route={[{"x":-1.118031799999926,"y":-5.300116399999865},{"x":-1.118031799999926,"y":-3.3300669999998718},{"x":1.0692637999999306,"y":-3.3300669999998718},{"x":1.0692637999999306,"y":-5.300116399999865}]} />
<silkscreenpath route={[{"x":-7.6200000000000045,"y":-5.300014799999985},{"x":7.620000000000118,"y":-5.300014799999985}]} />
<silkscreenpath route={[{"x":-7.6200000000000045,"y":-2.072995600000013},{"x":7.620000000000118,"y":-2.072995600000013}]} />
<silkscreenpath route={[{"x":-7.6200000000000045,"y":2.5366472000000613},{"x":7.620000000000118,"y":2.5366472000000613}]} />
<silkscreentext text="{NAME}" pcbX="0.381mm" pcbY="6.4102mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-7.895399999999881,"y":5.660200000000145},{"x":8.657400000000052,"y":5.660200000000145},{"x":8.657400000000052,"y":-5.660199999999918},{"x":-7.895399999999881,"y":-5.660199999999918},{"x":-7.895399999999881,"y":5.660200000000145}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C474953.obj?uuid=a59d5fb687d24e4ba7224b88c27e08b3",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C474953.step?uuid=a59d5fb687d24e4ba7224b88c27e08b3",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0.0000621000000031735, y: 0, z: -0.000006999999999646178 },
      }}
      {...props}
    />
  )
}