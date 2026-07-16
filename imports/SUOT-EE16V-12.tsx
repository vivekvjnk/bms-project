import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["PRI_1"],
  pin2: ["PRI_2"],
  pin3: ["PRI_3"],
  pin4: ["SEC_1"],
  pin5: ["SEC_2"],
  pin6: ["SEC_3"],
  pin7: ["AUX_1"],
  pin8: ["AUX_2"],
  pin9: ["PRI_4"],
  pin10: ["PRI_5"]
} as const

export const Transformer = (props: ChipProps<typeof pinLabels>) => (
  <chip
    pinLabels={pinLabels}
    footprint={<footprint>
        <platedhole  portHints={["pin3"]} pcbX="-1.35mm" pcbY="-6.1mm" outerDiameter="1.65mm" holeDiameter="1.1mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-4.05mm" pcbY="-6.1mm" outerDiameter="1.65mm" holeDiameter="1.1mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="1.35mm" pcbY="-6.1mm" outerDiameter="1.65mm" holeDiameter="1.1mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="4.05mm" pcbY="-6.1mm" outerDiameter="1.65mm" holeDiameter="1.1mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="6.75mm" pcbY="-6.1mm" outerDiameter="1.65mm" holeDiameter="1.1mm" shape="circle" />
<platedhole  portHints={["pin8"]} pcbX="1.75mm" pcbY="6.1mm" outerDiameter="1.65mm" holeDiameter="1.1mm" shape="circle" />
<platedhole  portHints={["pin7"]} pcbX="5.25mm" pcbY="6.1mm" outerDiameter="1.65mm" holeDiameter="1.1mm" shape="circle" />
<platedhole  portHints={["pin9"]} pcbX="-1.75mm" pcbY="6.1mm" outerDiameter="1.65mm" holeDiameter="1.1mm" shape="circle" />
<platedhole  portHints={["pin10"]} pcbX="-5.25mm" pcbY="6.1mm" outerDiameter="1.65mm" holeDiameter="1.1mm" shape="circle" />
<silkscreenpath route={[{"x":-9,"y":8.25},{"x":-9,"y":-8.25}]} />
<silkscreenpath route={[{"x":-9,"y":-8.25},{"x":9,"y":-8.25}]} />
<silkscreenpath route={[{"x":9,"y":-8.25},{"x":9,"y":8.25}]} />
<silkscreenpath route={[{"x":9,"y":8.25},{"x":-9,"y":8.25}]} />
<silkscreenpath route={[{"x":-9,"y":8.25},{"x":-9,"y":-8.25}]} />
<silkscreenpath route={[{"x":-9,"y":-8.25},{"x":9,"y":-8.25}]} />
<silkscreenpath route={[{"x":9,"y":-8.25},{"x":9,"y":8.25}]} />
<silkscreenpath route={[{"x":9,"y":8.25},{"x":-9,"y":8.25}]} />
<silkscreentext pcbX={-6.075} pcbY={10.135} anchorAlignment="center" fontSize={1} text="REF**" />
<courtyardoutline outline={[{"x":-9.25,"y":8.5},{"x":-9.25,"y":-8.5},{"x":9.25,"y":-8.5},{"x":9.25,"y":8.5}]} />
      </footprint>}
    {...props}
  />
)