import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["MNT1"],
  pin8: ["MNT2"],
} as const

export const Molex_5023520610 = (props: ChipProps<typeof pinLabels>) => (
  <chip
    pinLabels={pinLabels}
    footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-5mm" pcbY="3.529mm" width="1.2446mm" height="3.2512mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-2.999999mm" pcbY="3.529mm" width="1.2446mm" height="3.2512mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.000001mm" pcbY="3.529mm" width="1.2446mm" height="3.2512mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="1.000001mm" pcbY="3.529mm" width="1.2446mm" height="3.2512mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="2.999999mm" pcbY="3.529mm" width="1.2446mm" height="3.2512mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="5mm" pcbY="3.529mm" width="1.2446mm" height="3.2512mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-7.549998mm" pcbY="-1.950999mm" width="1.7526mm" height="5.3594mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="7.549998mm" pcbY="-1.950999mm" width="1.7526mm" height="5.3594mm" shape="rect" />
<silkscreenpath route={[{"x":-6.404303,"y":-4.826},{"x":6.404303,"y":-4.826}]} />
<silkscreenpath route={[{"x":8.128,"y":1.061441},{"x":8.128,"y":4.826}]} />
<silkscreenpath route={[{"x":8.128,"y":4.826},{"x":5.95504,"y":4.826}]} />
<silkscreenpath route={[{"x":-8.128,"y":4.826},{"x":-8.128,"y":1.061441}]} />
<silkscreenpath route={[{"x":-5.95504,"y":4.826},{"x":-8.128,"y":4.826}]} />
<silkscreenpath route={[{"x":-8.001,"y":-4.699},{"x":8.001,"y":-4.699}]} />
<silkscreenpath route={[{"x":8.001,"y":-4.699},{"x":8.001,"y":4.699}]} />
<silkscreenpath route={[{"x":8.001,"y":4.699},{"x":-8.001,"y":4.699}]} />
<silkscreenpath route={[{"x":-8.001,"y":4.699},{"x":-8.001,"y":-4.699}]} />
<silkscreentext pcbX={0} pcbY={3.529} anchorAlignment="center" fontSize={1} text="REF**" />
<courtyardoutline outline={[{"x":-8.680297,"y":5.4086},{"x":-8.680297,"y":-4.953},{"x":8.680297,"y":-4.953},{"x":8.680297,"y":5.4086}]} />
      </footprint>}
    schematicsymbol={
      <schematicsymbol>
        <pin portHints={["pin1"]} x={-2} y={2} length={2} side="left" />
        <pin portHints={["pin2"]} x={-2} y={1} length={2} side="left" />
        <pin portHints={["pin3"]} x={-2} y={0} length={2} side="left" />
        <pin portHints={["pin4"]} x={2} y={2} length={2} side="right" />
        <pin portHints={["pin5"]} x={2} y={1} length={2} side="right" />
        <pin portHints={["pin6"]} x={2} y={0} length={2} side="right" />
        <pin portHints={["pin7"]} x={-2} y={-1} length={2} side="left" />
        <pin portHints={["pin8"]} x={2} y={-1} length={2} side="right" />
      </schematicsymbol>
    }
    {...props}
  />
)