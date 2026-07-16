import type { DiodeProps } from "@tscircuit/props"

export const MMSZ4707T1G = (props: DiodeProps) => {
  const { name = "D1", ...restProps } = props

  return (
    <diode
      name={name}
      supplierPartNumbers={{
  "jlcpcb": [
    "C36797"
  ]
}}
      manufacturerPartNumber="MMSZ4707T1G"
      footprint={<footprint>
        <smtpad portHints={["pin2"]} pcbX="1.692402mm" pcbY="0mm" width="0.9500108mm" height="1.1500104mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-1.692402mm" pcbY="0mm" width="0.9500108mm" height="1.1500104mm" shape="rect" />
<silkscreenpath route={[{"x":-1.5800070000000233,"y":-0.7551419999998643},{"x":-1.4061693999999534,"y":-0.7551419999998643}]} />
<silkscreenpath route={[{"x":-1.5800070000000233,"y":0.755141999999978},{"x":-1.4061693999999534,"y":0.755141999999978}]} />
<silkscreenpath route={[{"x":-1.5800070000000233,"y":0.755141999999978},{"x":-1.5800070000000233,"y":0.8661908000000267},{"x":-1.4061693999999534,"y":0.8661908000000267}]} />
<silkscreenpath route={[{"x":-1.4061693999999534,"y":-0.866190799999913},{"x":-1.5800070000000233,"y":-0.866190799999913},{"x":-1.5800070000000233,"y":-0.7551419999998643}]} />
<silkscreenpath route={[{"x":-1.4061693999999534,"y":-0.7551419999998643},{"x":-1.4061693999999534,"y":-0.866190799999913}]} />
<silkscreenpath route={[{"x":-1.4061693999999534,"y":0.8661908000000267},{"x":-1.4061693999999534,"y":0.755141999999978}]} />
<silkscreenpath route={[{"x":-0.8271256000000449,"y":0.8661908000000267},{"x":-0.8271256000000449,"y":-0.866190799999913}]} />
<silkscreenpath route={[{"x":-0.9700006000000485,"y":0.8661908000000267},{"x":-0.9700006000000485,"y":-0.866190799999913}]} />
<silkscreenpath route={[{"x":-1.4061693999999534,"y":0.8661908000000267},{"x":1.4061693999999534,"y":0.8661908000000267}]} />
<silkscreenpath route={[{"x":1.4061693999999534,"y":0.8661908000000267},{"x":1.4061693999999534,"y":0.6981951999998728}]} />
<silkscreenpath route={[{"x":-1.4061693999999534,"y":-0.866190799999913},{"x":1.4061693999999534,"y":-0.866190799999913}]} />
<silkscreenpath route={[{"x":1.4061693999999534,"y":-0.866190799999913},{"x":1.4061693999999534,"y":-0.6981951999999865}]} />
<silkscreentext text="{NAME}" pcbX="0.0127mm" pcbY="1.889mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-2.4090000000001055,"y":1.1390000000001237},{"x":2.4343999999999824,"y":1.1390000000001237},{"x":2.4343999999999824,"y":-1.1897999999998774},{"x":-2.4090000000001055,"y":-1.1897999999998774},{"x":-2.4090000000001055,"y":1.1390000000001237}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C36797.obj?uuid=ffe28a36cfa04cde86eca0e275be7a76",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C36797.step?uuid=ffe28a36cfa04cde86eca0e275be7a76",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.55 },
      }}
      {...restProps}
    />
  )
}