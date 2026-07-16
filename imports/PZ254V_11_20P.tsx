import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["pin12"],
  pin13: ["pin13"],
  pin14: ["pin14"],
  pin15: ["pin15"],
  pin16: ["pin16"],
  pin17: ["pin17"],
  pin18: ["pin18"],
  pin19: ["pin19"],
  pin20: ["pin20"]
} as const

export const PZ254V_11_20P = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C22465880"
  ]
}}
      manufacturerPartNumber="PZ254V_11_20P"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-24.13mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0499852mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-21.59mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0499852mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="-19.05mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0499852mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="-16.51mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0499852mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="-13.97mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0499852mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="-11.43mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0499852mm" shape="circle" />
<platedhole  portHints={["pin7"]} pcbX="-8.89mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0499852mm" shape="circle" />
<platedhole  portHints={["pin8"]} pcbX="-6.35mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0499852mm" shape="circle" />
<platedhole  portHints={["pin9"]} pcbX="-3.81mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0499852mm" shape="circle" />
<platedhole  portHints={["pin10"]} pcbX="-1.27mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0499852mm" shape="circle" />
<platedhole  portHints={["pin11"]} pcbX="1.27mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0499852mm" shape="circle" />
<platedhole  portHints={["pin12"]} pcbX="3.81mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0499852mm" shape="circle" />
<platedhole  portHints={["pin13"]} pcbX="6.35mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0499852mm" shape="circle" />
<platedhole  portHints={["pin14"]} pcbX="8.89mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0499852mm" shape="circle" />
<platedhole  portHints={["pin15"]} pcbX="11.43mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0499852mm" shape="circle" />
<platedhole  portHints={["pin16"]} pcbX="13.97mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0499852mm" shape="circle" />
<platedhole  portHints={["pin17"]} pcbX="16.51mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0499852mm" shape="circle" />
<platedhole  portHints={["pin18"]} pcbX="19.05mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0499852mm" shape="circle" />
<platedhole  portHints={["pin19"]} pcbX="21.59mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0499852mm" shape="circle" />
<platedhole  portHints={["pin20"]} pcbX="24.13mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0499852mm" shape="circle" />
<silkscreentext text="{NAME}" pcbX="-0.0127mm" pcbY="2.27mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-25.929399999999987,"y":1.5199999999999818},{"x":25.903999999999996,"y":1.5199999999999818},{"x":25.903999999999996,"y":-1.5453999999998587},{"x":-25.929399999999987,"y":-1.5453999999998587},{"x":-25.929399999999987,"y":1.5199999999999818}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C22465880.obj?uuid=cafd97c0498e43a5aadb552af8644cb3",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C22465880.step?uuid=cafd97c0498e43a5aadb552af8644cb3",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.00005050000000039745, y: 0.000012699999842880061, z: -0.000005999999999950489 },
      }}
      {...props}
    />
  )
}