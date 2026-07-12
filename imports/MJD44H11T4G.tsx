import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["B"],
  pin2: ["C"],
  pin3: ["E"]
} as const

export const MJD44H11T4G = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C38780"
  ]
}}
      manufacturerPartNumber="MJD44H11T4G"
      footprint={<footprint>
        <smtpad portHints={["pin2"]} pcbX="2.5500965mm" pcbY="0.01139825mm" width="6.5000124mm" height="5.999988mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-4.4001055mm" pcbY="2.31848025mm" width="2.7999944mm" height="1.35001mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-4.4001055mm" pcbY="-2.26139375mm" width="2.7999944mm" height="1.499997mm" shape="rect" />
<silkscreenpath route={[{"x":-2.2728554999999915,"y":-1.8748057500000073},{"x":-2.8291154999999435,"y":-1.8748057500000073},{"x":-2.8291154999999435,"y":-2.6164857500000096},{"x":-2.2728554999999915,"y":-2.6164857500000096},{"x":-2.2728554999999915,"y":-2.606071749999984}]} />
<silkscreenpath route={[{"x":-2.2728554999999915,"y":2.675350250000008},{"x":-2.8291154999999435,"y":2.675350250000008},{"x":-2.8291154999999435,"y":1.9336702499999774},{"x":-2.2728554999999915,"y":1.9336702499999774},{"x":-2.2728554999999915,"y":1.944084250000003}]} />
<silkscreenpath route={[{"x":3.97826230000004,"y":3.387515449999995},{"x":-2.2741000999999983,"y":3.387515449999995}]} />
<silkscreenpath route={[{"x":-2.2741000999999983,"y":3.387515449999995},{"x":-2.2741000999999983,"y":-3.3648713500000156}]} />
<silkscreenpath route={[{"x":3.97826230000004,"y":-3.3648713500000156},{"x":-2.2741000999999983,"y":-3.3648713500000156}]} />
<silkscreenpath route={[{"x":-2.7792552999999884,"y":3.330594050000002},{"x":-2.59008028578387,"y":3.1916766008058346},{"x":-2.663174071103356,"y":2.968646239101531},{"x":-2.897876528896802,"y":2.9686462391015596},{"x":-2.9709703142161175,"y":3.19167660080592},{"x":-2.781795299999999,"y":3.330594050000002}]} />
<silkscreentext text="{NAME}" pcbX="0.0055245mm" pcbY="4.72386225mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-6.048375499999963,"y":3.9738622499999963},{"x":6.059424500000034,"y":3.9738622499999963},{"x":6.059424500000034,"y":-3.612737750000008},{"x":-6.048375499999963,"y":-3.612737750000008},{"x":-6.048375499999963,"y":3.9738622499999963}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C38780.obj?uuid=76a7a43de2f04ecc8457f0775620029d",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C38780.step?uuid=76a7a43de2f04ecc8457f0775620029d",
        pcbRotationOffset: 270,
        modelOriginPosition: { x: 2.3395033499999895, y: 4.901729599999986, z: 0 },
      }}
      {...props}
    />
  )
}