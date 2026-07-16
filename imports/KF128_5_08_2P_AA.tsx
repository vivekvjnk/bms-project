import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const KF128_5_08_2P_AA = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C474952"
  ]
}}
      manufacturerPartNumber="KF128_5_08_2P_AA"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-2.54mm" pcbY="0mm" outerDiameter="2.3999952mm" holeDiameter="1.5999968mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="2.54mm" pcbY="0mm" outerDiameter="2.3999952mm" holeDiameter="1.5999968mm" shape="circle" />
<silkscreenpath route={[{"x":5.079999999999927,"y":-3.893820000000005},{"x":5.679440000000113,"y":-3.6118799999999283}]} />
<silkscreenpath route={[{"x":5.079999999999927,"y":-4.33578},{"x":5.679440000000113,"y":-4.612639999999828}]} />
<silkscreenpath route={[{"x":5.679440000000113,"y":2.588260000000105},{"x":5.079999999999927,"y":2.870200000000068}]} />
<silkscreenpath route={[{"x":5.679440000000113,"y":3.5864799999999377},{"x":5.079999999999927,"y":3.3070800000000418}]} />
<silkscreenpath route={[{"x":5.679998800000021,"y":-3.61238800000001},{"x":5.679998800000021,"y":-4.612386000000015}]} />
<silkscreenpath route={[{"x":5.679998800000021,"y":3.5876230000001215},{"x":5.679998800000021,"y":2.5876250000000027}]} />
<silkscreenpath route={[{"x":5.079999999999927,"y":5.399989199999936},{"x":5.079999999999927,"y":-5.2999893999999586}]} />
<silkscreenpath route={[{"x":-5.079974600000014,"y":5.399989199999936},{"x":5.079999999999927,"y":5.399989199999936}]} />
<silkscreenpath route={[{"x":-5.079974600000014,"y":-5.2999893999999586},{"x":-5.079974600000014,"y":5.399989199999936}]} />
<silkscreenpath route={[{"x":5.079999999999927,"y":-5.2999893999999586},{"x":-5.079974600000014,"y":-5.2999893999999586}]} />
<silkscreentext text="{NAME}" pcbX="0.2921mm" pcbY="6.4102mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.355399999999918,"y":5.660200000000145},{"x":5.939599999999928,"y":5.660200000000145},{"x":5.939599999999928,"y":-5.558599999999956},{"x":-5.355399999999918,"y":-5.558599999999956},{"x":-5.355399999999918,"y":5.660200000000145}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C474952.obj?uuid=be36e72b75ac4dee8d6e181eb7e8d784",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C474952.step?uuid=be36e72b75ac4dee8d6e181eb7e8d784",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0.0000621000000036176, y: -0.01501149999994622, z: -0.000006999999999646178 },
      }}
      {...props}
    />
  )
}