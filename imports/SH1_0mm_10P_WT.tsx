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
  pin12: ["pin12"]
} as const

export const SH1_0mm_10P_WT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C53055324"
  ]
}}
      manufacturerPartNumber="SH1_0mm_10P_WT"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-4.500118mm" pcbY="2.03355575mm" width="0.5999988mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-3.50012mm" pcbY="2.03355575mm" width="0.5999988mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-2.500122mm" pcbY="2.03355575mm" width="0.5999988mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.500124mm" pcbY="2.03355575mm" width="0.5999988mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-0.500126mm" pcbY="2.03355575mm" width="0.5999988mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.499872mm" pcbY="2.03355575mm" width="0.5999988mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="1.49987mm" pcbY="2.03355575mm" width="0.5999988mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="2.499868mm" pcbY="2.03355575mm" width="0.5999988mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="3.499866mm" pcbY="2.03355575mm" width="0.5999988mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="4.500118mm" pcbY="2.03355575mm" width="0.5999988mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-5.80009mm" pcbY="-1.78355625mm" width="0.999998mm" height="1.999996mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="5.80009mm" pcbY="-1.78355625mm" width="0.999998mm" height="1.999996mm" shape="rect" />
<silkscreenpath route={[{"x":-6.200013000000013,"y":1.5665513499999406},{"x":-6.200013000000013,"y":-0.5334444500000473}]} />
<silkscreenpath route={[{"x":5.268848999999932,"y":-2.733440049999899},{"x":-5.268849000000046,"y":-2.733440049999899}]} />
<silkscreenpath route={[{"x":5.031130399999938,"y":1.5665513499999406},{"x":6.100013200000035,"y":1.5665513499999406},{"x":6.100013200000035,"y":-0.5334444500000473}]} />
<silkscreenpath route={[{"x":-6.200013000000013,"y":1.5665513499999406},{"x":-5.031155800000079,"y":1.5665513499999406}]} />
<silkscreenpath route={[{"x":-5.458460000000059,"y":2.2250717499999837},{"x":-5.463280745948282,"y":2.1884545491369636},{"x":-5.477414457923487,"y":2.1543327499999805},{"x":-5.499897946811302,"y":2.125031696811334},{"x":-5.529199000000062,"y":2.1025482079234052},{"x":-5.5633207991370455,"y":2.0884144959483137},{"x":-5.599938000000066,"y":2.083593750000091},{"x":-5.636555200863086,"y":2.0884144959483137},{"x":-5.670677000000069,"y":2.1025482079234052},{"x":-5.699978053188715,"y":2.125031696811334},{"x":-5.722461542076644,"y":2.1543327499999805},{"x":-5.7365952540517355,"y":2.1884545491369636},{"x":-5.741415999999958,"y":2.2250717499999837},{"x":-5.7365952540517355,"y":2.261688950863004},{"x":-5.722461542076644,"y":2.2958107499998732},{"x":-5.699978053188715,"y":2.325111803188747},{"x":-5.670677000000069,"y":2.347595292076562},{"x":-5.636555200863086,"y":2.3617290040516536},{"x":-5.599938000000066,"y":2.36654974999999},{"x":-5.5633207991370455,"y":2.3617290040516536},{"x":-5.529199000000062,"y":2.347595292076562},{"x":-5.499897946811302,"y":2.325111803188747},{"x":-5.477414457923487,"y":2.2958107499998732},{"x":-5.463280745948282,"y":2.261688950863004},{"x":-5.458460000000059,"y":2.2250717499999837}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="3.92255575mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-6.549200000000042,"y":3.172555750000015},{"x":6.549199999999928,"y":3.172555750000015},{"x":6.549199999999928,"y":-3.042444249999903},{"x":-6.549200000000042,"y":-3.042444249999903},{"x":-6.549200000000042,"y":3.172555750000015}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C53055324.obj?uuid=3f8154df839e46a6b04a6b6fefbebf38",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C53055324.step?uuid=3f8154df839e46a6b04a6b6fefbebf38",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012700000070253736, y: 0.22099904999993214, z: -1.615 },
      }}
      {...props}
    />
  )
}