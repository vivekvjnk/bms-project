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
  pin10: ["pin10"]
} as const

export const ZX_XH2_54_10PZZ_GW = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C42441537"
  ]
}}
      manufacturerPartNumber="ZX_XH2_54_10PZZ_GW"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-11.2499775mm" pcbY="0mm" outerDiameter="1.499997mm" holeDiameter="0.9000236mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-8.7499825mm" pcbY="0mm" outerDiameter="1.499997mm" holeDiameter="0.9000236mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="-6.2499875mm" pcbY="0mm" outerDiameter="1.499997mm" holeDiameter="0.9000236mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="-3.7499925mm" pcbY="0mm" outerDiameter="1.499997mm" holeDiameter="0.9000236mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="-1.2499975mm" pcbY="0mm" outerDiameter="1.499997mm" holeDiameter="0.9000236mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="1.2499975mm" pcbY="0mm" outerDiameter="1.499997mm" holeDiameter="0.9000236mm" shape="circle" />
<platedhole  portHints={["pin7"]} pcbX="3.7499925mm" pcbY="0mm" outerDiameter="1.499997mm" holeDiameter="0.9000236mm" shape="circle" />
<platedhole  portHints={["pin8"]} pcbX="6.2499875mm" pcbY="0mm" outerDiameter="1.499997mm" holeDiameter="0.9000236mm" shape="circle" />
<platedhole  portHints={["pin9"]} pcbX="8.7499825mm" pcbY="0mm" outerDiameter="1.499997mm" holeDiameter="0.9000236mm" shape="circle" />
<platedhole  portHints={["pin10"]} pcbX="11.2499775mm" pcbY="0mm" outerDiameter="1.499997mm" holeDiameter="0.9000236mm" shape="circle" />
<silkscreenpath route={[{"x":-0.9965563000000657,"y":3.5999927999999954},{"x":-0.9965563000000657,"y":4.149979000000144},{"x":0.9500234999999293,"y":4.149979000000144},{"x":0.9500234999999293,"y":3.5999927999999954}]} />
<silkscreenpath route={[{"x":-8.74995709999996,"y":-2.14998300000002},{"x":-8.74995709999996,"y":-1.550009599999953},{"x":8.799995100000046,"y":-1.550009599999953},{"x":8.799995100000046,"y":-2.14998300000002}]} />
<silkscreenpath route={[{"x":13.749972499999899,"y":-0.7871459999998933},{"x":12.999961300000109,"y":-0.7871459999998933},{"x":12.999961300000109,"y":-0.7999983999999358},{"x":12.999961300000109,"y":-1.550009599999953},{"x":11.58368269999994,"y":-1.550009599999953},{"x":11.58368269999994,"y":-2.1500083999999333}]} />
<silkscreenpath route={[{"x":-13.749947099999986,"y":-0.7871459999998933},{"x":-12.999961299999995,"y":-0.7871459999998933},{"x":-12.999961299999995,"y":-0.7999983999999358},{"x":-12.999961299999995,"y":-1.550009599999953},{"x":-11.583682700000054,"y":-1.550009599999953},{"x":-11.583682700000054,"y":-2.14998300000002}]} />
<silkscreenpath route={[{"x":-13.749947099999986,"y":0.16642080000008264},{"x":-12.999961299999995,"y":0.16642080000008264},{"x":-12.999961299999995,"y":2.999994000000129},{"x":12.699987300000089,"y":2.999994000000129},{"x":12.699987300000089,"y":0.19999960000006922},{"x":13.74999790000004,"y":0.19999960000006922},{"x":13.74999790000004,"y":0.22004019999997126}]} />
<silkscreenpath route={[{"x":-13.749947099999986,"y":3.5999927999999954},{"x":13.74999790000004,"y":3.5999927999999954},{"x":13.74999790000004,"y":-2.14998300000002},{"x":-13.749947099999986,"y":-2.14998300000002},{"x":-13.749947099999986,"y":3.5999927999999954}]} />
<silkscreentext text="{NAME}" pcbX="-0.0231775mm" pcbY="5.1543986mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-14.039977499999964,"y":4.404398600000036},{"x":13.993622500000015,"y":4.404398600000036},{"x":13.993622500000015,"y":-2.445601399999873},{"x":-14.039977499999964,"y":-2.445601399999873},{"x":-14.039977499999964,"y":4.404398600000036}]} />
      </footprint>}
      
      {...props}
    />
  )
}