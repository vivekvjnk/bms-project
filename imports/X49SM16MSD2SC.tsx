import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["OSC1"],
  pin2: ["OSC2"]
} as const

export const X49SM16MSD2SC = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C12676"
  ]
}}
      manufacturerPartNumber="X49SM16MSD2SC"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-4.55295mm" pcbY="0mm" width="5.499989mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="4.55295mm" pcbY="0mm" width="5.499989mm" height="1.2999974mm" shape="rect" />
<silkscreenpath route={[{"x":5.699988600000211,"y":0.6624066000000539},{"x":5.7150000000001455,"y":2.4130000000001246},{"x":-5.714999999999918,"y":2.4130000000001246},{"x":-5.69998859999987,"y":0.6624066000000539}]} />
<silkscreenpath route={[{"x":-5.69998859999987,"y":-0.6624065999999402},{"x":-5.714999999999918,"y":-2.4129999999998972},{"x":5.7150000000001455,"y":-2.4129999999998972},{"x":5.699988600000211,"y":-0.6624065999999402}]} />
<silkscreenpath route={[{"x":5.699988600000211,"y":0.6624066000000539},{"x":5.7150000000001455,"y":2.4130000000001246},{"x":-5.714999999999918,"y":2.4130000000001246},{"x":-5.69998859999987,"y":0.6624066000000539}]} />
<silkscreenpath route={[{"x":-5.69998859999987,"y":-0.6624065999999402},{"x":-5.714999999999918,"y":-2.4129999999998972},{"x":5.7150000000001455,"y":-2.4129999999998972},{"x":5.699988600000211,"y":-0.6624065999999402}]} />
<silkscreentext text="{NAME}" pcbX="-0.010414mm" pcbY="3.4017478mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-7.562913999999864,"y":2.6517478000000665},{"x":7.542086000000154,"y":2.6517478000000665},{"x":7.542086000000154,"y":-2.699652199999832},{"x":-7.562913999999864,"y":-2.699652199999832},{"x":-7.562913999999864,"y":2.6517478000000665}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C12676.obj?uuid=f0978b2903244298b5438358622284f0",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C12676.step?uuid=f0978b2903244298b5438358622284f0",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012699999842880061, y: 0, z: -0.01 },
      }}
      {...props}
    />
  )
}