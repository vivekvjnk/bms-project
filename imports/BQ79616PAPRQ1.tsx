import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["BAT"],
  pin2: ["CB16"],
  pin3: ["VC16"],
  pin4: ["CB15"],
  pin5: ["VC15"],
  pin6: ["CB14"],
  pin7: ["VC14"],
  pin8: ["CB13"],
  pin9: ["VC13"],
  pin10: ["CB12"],
  pin11: ["VC12"],
  pin12: ["CB11"],
  pin13: ["VC11"],
  pin14: ["CB10"],
  pin15: ["VC10"],
  pin16: ["CB9"],
  pin17: ["VC9"],
  pin18: ["CB8"],
  pin19: ["VC8"],
  pin20: ["CB7"],
  pin21: ["VC7"],
  pin22: ["CB6"],
  pin23: ["VC6"],
  pin24: ["CB5"],
  pin25: ["VC5"],
  pin26: ["CB4"],
  pin27: ["VC4"],
  pin28: ["CB3"],
  pin29: ["VC3"],
  pin30: ["CB2"],
  pin31: ["VC2"],
  pin32: ["CB1"],
  pin33: ["VC1"],
  pin34: ["CB0"],
  pin35: ["VC0"],
  pin36: ["REFHM"],
  pin37: ["REFHP"],
  pin38: ["AVDD"],
  pin39: ["AVSS"],
  pin40: ["COMLP"],
  pin41: ["COMLN"],
  pin42: ["COMHN"],
  pin43: ["COMHP"],
  pin44: ["NEG5V"],
  pin45: ["CVDD"],
  pin46: ["CVSS"],
  pin47: ["LDOIN"],
  pin48: ["NPNB"],
  pin49: ["DVDD"],
  pin50: ["DVSS"],
  pin51: ["TSREF"],
  pin52: ["RX"],
  pin53: ["TX"],
  pin54: ["GPIO8"],
  pin55: ["GPIO7"],
  pin56: ["GPIO6"],
  pin57: ["GPIO5"],
  pin58: ["GPIO4"],
  pin59: ["GPIO3"],
  pin60: ["GPIO2"],
  pin61: ["GPIO1"],
  pin62: ["NFAULT"],
  pin63: ["BBN"],
  pin64: ["BBP"],
  pin65: ["PAD"]
} as const

export const BQ79616PAPRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C3682338"
  ]
}}
      manufacturerPartNumber="BQ79616PAPRQ1"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-3.750056mm" pcbY="-5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin2"]} pcbX="-3.24993mm" pcbY="-5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin3"]} pcbX="-2.750058mm" pcbY="-5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin4"]} pcbX="-2.249932mm" pcbY="-5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="-1.75006mm" pcbY="-5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin6"]} pcbX="-1.249934mm" pcbY="-5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin7"]} pcbX="-0.750062mm" pcbY="-5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin8"]} pcbX="-0.249936mm" pcbY="-5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin9"]} pcbX="0.249936mm" pcbY="-5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin10"]} pcbX="0.750062mm" pcbY="-5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin11"]} pcbX="1.249934mm" pcbY="-5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin12"]} pcbX="1.75006mm" pcbY="-5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin13"]} pcbX="2.249932mm" pcbY="-5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin14"]} pcbX="2.750058mm" pcbY="-5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin15"]} pcbX="3.24993mm" pcbY="-5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin16"]} pcbX="3.750056mm" pcbY="-5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin17"]} pcbX="5.700014mm" pcbY="-3.750056mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin18"]} pcbX="5.700014mm" pcbY="-3.24993mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin19"]} pcbX="5.700014mm" pcbY="-2.750058mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin20"]} pcbX="5.700014mm" pcbY="-2.249932mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin21"]} pcbX="5.700014mm" pcbY="-1.75006mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin22"]} pcbX="5.700014mm" pcbY="-1.249934mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin23"]} pcbX="5.700014mm" pcbY="-0.750062mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin24"]} pcbX="5.700014mm" pcbY="-0.249936mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin25"]} pcbX="5.700014mm" pcbY="0.249936mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin26"]} pcbX="5.700014mm" pcbY="0.750062mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin27"]} pcbX="5.700014mm" pcbY="1.249934mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin28"]} pcbX="5.700014mm" pcbY="1.75006mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin29"]} pcbX="5.700014mm" pcbY="2.249932mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin30"]} pcbX="5.700014mm" pcbY="2.750058mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin31"]} pcbX="5.700014mm" pcbY="3.24993mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin32"]} pcbX="5.700014mm" pcbY="3.750056mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin33"]} pcbX="3.750056mm" pcbY="5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin34"]} pcbX="3.24993mm" pcbY="5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin35"]} pcbX="2.750058mm" pcbY="5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin36"]} pcbX="2.249932mm" pcbY="5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin37"]} pcbX="1.75006mm" pcbY="5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin38"]} pcbX="1.249934mm" pcbY="5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin39"]} pcbX="0.750062mm" pcbY="5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin40"]} pcbX="0.249936mm" pcbY="5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin41"]} pcbX="-0.249936mm" pcbY="5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin42"]} pcbX="-0.750062mm" pcbY="5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin43"]} pcbX="-1.249934mm" pcbY="5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin44"]} pcbX="-1.75006mm" pcbY="5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin45"]} pcbX="-2.249932mm" pcbY="5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin46"]} pcbX="-2.750058mm" pcbY="5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin47"]} pcbX="-3.24993mm" pcbY="5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin48"]} pcbX="-3.750056mm" pcbY="5.700014mm" width="0.2800096mm" height="1.5999968mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin49"]} pcbX="-5.700014mm" pcbY="3.750056mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin50"]} pcbX="-5.700014mm" pcbY="3.24993mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin51"]} pcbX="-5.700014mm" pcbY="2.750058mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin52"]} pcbX="-5.700014mm" pcbY="2.249932mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin53"]} pcbX="-5.700014mm" pcbY="1.75006mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin54"]} pcbX="-5.700014mm" pcbY="1.249934mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin55"]} pcbX="-5.700014mm" pcbY="0.750062mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin56"]} pcbX="-5.700014mm" pcbY="0.249936mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin57"]} pcbX="-5.700014mm" pcbY="-0.249936mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin58"]} pcbX="-5.700014mm" pcbY="-0.750062mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin59"]} pcbX="-5.700014mm" pcbY="-1.249934mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin60"]} pcbX="-5.700014mm" pcbY="-1.75006mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin61"]} pcbX="-5.700014mm" pcbY="-2.249932mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin62"]} pcbX="-5.700014mm" pcbY="-2.750058mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin63"]} pcbX="-5.700014mm" pcbY="-3.24993mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin64"]} pcbX="-5.700014mm" pcbY="-3.750056mm" width="1.5999968mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin65"]} pcbX="0mm" pcbY="0mm" width="5.999988mm" height="5.999988mm" shape="rect" />
<silkscreenpath route={[{"x":-5.076190000000111,"y":4.080510000000004},{"x":-5.076190000000111,"y":5.076189999999997},{"x":-4.080510000000004,"y":5.076189999999997}]} />
<silkscreenpath route={[{"x":5.076189999999997,"y":4.080510000000004},{"x":5.076189999999997,"y":5.076189999999997},{"x":4.080510000000004,"y":5.076189999999997}]} />
<silkscreenpath route={[{"x":-5.076190000000111,"y":-4.080510000000004},{"x":-5.076190000000111,"y":-5.076189999999997},{"x":-4.080510000000004,"y":-5.076189999999997}]} />
<silkscreenpath route={[{"x":5.076189999999997,"y":-4.080510000000004},{"x":5.076189999999997,"y":-5.076189999999997},{"x":4.080510000000004,"y":-5.076189999999997}]} />
<silkscreenpath route={[{"x":-4.671390199999905,"y":-4.671390199999905},{"x":-4.671390199999905,"y":4.671390200000019},{"x":4.671390199999905,"y":4.671390200000019},{"x":4.671390199999905,"y":-4.671390199999905},{"x":-4.671390199999905,"y":-4.671390199999905}]} />
<silkscreenpath route={[{"x":-3.6499800000001414,"y":-6.80008799999996},{"x":-3.6533900070082836,"y":-6.825989574757614},{"x":-3.6633876416908606,"y":-6.850125999999932},{"x":-3.679291581766165,"y":-6.870852418233994},{"x":-3.700018,"y":-6.886756358309071},{"x":-3.724154425242318,"y":-6.896753992991648},{"x":-3.750056000000086,"y":-6.900163999999904},{"x":-3.77595757475774,"y":-6.896753992991648},{"x":-3.800094000000172,"y":-6.886756358309071},{"x":-3.8208204182341206,"y":-6.870852418233994},{"x":-3.8367243583091977,"y":-6.850125999999932},{"x":-3.8467219929917746,"y":-6.825989574757614},{"x":-3.850131999999917,"y":-6.80008799999996},{"x":-3.8467219929917746,"y":-6.774186425242306},{"x":-3.8367243583091977,"y":-6.750049999999874},{"x":-3.8208204182341206,"y":-6.729323581766039},{"x":-3.800094000000172,"y":-6.713419641690962},{"x":-3.77595757475774,"y":-6.703422007008385},{"x":-3.750056000000086,"y":-6.700012000000015},{"x":-3.724154425242318,"y":-6.703422007008385},{"x":-3.700018,"y":-6.713419641690962},{"x":-3.679291581766165,"y":-6.729323581766039},{"x":-3.6633876416908606,"y":-6.750049999999874},{"x":-3.6533900070082836,"y":-6.774186425242306},{"x":-3.6499800000001414,"y":-6.80008799999996}]} />
<silkscreenpath route={[{"x":-3.5999420000000555,"y":-4.171441999999843},{"x":-3.60505701051261,"y":-4.2102943621364375},{"x":-3.6200534625364753,"y":-4.246498999999972},{"x":-3.643909372649091,"y":-4.277588627350951},{"x":-3.6749990000000707,"y":-4.301444537463567},{"x":-3.711203637863491,"y":-4.3164409894874325},{"x":-3.750056000000086,"y":-4.321555999999873},{"x":-3.788908362136681,"y":-4.3164409894874325},{"x":-3.8251130000001012,"y":-4.301444537463567},{"x":-3.856202627351081,"y":-4.277588627350951},{"x":-3.8800585374636967,"y":-4.246498999999972},{"x":-3.895054989487562,"y":-4.2102943621364375},{"x":-3.9001700000001165,"y":-4.171441999999843},{"x":-3.895054989487562,"y":-4.1325896378633615},{"x":-3.8800585374636967,"y":-4.096384999999827},{"x":-3.856202627351081,"y":-4.065295372648961},{"x":-3.8251130000001012,"y":-4.041439462536346},{"x":-3.788908362136681,"y":-4.0264430105123665},{"x":-3.750056000000086,"y":-4.021327999999926},{"x":-3.711203637863491,"y":-4.0264430105123665},{"x":-3.6749990000000707,"y":-4.041439462536346},{"x":-3.643909372649091,"y":-4.065295372648961},{"x":-3.6200534625364753,"y":-4.096384999999827},{"x":-3.60505701051261,"y":-4.1325896378633615},{"x":-3.5999420000000555,"y":-4.171441999999843}]} />
<silkscreentext text="{NAME}" pcbX="0.0127mm" pcbY="7.35mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-6.600000000000136,"y":6.600000000000023},{"x":6.6253999999999,"y":6.600000000000023},{"x":6.6253999999999,"y":-7.158799999999928},{"x":-6.600000000000136,"y":-7.158799999999928},{"x":-6.600000000000136,"y":6.600000000000023}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3682338.obj?uuid=7e9b9111dcfd48d3add0eab11d882721",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3682338.step?uuid=7e9b9111dcfd48d3add0eab11d882721",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0.000795 },
      }}
      {...props}
    />
  )
}