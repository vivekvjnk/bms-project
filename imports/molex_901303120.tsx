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

export const Molex_901303120 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      manufacturerPartNumber="901303120"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="1.6002mm" holeDiameter="1.0922mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="0mm" pcbY="-2.54mm" outerDiameter="1.6002mm" holeDiameter="1.0922mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="2.54mm" pcbY="0mm" outerDiameter="1.6002mm" holeDiameter="1.0922mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="2.54mm" pcbY="-2.54mm" outerDiameter="1.6002mm" holeDiameter="1.0922mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="5.08mm" pcbY="0mm" outerDiameter="1.6002mm" holeDiameter="1.0922mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="5.08mm" pcbY="-2.54mm" outerDiameter="1.6002mm" holeDiameter="1.0922mm" shape="circle" />
<platedhole  portHints={["pin7"]} pcbX="7.62mm" pcbY="0mm" outerDiameter="1.6002mm" holeDiameter="1.0922mm" shape="circle" />
<platedhole  portHints={["pin8"]} pcbX="7.62mm" pcbY="-2.54mm" outerDiameter="1.6002mm" holeDiameter="1.0922mm" shape="circle" />
<platedhole  portHints={["pin9"]} pcbX="10.16mm" pcbY="0mm" outerDiameter="1.6002mm" holeDiameter="1.0922mm" shape="circle" />
<platedhole  portHints={["pin10"]} pcbX="10.16mm" pcbY="-2.54mm" outerDiameter="1.6002mm" holeDiameter="1.0922mm" shape="circle" />
<platedhole  portHints={["pin11"]} pcbX="12.7mm" pcbY="0mm" outerDiameter="1.6002mm" holeDiameter="1.0922mm" shape="circle" />
<platedhole  portHints={["pin12"]} pcbX="12.7mm" pcbY="-2.54mm" outerDiameter="1.6002mm" holeDiameter="1.0922mm" shape="circle" />
<platedhole  portHints={["pin13"]} pcbX="15.24mm" pcbY="0mm" outerDiameter="1.6002mm" holeDiameter="1.0922mm" shape="circle" />
<platedhole  portHints={["pin14"]} pcbX="15.24mm" pcbY="-2.54mm" outerDiameter="1.6002mm" holeDiameter="1.0922mm" shape="circle" />
<platedhole  portHints={["pin15"]} pcbX="17.78mm" pcbY="0mm" outerDiameter="1.6002mm" holeDiameter="1.0922mm" shape="circle" />
<platedhole  portHints={["pin16"]} pcbX="17.78mm" pcbY="-2.54mm" outerDiameter="1.6002mm" holeDiameter="1.0922mm" shape="circle" />
<platedhole  portHints={["pin17"]} pcbX="20.32mm" pcbY="0mm" outerDiameter="1.6002mm" holeDiameter="1.0922mm" shape="circle" />
<platedhole  portHints={["pin18"]} pcbX="20.32mm" pcbY="-2.54mm" outerDiameter="1.6002mm" holeDiameter="1.0922mm" shape="circle" />
<platedhole  portHints={["pin19"]} pcbX="22.86mm" pcbY="0mm" outerDiameter="1.6002mm" holeDiameter="1.0922mm" shape="circle" />
<platedhole  portHints={["pin20"]} pcbX="22.86mm" pcbY="-2.54mm" outerDiameter="1.6002mm" holeDiameter="1.0922mm" shape="circle" />
<silkscreenpath route={[{"x":-2.5654,"y":-13.208},{"x":25.4254,"y":-13.208}]} />
<silkscreenpath route={[{"x":25.4254,"y":-13.208},{"x":25.4254,"y":-2.0574}]} />
<silkscreenpath route={[{"x":25.4254,"y":-2.0574},{"x":23.884902,"y":-2.0574}]} />
<silkscreenpath route={[{"x":-2.5654,"y":-2.0574},{"x":-2.5654,"y":-13.208}]} />
<silkscreenpath route={[{"x":-1.024902,"y":-2.0574},{"x":-2.5654,"y":-2.0574}]} />
<silkscreenpath route={[{"x":1.515098,"y":-2.0574},{"x":1.024902,"y":-2.0574}]} />
<silkscreenpath route={[{"x":4.055098,"y":-2.0574},{"x":3.564902,"y":-2.0574}]} />
<silkscreenpath route={[{"x":6.595098,"y":-2.0574},{"x":6.104902,"y":-2.0574}]} />
<silkscreenpath route={[{"x":9.135098,"y":-2.0574},{"x":8.644902,"y":-2.0574}]} />
<silkscreenpath route={[{"x":11.675098,"y":-2.0574},{"x":11.184902,"y":-2.0574}]} />
<silkscreenpath route={[{"x":14.215098,"y":-2.0574},{"x":13.724902,"y":-2.0574}]} />
<silkscreenpath route={[{"x":16.755098,"y":-2.0574},{"x":16.264902,"y":-2.0574}]} />
<silkscreenpath route={[{"x":19.295098,"y":-2.0574},{"x":18.804902,"y":-2.0574}]} />
<silkscreenpath route={[{"x":21.835098,"y":-2.0574},{"x":21.344902,"y":-2.0574}]} />
<silkscreenpath route={[{"x":-2.4384,"y":-13.081},{"x":25.2984,"y":-13.081}]} />
<silkscreenpath route={[{"x":25.2984,"y":-13.081},{"x":25.2984,"y":-2.1844}]} />
<silkscreenpath route={[{"x":25.2984,"y":-2.1844},{"x":-2.4384,"y":-2.1844}]} />
<silkscreenpath route={[{"x":-2.4384,"y":-2.1844},{"x":-2.4384,"y":-13.081}]} />
<silkscreentext pcbX={11.43} pcbY={-1.27} anchorAlignment="center" fontSize={1} text="{NAME}" />
<courtyardoutline outline={[{"x":-2.6924,"y":1.0541},{"x":-2.6924,"y":-13.335},{"x":25.5524,"y":-13.335},{"x":25.5524,"y":1.0541}]} />
      </footprint>}
      {...props}
    />
  )
}