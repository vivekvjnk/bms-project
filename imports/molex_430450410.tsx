import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"]
} as const

export const Molex_430450410 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      manufacturerPartNumber="430450410"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="1.5mm" pcbY="5.112999mm" width="1.27mm" height="2.921mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-1.5mm" pcbY="5.112999mm" width="1.27mm" height="2.921mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="1.5mm" pcbY="9.742998mm" width="1.27mm" height="2.921mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.5mm" pcbY="9.742998mm" width="1.27mm" height="2.921mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-5.384998mm" pcbY="-0.357002mm" width="3.429mm" height="1.651mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="5.384998mm" pcbY="-0.357002mm" width="3.429mm" height="1.651mm" shape="rect" />
<silkscreenpath route={[{"x":-5.207,"y":-5.08},{"x":5.207,"y":-5.08}]} />
<silkscreenpath route={[{"x":5.207,"y":-5.08},{"x":5.207,"y":-1.515242}]} />
<silkscreenpath route={[{"x":5.207,"y":5.079998},{"x":2.46774,"y":5.079998}]} />
<silkscreenpath route={[{"x":-5.207,"y":5.079998},{"x":-5.207,"y":0.801238}]} />
<silkscreenpath route={[{"x":0.53226,"y":5.079998},{"x":-0.53226,"y":5.079998}]} />
<silkscreenpath route={[{"x":-2.46774,"y":5.079998},{"x":-5.207,"y":5.079998}]} />
<silkscreenpath route={[{"x":-5.207,"y":-1.515242},{"x":-5.207,"y":-5.08}]} />
<silkscreenpath route={[{"x":5.207,"y":0.801238},{"x":5.207,"y":5.079998}]} />
<silkscreenpath route={[{"x":-5.08,"y":-4.953},{"x":5.08,"y":-4.953}]} />
<silkscreenpath route={[{"x":5.08,"y":-4.953},{"x":5.08,"y":4.952998}]} />
<silkscreenpath route={[{"x":5.08,"y":4.952998},{"x":-5.08,"y":4.952998}]} />
<silkscreenpath route={[{"x":-5.08,"y":4.952998},{"x":-5.08,"y":-4.953}]} />
<silkscreentext pcbX={0} pcbY={7.427999} anchorAlignment="center" fontSize={1} text="{NAME}" />
<courtyardoutline outline={[{"x":-7.353498,"y":11.4575},{"x":-7.353498,"y":-5.207},{"x":7.353498,"y":-5.207},{"x":7.353498,"y":11.4575}]} />
      </footprint>}
      {...props}
    />
  )
}