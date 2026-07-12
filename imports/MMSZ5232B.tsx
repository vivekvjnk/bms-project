import type { DiodeProps } from "@tscircuit/props"

export const MMSZ5232B = (props: DiodeProps) => {
  const { name = "D1", ...restProps } = props

  return (
    <diode
      name={name}
      schematicSymbol="diode_right"
      pinLabels={{
        pin1: ["cathode"],
        pin2: ["anode"]
      }}
      supplierPartNumbers={{
        "jlcpcb": [
          "C19077423"
        ]
      }}
      manufacturerPartNumber="MMSZ5232B"
      footprint={<footprint>
        <smtpad portHints={["pin2"]} pcbX="1.6350996mm" pcbY="0mm" width="0.9100058mm" height="1.2199874mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-1.6350996mm" pcbY="0mm" width="0.9100058mm" height="1.2199874mm" shape="rect" />
<silkscreenpath route={[{"x":-1.37619739999991,"y":0.9262109999999666},{"x":1.3761974000000237,"y":0.9262109999999666}]} />
<silkscreenpath route={[{"x":1.3761974000000237,"y":0.9262109999999666},{"x":1.3761974000000237,"y":0.6832091999999648}]} />
<silkscreenpath route={[{"x":-1.37619739999991,"y":-0.9262109999999666},{"x":1.3761974000000237,"y":-0.9262109999999666}]} />
<silkscreenpath route={[{"x":1.3761974000000237,"y":-0.9262109999999666},{"x":1.3761974000000237,"y":-0.6832091999999648}]} />
<silkscreenpath route={[{"x":-0.9668002000000797,"y":0.9262109999999666},{"x":-0.9668002000000797,"y":-0.9262109999999666}]} />
<silkscreentext text="{NAME}" pcbX="0.0127mm" pcbY="1.9906mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-2.3327999999999065,"y":1.2406000000000859},{"x":2.3582000000001244,"y":1.2406000000000859},{"x":2.3582000000001244,"y":-1.2659999999999627},{"x":-2.3327999999999065,"y":-1.2659999999999627},{"x":-2.3327999999999065,"y":1.2406000000000859}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C19077423.obj?uuid=4d7f235d12124480ae44c354a7fd93dd",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C19077423.step?uuid=4d7f235d12124480ae44c354a7fd93dd",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0.000012699999956566899, y: 0, z: 0.025856 },
      }}
      {...restProps}
    />
  )
}