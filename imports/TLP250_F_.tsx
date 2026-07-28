import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["NC1"],
  pin2: ["AN"],
  pin3: ["CAT"],
  pin4: ["NC2"],
  pin5: ["GND"],
  pin6: ["VO2"],
  pin7: ["VO1"],
  pin8: ["VCC"]
} as const

export const TLP250_F_ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C4078"
  ]
}}
      manufacturerPartNumber="TLP250_F_"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-3.81mm" pcbY="-3.81mm" holeWidth="0.7999984mm" holeHeight="1.1649964mm" outerWidth="1.459992mm" outerHeight="1.82499mm" shape="pill" />
<platedhole  portHints={["pin2"]} pcbX="-1.27mm" pcbY="-3.81mm" holeWidth="0.7999984mm" holeHeight="1.1649964mm" outerWidth="1.459992mm" outerHeight="1.82499mm" shape="pill" />
<platedhole  portHints={["pin3"]} pcbX="1.27mm" pcbY="-3.81mm" holeWidth="0.7999984mm" holeHeight="1.1649964mm" outerWidth="1.459992mm" outerHeight="1.82499mm" shape="pill" />
<platedhole  portHints={["pin4"]} pcbX="3.81mm" pcbY="-3.81mm" holeWidth="0.7999984mm" holeHeight="1.1649964mm" outerWidth="1.459992mm" outerHeight="1.82499mm" shape="pill" />
<platedhole  portHints={["pin8"]} pcbX="-3.81mm" pcbY="3.81mm" holeWidth="0.7999984mm" holeHeight="1.1649964mm" outerWidth="1.459992mm" outerHeight="1.82499mm" shape="pill" />
<platedhole  portHints={["pin7"]} pcbX="-1.27mm" pcbY="3.81mm" holeWidth="0.7999984mm" holeHeight="1.1649964mm" outerWidth="1.459992mm" outerHeight="1.82499mm" shape="pill" />
<platedhole  portHints={["pin6"]} pcbX="1.27mm" pcbY="3.81mm" holeWidth="0.7999984mm" holeHeight="1.1649964mm" outerWidth="1.459992mm" outerHeight="1.82499mm" shape="pill" />
<platedhole  portHints={["pin5"]} pcbX="3.81mm" pcbY="3.81mm" holeWidth="0.7999984mm" holeHeight="1.1649964mm" outerWidth="1.459992mm" outerHeight="1.82499mm" shape="pill" />
<silkscreenpath route={[{"x":-4.871212000000014,"y":-2.668904999999995},{"x":-4.871212000000014,"y":2.668905000000109},{"x":4.871212000000014,"y":2.668905000000109},{"x":4.871212000000014,"y":-2.668904999999995},{"x":-4.871212000000014,"y":-2.668904999999995}]} />
<silkscreenpath route={[{"x":-4.871212000000014,"y":0.7937499999999318},{"x":-5.116494239285089,"y":0.7549011098093388},{"x":-5.337766544007195,"y":0.6421572392852113},{"x":-5.513369239285112,"y":0.466554544007181},{"x":-5.626113109809353,"y":0.24528223928507487},{"x":-5.664961999999946,"y":0},{"x":-5.626113109809353,"y":-0.24528223928518855},{"x":-5.513369239285112,"y":-0.4665545440070673},{"x":-5.337766544007195,"y":-0.6421572392850976},{"x":-5.116494239285089,"y":-0.7549011098092251},{"x":-4.871212000000014,"y":-0.7937500000000455}]} />
<silkscreenpath route={[{"x":-4.802885999999944,"y":-3.810000000000059},{"x":-4.808001010512498,"y":-3.8488523621365403},{"x":-4.822997462536364,"y":-3.8850569999999607},{"x":-4.8468533726489795,"y":-3.9161466273509404},{"x":-4.877942999999959,"y":-3.94000253746367},{"x":-4.91414763786338,"y":-3.9549989894874216},{"x":-4.953000000000088,"y":-3.960113999999976},{"x":-4.991852362136569,"y":-3.9549989894874216},{"x":-5.02805699999999,"y":-3.94000253746367},{"x":-5.059146627351083,"y":-3.9161466273509404},{"x":-5.083002537463699,"y":-3.8850569999999607},{"x":-5.097998989487451,"y":-3.8488523621365403},{"x":-5.103114000000005,"y":-3.810000000000059},{"x":-5.097998989487451,"y":-3.7711476378633506},{"x":-5.083002537463699,"y":-3.73494299999993},{"x":-5.059146627351083,"y":-3.7038533726489504},{"x":-5.02805699999999,"y":-3.6799974625363348},{"x":-4.991852362136569,"y":-3.6650010105124693},{"x":-4.953000000000088,"y":-3.659885999999915},{"x":-4.91414763786338,"y":-3.6650010105124693},{"x":-4.877942999999959,"y":-3.6799974625363348},{"x":-4.8468533726489795,"y":-3.7038533726489504},{"x":-4.822997462536364,"y":-3.73494299999993},{"x":-4.808001010512498,"y":-3.7711476378633506},{"x":-4.802885999999944,"y":-3.810000000000059}]} />
<silkscreentext text="{NAME}" pcbX="-0.1016mm" pcbY="5.2164mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.355399999999918,"y":4.4664000000000215},{"x":5.1521999999999935,"y":4.4664000000000215},{"x":5.1521999999999935,"y":-4.441000000000031},{"x":-5.355399999999918,"y":-4.441000000000031},{"x":-5.355399999999918,"y":4.4664000000000215}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C4078.obj?uuid=a700fc3b323e4d3fa3fa02a1b1cb3450",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C4078.step?uuid=a700fc3b323e4d3fa3fa02a1b1cb3450",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.000012700000070253736, z: -1.0500059999999998 },
      }}
      {...props}
    />
  )
}