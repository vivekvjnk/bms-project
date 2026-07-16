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
  pin16: ["pin16"]
} as const

export const HX1188NLT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C9363"
  ]
}}
      manufacturerPartNumber="HX1188NLT"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-4.318mm" pcbY="4.445mm" width="1.65989mm" height="0.7599934mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-4.318mm" pcbY="3.175mm" width="1.65989mm" height="0.7599934mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-4.318mm" pcbY="1.905mm" width="1.65989mm" height="0.7599934mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-4.318mm" pcbY="0.635mm" width="1.65989mm" height="0.7599934mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-4.318mm" pcbY="-0.635mm" width="1.65989mm" height="0.7599934mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-4.318mm" pcbY="-1.905mm" width="1.65989mm" height="0.7599934mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-4.318mm" pcbY="-3.175mm" width="1.65989mm" height="0.7599934mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-4.318mm" pcbY="-4.445mm" width="1.65989mm" height="0.7599934mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="4.318mm" pcbY="-4.445mm" width="1.65989mm" height="0.7599934mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="4.318mm" pcbY="-3.175mm" width="1.65989mm" height="0.7599934mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="4.318mm" pcbY="-1.905mm" width="1.65989mm" height="0.7599934mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="4.318mm" pcbY="-0.635mm" width="1.65989mm" height="0.7599934mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="4.318mm" pcbY="0.635mm" width="1.65989mm" height="0.7599934mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="4.318mm" pcbY="1.905mm" width="1.65989mm" height="0.7599934mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="4.318mm" pcbY="3.175mm" width="1.65989mm" height="0.7599934mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="4.318mm" pcbY="4.445mm" width="1.65989mm" height="0.7599934mm" shape="rect" />
<silkscreenpath route={[{"x":-3.555009400000003,"y":-6.349999999999994},{"x":3.5550093999999888,"y":-6.349999999999994}]} />
<silkscreenpath route={[{"x":-3.555009400000003,"y":6.349999999999994},{"x":3.5550093999999888,"y":6.349999999999994}]} />
<silkscreenpath route={[{"x":3.5550093999999888,"y":5.099989800000003},{"x":3.5550093999999888,"y":6.349999999999994}]} />
<silkscreenpath route={[{"x":3.5550093999999888,"y":-6.349999999999994},{"x":3.5550093999999888,"y":-5.099989800000003}]} />
<silkscreenpath route={[{"x":-3.555009400000003,"y":-6.349999999999994},{"x":-3.555009400000003,"y":-5.099989800000003}]} />
<silkscreenpath route={[{"x":-3.555009400000003,"y":5.099989800000003},{"x":-3.555009400000003,"y":6.349999999999994}]} />
<silkscreenpath route={[{"x":-1.6509999999999962,"y":4.444999999999993},{"x":-1.6726371003064315,"y":4.280649906359898},{"x":-1.7360738685968755,"y":4.127499999999998},{"x":-1.8369871939465554,"y":3.995987193946533},{"x":-1.968500000000006,"y":3.8950738685968673},{"x":-2.1216499063598917,"y":3.8316371003064376},{"x":-2.2860000000000014,"y":3.8100000000000023},{"x":-2.450350093640111,"y":3.8316371003064376},{"x":-2.603499999999997,"y":3.8950738685968673},{"x":-2.7350128060534615,"y":3.995987193946533},{"x":-2.835926131403113,"y":4.127499999999998},{"x":-2.899362899693557,"y":4.280649906359898},{"x":-2.9210000000000065,"y":4.444999999999993},{"x":-2.899362899693557,"y":4.609350093640103},{"x":-2.835926131403113,"y":4.762500000000003},{"x":-2.7350128060534615,"y":4.894012806053453},{"x":-2.603499999999997,"y":4.994926131403119},{"x":-2.450350093640111,"y":5.058362899693549},{"x":-2.2860000000000014,"y":5.079999999999998},{"x":-2.1216499063598917,"y":5.058362899693549},{"x":-1.968500000000006,"y":4.994926131403119},{"x":-1.8369871939465554,"y":4.894012806053453},{"x":-1.7360738685968755,"y":4.762500000000003},{"x":-1.6726371003064315,"y":4.609350093640103},{"x":-1.6509999999999962,"y":4.444999999999993}]} />
<silkscreentext text="{NAME}" pcbX="-0.0635mm" pcbY="7.4516mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.533199999999994,"y":6.701599999999985},{"x":5.4062000000000126,"y":6.701599999999985},{"x":5.4062000000000126,"y":-6.599999999999994},{"x":-5.533199999999994,"y":-6.599999999999994},{"x":-5.533199999999994,"y":6.701599999999985}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C9363.obj?uuid=bf99164b09f34a2889cdd1e58af01d8f",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C9363.step?uuid=bf99164b09f34a2889cdd1e58af01d8f",
        pcbRotationOffset: 270,
        modelOriginPosition: { x: 0.000012699999984988608, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}