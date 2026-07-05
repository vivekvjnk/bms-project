import type { DiodeProps } from "@tscircuit/props"

export const STTH1R06 = (props: DiodeProps) => {
  const { name = "D1", ...restProps } = props

  return (
    <diode
      name={name}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2971307"
  ]
}}
      manufacturerPartNumber="STTH1R06"
      footprint={<footprint>
        <platedhole  portHints={["pin1","anode"]} pcbX="4.350004mm" pcbY="0mm" outerDiameter="1.7999964mm" holeDiameter="1.0499852mm" shape="circle" />
<platedhole  portHints={["pin2","cathode"]} pcbX="-4.350004mm" pcbY="0mm" outerDiameter="1.7999964mm" holeDiameter="1.0499852mm" shape="circle" />
<silkscreenpath route={[{"x":-2.7940000000000964,"y":1.3999972000000298},{"x":-2.921000000000049,"y":1.3999972000000298}]} />
<silkscreenpath route={[{"x":-2.921000000000049,"y":-1.3970000000000482},{"x":-2.921000000000049,"y":1.3999972000000298}]} />
<silkscreenpath route={[{"x":-2.6670000000001437,"y":-1.3970000000000482},{"x":-2.921000000000049,"y":-1.3970000000000482}]} />
<silkscreenpath route={[{"x":-2.599994800000104,"y":1.3999972000000298},{"x":-2.7940000000000964,"y":1.3999972000000298},{"x":-2.7940000000000964,"y":-1.3970000000000482},{"x":-2.599994800000104,"y":-1.3970000000000482}]} />
<silkscreenpath route={[{"x":-2.599994800000104,"y":1.3999972000000298},{"x":2.5999947999998767,"y":1.3999972000000298}]} />
<silkscreenpath route={[{"x":2.5999947999998767,"y":1.3999972000000298},{"x":2.5999947999998767,"y":-1.3999972000000298}]} />
<silkscreenpath route={[{"x":-2.599994800000104,"y":-1.3999972000000298},{"x":2.5999947999998767,"y":-1.3999972000000298}]} />
<silkscreenpath route={[{"x":-2.599994800000104,"y":1.3999972000000298},{"x":-2.599994800000104,"y":-1.3999972000000298}]} />
<silkscreenpath route={[{"x":-1.640738400000032,"y":1.3999972000000298},{"x":-1.640738400000032,"y":-1.3999972000000298}]} />
<silkscreentext text="{NAME}" pcbX="-0.006096mm" pcbY="3.8448mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.551996000000145,"y":3.094799999999964},{"x":5.53980399999989,"y":3.094799999999964},{"x":5.53980399999989,"y":-1.6470000000000482},{"x":-5.551996000000145,"y":-1.6470000000000482},{"x":-5.551996000000145,"y":3.094799999999964}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2971307.obj?uuid=9400bd967692452e83b73efd6815f4a6",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2971307.step?uuid=9400bd967692452e83b73efd6815f4a6",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012700000070253736, y: 0, z: -0.001006999999999536 },
      }}
      {...restProps}
    />
  )
}