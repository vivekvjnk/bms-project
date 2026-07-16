import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"]
} as const

export const ZX_XH2_54_4PZZ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C7429634"
  ]
}}
      manufacturerPartNumber="ZX_XH2_54_4PZZ"
      footprint={<footprint>
        <platedhole  portHints={["pin4"]} pcbX="3.750056mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="1.249934mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-1.249934mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="-3.750056mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.1000232mm" shape="circle" />
<silkscreenpath route={[{"x":4.064000000000078,"y":-2.2859999999999445},{"x":4.064000000000078,"y":-1.524000000000001},{"x":5.461000000000013,"y":-1.524000000000001},{"x":5.461000000000013,"y":2.7939999999999827},{"x":-5.20699999999988,"y":2.7939999999999827},{"x":-5.20699999999988,"y":-1.524000000000001},{"x":-4.190999999999917,"y":-1.524000000000001},{"x":-4.190999999999917,"y":-2.2859999999999445},{"x":-4.190999999999917,"y":-2.4130000000001246}]} />
<silkscreenpath route={[{"x":-2.5399999999999636,"y":-2.4130000000001246},{"x":-2.5399999999999636,"y":-1.524000000000001},{"x":2.5399999999999636,"y":-1.524000000000001},{"x":2.5399999999999636,"y":-2.4130000000001246}]} />
<silkscreentext text="{NAME}" pcbX="-0.028956mm" pcbY="4.556mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-6.54005600000005,"y":3.8059999999999263},{"x":6.482144000000062,"y":3.8059999999999263},{"x":6.482144000000062,"y":-2.6884000000000015},{"x":-6.54005600000005,"y":-2.6884000000000015},{"x":-6.54005600000005,"y":3.8059999999999263}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7429634.obj?uuid=dfb6c90a881649749adf7c9a695c8112",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7429634.step?uuid=dfb6c90a881649749adf7c9a695c8112",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 3.749987300000157, y: 0, z: -0.000005999999999950489 },
      }}
      {...props}
    />
  )
}