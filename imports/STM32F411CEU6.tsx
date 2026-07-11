import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBAT"],
  pin2: ["PC13"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["PH0-OSC_IN"],
  pin6: ["PH1-OSC_OUT"],
  pin7: ["NRST"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["PA0"],
  pin11: ["PA1"],
  pin12: ["PA2"],
  pin13: ["PA3"],
  pin14: ["PA4"],
  pin15: ["PA5"],
  pin16: ["PA6"],
  pin17: ["PA7"],
  pin18: ["PB0"],
  pin19: ["PB1"],
  pin20: ["PB2"],
  pin21: ["PB10"],
  pin22: ["VCAP1"],
  pin23: ["VSS1"],
  pin24: ["VDD1"],
  pin25: ["PB12"],
  pin26: ["PB13"],
  pin27: ["PB14"],
  pin28: ["PB15"],
  pin29: ["PA8"],
  pin30: ["PA9"],
  pin31: ["PA10"],
  pin32: ["PA11"],
  pin33: ["PA12"],
  pin34: ["PA13"],
  pin35: ["VSS2"],
  pin36: ["VDD2"],
  pin37: ["PA14"],
  pin38: ["PA15"],
  pin39: ["PB3"],
  pin40: ["PB4"],
  pin41: ["PB5"],
  pin42: ["PB6"],
  pin43: ["PB7"],
  pin44: ["BOOT0"],
  pin45: ["PB8"],
  pin46: ["PB9"],
  pin47: ["VSS3"],
  pin48: ["VDD3"],
  pin49: ["pin49"]
} as const

export const STM32F411CEU6 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C60420"
  ]
}}
      manufacturerPartNumber="STM32F411CEU6"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-2.75082mm" pcbY="-3.44932mm" width="0.2800096mm" height="0.8999982mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin2"]} pcbX="-2.25044mm" pcbY="-3.44932mm" width="0.2800096mm" height="0.8999982mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin3"]} pcbX="-1.75006mm" pcbY="-3.44932mm" width="0.2800096mm" height="0.8999982mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin4"]} pcbX="-1.24968mm" pcbY="-3.44932mm" width="0.2800096mm" height="0.8999982mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="-0.7493mm" pcbY="-3.44932mm" width="0.2800096mm" height="0.8999982mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin6"]} pcbX="-0.24892mm" pcbY="-3.44932mm" width="0.2800096mm" height="0.8999982mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin7"]} pcbX="0.24892mm" pcbY="-3.44932mm" width="0.2800096mm" height="0.8999982mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin8"]} pcbX="0.7493mm" pcbY="-3.44932mm" width="0.2800096mm" height="0.8999982mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin9"]} pcbX="1.24968mm" pcbY="-3.44932mm" width="0.2800096mm" height="0.8999982mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin10"]} pcbX="1.75006mm" pcbY="-3.44932mm" width="0.2800096mm" height="0.8999982mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin11"]} pcbX="2.25044mm" pcbY="-3.44932mm" width="0.2800096mm" height="0.8999982mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin12"]} pcbX="2.75082mm" pcbY="-3.44932mm" width="0.2800096mm" height="0.8999982mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin13"]} pcbX="3.44932mm" pcbY="-2.75082mm" width="0.8999982mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin14"]} pcbX="3.44932mm" pcbY="-2.25044mm" width="0.8999982mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin15"]} pcbX="3.44932mm" pcbY="-1.75006mm" width="0.8999982mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin16"]} pcbX="3.44932mm" pcbY="-1.24968mm" width="0.8999982mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin17"]} pcbX="3.44932mm" pcbY="-0.7493mm" width="0.8999982mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin18"]} pcbX="3.44932mm" pcbY="-0.24892mm" width="0.8999982mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin19"]} pcbX="3.44932mm" pcbY="0.24892mm" width="0.8999982mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin20"]} pcbX="3.44932mm" pcbY="0.7493mm" width="0.8999982mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin21"]} pcbX="3.44932mm" pcbY="1.24968mm" width="0.8999982mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin22"]} pcbX="3.44932mm" pcbY="1.75006mm" width="0.8999982mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin23"]} pcbX="3.44932mm" pcbY="2.25044mm" width="0.8999982mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin24"]} pcbX="3.44932mm" pcbY="2.75082mm" width="0.8999982mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin25"]} pcbX="2.75082mm" pcbY="3.44932mm" width="0.2800096mm" height="0.8999982mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin26"]} pcbX="2.25044mm" pcbY="3.44932mm" width="0.2800096mm" height="0.8999982mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin27"]} pcbX="1.75006mm" pcbY="3.44932mm" width="0.2800096mm" height="0.8999982mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin28"]} pcbX="1.24968mm" pcbY="3.44932mm" width="0.2800096mm" height="0.8999982mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin29"]} pcbX="0.7493mm" pcbY="3.44932mm" width="0.2800096mm" height="0.8999982mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin30"]} pcbX="0.24892mm" pcbY="3.44932mm" width="0.2800096mm" height="0.8999982mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin31"]} pcbX="-0.24892mm" pcbY="3.44932mm" width="0.2800096mm" height="0.8999982mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin32"]} pcbX="-0.7493mm" pcbY="3.44932mm" width="0.2800096mm" height="0.8999982mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin33"]} pcbX="-1.24968mm" pcbY="3.44932mm" width="0.2800096mm" height="0.8999982mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin34"]} pcbX="-1.75006mm" pcbY="3.44932mm" width="0.2800096mm" height="0.8999982mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin35"]} pcbX="-2.25044mm" pcbY="3.44932mm" width="0.2800096mm" height="0.8999982mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin36"]} pcbX="-2.75082mm" pcbY="3.44932mm" width="0.2800096mm" height="0.8999982mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin37"]} pcbX="-3.44932mm" pcbY="2.75082mm" width="0.8999982mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin38"]} pcbX="-3.44932mm" pcbY="2.25044mm" width="0.8999982mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin39"]} pcbX="-3.44932mm" pcbY="1.75006mm" width="0.8999982mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin40"]} pcbX="-3.44932mm" pcbY="1.24968mm" width="0.8999982mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin41"]} pcbX="-3.44932mm" pcbY="0.7493mm" width="0.8999982mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin42"]} pcbX="-3.44932mm" pcbY="0.24892mm" width="0.8999982mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin43"]} pcbX="-3.44932mm" pcbY="-0.24892mm" width="0.8999982mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin44"]} pcbX="-3.44932mm" pcbY="-0.7493mm" width="0.8999982mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin45"]} pcbX="-3.44932mm" pcbY="-1.24968mm" width="0.8999982mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin46"]} pcbX="-3.44932mm" pcbY="-1.75006mm" width="0.8999982mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin47"]} pcbX="-3.44932mm" pcbY="-2.25044mm" width="0.8999982mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin48"]} pcbX="-3.44932mm" pcbY="-2.75082mm" width="0.8999982mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin49"]} pcbX="0mm" pcbY="-0mm" width="5.499989mm" height="5.499989mm" shape="rect" />
<silkscreenpath route={[{"x":3.699941800000005,"y":-3.2749998000000033},{"x":3.699941800000005,"y":-3.699941800000005},{"x":3.2749998000000176,"y":-3.699941800000005}]} />
<silkscreenpath route={[{"x":3.699941800000005,"y":3.2751521999999937},{"x":3.699941800000005,"y":3.7000941999999952},{"x":3.2749998000000176,"y":3.7000941999999952}]} />
<silkscreenpath route={[{"x":-3.7000941999999952,"y":3.2751521999999937},{"x":-3.7000941999999952,"y":3.7000941999999952},{"x":-3.275152200000008,"y":3.7000941999999952}]} />
<silkscreenpath route={[{"x":-3.275152200000008,"y":-3.699941800000005},{"x":-3.7000941999999952,"y":-3.699941800000005},{"x":-3.7000941999999952,"y":-3.2749998000000033}]} />
<silkscreenpath route={[{"x":-3.5509962000000144,"y":-4.201083800000006},{"x":-3.699737255997661,"y":-4.050441770296075},{"x":-3.5497261999999807,"y":-3.9010643759852712},{"x":-3.3997151440023288,"y":-4.050441770296075},{"x":-3.548456200000004,"y":-4.201083800000006}]} />
<silkscreentext text="{NAME}" pcbX="-0.01016mm" pcbY="4.76936mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-4.019359999999978,"y":4.019359999999992},{"x":3.999040000000008,"y":4.019359999999992},{"x":3.999040000000008,"y":-4.735640000000004},{"x":-4.019359999999978,"y":-4.735640000000004},{"x":-4.019359999999978,"y":4.019359999999992}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C60420.obj?uuid=16912e571dfb42a9a47b4df7b841ed45",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C60420.step?uuid=16912e571dfb42a9a47b4df7b841ed45",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0.0033653000000049005, y: -0.0016528999999803062, z: 0 },
      }}
      {...props}
    />
  )
}