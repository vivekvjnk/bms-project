

This is information on a product in full production.
January 2024DS10314 Rev 81/151
STM32F411xC STM32F411xE
## Arm
## ®
## Cortex
## ®
-M4 32b MCU+FPU, 125 DMIPS, 512KB Flash,
128KB RAM, USB OTG FS, 11 TIMs, 1 ADC, 13 comm. interfaces
Datasheet - production data
## Features
•Includes ST state-of-the-art patented
technology
•Dynamic efficiency line with BAM (Batch
acquisition mode)
–   1.7 V to 3.6 V power supply
–   - 40°C to 85/105/125 °C temperature range
•Core: Arm
## ®
## 32-bit Cortex
## ®
-M4 CPU with FPU,
adaptive real-time accelerator (ART
Accelerator) allowing 0-wait state execution
from flash memory, frequency up to 100 MHz,
memory protection unit,
125 DMIPS/1.25 DMIPS/MHz (Dhrystone 2.1),
and DSP instructions
•Memories
–   Up to 512 Kbytes of flash memory
–   128 Kbytes of SRAM
•Clock, reset, and supply management
–   1.7 V to 3.6 V application supply and I/Os
–   POR, PDR, PVD, and BOR
–   4-to-26 MHz crystal oscillator
–   Internal 16 MHz factory-trimmed RC
–   32 kHz oscillator for RTC with calibration
–   Internal 32 kHz RC with calibration
•Power consumption
–   Run: 100 μA/MHz (peripheral off)
–   Stop (Flash in Stop mode, fast wakeup
time): 42 μA typical at 25 °C; 65 μA max at
## 25 °C
–   Stop (Flash in Deep power down mode,
slow wakeup time): down to 9 μA at 25 °C;
28 μA max at 25 °C
–   Standby: 1.8 μA at 25 °C / 1.7 V without
RTC; 11 μA at 85 °C at 1.7 V
## –V
## BAT
supply for RTC: 1 μA at 25 °C
•1×12-bit, 2.4 MSPS A/D converter: up to 16
channels
•General-purpose DMA: 16-stream DMA
controllers with FIFOs and burst support
•Up to 11 timers: up to six 16-bit, two 32-bit
timers up to 100 MHz, each with up to four
IC/OC/PWM or pulse counter and quadrature
(incremental) encoder input, two watchdog
timers (independent and window) and a
SysTick timer
•Debug mode
–   Serial wire debug (SWD) & JTAG
interfaces
–Cortex
## ®
-M4 Embedded Trace Macrocell™
•Up to 81 I/O ports with interrupt capability
–   Up to 78 fast I/Os up to 100 MHz
–   Up to 77 5 V-tolerant I/Os
•Up to 13 communication interfaces
–   Up to 3 x I
## 2
C interfaces (SMBus/PMBus)
–   Up to 3 USARTs (2 x 12.5 Mbit/s,
1 x 6.25 Mbit/s), ISO 7816 interface, LIN,
IrDA, modem control)
–   Up to 5 SPI/I2Ss (up to 50 Mbit/s, SPI, or
I2S audio protocol), SPI2 and SPI3 with
muxed full-duplex I
## 2
S to achieve audio
class accuracy via internal audio PLL or
external clock
–   SDIO interface (SD/MMC/eMMC)
–   Advanced connectivity: USB 2.0 full-speed
device/host/OTG controller with on-chip
## PHY
•CRC calculation unit
•96-bit unique ID
•RTC: subsecond accuracy, hardware calendar
•All packages are ECOPACK2 compliant

Table 1. Device summary
Reference                             Part                             number
STM32F411xC
## STM32F411CC, STM32F411RC,
## STM32F411VC
STM32F411xE
## STM32F411CE, STM32F411RE,
## STM32F411VE
## WLCSP49
## UFBGA
## UFQFPN48
(7 × 7 mm)
## UFBGA100
(7 × 7 mm)
(2.999x3.185 mm)
## LQFP100
(14 × 14 mm)
## LQFP64
(10x10 mm)
www.st.com

STM32F411xC STM32F411xE
2/151DS10314 Rev 8
## Application
•Motor drive and application control
•Medical equipment
•Industrial applications: PLC, inverters, circuit breakers
•Printers, and scanners
•Alarm systems, video intercom, and HVAC
•Home audio appliances
•Mobile phone sensor hub

DS10314 Rev 83/151
STM32F411xC STM32F411xEContents
## 6
## Contents
1Introduction  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  11
2Description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  12
2.1Compatibility with STM32F4 series   . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  14
3Functional overview  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  17
3.1Arm
## ®
## Cortex
## ®
-M4 with FPU core with embedded
flash memory and SRAM  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  17
3.2Adaptive real-time memory accelerator (ART Accelerator)   . . . . . . . . . . .  17
3.3Batch acquisition mode (BAM)  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  17
3.4Memory protection unit . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  18
3.5Embedded flash memory  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  18
3.6CRC (cyclic redundancy check) calculation unit   . . . . . . . . . . . . . . . . . . .  18
3.7Embedded SRAM . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  18
3.8Multi-AHB bus matrix  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  19
3.9DMA controller (DMA)   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  19
3.10Nested vectored interrupt controller (NVIC)  . . . . . . . . . . . . . . . . . . . . . . .  20
3.11External interrupt/event controller (EXTI)  . . . . . . . . . . . . . . . . . . . . . . . . .  20
3.12Clocks and startup  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  20
3.13Boot modes   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  21
3.14Power supply schemes   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  21
3.15Power supply supervisor   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  22
3.15.1Internal reset ON  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 22
3.15.2Internal reset OFF  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 22
3.16Voltage regulator   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  23
3.16.1Regulator ON  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23
3.16.2Regulator OFF  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23
3.16.3Regulator ON/OFF and internal power supply supervisor availability  . . 26
3.17Real-time clock (RTC) and backup registers  . . . . . . . . . . . . . . . . . . . . . .  26
3.18Low-power modes   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  27
## 3.19V
## BAT
operation  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  27
3.20Timers and watchdogs  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  28

ContentsSTM32F411xC STM32F411xE
4/151DS10314 Rev 8
3.20.1Advanced-control timers (TIM1)   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 28
3.20.2General-purpose timers (TIMx)  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29
3.20.3Independent watchdog   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29
3.20.4Window watchdog  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29
3.20.5SysTick timer  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30
3.21Inter-integrated circuit interface (I2C) . . . . . . . . . . . . . . . . . . . . . . . . . . . .  30
3.22Universal synchronous/asynchronous receiver transmitters (USART)   . .  30
3.23Serial peripheral interface (SPI)  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  31
3.24Inter-integrated sound (I
## 2
## S)  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  31
3.25Audio PLL (PLLI2S)  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  31
3.26Secure digital input/output interface (SDIO) . . . . . . . . . . . . . . . . . . . . . . .  32
3.27Universal serial bus on-the-go full-speed (OTG_FS)  . . . . . . . . . . . . . . . .  32
3.28General-purpose input/outputs (GPIOs) . . . . . . . . . . . . . . . . . . . . . . . . . .  32
3.29Analog-to-digital converter (ADC)   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  33
3.30Temperature sensor  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  33
3.31Serial wire JTAG debug port (SWJ-DP)  . . . . . . . . . . . . . . . . . . . . . . . . . .  33
3.32Embedded Trace Macrocell™   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  33
4Pinouts and pin description  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  34
5Memory mapping . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  54
6Electrical characteristics   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  58
6.1Parameter conditions  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  58
6.1.1Minimum and maximum values  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 58
6.1.2Typical values   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 58
6.1.3Typical curves   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 58
6.1.4Loading capacitor   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 58
6.1.5Pin input voltage   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 59
6.1.6Power supply scheme  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 60
6.1.7Current consumption measurement   . . . . . . . . . . . . . . . . . . . . . . . . . . . 61
6.2Absolute maximum ratings  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  61
6.3Operating conditions   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  63
6.3.1General operating conditions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 63
6.3.2VCAP_1/VCAP_2 external capacitors  . . . . . . . . . . . . . . . . . . . . . . . . . . 65
6.3.3Operating conditions at power-up/power-down (regulator ON)  . . . . . . . 66

DS10314 Rev 85/151
STM32F411xC STM32F411xEContents
## 6
6.3.4Operating conditions at power-up / power-down (regulator OFF)  . . . . . 66
6.3.5Embedded reset and power control block characteristics  . . . . . . . . . . . 67
6.3.6Supply current characteristics  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 68
6.3.7Wakeup time from low-power modes . . . . . . . . . . . . . . . . . . . . . . . . . . . 82
6.3.8External clock source characteristics . . . . . . . . . . . . . . . . . . . . . . . . . . . 83
6.3.9Internal clock source characteristics   . . . . . . . . . . . . . . . . . . . . . . . . . . . 87
6.3.10PLL characteristics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 89
6.3.11PLL spread spectrum clock generation (SSCG) characteristics   . . . . . . 91
6.3.12Memory characteristics   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 92
6.3.13EMC characteristics  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 94
6.3.14Absolute maximum ratings (electrical sensitivity)   . . . . . . . . . . . . . . . . . 96
6.3.15I/O current injection characteristics  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 97
6.3.16I/O port characteristics  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 98
6.3.17NRST pin characteristics  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 104
6.3.18TIM timer characteristics  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 105
6.3.19Communications interfaces  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 105
6.3.2012-bit ADC characteristics  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  114
6.3.21Temperature sensor characteristics  . . . . . . . . . . . . . . . . . . . . . . . . . . . 120
## 6.3.22V
## BAT
monitoring characteristics  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 121
6.3.23Embedded reference voltage . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 121
6.3.24SD/SDIO MMC/eMMC card host interface (SDIO) characteristics   . . . 122
6.3.25RTC characteristics  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 124
7Package information  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  125
7.1Device marking . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  125
7.2WLCSP49 package information (A0ZV) . . . . . . . . . . . . . . . . . . . . . . . . .  126
7.3UFQFPN48 package information (A0B9)  . . . . . . . . . . . . . . . . . . . . . . . .  129
7.4LQFP64 package information (5W)  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  131
7.5LQFP100 package information (1L)  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  134
7.6UFBGA100 package information (A0C2)  . . . . . . . . . . . . . . . . . . . . . . . .  137
7.7Thermal characteristics   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  140
7.7.1Reference document  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 140
8Ordering information   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  141
Appendix A    Recommendations when using the internal reset OFF . . . . . . . .  142

ContentsSTM32F411xC STM32F411xE
6/151DS10314 Rev 8
A.1Operating conditions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  142
Appendix B   Application block diagrams . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  143
B.1USB OTG Full Speed (FS) interface solutions  . . . . . . . . . . . . . . . . . . . .  143
B.2Sensor Hub application example. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  145
B.3Batch Acquisition Mode (BAM) example . . . . . . . . . . . . . . . . . . . . . . . . .  146
9Important security notice  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  147
Revision history  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  148

DS10314 Rev 87/151
STM32F411xC STM32F411xEList of tables
## 8
List of tables
Table 1.Device summary . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
Table 2.STM32F411xC/xE features and peripheral counts . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13
Table 3.Regulator ON/OFF and internal power supply supervisor availability. . . . . . . . . . . . . . . . . 26
Table 4.Timer feature comparison . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 28
Table 5.Comparison of I2C analog and digital filters . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30
Table 6.USART feature comparison  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 31
Table 7.Legend/abbreviations used in the pinout table . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 39
Table 8.STM32F411xC/xE pin definitions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 39
Table 9.Alternate function mapping . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48
Table 10.STM32F411xC/xE
register boundary addresses  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 54
Table 11.Voltage characteristics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 61
Table 12.Current characteristics  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 62
Table 13.Thermal characteristics. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 62
Table 14.General operating conditions  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 63
Table 15.Features depending on the operating power supply range  . . . . . . . . . . . . . . . . . . . . . . . . 64
Table 16.VCAP_1/VCAP_2 operating conditions  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 66
Table 17.Operating conditions at power-up / power-down (regulator ON)  . . . . . . . . . . . . . . . . . . . . 66
Table 18.Operating conditions at power-up / power-down (regulator OFF). . . . . . . . . . . . . . . . . . . . 66
Table 19.Embedded reset and power control block characteristics. . . . . . . . . . . . . . . . . . . . . . . . . . 67
Table 20.Typical and maximum current consumption, code with data processing (ART
accelerator disabled) running from SRAM - V
## DD
## = 1.7 V . . . . . . . . . . . . . . . . . . . . . . . . . . 69
Table 21.Typical and maximum current consumption, code with data processing (ART
accelerator disabled) running from SRAM - V
## DD
## = 3.6 V . . . . . . . . . . . . . . . . . . . . . . . . . . 70
Table 22.Typical and maximum current consumption in run mode, code with data processing
(ART accelerator enabled except prefetch) running from flash memory- V
## DD
## = 1.7 V  . . . 71
Table 23.Typical and maximum current consumption in run mode, code with data processing
(ART accelerator enabled except prefetch) running from flash memory - V
## DD
## = 3.6 V . . . 72
Table 24. Typical and maximum current consumption in run mode, code with data processing
(ART accelerator disabled) running from flash memory - V
## DD
## = 3.6 V  . . . . . . . . . . . . . . . 73
Table 25.Typical and maximum current consumption in run mode, code with data processing
(ART accelerator enabled with prefetch) running from flash memory - V
## DD
## = 3.6 V  . . . . . 74
Table 26.Typical and maximum current consumption in Sleep mode - V
## DD
## = 3.6 V . . . . . . . . . . . . . 75
Table 27.Typical and maximum current consumptions in Stop mode - V
## DD
## = 1.7 V . . . . . . . . . . . . . 75
Table 28.Typical and maximum current consumption in Stop mode - V
## DD
## =3.6 V . . . . . . . . . . . . . . . 76
Table 29.Typical and maximum current consumption in Standby mode - V
## DD
## = 1.7 V  . . . . . . . . . . . 76
Table 30.Typical and maximum current consumption in Standby mode - V
## DD
## = 3.6 V  . . . . . . . . . . . 76
Table 31.Typical and maximum current consumptions in V
## BAT
mode. . . . . . . . . . . . . . . . . . . . . . . . 77
Table 32.Switching output I/O current consumption  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 79
Table 33.Peripheral current consumption  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 80
Table 34.Low-power mode wakeup timings
## (1)
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 83
Table 35.High-speed external user clock characteristics. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 83
Table 36.Low-speed external user clock characteristics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 84
Table 37.HSE 4-26 MHz oscillator characteristics. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 85
Table 38.LSE oscillator characteristics (f
## LSE
= 32.768 kHz) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 86
Table 39.HSI oscillator characteristics  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 87
Table 40.LSI oscillator characteristics   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 88
Table 41.Main PLL characteristics. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 89

List of tablesSTM32F411xC STM32F411xE
8/151DS10314 Rev 8
Table 42.PLLI2S (audio PLL) characteristics  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 90
Table 43.SSCG parameter constraints  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 91
Table 44.Flash memory characteristics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 92
Table 45.Flash memory programming . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 93
Table 46.Flash memory programming with V
## PP
voltage  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 93
Table 47.Flash memory endurance and data retention . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 94
Table 48.EMS characteristics for LQFP100 package  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 95
Table 49.EMI characteristics for LQFP100  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 96
Table 50.ESD absolute maximum ratings . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 96
Table 51.Electrical sensitivities  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 97
Table 52.I/O current injection susceptibility . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 97
Table 53.I/O static characteristics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 98
Table 54.Output voltage characteristics  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 101
Table 55.I/O AC characteristics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 102
Table 56.NRST pin characteristics  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 104
Table 57.TIMx characteristics  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 105
Table 58.I
## 2
C characteristics. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 106
Table 59.SCL frequency (f
## PCLK1
= 50 MHz, V
## DD
## = V
## DD_I2C
## = 3.3 V) . . . . . . . . . . . . . . . . . . . . . . . . 107
Table 60.SPI dynamic characteristics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 108
Table 61.I
## 2
S dynamic characteristics  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 111
Table 62.USB OTG FS startup time  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 113
Table 63.USB OTG FS DC electrical characteristics. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 113
Table 64.USB OTG FS electrical characteristics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 114
Table 65.ADC characteristics  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 114
Table 66.ADC accuracy at f
## ADC
= 18 MHz  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 116
Table 67.ADC accuracy at f
## ADC
= 30 MHz  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 116
Table 68.ADC accuracy at f
## ADC
= 36 MHz  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 116
Table 69.ADC dynamic accuracy at f
## ADC
= 18 MHz - limited test conditions  . . . . . . . . . . . . . . . . . 117
Table 70.ADC dynamic accuracy at f
## ADC
= 36 MHz - limited test conditions  . . . . . . . . . . . . . . . . . 117
Table 71.Temperature sensor characteristics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 120
Table 72.Temperature sensor calibration values. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 120
Table 73.V
## BAT
monitoring characteristics  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 121
Table 74.Embedded internal reference voltage . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 121
Table 75.Internal reference voltage calibration values  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 121
Table 76.Dynamic characteristics: SD / MMC characteristics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 123
Table 77.Dynamic characteristics: eMMC characteristics V
## DD
= 1.7 V to 1.9 V  . . . . . . . . . . . . . . . 124
Table 78.RTC characteristics  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 124
Table 79.WLCSP49 - Mechanical data . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 127
Table 80.WLCSP49 - Example of PCB design rules (0.4 mm pitch) . . . . . . . . . . . . . . . . . . . . . . . . 128
Table 81.UFQFPN48 – Mechanical data . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 130
Table 82.LQFP64 - Mechanical data . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 132
Table 83.LQFP100 - Mechanical data . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 135
Table 84.UFBGA100 - Mechanical data  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 138
Table 85.UFBGA100 - Example of PCB design rules (0.5 mm pitch BGA) . . . . . . . . . . . . . . . . . . . 139
Table 86.Package thermal characteristics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 140
Table 87.Ordering information scheme . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 141
Table 88.Limitations depending on the operating power supply range . . . . . . . . . . . . . . . . . . . . . . 142
Table 89.Document revision history  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 148

DS10314 Rev 89/151
STM32F411xC STM32F411xEList of figures
## 10
List of figures
Figure 1.Compatible board design for LQFP100 package . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14
Figure 2.Compatible board design for LQFP64 package . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15
Figure 3.STM32F411xC/xE block diagram       . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16
Figure 4.Multi-AHB matrix     . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19
Figure 5.Power supply supervisor interconnection with internal reset OFF  . . . . . . . . . . . . . . . . . . . 22
Figure 6.Regulator OFF  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 24
Figure 7.Startup in regulator OFF: slow V
## DD
slope -
power-down reset risen after V
## CAP_1
## /V
## CAP_2
stabilization. . . . . . . . . . . . . . . . . . . . . . . . . 25
Figure 8.Startup in regulator OFF mode: fast V
## DD
slope -
power-down reset risen before V
## CAP_1
## /V
## CAP_2
stabilization . . . . . . . . . . . . . . . . . . . . . . . 25
Figure 9.STM32F411xC/xE WLCSP49 pinout  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 34
Figure 10.STM32F411xC/xE UFQFPN48 pinout  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 35
Figure 11.STM32F411xC/xE LQFP64 pinout . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 36
Figure 12.STM32F411xC/xE LQFP100 pinout . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37
Figure 13.STM32F411xC/xE UFBGA100 pinout  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 38
Figure 14.Memory map   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 54
Figure 15.Pin loading conditions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 58
Figure 16.Input voltage measurement  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 59
Figure 17.Power supply scheme  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 60
Figure 18.Current consumption measurement scheme  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 61
Figure 19.External capacitor C
## EXT
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 65
Figure 20.Typical V
## BAT
current consumption (LSE in low-drive mode and RTC ON). . . . . . . . . . . . . 77
Figure 21.Low-power mode wakeup . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 82
Figure 22.High-speed external clock source AC timing diagram  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 84
Figure 23.Low-speed external clock source AC timing diagram . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 85
Figure 24.Typical application with an 8 MHz crystal . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 86
Figure 25.Typical application with a 32.768 kHz crystal . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 87
Figure 26.ACC
## HSI
versus temperature . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 88
Figure 27.ACC
## LSI
versus temperature  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 89
Figure 28.PLL output clock waveforms in center spread mode  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 92
Figure 29.PLL output clock waveforms in down spread mode . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 92
Figure 30.FT/TC I/O input characteristics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 100
Figure 31.I/O AC characteristics definition . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 103
Figure 32.Recommended NRST pin protection  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 104
Figure 33.I
## 2
C bus AC waveforms and measurement circuit . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 107
Figure 34.SPI timing diagram - slave mode and CPHA = 0  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 109
Figure 35.SPI timing diagram - slave mode and CPHA = 1
## (1)
## . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 110
Figure 36.SPI timing diagram - master mode
## (1)
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 110
Figure 37.I
## 2
S slave timing diagram (Philips protocol)
## (1)
## . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 112
Figure 38.I
## 2
S master timing diagram (Philips protocol)
## (1)
## . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 112
Figure 39.USB OTG FS timings: definition of data signal rise and fall time . . . . . . . . . . . . . . . . . . . 114
Figure 40.ADC accuracy characteristics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 118
Figure 41.Typical connection diagram using the ADC  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 118
Figure 42.Power supply and reference decoupling (V
## REF+
not connected to V
## DDA
## ). . . . . . . . . . . . . 119
Figure 43.Power supply and reference decoupling (V
## REF+
connected to V
## DDA
## ). . . . . . . . . . . . . . . . 120
Figure 44.SDIO high-speed mode  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 122
Figure 45.SD default mode . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 122
Figure 46.WLCSP49 - Outline  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 126

List of figuresSTM32F411xC STM32F411xE
10/151DS10314 Rev 8
Figure 47.WLCSP49 - Footprint example . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 127
Figure 48.WLCSP49 marking (package top view)  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 128
Figure 49.UFQFPN48 – Outline . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 129
Figure 50.UFQFPN48 – Footprint example  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 130
Figure 51.LQFP64 - Outline
## (15)
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 131
Figure 52.LQFP64 - Footprint example  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 133
Figure 53.LQFP100 - Outline
## (15)
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 134
Figure 54.LQFP100 - Footprint example  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 136
Figure 55.UFBGA100 - Outline
## (13)
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 137
Figure 56.UFBGA100 - Footprint example . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 139
Figure 57.USB controller configured as peripheral-only and used in Full-Speed mode . . . . . . . . . . 143
Figure 58.USB controller configured as host-only and used in Full-Speed mode. . . . . . . . . . . . . . . 143
Figure 59.USB controller configured in dual mode and used in Full-Speed mode . . . . . . . . . . . . . . 144
Figure 60.Sensor Hub application example  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 145
Figure 61.Batch Acquisition Mode (BAM) example  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 146

DS10314 Rev 811/151
STM32F411xC STM32F411xEIntroduction
## 57
## 1           Introduction
This document provides the ordering information and mechanical device characteristics of
the STM32F411xC/xE microcontrollers.
This document has to be read with RM0383 reference manual, which is available from the
STMicroelectronics website www.st.com. It includes all information concerning flash
memory programming.
For information on the Arm
## ®
## (a)
## Cortex
## ®
-M33 core, refer to the Cortex®-M33 Technical
Reference Manual, available from the www.arm.com website.
a.   Arm is a registered trademark of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

DescriptionSTM32F411xC STM32F411xE
12/151DS10314 Rev 8
## 2           Description
The STM32F411XC/XE devices are based on the high-performance Arm
## ®
## Cortex
## ®
## -M4 32-
bit RISC core operating at a frequency of up to 100 MHz.
## The Cortex
## ®
-M4 core features a floating-point unit (FPU) single precision, which supports all
Arm single-precision data-processing instructions and data types. It also implements a full
set of DSP instructions and a memory protection unit (MPU), which enhances application
security.
The STM32F411xC/xE belongs to the STM32 Dynamic Efficiency product line (with
products combining power efficiency, performance and integration) while adding a new
innovative feature called Batch Acquisition Mode (BAM) allowing to save even more power
consumption during data batching.
The STM32F411xC/xE incorporate high-speed embedded memories (up to 512 Kbytes of
flash memory, 128 Kbytes of SRAM), and an extensive range of enhanced I/Os and
peripherals connected to two APB buses, two AHB bus and a 32-bit multi-AHB bus matrix.
All devices offer one 12-bit ADC, a low-power RTC, six general-purpose 16-bit timers
including one PWM timer for motor control, two general-purpose 32-bit timers. They also
feature standard and advanced communication interfaces.
•Up to three I
## 2
## Cs
•Five SPIs
•Five I
## 2
Ss out of which two are full duplex. To achieve audio class accuracy, the I
## 2
## S
peripherals can be clocked via a dedicated internal audio PLL or via an external clock
to allow synchronization.
•Three USARTs
•SDIO interface
•USB 2.0 OTG full speed interface
The STM32F411xC/xE operate in the - 40 to + 125 °C temperature range from a 1.7 (PDR
OFF) to 3.6 V power supply. A comprehensive set of power-saving mode allows the design
of low-power applications.

DS10314 Rev 813/151
STM32F411xC STM32F411xEDescription
## 57

Table 2. STM32F411xC/xE features and peripheral counts
PeripheralsSTM32F411xCSTM32F411xE
Flash memory in Kbytes256512
SRAM in KbytesSystem128
## Timers
## General-
purpose
## 7
## Advanced-
control
## 1
## Communication
interfaces
## SPI/ I
## 2
S5/5 (2 full duplex)
## I
## 2
## C3
## USART3
## SDIO1
## USB OTG FS1
GPIOs365081365081
12-bit ADC
Number of channels
## 1
## 10161016
Maximum CPU frequency100 MHz
Operating voltage 1.7 to 3.6 V
Operating temperatures
Ambient temperatures: - 40 to +85 °C / - 40 to + 105 °C/ - 40 to + 125 °C
Junction temperature: – 40 to + 130 °C
## Package
## WLCSP49
## UFQFPN48
## LQFP64
## UFBGA100
## LQFP100
## WLCSP49
## UFQFPN48
## LQFP64
## UFBGA100
## LQFP100

DescriptionSTM32F411xC STM32F411xE
14/151DS10314 Rev 8
2.1 Compatibility with STM32F4 series
The STM32F411xC/xE are fully software and feature compatible with the STM32F4 series
(STM32F42x, STM32F401, STM32F43x, STM32F41x, STM32F405 and STM32F407)
The STM32F411xC/xE can be used as a drop-in replacement of the other STM32F4
products but some slight changes have to be done on the PCB board.
Figure 1. Compatible board design for LQFP100 package
MSv37802V3
## 58
## 57
## 56
## 55
## 54
## 53
## 52
## 51
## PD11
## PD10
## PD9
## PD8
## PB15
## PB14
## PB13
## PB12
## PE10PE11PE12PE13PE14PE15PB10
## VCAP_1
## VSS
## VDD
## 41424344454647
PB11 not available anymore
Replaced by V
## CAP_1
## 58
## 57
## 56
## 55
## 54
## 53
## 52
## 51
## PD11
## PD10
## PD9
## PD8
## PB15
## PB14
## PB13
## PB12
## PE10PE11PE12PE13PE14PE15PB10
## VCAP_1
## VDD
## 4142434445464748
STM32F405/STM32F415 line
STM32F407/STM32F417 line
STM32F427/STM32F437 line
STM32F429/STM32F439 line
## VDDVSS
## PB11
## 50
## 50
## 49
## 48
## 49
STM32F401xx
STM32F410xx
STM32F411xx
STM32F412xx
STM32F413xx
STM32F423xx
STM32F446xx
## VDDVSS

DS10314 Rev 815/151
STM32F411xC STM32F411xEDescription
## 57
Figure 2. Compatible board design for LQFP64 package
MSv37803V3
## V
## CAP_1
increased to 4.7 μf
## (65RUEHORZ
## 670)670)OLQH
## VSS
## VSS
## VDD
## VDD
## 53 5 2 5 1 50 49
## 48
## 47
## 46
## 45
## 44
## 43
## 42
## 41
## 40
## 39
## 38
## 37
## 36
## 35
## 34
## 33
## 29 30 31
## 32
## 28
## PC12PC11PC10PA15PA14
## VDD
## VCAP_2
## PA13
## PA12
## PA11
## PA10
## PA9
## PA8
## PC9
## PC8
## PC7
## PC6
## PB15
## PB14
## PB13
## PB12
## PB2
## PB10
## VCAP_1
## VDD
## PB11
## 3%QRWDYDLODEOHDQ\PRUH
## 5HSODFHGE\9
## CAP_1
## 53 5 2 5 1 50 49
## 48
## 47
## 46
## 45
## 44
## 43
## 42
## 41
## 40
## 39
## 38
## 37
## 36
## 35
## 34
## 33
## 31
## 32
## 28
## PC12PC11PC10PA15PA14
## VDD
## VSS
## PA13
## PA12
## PA11
## PA10
## PA9
## PA8
## PC9
## PC8
## PC7
## PC6
## PB15
## PB14
## PB13
## PB12
## PB2
## PB10
## VCAP_1
## VDD
## VSS
## VDD
## VSS
## VSS
## VDD
STM32F401xx
STM32F410xx
STM32F411xx
STM32F412xx
STM32F413xx
STM32F423xx
STM32F446xx
## 2930

DescriptionSTM32F411xC STM32F411xE
16/151DS10314 Rev 8
Figure 3. STM32F411xC/xE block diagram
-   The timers connected to APB2 are clocked from TIMxCLK up to 100 MHz, while the timers connected to APB1 are clocked
from TIMxCLK up to 100 MHz.
MSv34920V2
## GPIO PORT A
## AHB/ APB2
## EXT IT. WKUP
up to 81 AF
## PA[15:0]
## TIM1 / PWM
3 compl. channels TIM1_CH1[1:3]N,
4 channels TIM1_CH1[1:4]ETR,
BKIN as AF
## USART1
## RX, TX, CK,
CTS, RTS as AF
## SPI1/I2S1
APB2 60 MHz
APB1 30MHz
16 analog inputs
## VDDREF_ADC
MOSI/SD, MISO/SD_ext,
## SCK/CK, NSS/WS,
## SP3/I2S3
## ALARM_OUT
## OSC32_IN
## OSC32_OUT
## VDDA, VSSA
## NRST
smcard
irDA
## 16b
VBAT = 1.65 to 3.6 V
## DMA2
SCL, SDA, SMBA as AF
## I2C3/SMBUS
## JTAG & SW
ARM Cortex-M4
100 MHz
## NVIC
## ETM
## MPU
## TRACECLK
## TRACED[3:0]
## DMA2
## 8 Streams
## FIFO
## ACCEL/
## CACHE
AHB1 100 MHz
USAR T 2MBps
Temperature sensor
## ADC1
## IF
## @VDDA
## POR/PDR
## BOR
## Supply
supervision
## @ V DDA
## PVD
## Int
## POR
reset
XTAL 32 kHz
## MAN AGT
## RTC
## RC   HS
## RC   L S
## PWR
interface
## WDG 32K
## @V
## BAT
## @
## V
## DDA
## @VDD
## AWU
## Reset &
clock
control
## P L L1&2
## APB2CLK
VDD = 1.7 to 3.6 V
## VSS
## VCAP
## Voltage
regulator
3.3 to 1.2 V
## VDD
Power managmt
## @
## V
## DD
## STAMP1
Backup register
AHB bus-matrix 7S4M
APB2 100 MHz
## LS
## TIM9
2 channels as AF
512 KB Flash
## TIM2
## TIM3
## TIM4
## TIM5
## D-BUS
## FPU
APB1 50  MHz (max)
AHB2 100 MHz
## NJTRST, JTDI,
## JTCK/SWCLK
## JTDO/SWD, JTDO
## I-BUS
## S-BUS
## DMA1
## 8 Streams
## FIFO
## PB[15:0]
## PC[15:0]
## PH[1:0]
## GPIO PORT B
## GPIO PORT C
## GPIO PORT H
## 16b
## TIM10
## 16b
## TIM11
## 16b
smcard
irDA
## USART6
1 channel as AF
1 channel as AF
RX, TX, CK as AF
## I2C2/SMBUS
## I2C1/SMBUS
SCL, SDA, SMBA as AF
SCL, SDA, SMBA as AF
## SP2/I2S2
MOSI/SD, MISO/SD_ext,
## SCK/CK, NSS/WS,
RX, TX as AF
CTS, RTS as AF
## USART2
smcard
irDA
## 32b
## 16b
## 16b
## 32b
4 channels
4 channels, ETR as AF
4 channels, ETR as AF
4 channels, ETR as AF
## DMA1
## AHB/ APB1
## LS
## OSC_IN
## OSC_OUT
## HCLK
## XTAL OSC
4- 16MHz
## 128 KB SRAM
## WWDG
## APB1CLK
## AHB1PCLK
## AHB2PCLK
## CRC
## (PDR OFF)
1.8 to 3.6 V
## (PDR ON)
## SDIO / MMC
## FIFO
## D[7:0]
CMD, CK as AF
## USB
## OTG FS
## FIFO
## PHY
## DP
## DM
## ID, VBUS, SOF
## SPI4/I2S4
## MOSI/SD, MISO, SCK/CK,
NSS/WS as AF
## PD[15:0]
## GPIO PORT D
## PE[15:0]
## GPIO PORT E
## MOSI/SD, MISO, SCK/CK,
NSS/WS as AF
## SPI5/I2S5
## MOSI/SD, MISO, SCK/CK,
NSS/WS as AF
MCK as AF
MCK as AF

DS10314 Rev 817/151
STM32F411xC STM32F411xEFunctional overview
## 57
3           Functional           overview
## 3.1          Arm
## ®
## Cortex
## ®
-M4 with FPU core with embedded
flash memory and SRAM
## The Arm
## ®
## Cortex
## ®
-M4 with FPU processor is the latest generation of Arm processors for
embedded systems. It was developed to provide a low-cost platform that meets the needs of
MCU implementation, with a reduced pin count and low-power consumption, while
delivering outstanding computational performance and an advanced response to interrupts.
## The Arm
## ®
## Cortex
## ®
-M4 with FPU 32-bit RISC processor features exceptional code-
efficiency, delivering the high-performance expected from an Arm core in the memory size
usually associated with 8- and 16-bit devices. The processor supports a set of DSP
instructions, which allow efficient signal processing and complex algorithm execution. Its
single precision FPU (floating-point unit) speeds up software development by using
metalanguage development tools, while avoiding saturation.
The STM32F411xC/xE devices are compatible with all Arm tools and software.
Figure 3 shows the general block diagram of the STM32F411xC/xE.
Note:Cortex
## ®
-M4 with FPU is binary compatible with Cortex
## ®
## -M3.
3.2 Adaptive real-time memory accelerator (ART Accelerator)
The ART Accelerator is a memory accelerator, which is optimized for STM32 industry-
standard Arm
## ®
## Cortex
## ®
-M4 with FPU processors. It balances the inherent performance
advantage of the Arm
## ®
## Cortex
## ®
-M4 with FPU over flash memory technologies, which
normally requires the processor to wait for the flash memory at higher frequencies.
To release the processor full 105 DMIPS performance at this frequency, the accelerator
implements an instruction prefetch queue and branch cache, which increases program
execution speed from the -bit flash memory. Based on CoreMark benchmark, the
performance achieved thanks to the ART Accelerator is equivalent to 0 wait state program
execution from flash memory at a CPU frequency up to 100 MHz.
3.3 Batch acquisition mode (BAM)
The batch acquisition mode allows enhanced power efficiency during data batching. It
enables data acquisition through any communication peripherals directly to memory using
the DMA in reduced power consumption as well as data processing while the rest of the
system is in low-power mode (including the flash and ART). For example in an audio
system, a smart combination of PDM audio sample acquisition and processing from the I2S
directly to RAM (flash and ART
™ stopped) with the DMA using BAM followed by some very
short processing from flash allows to drastically reduce the power consumption of the
application. A dedicated application note (AN4515) describes how to implement the BAM to
allow the best power efficiency.

Functional overviewSTM32F411xC STM32F411xE
18/151DS10314 Rev 8
3.4 Memory protection unit
The memory protection unit (MPU) is used to manage the CPU accesses to memory to
prevent one task to accidentally corrupt the memory or resources used by any other active
task. This memory area is organized into up to eight protected areas that can in turn be
divided up into eight subareas. The protection area sizes are between 32 bytes and the
whole 4 gigabytes of addressable memory.
The MPU is especially helpful for applications where some critical or certified code has to be
protected against the misbehavior of other tasks. It is usually managed by an RTOS (real-
time operating system). If a program accesses a memory location that is prohibited by the
MPU, the RTOS can detect it and take action. In an RTOS environment, the kernel can
dynamically update the MPU area setting, based on the process to be executed.
The MPU is optional and can be bypassed for applications that do not need it.
3.5 Embedded flash memory
The devices embed up to 512 Kbytes of flash memory available for storing programs and
data.
To optimize the power consumption the flash memory can also be switched off in Run or in
Sleep mode (see Section 3.18: Low-power modes). Two modes are available: Flash in Stop
mode or in DeepSleep mode (trade off between power saving and startup time, see
Table 34: Low-power mode wakeup timings
## (1)
). Before disabling the flash memory, the code
must be executed from the internal RAM. One-time programmable bytes
A one-time programmable area is available with 16 OTP blocks of 32 bytes. Each block can
be individually locked.
(Additional information can be found in the product reference manual.)
3.6 CRC (cyclic redundancy check) calculation unit
The CRC (cyclic redundancy check) calculation unit is used to get a CRC code from a 32-bit
data word and a fixed generator polynomial.
Among other applications, CRC-based techniques are used to verify data transmission or
storage integrity. In the scope of the EN/IEC 60335-1 standard, they offer a means of
verifying the flash memory integrity. The CRC calculation unit helps compute a software
signature during runtime, to be compared with a reference signature generated at link-time
and stored at a given memory location.
3.7          Embedded          SRAM
All devices embed:
•128 Kbytes of system SRAM, which can be accessed (read/write) at CPU clock speed
with 0 wait states

DS10314 Rev 819/151
STM32F411xC STM32F411xEFunctional overview
## 57
3.8          Multi-AHB          bus          matrix
The 32-bit multi-AHB bus matrix interconnects all the masters (CPU, DMAs) and the slaves
(flash memory, RAM, AHB and APB peripherals) and ensures a seamless and efficient
operation even when several high-speed peripherals work simultaneously.
Figure 4. Multi-AHB matrix
3.9          DMA          controller          (DMA)
The devices feature two general-purpose dual-port DMAs (DMA1 and DMA2) with 8
streams each. They are able to manage memory-to-memory, peripheral-to-memory, and
memory-to-peripheral transfers. They feature dedicated FIFOs for APB/AHB peripherals,
support burst transfer and are designed to provide the maximum peripheral bandwidth
## (AHB/APB).
The two DMA controllers support circular buffer management, so that no specific code is
needed when the controller reaches the end of the buffer. The two DMA controllers also
have a double buffering feature, which automates the use and switching of two memory
buffers without requiring any special code.
Each stream is connected to dedicated hardware DMA requests, with support for software
trigger on each stream. Configuration is made by software and transfer sizes between
source and destination are independent.
## ARM
Cortex-M4
## GP
## DMA1
## GP
## DMA2
Bus matrix-S
## S0S1S2S3S4S5
## ICODE
## DCODE
## ACCEL
## Flash
512 kB
## SRAM1
## 128 Kbytes
## AHB
periph2
## M0
## M1
## M2
## M4
## I-bus
## D-bus
## S-bus
## DMA_PI
## DMA_MEM1
## DMA_MEM2
## DMA_P2
## MS34921V1
## M3
## AHB
periph1
## APB1
## APB2

Functional overviewSTM32F411xC STM32F411xE
20/151DS10314 Rev 8
The DMA can be used with the main peripherals:
•SPI and I
## 2
## S
## •I
## 2
## C
## •USART
•General-purpose, basic and advanced-control timers TIMx
•SD/SDIO/MMC/eMMC host interface
## •ADC
3.10 Nested vectored interrupt controller (NVIC)
The devices embed a nested vectored interrupt controller able to manage 16 priority levels,
and handle up to 62 maskable interrupt channels plus the 16 interrupt lines of the Cortex
## ®
## -
M4 with FPU.
•Closely coupled NVIC gives low-latency interrupt processing
•Interrupt entry vector table address passed directly to the core
•Allows early processing of interrupts
•Processing of late arriving, higher-priority interrupts
•Support tail chaining
•Processor state automatically saved
•Interrupt entry restored on interrupt exit with no instruction overhead
This hardware block provides flexible interrupt management features with minimum interrupt
latency.
3.11        External        interrupt/event controller (EXTI)
The external interrupt/event controller consists of 21 edge-detector lines used to generate
interrupt/event requests. Each line can be independently configured to select the trigger
event (rising edge, falling edge, both) and can be masked independently. A pending register
maintains the status of the interrupt requests. The EXTI can detect an external line with a
pulse width shorter than the Internal APB2 clock period. Up to 81 GPIOs can be connected
to the 16 external interrupt lines.
3.12 Clocks and startup
On reset the 16 MHz internal RC oscillator is selected as the default CPU clock. The
16 MHz internal RC oscillator is factory-trimmed to offer 1% accuracy at 25 °C. The
application can then select as system clock either the RC oscillator or an external 4-26 MHz
clock source. This clock can be monitored for failure. If a failure is detected, the system
automatically switches back to the internal RC oscillator and a software interrupt is
generated (if enabled). This clock source is input to a PLL thus allowing to increase the
frequency up to 100 MHz. Similarly, full interrupt management of the PLL clock entry is
available when necessary (for example if an indirectly used external oscillator fails).
Several prescalers allow the configuration of the two AHB buses, the high-speed APB
(APB2) and the low-speed APB (APB1) domains. The maximum frequency of the two AHB

DS10314 Rev 821/151
STM32F411xC STM32F411xEFunctional overview
## 57
buses is 100 MHz while the maximum frequency of the high-speed APB domains is
100 MHz. The maximum allowed frequency of the low-speed APB domain is 50 MHz.
The devices embed a dedicated PLL (PLLI2S), which allows to achieve audio class
performance. In this case, the I
## 2
S master clock can generate all standard sampling
frequencies from 8 kHz to 192 kHz.
3.13        Boot        modes
At startup, boot pins are used to select one out of three boot options:
•Boot from user flash memory
•Boot from system memory
•Boot from embedded SRAM
The bootloader is located in system memory. It is used to reprogram the flash memory by
using USART1(PA9/10), USART2(PD5/6), USB OTG FS in device mode (PA11/12) through
DFU (device firmware upgrade), I2C1(PB6/7), I2C2(PB10/3), I2C3(PA8/PB4),
SPI1(PA4/5/6/7), SPI2(PB12/13/14/15) or SPI3(PA15, PC10/11/12).
For more detailed information on the bootloader, refer to Application Note: AN2606, STM32
microcontroller system memory boot mode.
3.14        Power        supply        schemes
•VDD = 1.7 to 3.6 V: external power supply for I/Os with the internal supervisor
(POR/PDR) disabled, provided externally through VDD pins. Requires the use of an
external power supply supervisor connected to the VDD and NRST pins.
## •V
## SSA
## , V
## DDA
= 1.7 to 3.6 V: external analog power supplies for ADC, Reset blocks, RCs,
and PLL. V
## DDA
and V
## SSA
must be connected to V
## DD
and V
## SS
, respectively, with
decoupling technique.
## •V
## BAT
= 1.65 to 3.6 V: power supply for RTC, external clock 32 kHz oscillator and
backup registers (through power switch) when V
## DD
is not present.
Refer to Figure 17: Power supply scheme for more details.

Functional overviewSTM32F411xC STM32F411xE
22/151DS10314 Rev 8
3.15        Power        supply        supervisor
3.15.1       Internal       reset       ON
This feature is available for V
## DD
operating voltage range 1.8 V to 3.6 V.
The internal power supply supervisor is enabled by holding PDR_ON high.
The devices have an integrated power-on reset (POR) / power-down reset (PDR) circuitry
coupled with a brownout reset (BOR) circuitry. At power-on, POR is always active, and
ensures proper operation starting from 1.8 V. After the 1.8 V POR threshold level is
reached, the option byte loading process starts, either to confirm or modify default
thresholds, or to disable BOR permanently. Three BOR thresholds are available through
option bytes.
The devices remain in reset mode when V
## DD
is below a specified threshold, VPOR/PDR, or
## V
## BOR
, without the need for an external reset circuit.
The devices also feature an embedded programmable voltage detector (PVD) that monitors
the V
## DD
## /V
## DDA
power supply and compares it to the V
## PVD
threshold. An interrupt can be
generated when V
## DD
## /V
## DDA
drops below the V
## PVD
threshold and/or when V
## DD
## /V
## DDA
is
higher than the V
## PVD
threshold. The interrupt service routine can then generate a warning
message and/or put the MCU into a safe state. The PVD is enabled by software.
3.15.2       Internal       reset       OFF
This feature is available only on packages featuring the PDR_ON pin. The internal power-on
reset (POR) / power-down reset (PDR) circuitry is disabled by setting the PDR_ON pin to
low.
An external power supply supervisor should monitor V
## DD
and should set the device in reset
mode when V
## DD
is below 1.7 V. NRST should be connected to this external power supply
supervisor. Refer to Figure 5.

Figure 5. Power supply supervisor interconnection with internal reset OFF
## (1)
-   The PRD_ON pin is only available on the WLCSP49 and UFBGA100 packages.

MSv34975V1
## PDR_ON
## V
## DD
## NRST
## External V
## DD
power supply supervisor
Ext. reset controller active when
## V
## DD
## < 1.7 V
## V
## DD

DS10314 Rev 823/151
STM32F411xC STM32F411xEFunctional overview
## 57
A comprehensive set of power-saving mode allows to design low-power applications.
When the internal reset is OFF, the following integrated features are no longer supported:
•The integrated power-on reset (POR) / power-down reset (PDR) circuitry is disabled.
•The brownout reset (BOR) circuitry must be disabled.
•The embedded programmable voltage detector (PVD) is disabled.
## •V
## BAT
functionality is no more available and the VBAT pin should be connected to V
## DD
## .
3.16        Voltage        regulator
The regulator has four operating modes:
•Regulator ON
–Main regulator mode (MR)
–Low power regulator (LPR)
–Power-down
•Regulator OFF
3.16.1       Regulator       ON
On packages embedding the BYPASS_REG pin, the regulator is enabled by holding
BYPASS_REG low. On all other packages, the regulator is always enabled.
There are three power modes configured by software when the regulator is ON:
•MR is used in the nominal regulation mode (With different voltage scaling in Run)
In Main regulator mode (MR mode), different voltage scaling are provided to reach the
best compromise between maximum frequency and dynamic power consumption.
•LPR is used in the Stop modes
The LP regulator mode is configured by software when entering Stop mode.
•Power-down is used in Standby mode.
The Power-down mode is activated only when entering in Standby mode. The regulator
output is in high impedance and the kernel circuitry is powered down, inducing zero
consumption. The contents of the registers and SRAM are lost.
Depending on the package, one or two external ceramic capacitors should be connected on
the V
## CAP_1

and V
## CAP_2

pins. The V
## CAP_2
pin is only available for the LQFP100 and
UFBGA100 packages.
All packages have the regulator ON feature.
3.16.2       Regulator       OFF
The Regulator OFF is available only on the UFBGA100, which features the BYPASS_REG
pin. The regulator is disabled by holding BYPASS_REG high. The regulator OFF mode
allows to supply externally a V12 voltage source through V
## CAP_1
and V
## CAP_2
pins.
Since the internal voltage scaling is not managed internally, the external voltage value must
be aligned with the targeted maximum frequency. Refer to Table 14: General operating
conditions.
The two 2.2 μF V
## CAP
ceramic capacitors should be replaced by two 100 nF decoupling
capacitors. Refer to Figure 17: Power supply scheme.

Functional overviewSTM32F411xC STM32F411xE
24/151DS10314 Rev 8
When the regulator is OFF, there is no more internal monitoring on V12. An external power
supply supervisor should be used to monitor the V12 of the logic power domain. PA0 pin
should be used for this purpose, and act as a power-on reset on the V12 power domain.
In regulator OFF mode, the following features are no more supported:
•PA0 cannot be used as a GPIO pin since it allows to reset a part of the V12 logic power
domain, which is not reset by the NRST pin.
•As long as PA0 is kept low, the debug mode cannot be used under power-on reset. As
a consequence, PA0 and NRST pins must be managed separately if the debug
connection under reset or prereset is required.
Figure 6. Regulator OFF
The following conditions must be respected:
## •V
## DD
should always be higher than V
## CAP_1
and V
## CAP_2
to avoid current injection
between power domains.
•If the time for V
## CAP_1
and V
## CAP_2
to reach V
## 12
minimum value is faster than the time for
## V
## DD
to reach 1.7 V, then PA0 should be kept low to cover both conditions: until V
## CAP_1

and V
## CAP_2
reach V
## 12
minimum value and until V
## DD
reaches 1.7 V (see Figure 7).
•Otherwise, if the time for V
## CAP_1
and V
## CAP_2
to reach the V
## 12
minimum value is slower
than the time for V
## DD
to reach 1.7 V, then PA0 could be asserted low externally (see
## Figure 8).
•If V
## CAP_1
and V
## CAP_2
go below V
## 12
minimum value and V
## DD
is higher than 1.7 V, then a
reset must be asserted on PA0 pin.
Note:The minimum value of V
## 12
depends on the maximum frequency targeted in the application
ai18498V3
## BYPASS_REG
## V
## CAP_1
## V
## CAP_2
## PA0
## V12
## V
## DD
## NRST
## V
## DD
Application reset
signal (optional)
## External V
## CAP_1/2
power
supply supervisor
Ext. reset controller active
when V
## CAP_1/2
## < Min V
## 12

## V12

DS10314 Rev 825/151
STM32F411xC STM32F411xEFunctional overview
## 57
Figure 7. Startup in regulator OFF: slow V
## DD
slope -
power-down reset risen after V
## CAP_1
## /V
## CAP_2
stabilization
-   This figure is valid whatever the internal reset mode (ON or OFF).
Figure 8. Startup in regulator OFF mode: fast V
## DD
slope -
power-down reset risen before V
## CAP_1
## /V
## CAP_2
stabilization
-   This figure is valid whatever the internal reset mode (ON or OFF).
MSv31179V1
## V
## DD
time
## Min V
## 12
## PDR = 1.7 V
## V
## CAP_1
## /V
## CAP_2
## V
## 12
## NRST
time
## V
## DD
time
## Min V
## 12
## V
## CAP_1
## /V
## CAP_2
## V
## 12
PA0 asserted externally
## NRST
time
MSv31180V1
## PDR = 1.7 V

Functional overviewSTM32F411xC STM32F411xE
26/151DS10314 Rev 8
3.16.3 Regulator ON/OFF and internal power supply supervisor availability

3.17        Real-time        clock        (RTC) and backup registers
The backup domain includes:
•The real-time clock (RTC)
•20 backup registers
The real-time clock (RTC) is an independent BCD timer/counter. Dedicated registers contain
the second, minute, hour (in 12/24 hour), week day, date, month, year, in BCD (binary-
coded decimal) format. Correction for 28
th
## , 29
th
(leap year), 30
th
, and 31
st
day of the month
are performed automatically. The RTC features a reference clock detection, a more precise
second source clock (50 or 60 Hz) can be used to enhance the calendar precision. The RTC
provides a programmable alarm and programmable periodic interrupts with wakeup from
Stop and Standby modes. The subseconds value is also available in binary format.
It is clocked by a 32.768 kHz external crystal, resonator or oscillator, the internal low-power
RC oscillator or the high-speed external clock divided by 128. The internal low-speed RC
has a typical frequency of 32 kHz. The RTC can be calibrated using an external 512 Hz
output to compensate for any natural quartz deviation.
Two alarm registers are used to generate an alarm at a specific time and calendar fields can
be independently masked for alarm comparison. To generate a periodic interrupt, a 16-bit
programmable binary autoreload downcounter with programmable resolution is available
and allows automatic wakeup and periodic alarms from every 120 μs to every 36 hours.
A 20-bit prescaler is used for the time base clock. It is by default configured to generate a
time base of 1 second from a clock at 32.768 kHz.
The backup registers are 32-bit registers used to store 80 bytes of user application data
when V
## DD
power is not present. Backup registers are not reset by a system, a power reset,
or when the device wakes up from the Standby mode (see Section 3.18).
Additional 32-bit registers contain the programmable alarm subseconds, seconds, minutes,
hours, day, and date.
The RTC and backup registers are supplied through a switch that is powered either from the
## V
## DD
supply when present or from the V
## BAT
pin.
Table 3. Regulator ON/OFF and internal power supply supervisor availability
PackageRegulator ONRegulator OFF
Power supply
supervisor ON
Power supply
supervisor OFF
UFQFPN48YesNoYesNo
WLCSP49YesNo
Ye s
PDR_ON set to VDD
Ye s
PDR_ON external
control
## (1)
LQFP64YesNoYesNo
LQFP100YesNoYesNo
## UFBGA100
Ye s
BYPASS_REG set to
## VSS
Ye s
BYPASS_REG set to
## VDD
Ye s
PDR_ON set to VDD
Ye s
PDR_ON external
control
## (1)
-   Refer to Section 3.15: Power supply supervisor

DS10314 Rev 827/151
STM32F411xC STM32F411xEFunctional overview
## 57
3.18        Low-power        modes
The devices support three low-power modes to achieve the best compromise between low
power consumption, short startup time and available wakeup sources:
•Sleep mode
In Sleep mode, only the CPU is stopped. All peripherals continue to operate and can
wake up the CPU when an interrupt/event occurs.
To further reduce the power consumption, the flash memory can be switched off before
entering in Sleep mode. Note that this requires a code execution from the RAM.
•Stop mode
The Stop mode achieves the lowest power consumption while retaining the contents of
SRAM and registers. All clocks in the 1.2 V domain are stopped, the PLL, the HSI RC
and the HSE crystal oscillators are disabled. The voltage regulator can also be put
either in normal or in low-power mode.
The devices can be woken up from the Stop mode by any of the EXTI lines (the EXTI
line source can be one of the 16 external lines, the PVD output, the RTC alarm/
wakeup/ tamper/ time stamp events).
•Standby mode
The Standby mode is used to achieve the lowest power consumption. The internal
voltage regulator is switched off so that the entire 1.2 V domain is powered off. The
PLL, the HSI RC and the HSE crystal oscillators are also switched off. After entering
Standby mode, the SRAM and register contents are lost except for registers in the
backup domain when selected.
The devices exit the Standby mode when an external reset (NRST pin), an IWDG reset,
a rising edge on the WKUP pin, or an RTC alarm/ wakeup/ tamper/time stamp event
occurs.
Standby mode is not supported when the embedded voltage regulator is bypassed and
the 1.2 V domain is controlled by an external power.
## 3.19        V
## BAT
operation
The VBAT pin allows to power the device V
## BAT
domain from an external battery, an external
super-capacitor, or from V
## DD
when no external battery and an external super-capacitor are
present.
## V
## BAT
operation is activated when V
## DD
is not present.
The VBAT pin supplies the RTC and the backup registers.
Note:When the microcontroller is supplied from VBAT, external interrupts and RTC alarm/events
do not exit it from V
## BAT
operation. When PDR_ON pin is not connected to V
## DD
## (internal
Reset OFF), the V
## BAT
functionality is no more available and VBAT pin should be connected
to V
## DD
## .

Functional overviewSTM32F411xC STM32F411xE
28/151DS10314 Rev 8
3.20 Timers and watchdogs
The devices embed one advanced-control timer, seven general-purpose timers, and two
watchdog timers.
All timer counters can be frozen in debug mode.
Ta b l e 4 compares the features of the advanced-control and general-purpose timers.

3.20.1       Advanced-control       timers       (TIM1)
The advanced-control timer (TIM1) can be seen as three-phase PWM generators
multiplexed on four independent channels. It has complementary PWM outputs with
programmable inserted dead times. It can also be considered as a complete general-
purpose timer. Its four independent channels can be used for:
•Input capture
•Output compare
•PWM generation (edge- or center-aligned modes)
•One-pulse mode output
Table 4. Timer feature comparison
## Timer
type
## Timer
## Counter
resolution
## Counter
type
## Prescaler
factor
## DMA
request
generation
## Capture/
compare
channels
## Complemen-
tary output
## Max.
interface
clock
(MHz)
## Max.
timer
clock
(MHz)
## Advanced
## -control
TIM116-bit
## Up,
## Down,
## Up/down
## Any
integer
between 1
and
## 65536
Yes4Yes100100
## General
purpose
## TIM2,
## TIM5
## 32-bit
## Up,
## Down,
## Up/down
## Any
integer
between 1
and
## 65536
Yes4No50100
## TIM3,
## TIM4
## 16-bit
## Up,
## Down,
## Up/down
## Any
integer
between 1
and
## 65536
Yes4No50100
TIM916-bitUp
## Any
integer
between 1
and
## 65536
No2No100100
## TIM10,
## TIM11
16-bitUp
## Any
integer
between 1
and
## 65536
No1No100100

DS10314 Rev 829/151
STM32F411xC STM32F411xEFunctional overview
## 57
If configured as a standard 16-bit timers, it has the same features as the general-purpose
TIMx timers. If configured as a 16-bit PWM generator, it has full modulation capability
## (0-100%).
The advanced-control timer can work together with the TIMx timers via the Timer Link
feature for synchronization or event chaining.
TIM1 supports independent DMA request generation.
3.20.2       General-purpose       timers       (TIMx)
There are seven synchronizable general-purpose timers embedded in the
STM32F411xC/xE (see Table 4 for differences).
## •TIM2, TIM3, TIM4, TIM5
The STM32F411xC/xE devices are 4 full-featured general-purpose timers: TIM2, TIM5,
TIM3, and TIM4.The TIM2 and TIM5 timers are based on a 32-bit autoreload
up/downcounter and a 16-bit prescaler. The TIM3 and TIM4 timers are based on a 16-
bit autoreload up/downcounter and a 16-bit prescaler. They all feature four independent
channels for input capture/output compare, PWM or one-pulse mode output. This gives
up to 15 input capture/output compare/PWMs.
The TIM2, TIM3, TIM4, TIM5 general-purpose timers can work together, or with the
other general-purpose timers and the advanced-control timer TIM1 via the timer Link
feature for synchronization or event chaining.
Any of these general-purpose timers can be used to generate PWM outputs.
TIM2, TIM3, TIM4, TIM5 all have independent DMA request generation. They are
capable of handling quadrature (incremental) encoder signals and the digital outputs
from 1 to 4 hall-effect sensors.
•TIM9, TIM10, and TIM11
These timers are based on a 16-bit autoreload upcounter and a 16-bit prescaler. TIM10
and TIM11 feature one independent channel, whereas TIM9 has two independent
channels for input capture/output compare, PWM or one-pulse mode output. They can
be synchronized with the TIM2, TIM3, TIM4, TIM5 full-featured general-purpose timers.
They can also be used as simple time bases.
3.20.3       Independent       watchdog
The independent watchdog is based on a 12-bit downcounter and 8-bit prescaler. It is
clocked from an independent 32 kHz internal RC and as it operates independently from the
main clock, it can operate in Stop and Standby modes. It can be used either as a watchdog
to reset the device when a problem occurs, or as a free-running timer for application timeout
management. It is hardware- or software-configurable through the option bytes.
3.20.4       Window       watchdog
The window watchdog is based on a 7-bit downcounter that can be set as free-running. It
can be used as a watchdog to reset the device when a problem occurs. It is clocked from
the main clock. It has an early warning interrupt capability and the counter can be frozen in
debug mode.

Functional overviewSTM32F411xC STM32F411xE
30/151DS10314 Rev 8
3.20.5       SysTick       timer
This timer is dedicated to real-time operating systems, but could also be used as a standard
downcounter. It features:
•A 24-bit downcounter
•Auto reload capability
•Maskable system interrupt generation when the counter reaches 0
•Programmable clock source.
3.21        Inter-integrated        circuit interface (I
## 2
## C)
Up to three I
## 2
C bus interfaces can operate in multimaster and slave modes. They can
support the standard (up to 100 kHz) and fast (up to 400 kHz) modes. The I2C bus
frequency can be increased up to 1 MHz. For more details about the complete solution,
please contact your local ST sales representative. They also support the 7/10-bit addressing
mode and the 7-bit dual addressing mode (as slave). A hardware CRC
generation/verification is embedded.
They can be served by DMA and they support SMBus 2.0/PMBus.
The devices also include programmable analog and digital noise filters (see Ta b l e 5).

3.22        Universal        synchronous/asynchronous receiver transmitters
## (USART)
The devices embed three universal synchronous/asynchronous receiver transmitters
(USART1, USART2, and USART6).
These three interfaces provide asynchronous communication, IrDA SIR ENDEC support,
multiprocessor communication mode, single-wire half-duplex communication mode and
have LIN Master/Slave capability. The USART1 and USART6 interfaces are able to
communicate at speeds of up to 12.5 Mbit/s. The USART2 interface communicates at up to
6.25 bit/s.
USART1 and USART2 also provide hardware management of the CTS and RTS signals,
smartcard mode (ISO 7816 compliant) and SPI-like communication capability. All interfaces
can be served by the DMA controller.
Table 5. Comparison of I2C analog and digital filters
-Analog filterDigital filter
Pulse width of
suppressed spikes
≥ 50 nsProgrammable length from 1 to 15 I2C peripheral clocks

DS10314 Rev 831/151
STM32F411xC STM32F411xEFunctional overview
## 57

3.23 Serial peripheral interface (SPI)
The devices feature five SPIs in slave and master modes in full-duplex and simplex
communication modes. SPI1, SPI4, and SPI5 can communicate at up to 50 Mbit/s, SPI2
and SPI3 can communicate at up to 25 Mbit/s. The 3-bit prescaler gives 8 master mode
frequencies and the frame is configurable to 8 bits or 16 bits. The hardware CRC
generation/verification supports basic SD Card/MMC modes. All SPIs can be served by the
DMA controller.
The SPI interface can be configured to operate in TI mode for communications in master
mode and slave mode.
3.24        Inter-integrated sound (I
## 2
## S)
Five standard I
## 2
S interfaces (multiplexed with SPI1 to SPI5) are available. They can be
operated in master or slave mode, in simplex communication modes and full duplex for I2S2
and I2S3 and can be configured to operate with a 16-/32-bit resolution as an input or output
channel. All the I2Sx audio sampling frequencies from 8 kHz up to 192 kHz are supported.
When either or both of the I
## 2
S interfaces is/are configured in master mode, the master clock
can be output to the external DAC/CODEC at 256 times the sampling frequency.
## All I
## 2
Sx can be served by the DMA controller.
3.25        Audio        PLL        (PLLI2S)
The devices feature an additional dedicated PLL for audio I
## 2
S application, making it
possible to achieve error-free I
## 2
S sampling clock accuracy without compromising on the
CPU performance.
The PLLI2S configuration can be modified to manage an I
## 2
S sample rate change without
disabling the main PLL (PLL) used for the CPU.
The audio PLL can be programmed with very low error to obtain sampling rates ranging
from 8 kHz to 192 kHz.
Table 6. USART feature comparison
## USART
name
## Standard
features
## Modem
## (RTS/CTS)
## LIN
## SPI
master
irDA
## Smartcard
## (ISO 7816)
Max. baud
rate in Mbit/s
## (oversampling
by 16)
Max. baud
rate in Mbit/s
## (oversampling
by 8)
## APB
mapping
## USART1XXXXXX6.2512.5
## APB2
## (max.
100 MHz)
## USART2XXXXXX3.126.25
## APB1
## (max.
50 MHz)
## USART6XN.AXXXX6.2512.5
## APB2
## (max.
100 MHz)

Functional overviewSTM32F411xC STM32F411xE
32/151DS10314 Rev 8
In addition to the audio PLL, a master clock input pin can be used to synchronize the I2S
flow with an external PLL (or Codec output).
3.26        Secure        digital        input/output interface (SDIO)
An SD/SDIO/MMC/eMMC host interface is available that supports MultiMediaCard System
Specification Version 4.2 in three different databus modes: 1-bit (default), 4-bit and 8-bit.
The interface allows data transfer at up to 50 MHz, and is compliant with the SD memory
card specification version 2.0.
The SDIO Card Specification Version 2.0 is also supported with two different databus
modes: 1-bit (default) and 4-bit.
The current version supports only one SD/SDIO/MMC4.2 card at any one time and a stack
of MMC4.1 or previous.
In addition to SD/SDIO/MMC/eMMC, this interface is fully compliant with the CE-ATA digital
protocol Rev1.1.
3.27 Universal serial bus on-the-go full-speed (OTG_FS)
The devices embed a USB OTG full-speed device/host/OTG peripheral with integrated
transceivers. The USB OTG FS peripheral is compliant with the USB 2.0 specification and
with the OTG 1.0 specification. It has software-configurable endpoint setting and supports
suspend/resume. The USB OTG full-speed controller requires a dedicated 48 MHz clock
that is generated by a PLL connected to the HSE oscillator. The major features are:
•Combined Rx and Tx FIFO size of 320 × 35 bits with dynamic FIFO sizing
•Supports the session request protocol (SRP) and host negotiation protocol (HNP)
•4 bidirectional endpoints
•8 host channels with periodic OUT support
•HNP/SNP/IP inside (no need for any external resistor)
•For OTG/Host modes, a power switch is needed in case bus-powered devices are
connected
3.28        General-purpose        input/outputs (GPIOs)
Each of the GPIO pins can be configured by software as output (push-pull or open-drain,
with or without pull-up or pull-down), as input (floating, with or without pull-up or pull-down)
or as peripheral alternate function. Most of the GPIO pins are shared with digital or analog
alternate functions. All GPIOs are high-current-capable and have speed selection to better
manage internal noise, power consumption and electromagnetic emission.
The I/O configuration can be locked if needed by following a specific sequence to avoid
spurious writing to the I/Os registers.
Fast I/O handling allowing maximum I/O toggling up to
100MHz.

DS10314 Rev 833/151
STM32F411xC STM32F411xEFunctional overview
## 57
3.29 Analog-to-digital converter (ADC)
One 12-bit analog-to-digital converter is embedded and shares up to 16 external channels,
performing conversions in the single-shot or scan mode. In scan mode, automatic
conversion is performed on a selected group of analog inputs.
The ADC can be served by the DMA controller. An analog watchdog feature allows very
precise monitoring of the converted voltage of one, some or all selected channels. An
interrupt is generated when the converted voltage is outside the programmed thresholds.
To synchronize A/D conversion and timers, the ADCs could be triggered by any of the TIM1,
TIM2, TIM3, TIM4, or TIM5 timer.
3.30        Temperature        sensor
The temperature sensor has to generate a voltage that varies linearly with temperature. The
conversion range is between 1.7 V and 3.6 V. The temperature sensor is internally
connected to the ADC_IN18 input channel, which is used to convert the sensor output
voltage into a digital value. Refer to the reference manual for additional information.
As the offset of the temperature sensor varies from chip to chip due to process variation, the
internal temperature sensor is mainly suitable for applications that detect temperature
changes instead of absolute temperatures. If an accurate temperature reading is needed,
then an external temperature sensor part should be used.
3.31 Serial wire JTAG debug port (SWJ-DP)
The Arm SWJ-DP interface is embedded, and is a combined JTAG and serial wire debug
port that enables either a serial wire debug or a JTAG probe to be connected to the target.
Debug is performed using 2 pins only instead of the five reuse as GPIO with the alternate
function): the JTAG TMS and TCK pins are shared with SWDIO and SWCLK, respectively,
and a specific sequence on the TMS pin is used to switch between JTAG-DP and SW-DP.
## 3.32 Embedded Trace Macrocell™
The Arm Embedded Trace Macrocell provides a greater visibility of the instruction and data
flow inside the CPU core by streaming compressed data at a very high rate from the
STM32F411xC/xE through a small number of ETM pins to an external hardware trace port
analyzer (TPA) device. The TPA is connected to a host computer using any high-speed
channel available. Real-time instruction and data flow activity can be recorded and then
formatted for display on the host computer that runs the debugger software. TPA hardware
is commercially available from common development tool vendors.
The Embedded Trace Macrocell operates with third party debugger software tools.

Pinouts and pin descriptionSTM32F411xC STM32F411xE
34/151DS10314 Rev 8
4 Pinouts and pin description
Figure 9. STM32F411xC/xE WLCSP49 pinout
-   The above figure shows the package bump side.
## MS34976V1
## A
## B
## E
## D
## C
## F
## G
## VDD
## PC14-
## OSC32_IN
## VBAT
## PH0-
## OSC_IN
## NRST
## VDDA
## VREF+
## PA1
## VSS
## PDR
## _ON
## PC15-
## OSC32_OUT
## VSSA
## VREF-
## PA0
## PA4
## BOOT0
## PB8
## PH1-
## OSC_OUT
## PB0
## PB4
## PB5
## PB6
## PB3
## PA13
## PA15
## VDD
## PA14
## VSS
## PA12
## PB 2
## PA9
## PB12
## PA10
## VCAP1
## PA 11
## PB14
## VDD
## VSS
## PB10
## PA7
## PA 8
## PB15
## PB13
## 2
## 3
## 4
## 5
## 6
## 7
## 1
## PB9
## PB1
## PC13
## PA2
## PA5
## PA3
## PA6
## PB7

DS10314 Rev 835/151
STM32F411xC STM32F411xEPinouts and pin description
## 57
Figure 10. STM32F411xC/xE UFQFPN48 pinout
-   The above figure shows the package top view.
## MS31150V5
## VSSBOOT0PB7PB6PB5PB4PB3PA15PA14
## 484746454443   424140
## 1
## 36
## VDD
## 2
## 35
## VSS
## 3
## 34
## PA13
## 4
## UFQFPN48
## 33
## PA12
## VSSA/VREF-
## 5
## 32PA11
## VDDA/VREF+
## 6
## 31
## PA10
## PA0
## 7
## 30
## PA9
## PA1
## 8
## 29
## PA8
## PA2
## 9
## 28
## VDD
## 1314151617    18192021
## PA3PA4PA5PA6PA7
## PB0PB1PB2
## VSS
## 10
## 11
## 12
## 27
## 26
## 25
## 222324
## 393837
## PB10
## VCAP_1
## PB15
## PB14
## PB13
## PB12
## VBAT
## PC13
## PC14-OSC32_IN
## PH0-OSC_IN
## NRST
## PB9        PB8        VDD
## PC15-OSC32_OUT
## PH1-OSC_OUT

Pinouts and pin descriptionSTM32F411xC STM32F411xE
36/151DS10314 Rev 8
Figure 11. STM32F411xC/xE LQFP64 pinout
-   The above figure shows the package top view.
## 64 63 62 61 60 59 58 57 56 55 54 53 52 51 50 49
## 48
## 47
## 46
## 45
## 44
## 43
## 42
## 41
## 40
## 39
## 38
## 37
## 36
## 35
## 34
## 33
## 17 18 19 20 21 22 23 2429 30 31 3225 26 27 28
## 1
## 2
## 3
## 4
## 5
## 6
## 7
## 8
## 9
## 10
## 11
## 12
## 13
## 14
## 15
## 16
## VBAT
## PC14-OSC32_IN
## PH0-OSC_IN
## NRST
## PC0
## PC1
## PC2
## PC3
## VSSA/VREF-
## VDDA/VREF+
## PA0
## PA1
## PA2
## VDDPB9PB8BOOT0PB7PB6PB5PB4PB3PD2    PC12PC11PC10PA15PA14
## VDD
## VSS
## PA13
## PA12
## PA11
## PA10
## PA9
## PA8
## PC9
## PC8
## PC7
## PC6
## PB15
## PB14
## PB13
## PB12
## PA3
## VSS
## PA4PA5PA6PA7
## PC4PC5
## PB0PB1PB2
## PB10
## VCAP_1
## LQFP64
## PC13
## MS31149V3
## VDD
## VSS
## VDD
## VSS
## PH1-OSC_OUT
## PC15-OSC32_OUT

DS10314 Rev 837/151
STM32F411xC STM32F411xEPinouts and pin description
## 57
Figure 12. STM32F411xC/xE LQFP100 pinout
-   The above figure shows the package top view.
## 100
## 99
## 98
## 97969594939291908988878685848382818079787776
## 1
## 2
## 3
## 4
## 5
## 6
## 7
## 8
## 9
## 10
## 11
## 12
## 13
## 14
## 15
## 16
## 17
## 18
## 19
## 20
## 21
## 22
## 23
## 24
## 25
## 75
## 74
## 73
## 72
## 71
## 70
## 69
## 68
## 67
## 66
## 65
## 64
## 63
## 62
## 61
## 60
## 59
## 58
## 57
## 56
## 55
## 54
## 53
## 52
## 51
## PE2
## PE3
## PE4
## PE5
## PE6
## VBAT
## PC14-OSC32_IN
## PC15-OSC32_OUT
## VSS
## VDD
## PH0-OSC_IN
## NRST
## PC0
## PC1
## PC2
## PC3
## VDD
## VSSA/VREF-
## VDDA
## VREF+
## PA0
## PA1
## PA2
## VDD
## VSS
## VCAP_2
## PA13
## PA12
## PA11
## PA10
## PA9
## PA8
## PC9
## PC8
## PC7
## PC6
## PD15
## PD14
## PD13
## PD12
## PD11
## PD10
## PD9
## PD8
## PB15
## PB14
## PB13
## PB12
## PA3
## VSS
## VDD
## PA4PA5PA6PA7
## PC4PC5
## PB0PB1PB2PE7PE8PE9
## PE10PE11PE12PE13PE14PE15PB10
## VCAP_1
## VSS
## VDD
VDDVSSPE1  PE0  PB9  PB8  BOOT0  PB7  PB6  PB5  PB4  PB3  PD7  PD6  PD5  PD4  PD3  PD2  PD1  PD0  PC12  PC11  PC10  PA15  PA14
## 26272829303132333435363738394041424344454647484950
## MS31151V4
## LQFP100
## PC13
## PH1-OSC_OUT

Pinouts and pin descriptionSTM32F411xC STM32F411xE
38/151DS10314 Rev 8
Figure 13. STM32F411xC/xE UFBGA100 pinout
-   This figure shows the package top view
## 069
## $
## %
## (
## '
## &
## )
## *
## +
## -
## .
## /
## 0
## 3(
## 26&B,1
## 3&
## 26&B287
## 3&
## 3&
## $17,B7$03
## 3(
## 26&B287
## 3&
## 966$
## 95()
## 95()
## 9''$
## 3(
## 3(
## 3(
## 3(
## 9%$7
## 966
## 9''
## 1567
## 3&
## 3&
## 3$
## :.83
## 3$
## 3%
## 3(
## 3%
## 966
## %<3$66B5(*
## 3'5B21
## 3&
## 3$
## 3$
## 3$
## %227
## 3%
## 9''
## 3$
## 3$
## 3$
## 3'
## 3%
## 3%
## 3&
## 3&
## 3%
## 3'
## 3'
## 3%
## 3%
## 3%
## 3'
## 3(
## 3(
## 3%
## 3'
## 3'
## 3'
## 3(
## 3(
## 3$
## 3'
## 3'
## 3%
## 3(
## 3(
## 3$
## 3&
## 3&
## 3&
## 3$
## 3'
## 3'
## 3%
## 3%
## 3(
## 3$
## 3&
## 9&$3
## B
## 3$
## 3&
## 3'
## 3'
## 3%
## 9&$3
## B
## 3(
## 966
## 9''
## 3$
## 3$
## 3$
## 3&
## 3&
## 3'
## 3'
## 3%
## 3%
## 3(
## 966
## 9''
## 
## 
## 3+
## 3+
## 26&B,1

DS10314 Rev 839/151
STM32F411xC STM32F411xEPinouts and pin description
## 57

Table 7. Legend/abbreviations used in the pinout table
NameAbbreviationDefinition
Pin name
Unless otherwise specified in brackets below the pin name, the pin function during and after
reset is the same as the actual pin name
Pin type
SSupply pin
IInput only pin
I/OInput/ output pin
I/O structure
FT5 V tolerant I/O
TCStandard 3.3 V I/O
BDedicated BOOT0 pin
NRSTBidirectional reset pin with embedded weak pull-up resistor
NotesUnless otherwise specified by a note, all I/Os are set as floating inputs during and after reset
## Alternate
functions
Functions selected through GPIOx_AFR registers
## Additional
functions
Functions directly selected/enabled through peripheral registers
Table 8. STM32F411xC/xE pin definitions
Pin number
Pin name
(function after
reset)
## (1)
Pin type
I/O structure
## Notes
Alternate functionsAdditional functions
## UFQFPN48
## LQFP64
## WLCSP49
## LQFP100
## UFBGA100
## ---1B2PE2I/O    FT-
## TRACECLK,
## SPI4_SCK/I2S4_CK,
## SPI5_SCK/I2S5_CK,
## EVENTOUT
## -
## ---2A1PE3I/O    FT-
## TRACED0,
## EVENTOUT
## -
## ---3B1PE4I/O    FT-
## TRACED1,
## SPI4_NSS/I2S4_WS,
## SPI5_NSS/I2S5_WS,
## EVENTOUT
## -
## ---4C2PE5I/O    FT-
## TRACED2,
## TIM9_CH1,
## SPI4_MISO,
## SPI5_MISO,
## EVENTOUT
## -

Pinouts and pin descriptionSTM32F411xC STM32F411xE
40/151DS10314 Rev 8
## ---5D2PE6I/O    FT-
## TRACED3,
## TIM9_CH2,
## SPI4_MOSI/I2S4_SD,
## SPI5_MOSI/I2S5_SD,
## EVENTOUT
## -
## ----D3VSSS----
## ----C4VDDS----
## 11B76E2VBATS----
## 22D57C1
## PC13-
## ANTI_TAMP
## I/O    FT
## (2)(3)
## -
## RTC_AMP1,
## RTC_OUT, RTC_TS
## 33C78D1
## PC14-
## OSC32_IN
## I/O    FT
## (2)(3)
## (4)
## -OSC32_IN
## 44C69E1
## PC15-
## OSC32_OUT
## I/O    FT--OSC32_OUT
## ---10F2VSSS----
## ---11G2VDDS----
## 55D712F1PH0 - OSC_INI/O    FT--OSC_IN
## 66D613G1
## PH1 -
## OSC_OUT
## I/O    FT--OSC_OUT
## 77E714H2NRSTI/O    FT-EVENTOUT-
## -8-15H1PC0I/O    FT-EVENTOUTADC1_10
## -9-16J2PC1I/O    FT-EVENTOUTADC1_11
## -10-17J3PC2I/O    FT-
## SPI2_MISO,
I2S2ext_SD,
## EVENTOUT
## ADC1_12
## -11-18K2PC3I/O    FT-
## SPI2_MOSI/I2S2_SD,
## EVENTOUT
## ADC1_13
## ---19-VDDS----
## 812E620-VSSA/VREF-S----
## ----J1VSSAS----
## ----K1VREF-S----
## 913F7--VDDA/VREF+S----
## ---21L1VREF+S--
## ---22M1VDDAS----
Table 8. STM32F411xC/xE pin definitions (continued)
Pin number
Pin name
(function after
reset)
## (1)
Pin type
I/O structure
## Notes
Alternate functionsAdditional functions
## UFQFPN48
## LQFP64
## WLCSP49
## LQFP100
## UFBGA100

DS10314 Rev 841/151
STM32F411xC STM32F411xEPinouts and pin description
## 57
## 1014F623L2PA0-WKUPI/O   TC
## (5)
## TIM2_CH1/TIM2_ET,
## TIM5_CH1,
## USART2_CTS,
## EVENTOUT
## ADC1_0, WKUP1
## 1115G724M2PA1I/O    FT-
## TIM2_CH2,
## TIM5_CH2,
## SPI4_MOSI/I2S4_SD,
## USART2_RTS,
## EVENTOUT
## ADC1_1
## 1216E525K3PA2I/O    FT-
## TIM2_CH3,
## TIM5_CH3,
## TIM9_CH1,
## I2S2_CKIN,
## USART2_TX,
## EVENTOUT
## ADC1_2
## 1317E426L3PA3I/O    FT-
## TIM2_CH4,
## TIM5_CH4,
## TIM9_CH2,
## I2S2_MCK,
## USART2_RX,
## EVENTOUT
## ADC1_3
## -18-27-VSSS----
## ----E3BYPASS_REGS----
## -19-28-VDDIFT-EVENTOUT-
## 1420G629M3PA4I/O    FT-
## SPI1_NSS/I2S1_WS,
## SPI3_NSS/I2S3_WS,
## USART2_CK,
## EVENTOUT
## ADC1_4
## 1521F530K4PA5I/O    FT-
## TIM2_CH1/TIM2_ET,
## SPI1_SCK/I2S1_CK,
## EVENTOUT
## ADC1_5
## 1622F431L4PA6I/O    FT-
## TIM1_BKIN,
## TIM3_CH1,
## SPI1_MISO,
## I2S2_MCK,
## SDIO_CMD,
## EVENTOUT
## ADC1_6
## 1723F332M4PA7I/O    FT-
## TIM1_CH1N,
## TIM3_CH2,
## SPI1_MOSI/I2S1_SD,
## EVENTOUT
## ADC1_7
Table 8. STM32F411xC/xE pin definitions (continued)
Pin number
Pin name
(function after
reset)
## (1)
Pin type
I/O structure
## Notes
Alternate functionsAdditional functions
## UFQFPN48
## LQFP64
## WLCSP49
## LQFP100
## UFBGA100

Pinouts and pin descriptionSTM32F411xC STM32F411xE
42/151DS10314 Rev 8
## -24-33K5PC4I/O    FT-EVENTOUTADC1_14
## -25-34L5PC5I/O    FT-EVENTOUTADC1_15
## 1826G535M5PB0I/O    FT-
## TIM1_CH2N,
## TIM3_CH3,
## SPI5_SCK/I2S5_CK,
## EVENTOUT
## ADC1_8
## 1927G436M6PB1I/O    FT-
## TIM1_CH3N,
## TIM3_CH4,
## SPI5_NSS/I2S5_WS,
## EVENTOUT
## ADC1_9
## 2028G337L6PB2I/O    FT-EVENTOUTBOOT1
## ---38M7PE7I/O    FT-
## TIM1_ETR,
## EVENTOUT
## -
## ---39L7PE8I/O    FT-
## TIM1_CH1N,
## EVENTOUT
## -
## ---40M8PE9I/O    FT-
## TIM1_CH1,
## EVENTOUT
## -
## ---41L8PE10I/O    FT-
## TIM1_CH2N,
## EVENTOUT
## -
## ---42M9PE11I/O    FT-
## TIM1_CH2,
## SPI4_NSS/I2S4_WS,
## SPI5_NSS/I2S5_WS,
## EVENTOUT
## -
## ---43L9PE12I/O    FT-
## TIM1_CH3N,
## SPI4_SCK/I2S4_CK,
## SPI5_SCK/I2S5_CK,
## EVENTOUT
## -
## ---44M10   PE13I/O    FT-
## TIM1_CH3,
## SPI4_MISO,
## SPI5_MISO,
## EVENTOUT
## -
## ---45M11   PE14I/O    FT-
## TIM1_CH4,
## SPI4_MOSI/I2S4_SD,
## SPI5_MOSI/I2S5_SD,
## EVENTOUT
## -
## ---46M12   PE15I/O    FT-
## TIM1_BKIN,
## EVENTOUT
## -
Table 8. STM32F411xC/xE pin definitions (continued)
Pin number
Pin name
(function after
reset)
## (1)
Pin type
I/O structure
## Notes
Alternate functionsAdditional functions
## UFQFPN48
## LQFP64
## WLCSP49
## LQFP100
## UFBGA100

DS10314 Rev 843/151
STM32F411xC STM32F411xEPinouts and pin description
## 57
## 2129E347L10    PB10I/O    FT-
## TIM2_CH3,
## I2C2_SCL,
## SPI2_SCK/I2S2_CK,
## I2S3_MCK, SDIO_D7,
## EVENTOUT
## -
## ----K9PB11I/O    FT-
## TIM2_CH4,
## I2C2_SDA,
## I2S2_CKIN,
## EVENTOUT
## -
## 2230G248L11    VCAP_1S----
## 2331D349F12   VSSS----
## 2432F250G12   VDDS----
## 2533E251L12    PB12I/O    FT-
## TIM1_BKIN,
## I2C2_SMBA,
## SPI2_NSS/I2S2_WS,
## SPI4_NSS/I2S4_WS,
## SPI3_SCK/I2S3_CK,
## EVENTOUT
## -
## 2634G152K12   PB13I/O    FT-
## TIM1_CH1N,
## SPI2_SCK/I2S2_CK,
## SPI4_SCK/I2S4_CK,
## EVENTOUT
## -
## 2735F153K11    PB14I/O    FT-
## TIM1_CH2N,
## SPI2_MISO,
I2S2ext_SD,
## SDIO_D6,
## EVENTOUT
## -
## 2836E154K10   PB15I/O    FT-
RTC_50Hz,
## TIM1_CH3N,
## SPI2_MOSI/I2S2_SD,
## SDIO_CK,
## EVENTOUT
## RTC_REFIN
## ---55-PD8I/O    FT---
## ---56K8PD9I/O    FT---
## ---57J12    PD10I/O    FT---
## ---58J11    PD11I/O    FT---
## ---59J10    PD12I/O    FT-
## TIM4_CH1,
## EVENTOUT
## -
Table 8. STM32F411xC/xE pin definitions (continued)
Pin number
Pin name
(function after
reset)
## (1)
Pin type
I/O structure
## Notes
Alternate functionsAdditional functions
## UFQFPN48
## LQFP64
## WLCSP49
## LQFP100
## UFBGA100

Pinouts and pin descriptionSTM32F411xC STM32F411xE
44/151DS10314 Rev 8
## ---60H12   PD13I/O    FT-
## TIM4_CH2,
## EVENTOUT
## -
## ---61H11   PD14I/O    FT-
## TIM4_CH3,
## EVENTOUT
## -
## ---62H10   PD15I/O    FT-
## TIM4_CH4,
## EVENTOUT
## -
## -37-63E12   PC6I/O    FT-
## TIM3_CH1,
## I2S2_MCK,
## USART6_TX,
## SDIO_D6,
## EVENTOUT
## -
## -38-64E11    PC7I/O    FT-
## TIM3_CH2,
## SPI2_SCK/I2S2_CK,
## I2S3_MCK,
## USART6_RX,
## SDIO_D7,
## EVENTOUT
## -
## -39-65E10   PC8I/O    FT-
## TIM3_CH3,
## USART6_CK,
## SDIO_D0,
## EVENTOUT
## -
## -40-66D12   PC9I/O    FT-
## MCO_2, TIM3_CH4,
## I2C3_SDA,
## I2S2_CKIN,
## SDIO_D1,
## EVENTOUT
## -
## 2941D167D11   PA8I/O    FT-
## MCO_1, TIM1_CH1,
## I2C3_SCL,
## USART1_CK,
## USB_FS_SOF,
## SDIO_D1,
## EVENTOUT
## -
## 3042D268D10   PA9I/O    FT-
## TIM1_CH2,
## I2C3_SMBA,
## USART1_TX,
## USB_FS_VBUS,
## SDIO_D2,
## EVENTOUT
## OTG_FS_VBUS
Table 8. STM32F411xC/xE pin definitions (continued)
Pin number
Pin name
(function after
reset)
## (1)
Pin type
I/O structure
## Notes
Alternate functionsAdditional functions
## UFQFPN48
## LQFP64
## WLCSP49
## LQFP100
## UFBGA100

DS10314 Rev 845/151
STM32F411xC STM32F411xEPinouts and pin description
## 57
## 3143C269C12   PA10I/O    FT-
## TIM1_CH3,
## SPI5_MOSI/I2S5_SD,
## USART1_RX,
## USB_FS_ID,
## EVENTOUT
## -
## 3244C170B12   PA11I/O    FT-
## TIM1_CH4,
## SPI4_MISO,
## USART1_CTS,
## USART6_TX,
## USB_FS_DM,
## EVENTOUT
## -
## 3345C371A12   PA12I/O    FT-
## TIM1_ETR,
## SPI5_MISO,
## USART1_RTS,
## USART6_RX,
## USB_FS_DP,
## EVENTOUT
## -
## 3446B372A11    PA13I/O    FT-
## JTMS-SWDIO,
## EVENTOUT
## -
## ---73C11   VCAP_2S----
## 3547B174F11    VSSS----
## 3648B275G11   VDDS----
## 3749A176A10   PA14I/O    FT-
## JTCK-SWCLK,
## EVENTOUT
## -
## 3850A277A9PA15I/O    FT-
## JTDI,
## TIM2_CH1/TIM2_ETR
## ,
## SPI1_NSS/I2S1_WS,
## SPI3_NSS/I2S3_WS,
## USART1_TX,
## EVENTOUT
## -
## -51-78B11    PC10I/O    FT-
## SPI3_SCK/I2S3_CK,
## SDIO_D2,
## EVENTOUT
## -
## -52-79C10   PC11I/O    FT-
I2S3ext_SD,
## SPI3_MISO,
## SDIO_D3,
## EVENTOUT
## -
## -53-80B10   PC12I/O    FT-
## SPI3_MOSI/I2S3_SD,
## SDIO_CK,
## EVENTOUT
## -
Table 8. STM32F411xC/xE pin definitions (continued)
Pin number
Pin name
(function after
reset)
## (1)
Pin type
I/O structure
## Notes
Alternate functionsAdditional functions
## UFQFPN48
## LQFP64
## WLCSP49
## LQFP100
## UFBGA100

Pinouts and pin descriptionSTM32F411xC STM32F411xE
46/151DS10314 Rev 8
## ---81C9PD0I/O    FT-EVENTOUT-
## ---82B9PD1I/O    FT-EVENTOUT-
## -54-83C8PD2I/O    FT-
## TIM3_ETR,
## SDIO_CMD,
## EVENTOUT
## -
## ---84B8PD3I/O    FT-
## SPI2_SCK/I2S2_CK,
## USART2_CTS,
## EVENTOUT
## -
## ---85B7PD4I/O    FT-
## USART2_RTS,
## EVENTOUT
## -
## ---86A6PD5I/O    FT-
## USART2_TX,
## EVENTOUT
## -
## ---87B6PD6I/O    FT-
## SPI3_MOSI/I2S3_SD,
## USART2_RX,
## EVENTOUT
## -
## ---88A5PD7I/O    FT-
## USART2_CK,
## EVENTOUT
## -
## 3955A389A8PB3I/O    FT-
## JTDO-SWO,
## TIM2_CH2,
## SPI1_SCK/I2S1_CK,
## SPI3_SCK/I2S3_CK,
## USART1_RX,
## I2C2_SDA,
## EVENTOUT
## -
## 4056A490A7PB4I/O    FT-
## JTRST, TIM3_CH1,
## SPI1_MISO,
## SPI3_MISO,
I2S3ext_SD,
## I2C3_SDA, SDIO_D0,
## EVENTOUT
## -
## 4157B491C5PB5I/O   TC-
## TIM3_CH2,
## I2C1_SMBA,
## SPI1_MOSI/I2S1_SD,
## SPI3_MOSI/I2S3_SD,
## SDIO_D3,
## EVENTOUT
## -
## 4258C492B5PB6I/O    FT-
## TIM4_CH1,
## I2C1_SCL,
## USART1_TX,
## EVENTOUT
## -
Table 8. STM32F411xC/xE pin definitions (continued)
Pin number
Pin name
(function after
reset)
## (1)
Pin type
I/O structure
## Notes
Alternate functionsAdditional functions
## UFQFPN48
## LQFP64
## WLCSP49
## LQFP100
## UFBGA100

DS10314 Rev 847/151
STM32F411xC STM32F411xEPinouts and pin description
## 57

## 4359D493B4PB7I/O    FT-
## TIM4_CH2,
## I2C1_SDA,
## USART1_RX,
## SDIO_D0,
## EVENTOUT
## -
## 4460A594A4BOOT0IB--VPP
## 4561B595A3PB8I/O    FT-
## TIM4_CH3,
## TIM10_CH1,
## I2C1_SCL,
## SPI5_MOSI/I2S5_SD,
## I2C3_SDA, SDIO_D4,
## EVENTOUT
## -
## 4662C596B3PB9I/O    FT-
## TIM4_CH4,
## TIM11_CH1,
## I2C1_SDA,
## SPI2_NSS/I2S2_WS,
## I2C2_SDA, SDIO_D5,
## EVENTOUT
## -
## ---97C3PE0I/O    FT-
## TIM4_ETR,
## EVENTOUT
## -
## ---98A2PE1I/O    FT-EVENTOUT-
## 4763A699-VSSS----
## --B6-H3PDR_ONIFT---
## 4864A7100-VDDS----
-   Function availability depends on the chosen device.
-   PC13, PC14 and PC15 are supplied through the power switch. Since the switch only sinks a limited amount of current (3
mA), the use of GPIOs PC13 to PC15 in output mode is limited:
- The speed should not exceed 2 MHz with a maximum load of 30 pF.
- These I/Os must not be used as a current source (e.g. to drive an LED).
-   Main function after the first backup domain power-up. Later on, it depends on the contents of the RTC registers even after
reset (because these registers are not reset by the main reset). For details on how to manage these I/Os, refer to the RTC
register description sections in the STM32F411xx reference manual.
-   FT = 5 V tolerant except when in analog mode or oscillator mode (for PC14, PC15, PH0 and PH1).
-   If the device is delivered in an UFBGA100 and the BYPASS_REG pin is set to VDD (Regulator off/internal reset ON mode),
then PA0 is used as an internal Reset (active low)
Table 8. STM32F411xC/xE pin definitions (continued)
Pin number
Pin name
(function after
reset)
## (1)
Pin type
I/O structure
## Notes
Alternate functionsAdditional functions
## UFQFPN48
## LQFP64
## WLCSP49
## LQFP100
## UFBGA100

Pinouts and pin descriptionSTM32F411xC STM32F411xE
48/151DS10314 Rev 8
Table 9. Alternate function mapping
## Port
## AF00
## AF01
## AF02
## AF03
## AF04
## AF05
## AF06
## AF07
## AF08
## AF09
## AF10
## AF11
## AF12
## AF13   AF14
## AF15
## SYS_AF
## TIM1/TIM2
## TIM3/
## TIM4/ TIM5
## TIM9/
## TIM10/
## TIM11
## I2C1/I2C2/
## I2C3
## SPI1/I2S1S
## PI2/
## I2S2/SPI3/
## I2S3
## SPI2/I2S2/
## SPI3/
## I2S3/SPI4/ I2S4/SPI5/
## I2S5
## SPI3/I2S3/
## USART1/
## USART2
## USART6
## I2C2/
## I2C3
## OTG1_FS
## SDIO
## Port A
## PA0
## -
## TIM2_CH1/
## TIM2_ETR
## TIM5_CH1
## -
## -
## -
## -
## USART2_
## CTS
## -- -----
## EVENT
## OUT
## PA1
## -
## TIM2_CH2
## TIM5_CH2
## -
## -
## SPI4_MOSI
## /I2S4_SD
## -
## USART2_
## RTS
## -- -----
## EVENT
## OUT
## PA2
## -
## TIM2_CH3
## TIM5_CH3
## TIM9_CH1
## -
## I2S2_CKIN
## -
## USART2_
## TX
## -- -----
## EVENT
## OUT
## PA3
## -
## TIM2_CH4
## TIM5_CH4
## TIM9_CH2
## -
## I2S2_MCK
## -
## USART2_
## RX
## -- -----
## EVENT
## OUT
## PA4
## -
## -
## -
## -
## -
## SPI1_NSS/I
## 2S1_WS
## SPI3_NSS/I2
## S3_WS
## USART2_
## CK
## -- -----
## EVENT
## OUT
## PA5
## -
## TIM2_CH1/
## TIM2_ETR
## ---
## SPI1_SCK/I
## 2S1_CK
## ---------
## EVENT
## OUT
## PA6
## -
## TIM1_BKIN
## TIM3_CH1
## -
## -
## SPI1_MISO
## I2S2_MCK
## -
## -
## -
## -
## -
## SDIO_
## CMD
## --
## EVENT
## OUT
## PA7
## -
## TIM1_CH1N    TIM3_CH2
## -
## -
## SPI1_MOSI
## /I2S1_SD
## ---------
## EVENT
## OUT
## PA8
## MCO_1
## TIM1_CH1
## -
## -
## I2C3_
## SCL
## --
## USART1_
## CK
## --
## USB_FS_
## SOF
## -
## SDIO_
## D1
## --
## EVENT
## OUT
## PA9
## -
## TIM1_CH2
## -
## -
## I2C3_
## SMBA
## --
## USART1_
## TX
## --
## USB_FS_
## VBUS
## -
## SDIO_
## D2
## --
## EVENT
## OUT
## PA10
## -
## TIM1_CH3
## -
## -
## -
## -
## SPI5_MOSI/I
## 2S5_SD
## USART1_
## RX
## --
## USB_FS_
## ID
## ----
## EVENT
## OUT
## PA11
## -
## TIM1_CH4
## -
## -
## -
## -
## SPI4_MISO
## USART1_
## CTS
## USART6_
## TX
## -
## USB_FS_
## DM
## ----
## EVENT
## OUT
## PA12
## -
## TIM1_ETR
## -
## -
## -
## -
## SPI5_MISO
## USART1_
## RTS
## USART6_
## RX
## -
## USB_FS_
## DP
## ----
## EVENT
## OUT
## PA13
## JTMS-
## SWDIO
## ----- - --------
## EVENT
## OUT
## PA14
## JTCK-
## SWCLK
## ----- - --------
## EVENT
## OUT
## PA15
## JTDI
## TIM2_CH1/
## TIM2_ETR
## ---
## SPI1_NSS/I
## 2S1_WS
## SPI3_NSS/I2
## S3_WS
## USART1_
## TX
## -- -----
## EVENT
## OUT

STM32F411xC STM32F411xEPinouts and pin description
DS10314 Rev 849/151
## Port B
## PB0
## -
## TIM1_CH2N    TIM3_CH3
## -
## -
## -
## SPI5_SCK
## /I2S5_CK
## -- -----
## EVENT
## OUT
## PB1
## -
## TIM1_CH3N    TIM3_CH4
## -
## -
## -
## SPI5_NSS
## /I2S5_WS
## -- -----
## EVENT
## OUT
## PB2
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
## PB3
## JTDO-
## SWO
## TIM2_CH2
## -
## -
## -
## SPI1_SCK/I
## 2S1_CK
## SPI3_SCK
## /I2S3_CK
## USART1_
## RX
## -I2C2_SDA -
## -  -  --
## EVENT
## OUT
## PB4
## JTRST
## TIM3_CH1
## -
## -
## SPI1_MISO
## SPI3_MISO
I2S3ext_S
## D
## -I2C3_SDA
## SDIO_
## D0
## --
## EVENT
## OUT
## PB5
## -
## -
## TIM3_CH2
## -
## I2C1_SMB
## A
## SPI1_MOSI
## /I2S1_SD
## SPI3_MOSI/
## I2S3_SD
## -- --
## SDIO_
## D3
## --
## EVENT
## OUT
## PB6
## -
## -
## TIM4_CH1
## -
## I2C1_SCL
## -
## -
## USART1_
## TX
## -- --
## --
## EVENT
## OUT
## PB7
## -
## -
## TIM4_CH2
## -
## I2C1_SDA
## -
## -
## USART1_
## RX
## -- --
## SDIO_
## D0
## --
## EVENT
## OUT
## PB8
## -
## -
## TIM4_CH3
## TIM10_CH1
## I2C1_SCL
## -
## SPI5_MOSI/
## I2S5_SD
## -
## -
## I2C3_SDA
## -
## -
## SDIO_
## D4
## --
## EVENT
## OUT
## PB9
## -
## -
## TIM4_CH4
## TIM11_CH1
## I2C1_SDA
## SPI2_NSS/I
## 2S2_WS
## ---I2C2_SDA--
## SDIO_
## D5
## --
## EVENT
## OUT
## PB10
## -
## TIM2_CH3
## -
## -
## I2C2_SCL
## SPI2_SCK/I
## 2S2_CK
## I2S3_MCK
## -
## -
## -
## -
## -
## SDIO_
## D7
## --
## EVENT
## OUT
## PB11
## -
## TIM2_CH4
## -
## -
## I2C2_SDA
## I2S2_CKIN
## -
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
## PB12
## -
## TIM1_BKIN
## -
## -
## I2C2_SMB
## A
## SPI2_NSS/I
## 2S2_WS
## SPI4_NSS
## /I2S4_WS
## SPI3_SCK
## /I2S3_CK
## -- -----
## EVENT
## OUT
## PB13
## -
## TIM1_CH1N
## -
## -
## -
## SPI2_SCK/I
## 2S2_CK
## SPI4_SCK/
## I2S4_CK
## --- -----
## EVENT
## OUT
## PB14
## -
## TIM1_CH2N
## -
## -
## -
## SPI2_MISO
I2S2ext_SD
## -
## -
## -
## -
## -
## SDIO_
## D6
## --
## EVENT
## OUT
## PB15
## RTC_50H
z
## TIM1_CH3N
## -
## -
## -
## SPI2_MOSI
## /I2S2_SD
## ------
## SDIO_
## CK
## --
## EVENT
## OUT
Table 9. Alternate function mapping (continued)
## Port
## AF00
## AF01
## AF02
## AF03
## AF04
## AF05
## AF06
## AF07
## AF08
## AF09
## AF10
## AF11
## AF12
## AF13   AF14
## AF15
## SYS_AF
## TIM1/TIM2
## TIM3/
## TIM4/ TIM5
## TIM9/
## TIM10/
## TIM11
## I2C1/I2C2/
## I2C3
## SPI1/I2S1S
## PI2/
## I2S2/SPI3/
## I2S3
## SPI2/I2S2/
## SPI3/
## I2S3/SPI4/ I2S4/SPI5/
## I2S5
## SPI3/I2S3/
## USART1/
## USART2
## USART6
## I2C2/
## I2C3
## OTG1_FS
## SDIO

Pinouts and pin descriptionSTM32F411xC STM32F411xE
50/151DS10314 Rev 8
## Port C
## PC0
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
## PC1
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
## PC2
## -
## -
## -
## -
## -
## SPI2_MISO
I2S2ext_SD
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
## PC3
## -
## -
## -
## -
## -
## SPI2_MOSI
## /I2S2_SD
## ---------
## EVENT
## OUT
## PC4
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
## PC5
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
## PC6
## -
## -
## TIM3_CH1
## -
## -
## I2S2_MCK
## -
## -
## USART6_
## TX
## ---
## SDIO_
## D6
## --
## EVENT
## OUT
## PC7
## -
## -
## TIM3_CH2
## -
## -
## SPI2_SCK/I
## 2S2_CK
## I2S3_MCK
## -
## USART6_
## RX
## ---
## SDIO_
## D7
## --
## EVENT
## OUT
## PC8
## -
## -
## TIM3_CH3
## -
## -
## -
## -
## -
## USART6_
## CK
## ---
## SDIO_
## D0
## --
## EVENT
## OUT
## PC9
## MCO_2
## -
## TIM3_CH4
## -
## I2C3_SDA
## I2S2_CKIN
## -
## -
## -
## -
## -
## SDIO_
## D1
## --
## EVENT
## OUT
## PC10
## -
## -
## -
## -
## -
## -
## SPI3_SCK/I2
## S3_CK
## --- --
## SDIO_
## D2
## --
## EVENT
## OUT
## PC11
## -
## -
## -
## -
## -
I2S3ext_SD
## SPI3_MISO
## -
## -
## -
## -
## -
## SDIO_
## D3
## --
## EVENT
## OUT
## PC12
## -
## -
## -
## -
## -
## -
## SPI3_MOSI/I
## 2S3_SD
## --- --
## SDIO_
## CK
## --
## EVENT
## OUT
## PC13
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## PC14
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## PC15
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
Table 9. Alternate function mapping (continued)
## Port
## AF00
## AF01
## AF02
## AF03
## AF04
## AF05
## AF06
## AF07
## AF08
## AF09
## AF10
## AF11
## AF12
## AF13   AF14
## AF15
## SYS_AF
## TIM1/TIM2
## TIM3/
## TIM4/ TIM5
## TIM9/
## TIM10/
## TIM11
## I2C1/I2C2/
## I2C3
## SPI1/I2S1S
## PI2/
## I2S2/SPI3/
## I2S3
## SPI2/I2S2/
## SPI3/
## I2S3/SPI4/ I2S4/SPI5/
## I2S5
## SPI3/I2S3/
## USART1/
## USART2
## USART6
## I2C2/
## I2C3
## OTG1_FS
## SDIO

STM32F411xC STM32F411xEPinouts and pin description
DS10314 Rev 851/151
## Port D
## PD0
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
## PD1
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
## PD2
## -
## -
## TIM3_ETR
## -
## -
## -
## -
## -
## -
## -
## -
## -
## SDIO_
## CMD
## EVENT
## OUT
## PD3
## -
## -
## -
## -
## -
## SPI2_SCK/I
## 2S2_CK
## USART2_
## CTS
## -- -----
## EVENT
## OUT
## PD4
## -
## -
## -
## -
## -
## -
## -
## USART2_
## RTS
## -- -----
## EVENT
## OUT
## PD5
## -
## -
## -
## -
## -
## -
## -
## USART2_
## TX
## -- -----
## EVENT
## OUT
## PD6
## -
## -
## -
## -
## -
## SPI3_MOSI
## /I2S3_SD
## -
## USART2_
## RX
## -- -----
## EVENT
## OUT
## PD7
## -
## -
## -
## -
## -
## -
## -
## USART2_
## CK
## -- -----
## EVENT
## OUT
## PD8
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
## PD9
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
## PD10
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
## PD11
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
## PD12
## -
## -
## TIM4_CH1
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
## PD13
## -
## -
## TIM4_CH2
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
## PD14
## -
## -
## TIM4_CH3
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
## PD15
## -
## -
## TIM4_CH4
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
Table 9. Alternate function mapping (continued)
## Port
## AF00
## AF01
## AF02
## AF03
## AF04
## AF05
## AF06
## AF07
## AF08
## AF09
## AF10
## AF11
## AF12
## AF13   AF14
## AF15
## SYS_AF
## TIM1/TIM2
## TIM3/
## TIM4/ TIM5
## TIM9/
## TIM10/
## TIM11
## I2C1/I2C2/
## I2C3
## SPI1/I2S1S
## PI2/
## I2S2/SPI3/
## I2S3
## SPI2/I2S2/
## SPI3/
## I2S3/SPI4/ I2S4/SPI5/
## I2S5
## SPI3/I2S3/
## USART1/
## USART2
## USART6
## I2C2/
## I2C3
## OTG1_FS
## SDIO

Pinouts and pin descriptionSTM32F411xC STM32F411xE
52/151DS10314 Rev 8
## Port E
## PE0
## -
## -
## TIM4_ETR
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
## PE1
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
## PE2
## TRACECL
## K
## ----
## SPI4_SCK/I
## 2S4_CK
## SPI5_SCK/I2
## S5_CK
## --- -----
## EVENT
## OUT
## PE3
## TRACED0
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
## PE4
## TRACED1
## -
## -
## -
## -
## SPI4_NSS/I
## 2S4_WS
## SPI5_NSS/I2
## S5_WS
## --- -----
## EVENT
## OUT
## PE5
## TRACED2
## -
## -
## TIM9_CH1
## -
## SPI4_MISO
## SPI5_MISO
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
## PE6
## TRACED3
## -
## -
## TIM9_CH2
## -
## SPI4_MOSI
## /I2S4_SD
## SPI5_MOSI/I
## 2S5_SD
## --- -----
## EVENT
## OUT
## PE7
## -
## TIM1_ETR
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
## PE8
## -
## TIM1_CH1N
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
## PE9
## -
## TIM1_CH1
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
## PE10
## -
## TIM1_CH2N
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
## PE11
## -
## TIM1_CH2
## -
## -
## -
## SPI4_NSS/I
## 2S4_WS
## SPI5_NSS/I2
## S5_WS
## --- -----
## EVENT
## OUT
## PE12
## -
## TIM1_CH3N
## -
## -
## -
## SPI4_SCK/I
## 2S4_CK
## SPI5_SCK/I2
## S5_CK
## --- -----
## EVENT
## OUT
## PE13
## -
## TIM1_CH3
## -
## -
## -
## SPI4_MISO
## SPI5_MISO
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
## PE14
## -
## TIM1_CH4
## -
## -
## -
## SPI4_MOSI
## /I2S4_SD
## SPI5_MOSI/I
## 2S5_SD
## --- -----
## EVENT
## OUT
## PE15
## -
## TIM1_BKIN
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## EVENT
## OUT
Table 9. Alternate function mapping (continued)
## Port
## AF00
## AF01
## AF02
## AF03
## AF04
## AF05
## AF06
## AF07
## AF08
## AF09
## AF10
## AF11
## AF12
## AF13   AF14
## AF15
## SYS_AF
## TIM1/TIM2
## TIM3/
## TIM4/ TIM5
## TIM9/
## TIM10/
## TIM11
## I2C1/I2C2/
## I2C3
## SPI1/I2S1S
## PI2/
## I2S2/SPI3/
## I2S3
## SPI2/I2S2/
## SPI3/
## I2S3/SPI4/ I2S4/SPI5/
## I2S5
## SPI3/I2S3/
## USART1/
## USART2
## USART6
## I2C2/
## I2C3
## OTG1_FS
## SDIO

STM32F411xC STM32F411xEPinouts and pin description
DS10314 Rev 853/151
## Port H
## PH0
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## PH1
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
## -
Table 9. Alternate function mapping (continued)
## Port
## AF00
## AF01
## AF02
## AF03
## AF04
## AF05
## AF06
## AF07
## AF08
## AF09
## AF10
## AF11
## AF12
## AF13   AF14
## AF15
## SYS_AF
## TIM1/TIM2
## TIM3/
## TIM4/ TIM5
## TIM9/
## TIM10/
## TIM11
## I2C1/I2C2/
## I2C3
## SPI1/I2S1S
## PI2/
## I2S2/SPI3/
## I2S3
## SPI2/I2S2/
## SPI3/
## I2S3/SPI4/ I2S4/SPI5/
## I2S5
## SPI3/I2S3/
## USART1/
## USART2
## USART6
## I2C2/
## I2C3
## OTG1_FS
## SDIO

Memory mappingSTM32F411xC STM32F411xE
54/151DS10314 Rev 8
5           Memory           mapping
The memory map is shown in Figure 14.
Figure 14. Memory map

Table 10. STM32F411xC/xE
register boundary addresses
BusBoundary addressPeripheral
0xE010 0000 - 0xFFFF FFFFReserved
## Cortex
## ®
-M40xE000 0000 - 0xE00F FFFFCortex-M4 internal peripherals
0x5004 0000 - 0xDFFF FFFFReserved
MSv34706V1
512-Mbyte
block 7
Cortex-M4's
internal
peripherals
512-Mbyte
block 6
Not used
512-Mbyte
block 2
## Peripherals
512-Mbyte
block 1
## SRAM
## 0x0000 0000
0x1FFF FFFF
## 0x2000 0000
0x3FFF FFFF
## 0x4000 0000
0x5FFF FFFF
## 0x6000 0000
0xC000 0000
0xDFFF FFFF
0xE000 0000
0xFFFF FFFF
512-Mbyte
block 0
## Code
0x2002 0001 - 0x3FFF FFFF
## 0x4000 0000
## Reserved
0x4000 73FF
0x4000 7400 - 0x4000 FFFF
## 0x4001 0000
## 0x5004 0000
0xDFFF FFFF
## AHB2
## Reserved
0x5003 FFFF
## 0x5000 0000
SRAM (128 KB aliased
by bit-banding)
## 0x2000 0000 - 0x2002 0000
## APB1
## APB2
0x4001 4BFF
0x4001 4C00 - 0x4001 FFFF
## Reserved
0x4002 6800 - 0x4FFF FFFF
0x4002 67FF
## AHB1
## Reserved
Flash memory
0x0808 0000 - 0x1FFE FFFF
0x1FFF C000 - 0x1FFF C007
0x0800 0000 - 0x0807 FFFF
0x0008 0000 - 0x07FF FFFF
0x0000 0000 - 0x0007 FFFF
## Reserved
## Reserved
Aliased to Flash,
system, memory or
SRAM depending, on
the BOOT pins
System memory
0x1FFF C008 - 0x1FFF FFFF
0x1FFF 7A10 - 0x1FFF BFFF
0x1FFF 0000 - 0x1FFF 7A0F
Option bytes
## 0x4002 0000
Cortex-M4 internal
peripherals
0xE000 0000 - 0xE00F FFFF
## Reserved
0xE010 0000 - 0xFFFF FFFF
## Reserved
0xBFFF FFFF
## Reserved
## Reserved
## Reserved

DS10314 Rev 855/151
STM32F411xC STM32F411xEMemory mapping
## 57
AHB20x5000 0000 - 0x5003 FFFFUSB OTG FS
## AHB1
0x4002 6800 - 0x4FFF FFFFReserved
0x4002 6400 - 0x4002 67FFDMA2
0x4002 6000 - 0x4002 63FFDMA1
0x4002 5000 - 0x4002 4FFFReserved
0x4002 3C00 - 0x4002 3FFFFlash interface register
0x4002 3800 - 0x4002 3BFFRCC
0x4002 3400 - 0x4002 37FFReserved
0x4002 3000 - 0x4002 33FFCRC
0x4002 2000 - 0x4002 2FFFReserved
0x4002 1C00 - 0x4002 1FFFGPIOH
0x4002 1400 - 0x4002 1BFFReserved
0x4002 1000 - 0x4002 13FFGPIOE
0x4002 0C00 - 0x4002 0FFFGPIOD
0x4002 0800 - 0x4002 0BFFGPIOC
0x4002 0400 - 0x4002 07FFGPIOB
0x4002 0000 - 0x4002 03FFGPIOA
Table 10. STM32F411xC/xE
register boundary addresses (continued)
BusBoundary addressPeripheral

Memory mappingSTM32F411xC STM32F411xE
56/151DS10314 Rev 8
## APB2
0x4001 5400- 0x4001 FFFFReserved
0x4001 5000 - 0x4001 53FFFSPI5/I2S5
0x4001 4800 - 0x4001 4BFFTIM11
0x4001 4400 - 0x4001 47FFTIM10
0x4001 4000 - 0x4001 43FFTIM9
0x4001 3C00 - 0x4001 3FFFEXTI
0x4001 3800 - 0x4001 3BFFSYSCFG
0x4001 3400 - 0x4001 37FFSPI4/I2S4
0x4001 3000 - 0x4001 33FFSPI1/I2S1
0x4001 2C00 - 0x4001 2FFFSDIO
0x4001 2400 - 0x4001 2BFFReserved
0x4001 2000 - 0x4001 23FFADC1
0x4001 1800 - 0x4001 1FFFReserved
0x4001 1400 - 0x4001 17FFUSART6
0x4001 1000 - 0x4001 13FFUSART1
0x4001 0400 - 0x4001 0FFFReserved
0x4001 0000 - 0x4001 03FFTIM1
0x4000 7400 - 0x4000 FFFFReserved
Table 10. STM32F411xC/xE
register boundary addresses (continued)
BusBoundary addressPeripheral

DS10314 Rev 857/151
STM32F411xC STM32F411xEMemory mapping
## 57
## APB1
0x4000 7000 - 0x4000 73FFPWR
0x4000 6000 - 0x4000 6FFFReserved
0x4000 5C00 - 0x4000 5FFFI2C3
0x4000 5800 - 0x4000 5BFFI2C2
0x4000 5400 - 0x4000 57FFI2C1
0x4000 4800 - 0x4000 53FFReserved
0x4000 4400 - 0x4000 47FFUSART2
0x4000 4000 - 0x4000 43FFI2S3ext
0x4000 3C00 - 0x4000 3FFFSPI3 / I2S3
0x4000 3800 - 0x4000 3BFFSPI2 / I2S2
0x4000 3400 - 0x4000 37FFI2S2ext
0x4000 3000 - 0x4000 33FFIWDG
0x4000 2C00 - 0x4000 2FFFWWDG
0x4000 2800 - 0x4000 2BFFRTC & BKP Registers
0x4000 1000 - 0x4000 27FFReserved
0x4000 0C00 - 0x4000 0FFFTIM5
0x4000 0800 - 0x4000 0BFFTIM4
0x4000 0400 - 0x4000 07FFTIM3
0x4000 0000 - 0x4000 03FFTIM2
Table 10. STM32F411xC/xE
register boundary addresses (continued)
BusBoundary addressPeripheral

Electrical characteristicsSTM32F411xC STM32F411xE
58/151DS10314 Rev 8
6           Electrical           characteristics
6.1          Parameter          conditions
Unless otherwise specified, all voltages are referenced to V
## SS
## .
6.1.1 Minimum and maximum values
Unless otherwise specified the minimum and maximum values are guaranteed in the worst
conditions of ambient temperature, supply voltage and frequencies by tests in production on
100% of the devices with an ambient temperature at T
## A
= 25 °C and T
## A
## = T
## A
max (given by
the selected temperature range).
Data based on characterization results, design simulation and/or technology characteristics
are indicated in the table footnotes and are not tested in production. Based on
characterization, the minimum and maximum values refer to sample tests and represent the
mean value plus or minus three times the standard deviation (mean ±3 σ).
6.1.2         Typical         values
Unless otherwise specified, typical data are based on T
## A
## = 25 °C, V
## DD
= 3.3 V (for the
## 1.7 V ≤ V
## DD
≤ 3.6 V voltage range). They are given only as design guidelines and are not
tested.
Typical ADC accuracy values are determined by characterization of a batch of samples from
a standard diffusion lot over the full temperature range, where 95% of the devices have an
error less than or equal to the value indicated
(mean ±2 σ).
6.1.3         Typical         curves
Unless otherwise specified, all typical curves are given only as design guidelines and are
not tested.
6.1.4         Loading         capacitor
The loading conditions used for pin parameter measurement are shown in Figure 15.
Figure 15. Pin loading conditions
## MS19011V2
C = 50 pF
MCU pin

DS10314 Rev 859/151
STM32F411xC STM32F411xEElectrical characteristics
## 124
6.1.5 Pin input voltage
The input voltage measurement on a pin of the device is described in Figure 16.
Figure 16. Input voltage measurement
## MS19010V2
MCU pin
## V
## IN

Electrical characteristicsSTM32F411xC STM32F411xE
60/151DS10314 Rev 8
6.1.6 Power supply scheme
Figure 17. Power supply scheme
-   To connect PDR_ON pin, refer to Section 3.15: Power supply supervisor.
-   The 4.7 μF ceramic capacitor must be connected to one of the V
## DD
pin.
-   VCAP_2 pad is only available on LQFP100 and UFBGA100 packages.
## 4.   V
## DDA
## =V
## DD
and V
## SSA
## =V
## SS
## .
Caution:Each power supply pair (for example V
## DD
## /V
## SS
## , V
## DDA
## /V
## SSA
) must be decoupled with filtering
ceramic capacitors as shown above. These capacitors must be placed as close as possible
to, or below, the appropriate pins on the underside of the PCB to ensure good operation of
the device. It is not recommended to remove filtering capacitors to reduce PCB size or cost.
This might cause incorrect operation of the device.
## 069
## %DFNXSFLUFXLWU\
## 26&.57&
## :DNHXSORJLF
## %DFNXSUHJLVWHUV
## .HUQHOORJLF
## &38GLJLWDO
## 5$0
## $QDORJ
## 5&V
## 3//
## 3RZHU
## VZLWFK
## 9%$7
## *3,2V
## 287
## ,1
îQ)
## î)
## 9%$7
## WR9
## 9ROWDJH
## UHJXODWRU
## 9''$
## $'&
## /HYHOVKLIWHU
## ,2
## /RJLF
## 9''
## Q)
## )
## )ODVKPHPRU\
## 9&$3B
## %<3$66B5(*
## 3'5B21
## 5HVHW
## FRQWUROOHU
## 9''
## 
## 966
##  
## 9''
## 95()
## 95()
## 966$
## 95()
## Q)
## )
## 9&$3B
î)   î)RU

DS10314 Rev 861/151
STM32F411xC STM32F411xEElectrical characteristics
## 124
6.1.7         Current         consumption         measurement
Figure 18. Current consumption measurement scheme
6.2 Absolute maximum ratings
Stresses above the absolute maximum ratings listed in Table 11: Voltage characteristics,
Table 12: Current characteristics, and Table 13: Thermal characteristics may cause
permanent damage to the device. These are stress ratings only and functional operation of
the device at these conditions is not implied. Exposure to maximum rating conditions for
extended periods may affect device reliability.

ai14126
## V
## BAT
## V
## DD
## V
## DDA
## I
## DD
## _V
## BAT
## I
## DD
Table 11. Voltage characteristics
SymbolRatingsMinMaxUnit
## V
## DD
## –V
## SS
External main supply voltage (including V
## DDA
## ,

## V
## DD
and

## V
## BAT
## )
## (1)
-   All main power (V
## DD
## , V
## DDA
) and ground (V
## SS
## , V
## SSA
) pins must always be connected to the external power
supply, in the permitted range.
## –0.34.0
## V
## V
## IN
Input voltage on FT and TC pins
## (2)
## 2.   V
## IN
maximum value must always be respected. Refer to Table 12 for the values of the maximum allowed
injected current.
## V
## SS
## –0.3V
## DD
## +4.0
Input voltage on any other pinV
## SS
## –0.34.0
Input voltage for BOOT0V
## SS
## 9.0
## |ΔV
DDx
|Variations between different V
## DD
power pins-50
mV
## |V
## SSX
## −V
## SS
|Variations between all the different ground pins-50
## V
## ESD(HBM)
Electrostatic discharge voltage (human body model)
see Section 6.3.14:
Absolute maximum
ratings (electrical
sensitivity)

Electrical characteristicsSTM32F411xC STM32F411xE
62/151DS10314 Rev 8


Table 12. Current characteristics
SymbolRatings Max.Unit
## ΣI
## VDD
Total current into sum of all V
DD_x
power lines (source)
## (1)
## 160
mA
## Σ I
## VSS
Total current out of sum of all V
SS_x
ground lines (sink)
## (1)
## -160
## I
## VDD
Maximum current into each V
DD_x
power line (source)
## (1)
## 100
## I
## VSS
Maximum current out of each V
SS_x
ground line (sink)
## (1)
## -100
## I
## IO
Output current sunk by any I/O and control pin25
Output current sourced by any I/O and control pin-25
## ΣI
## IO
Total output current sunk by sum of all I/O and control pins
## (2)
## 120
Total output current sourced by sum of all I/Os and control pins
## (2)
## -120
## I
## INJ(PIN)
## (3)
Injected current on FT and TC pins
## (4)
## –5/+0
Injected current on NRST and B pins
## (4)
## ΣI
## INJ(PIN)
Total injected current (sum of all I/O and control pins)
## (5)
## ±25
-   All main power (V
## DD
## , V
## DDA
) and ground (V
## SS
## , V
## SSA
) pins must always be connected to the external power supply, in the
permitted range.
-   This current consumption must be correctly distributed over all I/Os and control pins.
-   Negative injection disturbs the analog performance of the device. See note in Section 6.3.20: 12-bit ADC characteristics.
-   Positive injection is not possible on these I/Os and does not occur for input voltages lower than the specified maximum
value.
-   When several inputs are submitted to a current injection, the maximum
## ΣI
## INJ(PIN)
is the absolute sum of the positive and
negative injected currents (instantaneous values).
Table 13. Thermal characteristics
SymbolRatings ValueUnit
## T
## STG
Storage temperature range–65 to +150
## °C
## T
## J
Maximum junction temperature130
## T
## LEAD
Maximum lead temperature during soldering
## (WLCSP49, LQFP64/100, UFQFPN48,
## UFBGA100)
see note
## (1)
-   Compliant with JEDEC Std J-STD-020D (for small body, Sn-Pb or Pb assembly), the ST ECOPACK
## ®

7191395 specification, and the European directive on Restrictions on Hazardous Substances (ROHS
directive 2011/65/EU, July 2011).

DS10314 Rev 863/151
STM32F411xC STM32F411xEElectrical characteristics
## 124
6.3          Operating          conditions
6.3.1 General operating conditions

Table 14. General operating conditions
SymbolParameter ConditionsMinTypMaxUnit
f
## HCLK
Internal AHB clock frequency
Power Scale3: Regulator ON,
VOS[1:0] bits in PWR_CR register = 0x01
## 0-64
MHz
Power Scale2: Regulator ON,
VOS[1:0] bits in PWR_CR register = 0x10
## 0          -84
Power Scale1: Regulator ON,
VOS[1:0] bits in PWR_CR register = 0x11
## 0-100
f
## PCLK1
Internal APB1 clock frequency0 -50MHz
f
## PCLK2
Internal APB2 clock frequency0 -100MHz
## V
## DD
Standard operating voltage1.7
## (1)
## -3.6V
## V
## DDA
## (2)(3)
Analog operating voltage
(ADC limited to 1.2 M
samples)
Must be the same potential as V
## DD
## (4)
## 1.7
## (1)
## -2.4
## V
Analog operating voltage
(ADC limited to 2.4 M
samples)
## 2.4-3.6
## V
## BAT
Backup operating voltage1.65-3.6V
## V
## 12
Regulator ON: 1.2 V internal
voltage on VCAP_1/VCAP_2
pins
VOS[1:0] bits in PWR_CR register = 0x01
Max frequency 64 MHz
## 1.08
## (5)
## 1.14   1.20
## (5)
## V
VOS[1:0] bits in PWR_CR register = 0x10
Max frequency 84 MHz
## 1.20
## (5)
## 1.26   1.32
## (5)
VOS[1:0] bits in PWR_CR register = 0x11
Max frequency 100 MHz
## 1.261.321.38
## V
## 12
Regulator OFF: 1.2 V external
voltage must be supplied on
VCAP_1/VCAP_2 pins
Max frequency 64 MHz1.101.141.20
VMax frequency 84 MHz1.201.261.32
Max frequency 100 MHz1.261.321.38
## V
## IN
Input voltage on RST, FT and
TC pins
## (6)
## 2 V ≤  V
## DD
## ≤  3.6 V–0.3-5.5
## VV
## DD
## ≤  2 V–0.3-5.2
Input voltage on BOOT0 pin -0-9
## P
## D
Power dissipation at
## T
## A
= 85°C (range 6) or
105 °C (range 7)
## (7)
## UFQFPN48--625
mW
## WLCSP49--392
## LQFP64--425
## LQFP100--465
## UFBGA100--323

Electrical characteristicsSTM32F411xC STM32F411xE
64/151DS10314 Rev 8

## P
## D
Power dissipation at
## T
## A
= 125 °C (range 3)
## (7)
## UFQFPN48--156
mW
## WLCSP49--98
## LQFP64--106
## LQFP100--116
## UFBGA100--81
## T
## A
Ambient temperature for
range 6
Maximum power dissipation- 40 -85
## °C
Low power dissipation
## (8)
## - 40 -105
Ambient temperature for
range 7
Maximum power dissipation - 40-105
Low power dissipation
## (8)
## - 40 -125
Ambient temperature for
range 3
Maximum power dissipation - 40 -110
Low power dissipation
## (8)
## - 40 -130
TJ Junction temperature range
## Range 6- 40 -105
## Range 7- 40 -125
## Range 3- 40 -130
## 1.   V
## DD
## /V
## DDA
minimum value of 1.7 V with the use of an external power supply supervisor (refer to Section 3.15.2: Internal
reset OFF).
-   When the ADC is used, refer to Table 65: ADC characteristics.
-   If VREF+ pin is present, it must respect the following condition: VDDA-VREF+ < 1.2 V.
-   It is recommended to power V
## DD
and V
## DDA
from the same source. A maximum difference of 300 mV between V
## DD
and
## V
## DDA
can be tolerated during power-up and power-down operation.
-   Guaranteed by test in production.
-   To sustain a voltage higher than VDD+0.3, the internal Pull-up and Pull-Down resistors must be disabled
## 7.   If T
## A
is lower, higher P
## D
values are allowed as long as T
## J
does not exceed T
## Jmax
## .
-   In low power dissipation state, T
## A
can be extended to this range as long as T
## J
does not exceed T
## Jmax
## .
Table 14. General operating conditions (continued)
SymbolParameter ConditionsMinTypMaxUnit
Table 15. Features depending on the operating power supply range
## Operating
power
supply
range
## ADC
operation
## Maximum
flash memory
access
frequency
with no wait
states
## (f
## Flashmax
## )
Maximum flash
memory access
frequency with
wait states
## (1)(2)
I/O operation
Clock output
frequency on
I/O pins
## (3)
## Possible
flash
memory
operations
## V
## DD
=1.7 to
## 2.1 V
## (4)
## Conversion
time up to
## 1.2 Msps
16 MHz
## (5)
100 MHz with 6
wait states
– No I/O
compensation
up to 30 MHz
8-bit erase
and program
operations
only
## V
## DD
= 2.1 to
## 2.4 V
## Conversion
time up to
## 1.2 Msps
18 MHz
100 MHz with 5
wait states
– No I/O
compensation
up to 30 MHz
16-bit erase
and program
operations

DS10314 Rev 865/151
STM32F411xC STM32F411xEElectrical characteristics
## 124
6.3.2 VCAP_1/VCAP_2 external capacitors
Stabilization for the main regulator is achieved by connecting the external capacitor C
## EXT
to
the VCAP_1 and VCAP_2 pins. For packages supporting only 1 VCAP pin, the 2 CEXT
capacitors are replaced by a single capacitor.
## C
## EXT
is specified in Table 16.
Figure 19. External capacitor C
## EXT
-   Legend: ESR is the equivalent series resistance.
## V
## DD
= 2.4 to
## 2.7 V
## Conversion
time up to
## 2.4 Msps
24 MHz
100 MHz with 4
wait states
## – I/O
compensation
works
up to 50 MHz
16-bit erase
and program
operations
## V
## DD
= 2.7 to
## 3.6 V
## (6)
## Conversion
time up to
## 2.4 Msps
30 MHz
100 MHz with 3
wait states
## – I/O
compensation
works
–up to
100 MHz
when V
## DD
## =
3.0 to 3.6 V
–up to
50 MHz
when V
## DD
## =
2.7 to 3.0 V
32-bit erase
and program
operations
-   Applicable only when the code is executed from flash memory. When the code is executed from RAM, no wait state is
required.
-   Thanks to the ART accelerator and the 128-bit flash memory, the number of wait states given here does not impact the
execution speed from flash memory since the ART accelerator allows to achieve a performance equivalent to 0 wait state
program execution.
-   Refer to Table 55: I/O AC characteristics for frequencies vs. external load.
## 4.   V
## DD
## /V
## DDA
minimum value of 1.7 V, with the use of an external power supply supervisor (refer to Section 3.15.2: Internal
reset OFF).
-   Prefetch is not available. Refer to AN3430 application note for details on how to adjust performance and power.
-   The voltage range for the USB full speed embedded PHY can drop down to 2.7 V. However the electrical characteristics of
D- and D+ pins will be degraded between 2.7 and 3 V.
Table 15. Features depending on the operating power supply range (continued)
## Operating
power
supply
range
## ADC
operation
## Maximum
flash memory
access
frequency
with no wait
states
## (f
## Flashmax
## )
Maximum flash
memory access
frequency with
wait states
## (1)(2)
I/O operation
Clock output
frequency on
I/O pins
## (3)
## Possible
flash
memory
operations
## 069
## (65
## 5
## /HDN
## &

Electrical characteristicsSTM32F411xC STM32F411xE
66/151DS10314 Rev 8

6.3.3 Operating conditions at power-up/power-down (regulator ON)
Subject to general operating conditions for T
## A
## .
Table 17. Operating conditions at power-up / power-down (regulator ON)
6.3.4         Operating         conditions at power-up / power-down (regulator OFF)
Subject to general operating conditions for T
## A
## .

Note:This feature is only available for UFBGA100 package.
Table 16. VCAP_1/VCAP_2 operating conditions
## (1)
-   When bypassing the voltage regulator, the two 2.2 μF V
## CAP
capacitors are not required and should be
replaced by two 100 nF decoupling capacitors.
SymbolParameterConditions
## CEXT
Capacitance of external capacitor with a single VCAP
pin available
4.7 μF
## ESR
ESR of external capacitor with a single VCAP pin
available
## < 1 Ω
SymbolParameterMinMaxUnit
t
## VDD
## V
## DD
rise time rate20∞
μs/V
## V
## DD
fall time rate20∞
Table 18. Operating conditions at power-up / power-down (regulator OFF)
## (1)
-   To reset the internal logic at power-down, a reset must be applied on pin PA0 when V
## DD
reach below
## 1.08 V.
SymbolParameterConditionsMinMaxUnit
t
## VDD
## V
## DD
rise time ratePower-up 20∞
μs/V
## V
## DD
fall time ratePower-down 20∞
t
## VCAP
## V
## CAP_1
and V
## CAP_2
rise time ratePower-up20∞
## V
## CAP_1
and V
## CAP_2
fall time ratePower-down20∞

DS10314 Rev 867/151
STM32F411xC STM32F411xEElectrical characteristics
## 124
6.3.5 Embedded reset and power control block characteristics
The parameters given in Table 19 are derived from tests performed under ambient
temperature and V
## DD
supply voltage @ 3.3V.

Table 19. Embedded reset and power control block characteristics
SymbolParameterConditionsMinTyp

MaxUnit
## V
## PVD
Programmable voltage
detector level selection
PLS[2:0]=000 (rising edge)2.092.142.19
## V
PLS[2:0]=000 (falling edge)1.982.042.08
PLS[2:0]=001 (rising edge)2.232.302.37
PLS[2:0]=001 (falling edge)2.132.192.25
PLS[2:0]=010 (rising edge)2.392.452.51
PLS[2:0]=010 (falling edge)2.292.352.39
PLS[2:0]=011 (rising edge)2.542.602.65
PLS[2:0]=011 (falling edge)2.442.512.56
PLS[2:0]=100 (rising edge)2.702.762.82
PLS[2:0]=100 (falling edge)2.592.662.71
PLS[2:0]=101 (rising edge)2.862.932.99
PLS[2:0]=101 (falling edge)2.772.822.89
PLS[2:0]=110 (rising edge)2.963.033.10
PLS[2:0]=110 (falling edge)2.852.932.99
PLS[2:0]=111 (rising edge)3.073.143.21
PLS[2:0]=111 (falling edge)2.953.033.09
## V
PVDhyst
## (2)
PVD hysteresis--100-mV
## V
## POR/PDR
## Power-on/power-down
reset threshold
Falling edge
## 1.60
## (1)
## 1.681.76
## V
Rising edge1.641.721.80
## V
PDRhyst
## (2)
PDR hysteresis--40-mV
## V
## BOR1
Brownout level 1
threshold
Falling edge2.132.192.24
## V
Rising edge2.232.292.33
## V
## BOR2
Brownout level 2
threshold
Falling edge2.442.502.56
Rising edge2.532.592.63
## V
## BOR3
Brownout level 3
threshold
Falling edge2.752.832.88
Rising edge2.852.922.97
## V
BORhyst
## (2)
BOR hysteresis--100-mV
## T
## RSTTEMPO
## (2)(3)
POR reset timing-0.51.53.0ms

Electrical characteristicsSTM32F411xC STM32F411xE
68/151DS10314 Rev 8
6.3.6 Supply current characteristics
The current consumption is a function of several parameters and factors such as the
operating voltage, ambient temperature, I/O pin loading, device software configuration,
operating frequencies, I/O pin switching rate, program location in memory and executed
binary code.
The current consumption is measured as described in Figure 18: Current consumption
measurement scheme.
All the run-mode current consumption measurements given in this section are performed
with a reduced code that gives a consumption equivalent to CoreMark code.
Typical and maximum current consumption
The MCU is placed under the following conditions:
•All I/O pins are in input mode with a static value at VDD or VSS (no load).
•All peripherals are disabled except if it is explicitly mentioned.
•The flash memory access time is adjusted to both f
## HCLK
frequency and VDD ranges
(refer to Table 15: Features depending on the operating power supply range).
•The voltage scaling is adjusted to f
## HCLK
frequency as follows:
–Scale 3 for f
## HCLK
≤  64 MHz
–Scale 2 for 64 MHz < f
## HCLK
≤  84 MHz
–Scale 1 for 84 MHz < f
## HCLK
≤  100 MHz
•The system clock is HCLK, f
## PCLK1
= f
## HCLK
/2, and f
## PCLK2
= f
## HCLK
## .
•External clock is 4 MHz and PLL is ON except if it is explicitly mentioned.
•The maximum values are obtained for V
## DD
= 3.6 V and a maximum ambient
temperature (T
## A
), and the typical values for T
## A
= 25 °C and V
## DD
= 3.3 V unless
otherwise specified.


## I
## RUSH
## (2)
In-Rush current on
voltage regulator power-
on (POR or wakeup from
## Standby)
--160200mA
## E
## RUSH
## (2)
In-Rush energy on
voltage regulator power-
on (POR or wakeup from
## Standby)
## V
## DD
## = 1.7 V, T
## A
## = 125 °C,
## I
## RUSH
= 171 mA for 31 μs
--5.4μC
-   The product behavior is guaranteed by design down to the minimum V
## POR/PDR
value.
-   Guaranteed by design - Not tested in production.
-   The reset timing is measured from the power-on (POR reset or wakeup from V
## BAT
) to the instant when first
instruction is fetched by the user application code.
Table 19. Embedded reset and power control block characteristics (continued)
SymbolParameterConditionsMinTyp

MaxUnit

DS10314 Rev 869/151
STM32F411xC STM32F411xEElectrical characteristics
## 124

Table 20. Typical and maximum current consumption, code with data processing (ART
accelerator disabled) running from SRAM - V
## DD
## = 1.7 V
SymbolParameterConditions
f
## HCLK

(MHz)
TypMax
## (1)
## Unit
## T
## A
## =
## 25 °C
## T
## A
## =
## 25 °C
## T
## A
## =
## 85 °C
## T
## A
## =
## 105 °C
## T
## A
## =
## 125 °C
## I
## DD
## Supply
current in Run
mode
External clock,
## PLL ON
## (2)
, all
peripherals
enabled
## (3)(4)
## 10021.423.023.624.025.0
mA
## 8417.218.9
## (5)
## 19.119.220.2
## 6411.912.913.213.714.6
## 509.410.110.411.011.9
## 204.34.85.05.66.5
HSI, PLL off, all
peripherals
enabled
## (4)
## 163.03.33.64.35.2
## 10.50.71.01.72.6
External clock,
PLL on
## (2)
## )all
peripherals
disabled
## (3)
## 10012.714.014.414.815.8
## 8410.211.6
## (5)
## 11.812.013.0
## 647.17.98.28.79.7
## 505.66.36.57.18.0
## 202.53.03.33.94.8
HSI, PLL off, all
peripherals
disabled
## (4)
## 161.92.12.43.03.9
## 10.40.50.91.62.5
-   Evaluated by characterization - Not tested in production.
-   Refer to Table 41 and RM0383 for the possible PLL VCO setting
-   When analog peripheral blocks such as ADC, HSE, LSE, HSI, or LSI are ON, an additional power consumption has to be
considered.
-   When the ADC is ON (ADON bit set in the ADC_CR2 register), add an additional power consumption of 1.6 mA for the
analog part.
-   Guaranteed by test in production.

Electrical characteristicsSTM32F411xC STM32F411xE
70/151DS10314 Rev 8

Table 21. Typical and maximum current consumption, code with data processing (ART
accelerator disabled) running from SRAM - V
## DD
## = 3.6 V
SymbolParameterConditions
f
## HCLK

(MHz)
## Typ
## Max
## (1)
## Unit
## T
## A
## =
## 25 °C
## T
## A
## =
## 85 °C
## T
## A
## =
## 105 °C
## T
## A
## =
## 125 °C
## I
## DD
## Supply
current in
Run mode
External clock,
## PLL ON
## (2)
, all
peripherals
enabled
## (3)(4)
## 10021.723.323.924.3             25.3
mA
## 8417.519.2
## (5)
## 19.419.520.5
## 6412.213.213.514.014.9
## 509.610.410.711.212.1
## 204.55.05.35.96.8
HSI, PLL OFF, all
peripherals
enabled
## (3)
## 163.03.33.64.3               5.2
## 10.50.71.01.72.6
External clock,
## PLL OFF
## (2)
## ,
all peripherals
disabled
## (3)
## 10013.014.6
## (5)
## 14.614.916.0
## 8410.511.9
## (5)
## 12.112.213.2
## 647.48.4
## (5)
## 8.88.99.9
## 505.96.66.87.38.2
## 202.83.33.54.25.1
HSI, PLL OFF, all
peripherals
disabled
## (3)
## 161.92.12.43.14.0
## 10.40.50.91.62.5
-   Evaluated by characterization - Not tested in production.
-   Refer to Table 41 and RM0383 for the possible PLL VCO setting
-   When analog peripheral blocks such as ADC, HSE, LSE, HSI, or LSI are ON, an additional power consumption has to be
considered.
-   When the ADC is ON (ADON bit set in the ADC_CR2 register), add an additional power consumption of 1.6 mA for the
analog part.
-   Guaranteed by test in production.

DS10314 Rev 871/151
STM32F411xC STM32F411xEElectrical characteristics
## 124

Table 22. Typical and maximum current consumption in run mode, code with data processing
(ART accelerator enabled except prefetch) running from flash memory- V
## DD
## = 1.7 V
SymbolParameterConditions
f
## HCLK
(MHz)
## Typ
## Max
## (1)
## Unit
## T
## A
## =
## 25 °C
## T
## A
## =
## 85 °C
## T
## A
## =
## 105 °C
## T
## A
## =
## 125 °C
## I
## DD
Supply current
in Run mode
External clock, PLL
## ON
## (2)
## ,
all peripherals
enabled
## (3)(4)
## 10020.421.822.122.823.8
mA
## 8416.517.617.818.619.6
## 6411.412.312.513.114.1
## 509.09.710.010.611.6
## 204.65.05.36.07.0
## HSI, PLL OFF
## (2)
, all
peripherals enabled
## (3)
## 162.93.23.64.35.3
## 10.70.81.31.92.9
External clock, PLL ON
## (2)

all peripherals disabled
## (3)
## 10011.212.212.413.214.2
## 849.19.910.110.911.9
## 646.47.07.37.98.9
## 505.15.65.96.67.6
## 202.63.03.34.05.0
## HSI, PLL OFF
## (2)
, all
peripherals disabled
## (3)
## 161.82.02.43.04.0
## 10.60.71.21.92.9
-   Evaluated by characterization - Not tested in production.
-   Refer to Table 41 and RM0383 for the possible PLL VCO setting
-   Add an additional power consumption of 1.6 mA per ADC for the analog part. In applications, this consumption occurs only
while the ADC is ON (ADON bit is set in the ADC_CR2 register).
-   When the ADC is ON (ADON bit set in the ADC_CR2), add an additional power consumption of 1.6mA per ADC for the
analog part.

Electrical characteristicsSTM32F411xC STM32F411xE
72/151DS10314 Rev 8

Table 23. Typical and maximum current consumption in run mode, code with data processing
(ART accelerator enabled except prefetch) running from flash memory - V
## DD
## = 3.6 V
SymbolParameterConditions
f
## HCLK
(MHz)
## Typ
## Max
## (1)
## Unit
## T
## A
## =
## 25 °C
## T
## A
## =
## 85 °C
## T
## A
## =
## 105 °C
## T
## A
## =
## 125 °C
## I
## DD
Supply current
in Run mode
External clock, PLL
## ON
## (2)
## ,
all peripherals
enabled
## (3)(4)
## 10020.722.222.523.224.4
mA
## 8416.818.018.319.020.1
## 6411.812.712.913.614.6
## 509.310.210.411.112.0
## 204.85.55.86.57.4
## HSI, PLL OFF
## (2)
, all
peripherals enabled
## (3)
## 163.03.33.84.55.4
## 10.71.01.42.13.0
External clock, PLL ON
## (2)

all peripherals disabled
## (3)
## 10011.612.612.913.614.8
## 849.710.2
## (5)
## 11.111.312.5
## 646.77.47.78.39.4
## 505.46.06.37.08.0
## 202.93.43.74.45.4
## HSI, PLL OFF
## (2)
, all
peripherals disabled
## (3)
## 161.92.22.63.34.3
## 10.70.91.32.13.1
-   Evaluated by characterization - Not tested in production.
-   Refer to Table 41 and RM0383 for the possible PLL VCO setting
-   Add an additional power consumption of 1.6 mA per ADC for the analog part. In applications, this consumption occurs only
while the ADC is ON (ADON bit is set in the ADC_CR2 register).
-   When the ADC is ON (ADON bit set in the ADC_CR2), add an additional power consumption of 1.6mA per ADC for the
analog part.
-   Guaranteed by test in production.

DS10314 Rev 873/151
STM32F411xC STM32F411xEElectrical characteristics
## 124

Table 24.  Typical and maximum current consumption in run mode, code with data processing
(ART accelerator disabled) running from flash memory - V
## DD
## = 3.6 V
SymbolParameterConditions
f
## HCLK
(MHz)
## Typ
## Max
## (1)
## Unit
## T
## A
## =
## 25 °C
## T
## A
## =
## 85 °C
## T
## A
## =
## 105 °C
## T
## A
## =
## 125 °C
## I
## DD
Supply current
in Run mode
External clock, PLL
## ON
## (2)
## ,
all peripherals
enabled
## (3)(4)
## 10029.531.532.333.334.7
mA
## 8425.527.127.928.930.2
## 6418.619.820.421.222.4
## 5015.216.416.917.718.7
## 207.68.48.89.510.5
## HSI, PLL OFF
## (2)
, all
peripherals enabled
## (3)
## 164.85.25.76.57.5
## 10.91.31.62.43.4
External clock, PLL ON
## (2)

all peripherals disabled
## (3)
## 10020.421.822.723.825.1
## 8418.419.2
## (5)
## 20.921.122.4
## 6413.514.515.215.917.2
## 5011.312.212.813.614.7
## 205.66.46.77.48.5
## HSI, PLL OFF
## (2)
, all
peripherals disabled
## (3)
## 163.64.14.55.26.3
## 10.91.21.62.33.4
-   Evaluated by characterization - Not tested in production.
-   Refer to Table 41 and RM0383 for the possible PLL VCO setting
-   Add an additional power consumption of 1.6 mA per ADC for the analog part. In applications, this consumption occurs only
while the ADC is ON (ADON bit is set in the ADC_CR2 register).
-   When the ADC is ON (ADON bit set in the ADC_CR2), add an additional power consumption of 1.6mA per ADC for the
analog part.
-   Guaranteed by test in production.

Electrical characteristicsSTM32F411xC STM32F411xE
74/151DS10314 Rev 8

Table 25. Typical and maximum current consumption in run mode, code with data processing
(ART accelerator enabled with prefetch) running from flash memory - V
## DD
## = 3.6 V
SymbolParameterConditions
f
## HCLK
(MHz)
## Typ
## Max
## (1)
## Unit
## T
## A
## =
## 25 °C
## T
## A
## =
## 85 °C
## T
## A
## =
## 105 °C
## T
## A
## =
## 125 °C
## I
## DD
Supply current
in Run mode
External clock, PLL
## ON
## (2)
## ,
all peripherals
enabled
## (3)(4)
## 10031.733.634.535.537.0
mA
## 8426.928.629.430.331.6
## 6419.620.921.522.323.5
## 5015.616.717.218.019.1
## 207.68.48.89.510.6
## HSI, PLL OFF
## (2)
, all
peripherals enabled
## (3)
## 165.15.66.16.87.9
## 11.01.31.72.33.4
External clock, PLL ON
## (2)

all peripherals disabled
## (3)
## 10022.524.224.926.027.3
## 8419.521.1
## (5)
## 21.822.824.1
## 6414.515.716.317.118.3
## 5011.712.713.214.015.1
## 205.66.46.87.48.5
## HSI, PLL OFF
## (2)
, all
peripherals disabled
## (3)
## 164.04.54.95.66.7
## 10.91.21.62.23.3
-   Evaluated by characterization - Not tested in production.
-   Refer to Table 41 and RM0383 for the possible PLL VCO setting
-   Add an additional power consumption of 1.6 mA per ADC for the analog part. In applications, this consumption occurs only
while the ADC is ON (ADON bit is set in the ADC_CR2 register).
-   When the ADC is ON (ADON bit set in the ADC_CR2), add an additional power consumption of 1.6mA per ADC for the
analog part.
-   Guaranteed by test in production.

DS10314 Rev 875/151
STM32F411xC STM32F411xEElectrical characteristics
## 124


Table 26. Typical and maximum current consumption in Sleep mode - V
## DD
## = 3.6 V
SymbolParameterConditions
f
## HCLK
(MHz)
## Typ
## Max
## (1)
## Unit
## T
## A
## =
## 25 °C
## T
## A
## =
## 85 °C
## T
## A
## =
## 105 °C
## T
## A
## =
## 125 °C
## I
## DD
Supply current
in Sleep mode
External clock, PLL
## ON
## (2)
## ,
all peripherals
enabled
## (3)(4)
## 10012.213.213.414.115.3
mA
## 849.810.610.911.612.8
## 646.97.47.78.39.5
## 505.45.96.26.88.0
## 202.83.23.54.15.3
## HSI, PLL OFF
## (2)
, all
peripherals enabled
## (3)
## 161.31.72.22.84.0
## 10.40.50.91.62.8
External clock, PLL ON
## (2)

all peripherals disabled
## (3)
## 1003.03.63.94.55.7
## 842.53.03.23.95.1
## 641.92.22.53.04.2
## 501.61.92.12.73.9
## 201.11.41.72.33.5
## HSI, PLL OFF
## (2)
, all
peripherals disabled
## (3)
## 160.40.50.91.62.8
## 10.30.40.81.52.7
-   Evaluated by characterization - Not tested in production.
-   Refer to Table 41 and RM0383 for the possible PLL VCO setting.
-   Add an additional power consumption of 1.6 mA per ADC for the analog part. In applications, this consumption occurs only
while the ADC is ON (ADON bit is set in the ADC_CR2 register).
-   When the ADC is ON (ADON bit set in the ADC_CR2), add an additional power consumption of 1.6mA per ADC for the
analog part.
Table 27. Typical and maximum current consumptions in Stop mode - V
## DD
## = 1.7 V
SymbolConditionsParameter
## Typ
## (1)
## Max
## (1)
## Unit
## T
## A
## =
## 25 °C
## T
## A
## =
## 25 °C
## T
## A
## =
## 85 °C
## T
## A
## =
## 105 °C
## T
## A
## =
## 125 °C
## I
## DD_STOP
Flash in Stop mode, all
oscillators OFF, no
independent watchdog
Main regulator usage
## 112142
## (2)
## 4007101200
## (2)
μA
Low power regulator usage
## 42.667
## (2)
## 3005801044
## (2)
Flash in Deep power
down mode, all
oscillators OFF, no
independent watchdog
Main regulator usage
## 7599
## (2)
## 310580993
## (2)
Low power regulator usage13.637
## (2)
## 2655501007
## (2)
Low power low voltage regulator
usage
## 928
## (2)
## 230500910
## (2)
-   Evaluated by characterization - Not tested in production.
-   Guaranteed by test in production.

Electrical characteristicsSTM32F411xC STM32F411xE
76/151DS10314 Rev 8



Table 28. Typical and maximum current consumption in Stop mode - V
## DD
## =3.6 V
SymbolConditionsParameter
## Typ
## Max
## (1)
## Unit
## T
## A
## =
## 25 °C
## T
## A
## =
## 25 °C
## T
## A
## =
## 85 °C
## T
## A
## =
## 105 °C
## T
## A
## =
## 125 °C
## I
## DD_STOP
Flash in Stop mode, all
oscillators OFF, no
independent watchdog
Main regulator usage 113.7145
## (2)
## 4107201217
## (2)
μA
Low power regulator usage
## 43.168
## (2)
## 3106001073
## (2)
Flash in Deep power
down mode, all
oscillators OFF, no
independent watchdog
Main regulator usage 76.2105
## (2)
## 3206001019
## (2)
Low power regulator usage1438
## (2)
## 2755601025
## (2)
Low power low voltage regulator
usage
## 1030
## (2)
## 235510928
## (2)
-   Evaluated by characterization - Not tested in production.
-   Guaranteed by test in production.
Table 29. Typical and maximum current consumption in Standby mode - V
## DD
## = 1.7 V
SymbolParameterConditions
## Typ
## (1)
## Max
## (2)
## Unit
## T
## A
## =
## 25 °C
## T
## A
## =
## 25 °C
## T
## A
## =
## 85 °C
## T
## A
## =
## 105 °C
## T
## A
## =
## 125 °C
## I
## DD_STBY
Supply current
in Standby mode
Low-speed oscillator (LSE) and RTC ON2.44122550
μA
RTC and LSE OFF1.83
## (3)
## 112449
## (3)
-   When the PDR is OFF (internal reset is OFF), the typical current consumption is reduced by 1.2 μA.
-   Evaluated by characterization - Not tested in production.
-   Guaranteed by test in production.
Table 30. Typical and maximum current consumption in Standby mode - V
## DD
## = 3.6 V
SymbolParameterConditions
## Typ
## (1)
## Max
## (2)
## Unit
## T
## A
## =
## 25 °C
## T
## A
## =
## 25 °C
## T
## A
## =
## 85 °C
## T
## A
## =
## 105 °C
## T
## A
## =
## 125 °C
## I
## DD_STBY
Supply current
in Standby
mode
Low-speed oscillator (LSE) and RTC ON
## 2.85142959
μA
RTC and LSE OFF
## 2.14
## (3)
## 13.52858
## (3)
-   When the PDR is OFF (internal reset is OFF), the typical current consumption is reduced by 1.2 μA.
-   Evaluated by characterization - Not tested in production.
-   Guaranteed by test in production.

DS10314 Rev 877/151
STM32F411xC STM32F411xEElectrical characteristics
## 124

## Figure 20. Typical V
## BAT
current consumption (LSE in low-drive mode and RTC ON)
Table 31. Typical and maximum current consumptions in V
## BAT
mode
Symbol    ParameterConditions
## (1)
TypMax
## (2)
## Unit
## T
## A
## = 25 °C
## T
## A
## =
## 85 °C
## T
## A
## =
## 105 °C
## T
## A
## =
## 125 °C
## V
## BAT
## =
## 1.7 V
## V
## BAT
## =
## 2.4 V
## V
## BAT
## =
## 3.3 V
## V
## BAT
## = 3.6 V
## I
## DD_VBAT
## Backup
domain
supply
current
Low-speed oscillator (LSE in low-
drive mode) and RTC ON
## 0.70.81.0356.8
μALow-speed oscillator (LSE in high-
drive mode) and RTC ON
## 1.51.61.93.85.88.6
RTC and LSE OFF0.10.10.1245.8
-   Crystal used: Abracon ABS07-120-32.768 kHz-T with a C
## L
of 6 pF for typical values.
-   Evaluated by characterization - Not tested in production.
## MS30490V1
## 0
## 0.5
## 1
## 1.5
## 2
## 2.5
## 3
## 0°C 25°C55°C85°C105°C
IDD_VBAT (μA)
## Temperature
## 1.65V
## 1.7V
## 1.8V
## 2V
## 2.4V
## 2.7V
## 3V
## 3.3V
## 3.6V

Electrical characteristicsSTM32F411xC STM32F411xE
78/151DS10314 Rev 8
I/O system current consumption
The current consumption of the I/O system has two components: static and dynamic.
I/O static current consumption
All the I/Os used as inputs with pull-up generate current consumption when the pin is
externally held low. The value of this current consumption can be simply computed by using
the pull-up/pull-down resistors values given in Table 53: I/O static characteristics.
For the output pins, any external pull-down or external load must also be considered to
estimate the current consumption.
Additional I/O current consumption is due to I/Os configured as inputs if an intermediate
voltage level is externally applied. This current consumption is caused by the input Schmitt
trigger circuits used to discriminate the input value. Unless this specific configuration is
required by the application, this supply current consumption can be avoided by configuring
these I/Os in analog mode. This is notably the case of ADC input pins which should be
configured as analog inputs.
Caution:Any floating input pin can also settle to an intermediate voltage level or switch inadvertently,
as a result of external electromagnetic noise. To avoid current consumption related to
floating pins, they must either be configured in analog mode, or forced internally to a definite
digital value. This can be done either by using pull-up/down resistors or by configuring the
pins in output mode.
I/O dynamic current consumption
In addition to the internal peripheral current consumption (see Table 33: Peripheral current
consumption), the I/Os used by an application also contribute to the current consumption.
When an I/O pin switches, it uses the current from the MCU supply voltage to supply the I/O
pin circuitry and to charge/discharge the capacitive load (internal or external) connected to
the pin:
where
## I
## SW
is the current sunk by a switching I/O to charge/discharge the capacitive load
## V
## DD
is the MCU supply voltage
f
## SW
is the I/O switching frequency
C is the total capacitance seen by the I/O pin: C = C
## INT
## + C
## EXT
The test pin is configured in push-pull output mode and is toggled by software at a fixed
frequency.
## I
## SW
## V
## DD
f
## SW
## C××=

DS10314 Rev 879/151
STM32F411xC STM32F411xEElectrical characteristics
## 124

Table 32. Switching output I/O current consumption
SymbolParameterConditions
## (1)
-   CS is the PCB board capacitance including the pad pin. CS = 7 pF (estimated value).
I/O toggling
frequency (f
## SW
## )
## Typ               Unit
## IDDIO
I/O switching
current
## V
## DD
## = 3.3 V
## C = C
## INT
2 MHz0.05
mA
8 MHz0.15
25 MHz0.45
50 MHz0.85
60 MHz1.00
84 MHz1.40
90 MHz1.67
## V
## DD
## = 3.3 V
## C
## EXT
= 0 pF
## C = C
## INT
## + C
## EXT
## + C
## S
2 MHz0.10
8 MHz0.35
25 MHz1.05
50 MHz2.20
60 MHz2.40
84 MHz3.55
90 MHz4.23
## V
## DD
## = 3.3 V
## C
## EXT
=10 pF
## C = C
## INT
## + C
## EXT
## + C
## S
2 MHz0.20
8 MHz0.65
25 MHz1.85
50 MHz2.45
60 MHz4.70
84 MHz8.80
90 MHz10.47
## V
## DD
## = 3.3 V
## C
## EXT
= 22 pF
## C = C
## INT
## + C
## EXT
## + C
## S
2 MHz0.25
8 MHz1.00
25 MHz3.45
50 MHz7.15
60 MHz 11.55
## V
## DD
## = 3.3 V
## C
## EXT
= 33 pF
## C = C
## INT
## + C
## EXT
## + C
## S
2 MHz0.32
8 MHz1.27
25 MHz3.88
50 MHz12.34

Electrical characteristicsSTM32F411xC STM32F411xE
80/151DS10314 Rev 8
On-chip peripheral current consumption
The MCU is placed under the following conditions:
•At startup, all I/O pins are in analog input configuration.
•All peripherals are disabled unless otherwise mentioned.
•The ART accelerator is ON.
•Voltage Scale 2 mode selected, internal digital voltage V12 = 1.26 V.
•HCLK is the system clock at 84 MHz. f
## PCLK1
= f
## HCLK
/2, and f
## PCLK2
= f
## HCLK
## .
The given value is calculated by measuring the difference of current consumption
–with all peripherals clocked off
–with only one peripheral clocked on
•Ambient operating temperature is 25 °C and V
## DD
## =3.3 V.

Table 33. Peripheral current consumption
## Peripheral I
## DD
(Typ)Unit
## AHB1
(up to 100 MHz)
## GPIOA1.55
μA/MHz
## GPIOB1.55
## GPIOC1.55
## GPIOD1.55
## GPIOE1.55
## GPIOH1.55
## CRC0.36
## DMA1
## (1)
## 14.96
## DMA1
## (2)
## 1.54N+2.66
## DMA2
## (1)
## 14.96
## DMA2
## (2)
## 1.54N+2.66
## APB1
(up to 50 MHz)
## TIM211.19
μA/MHz
## TIM38.57
## TIM48.33
## TIM511.19
## PWR0.71
## USART23.33
## I2C1/2/33.10
## SPI2
## (3)
## 2.62
## SPI3
## (3)
## 2.86
## I2S21.90
## I2S31.67
## WWDG0.71

DS10314 Rev 881/151
STM32F411xC STM32F411xEElectrical characteristics
## 124
## APB2
(up to 100 MHz)
## TIM15.71
μA/MHz
## TIM92.86
## TIM101.79
## TIM112.02
## OTG_FS23.93
## ADC1
## (4)
## 2.98
## SPI11.19
## USART13.10
## USART62.86
## SDIO5.95
## SPI41.31
## SYSCFG0.71
-   Valid if all the DMA streams are activated (please refer to the reference manual RM0383).
-   For N DMA streams activated (up to 8 activated streams, refer to the reference manual RM0383).
-   I2SMOD bit set in SPI_I2SCFGR register, and then the I2SE bit set to enable I2S peripheral.
-   When the ADC is ON (ADON bit set in the ADC_CR2 register), add an additional power consumption of 1.6
mA for the analog part.
Table 33. Peripheral current consumption (continued)
## Peripheral I
## DD
(Typ)Unit

Electrical characteristicsSTM32F411xC STM32F411xE
82/151DS10314 Rev 8
6.3.7 Wakeup time from low-power modes
The wakeup times given in Table 34 are measured starting from the wakeup event trigger up
to the first instruction executed by the CPU:
•For Stop or Sleep modes: the wakeup event is WFE.
•WKUP (PA0) pin is used to wakeup from Standby, Stop and Sleep modes.
Figure 21. Low-power mode wakeup
All timings are derived from tests performed under ambient temperature and V
## DD
## =3.3 V.
## Regulator
ramp-up
HSI restart
Flash stop exit
CPU restart
Wakeup from Stop mode,
main regulator
## Regulator
ramp-up
HSI restart
Flash Deep Pd recovery
CPU restart
Wakeup from Stop mode,
main regulator,
flash in Deep power down mode
## Regulator
ramp-up
HSI restart
Flash stop exit
CPU restart
Wakeup from Stop,
regulator in low power mode
## Regulator
ramp-up
HSI restart
CPU restart
Wakeup from Stop,
regulator in low power mode,
flash in Deep power down mode
## Regulator
restart
HSI restart
CPU restart
Wakeup from Standby mode
CPU restart
Wakeup from Sleep and
Flash in Deep power down
## MS35542V1
Flash Deep Pd recovery
Option bytes are not reloaded
Option bytes are not reloaded
Flash Deep Pd recovery
Option bytes loading
Flash Deep Pd recovery
Option bytes are not reloaded
Option bytes are not reloaded
## Regulator
## OFF
Option bytes are not reloaded
## Regulator
## ON

DS10314 Rev 883/151
STM32F411xC STM32F411xEElectrical characteristics
## 124

6.3.8         External         clock         source characteristics
High-speed external user clock generated from an external source
In bypass mode the HSE oscillator is switched off and the input pin is a standard I/O. The
external clock signal has to respect the Table 53. However, the recommended clock input
waveform is shown in Figure 22.
The characteristics given in Table 35 result from tests performed using an high-speed
external clock source, and under ambient temperature and supply voltage conditions
summarized in Table 14.

Table 34. Low-power mode wakeup timings
## (1)

SymbolParameter
## Min
## (1)
## Typ
## (1)
## Max
## (1)
## Unit
t
## WUSLEEP
## (2)
Wakeup from Sleep mode-46
## CPU
clock
cycle
t
## WUSTOP
## (2)
Wakeup from Stop mode, usage of main regulator-13.514.5
μs
Wakeup from Stop mode, usage of main regulator, flash
memory in Deep power down mode
## -105111
Wakeup from Stop mode, regulator in low power mode-2133
Wakeup from Stop mode, regulator in low power mode,
flash memory in Deep power down mode
## -113130
t
## WUSTDBY
## (2)(3)
Wakeup from Standby mode-314407μs
t
## WUFLASH
Wakeup of Flash from Flash_Stop mode--8
μs
Wakeup of Flash from Flash Deep power down mode--100
-   Evaluated by characterization - Not tested in production.
-   The wakeup times are measured from the wakeup event to the point in which the application code reads the first instruction.
-   t
## WUSTDBY
maximum value is given at –40 °C.
Table 35. High-speed external user clock characteristics
SymbolParameterConditionsMinTypMaxUnit
f
HSE_ext
External user clock source frequency
## (1)
## -
1-50MHz
## V
## HSEH
OSC_IN input pin high level voltage0.7V
## DD
## -V
## DD
## V
## V
## HSEL
OSC_IN input pin low level voltageV
## SS
## -0.3V
## DD
t
w(HSEH)
t
w(HSEL)
OSC_IN high or low time
## (1)
## 5--
ns
t
r(HSE)
t
f(HSE)
OSC_IN rise or fall time
## (1)
## --10
## C
in(HSE)
OSC_IN input capacitance
## (1)
--5-pF
DuCy
## (HSE)
Duty cycle-45-55%
## I
## L
OSC_IN Input leakage current V
## SS
## ≤ V
## IN
## ≤ V
## DD
--±1μA
-   Guaranteed by design - Not tested in production.

Electrical characteristicsSTM32F411xC STM32F411xE
84/151DS10314 Rev 8
Figure 22. High-speed external clock source AC timing diagram
Low-speed external user clock generated from an external source
In bypass mode the LSE oscillator is switched off and the input pin is a standard I/O. The
external clock signal has to respect the Table 53. However, the recommended clock input
waveform is shown in Figure 23.
The characteristics given in Table 36 result from tests performed using an low-speed
external clock source, and under ambient temperature and supply voltage conditions
summarized in Table 14.

MSv42627V1
## V
## HSEH
t
f(HSE)
## 90%
## 10%
## T
## HSE
t
t
r(HSE)
## V
## HSEL
t
w(HSEH)
t
w(HSEL)
Table 36. Low-speed external user clock characteristics
SymbolParameterConditionsMinTypMaxUnit
f
LSE_ext
User External clock source
frequency
## (1)
## -
-32.7681000kHz
## V
## LSEH
OSC32_IN input pin high level
voltage
## 0.7V
## DD
## -V
## DD
## V
## V
## LSEL
OSC32_IN input pin low level voltageV
## SS
## -0.3V
## DD
t
w(LSEH)
t
w(LSEL)
OSC32_IN high or low time
## (1)
## 450--
ns
t
r(LSE)
t
f(LSE)
OSC32_IN rise or fall time
## (1)
## --50
## C
in(LSE)
OSC32_IN input capacitance
## (1)
--5-pF
DuCy
## (LSE)
Duty cycle-30-70%
## I
## L
OSC32_IN Input leakage current V
## SS
## ≤  V
## IN
## ≤  V
## DD
--±1μA
-   Guaranteed by design - Not tested in production.

DS10314 Rev 885/151
STM32F411xC STM32F411xEElectrical characteristics
## 124
Figure 23. Low-speed external clock source AC timing diagram
High-speed external clock generated from a crystal/ceramic resonator
The high-speed external (HSE) clock can be supplied with a 4 to 26 MHz crystal/ceramic
resonator oscillator. All the information given in this paragraph are based on
characterization results obtained with typical external components specified in Table 37. In
the application, the resonator and the load capacitors have to be placed as close as
possible to the oscillator pins in order to minimize output distortion and startup stabilization
time. Refer to the crystal resonator manufacturer for more details on the resonator
characteristics (frequency, package, accuracy).

## For C
## L1
and C
## L2
, it is recommended to use high-quality external ceramic capacitors in the
5 pF to 25 pF range (Typ.), designed for high-frequency applications, and selected to match
the requirements of the crystal or resonator (see Figure 24). C
## L1
and C
## L2
are usually the
same size. The crystal manufacturer typically specifies a load capacitance which is the
series combination of C
## L1
and C
## L2
. PCB and MCU pin capacitance must be included (10 pF
can be used as a rough estimate of the combined pin and board capacitance) when sizing
## C
## L1
and C
## L2
## .
Note:For information on selecting the crystal, refer to the application note AN2867 “Oscillator
design guide for ST microcontrollers” available from the ST website www.st.com.
Table 37. HSE 4-26 MHz oscillator characteristics
## (1)

-   Guaranteed by design - Not tested in production.
SymbolParameterConditionsMinTypMaxUnit
f
## OSC_IN
Oscillator frequency4-26MHz
## R
## F
Feedback resistor-200-kΩ
## I
## DD
HSE current consumption
## V
## DD
## =3.3 V,
## ESR= 30 Ω,
## C
## L
=5 pF @25 MHz
## -450-
μA
## V
## DD
## =3.3 V,
## ESR= 30 Ω,
## C
## L
=10 pF @25 MHz
## -530-
## G
m_crit_max
Maximum critical crystal g
m
Startup--1mA/V
t
## SU(HSE)
## (2)
-   t
## SU(HSE)
is the startup time measured from the moment it is enabled (by software) to a stabilized 8 MHz
oscillation is reached. This value is measured for a standard crystal resonator and it can vary significantly
with the crystal manufacturer
Startup time  V
## DD
is stabilized-2-ms
MSv42626V1
## V
## LSEH
t
f(LSE)
## 90%
## 10%
## T
## LSE
t
t
r(LSE)
## V
## LSEL
t
w(LSEH)
t
w(LSEL)

Electrical characteristicsSTM32F411xC STM32F411xE
86/151DS10314 Rev 8
Figure 24. Typical application with an 8 MHz crystal
## 1.   R
## EXT
value depends on the crystal characteristics.
Low-speed external clock generated from a crystal/ceramic resonator
The low-speed external (LSE) clock can be supplied with a 32.768 kHz crystal/ceramic
resonator oscillator. All the information given in this paragraph are based on
characterization results obtained with typical external components specified in Table 38. In
the application, the resonator and the load capacitors have to be placed as close as
possible to the oscillator pins in order to minimize output distortion and startup stabilization
time. Refer to the crystal resonator manufacturer for more details on the resonator
characteristics (frequency, package, accuracy).
The LSE high-power mode allows to cover a wider range of possible crystals but with a cost
of higher power consumption.

Note:For information on selecting the crystal, refer to the application note AN2867 “Oscillator
design guide for ST microcontrollers” available from the ST website www.st.com.
For information about the LSE high-power mode, refer to the reference manual RM0383.
Table 38. LSE oscillator characteristics (f
## LSE
= 32.768 kHz)
## (1)
-   Guaranteed by design - Not tested in production.
SymbolParameterConditionsMinTypMaxUnit
## R
## F
Feedback resistor--18.4-MΩ
## I
## DD
LSE current
consumption
Low-power mode
## (default)
## --1
μA
High-drive mode--3
## G
m
## _crit_max
Maximum critical crystal
g
m
Startup, low-power mode--0.56
μA/V
Startup, high-drive mode--1.50
t
## SU(LSE)
## (2)
-   t
## SU(LSE)
is the startup time measured from the moment it is enabled (by software) to a stabilized
32.768 kHz oscillation is reached. This value is guaranteed by characterization. It is measured for a
standard crystal resonator and it can vary significantly with the crystal manufacturer.
startup time  V
## DD
is stabilized-2-s
ai17530
## OSC_OU T
## OSC_IN
f
## HSE
## C
## L1
## R
## F
## STM32F
8 MHz
resonator
Resonator with
integrated capacitors
## Bias
controlled
gain
## R
## EXT
## (1)

## C
## L2

DS10314 Rev 887/151
STM32F411xC STM32F411xEElectrical characteristics
## 124
Figure 25. Typical application with a 32.768 kHz crystal
6.3.9 Internal clock source characteristics
The parameters given in Table 39 and Table 40 are derived from tests performed under
ambient temperature and V
## DD
supply voltage conditions summarized in Table 14.
High-speed internal (HSI) RC oscillator

## L
ai17531
## OSC32_OU T
## OSC32_IN
f
## LSE
## C
## L1
## R
## F
## STM32F
32.768 kH z
resonator
Resonator with
integrated capacitors
## Bias
controlled
gain
## C
## L2
Table 39. HSI oscillator characteristics
## (1)

## 1.   V
## DD
## = 3.3 V, T
## A
= - 40 to 125 °C unless otherwise specified.
SymbolParameterConditionsMinTypMaxUnit
f
## HSI
Frequency                                             --16-MHz
## ACC
## HSI
Accuracy of the HSI
oscillator
User-trimmed with the RCC_CR
register
## (2)
-   Guaranteed by design - Not tested in production.
## --1%
## Factory-
calibrated
## T
## A
= - 40 to 125 °C
## (3)
-   Evaluated by characterization - Not tested in production.
## - 8-5.5
## T
## A
= - 40 to 105 °C
## (3)
## - 8-4.5%
## T
## A
= - 10 to 85 °C
## (3)
## - 4-4%
## T
## A
## = 25 °C
## (4)
-   Factory calibrated non-soldered parts.
## - 1-1%
t
su(HSI)
## (2)
HSI oscillator
startup time
-2.24 μs
## I
## DD(HSI)
## (2)
HSI oscillator
power consumption
-6080μA

Electrical characteristicsSTM32F411xC STM32F411xE
88/151DS10314 Rev 8
Figure 26. ACC
## HSI
versus temperature
-   Evaluated by characterization - Not tested in production.
Low-speed internal (LSI) RC oscillator

Table 40. LSI oscillator characteristics
## (1)
## 1.   V
## DD
## = 3 V, T
## A
= –40 to 125 °C unless otherwise specified.
SymbolParameterMinTypMaxUnit
f
## LSI
## (2)
-   Evaluated by characterization - Not tested in production.
Frequency173247kHz
t
su(LSI)
## (3)
-   Guaranteed by design - Not tested in production.
LSI oscillator startup time-1540μs
## I
## DD(LSI)
## (3)
LSI oscillator power consumption-0.40.6μA
## MS30492V1
## -0. 08
## -0. 06
## -0. 04
## -0. 02
## 0
## 0.02
## 0.04
## 0.06
## -40025581 051 25
## Min
## Max
## Typical
## TA (°C)
## ACC
## HSI

DS10314 Rev 889/151
STM32F411xC STM32F411xEElectrical characteristics
## 124
Figure 27. ACC
## LSI
versus temperature
6.3.10       PLL       characteristics
The parameters given in Table 41 and Table 42 are derived from tests performed under
temperature and V
## DD
supply voltage conditions summarized in Table 14.

## MS19013V1
## -40
## -30
## -20
## -10
## 0
## 10
## 20
## 30
## 40
## 50
## -45-35-25-15-5 5 152535455565758595105
Normalized deviati on (%)
Te m p e r at u r e  ( °C)
max
avg
min
Table 41. Main PLL characteristics
SymbolParameterConditionsMinTypMaxUnit
f
## PLL_IN
PLL input clock
## (1)
## 0.95
## (2)
12.10MHz
f
## PLL_OUT
PLL multiplier output clock24-100MHz
f
## PLL48_OUT
48 MHz PLL multiplier output
clock
-48 75MHz
f
## VCO_OUT
PLL VCO output100-432MHz
t
## LOCK
PLL lock time
VCO freq = 100 MHz75-200
μs
VCO freq = 432 MHz100-300
## Jitter
## (3)
Cycle-to-cycle jitter
System clock
100 MHz
## RMS-25-
ps
peak
to
peak
## -±150-
## Period Jitter
## RMS-15-
peak
to
peak
## -±200-

Electrical characteristicsSTM32F411xC STM32F411xE
90/151DS10314 Rev 8

## I
## DD(PLL)
## (4)
PLL power consumption on VDD
VCO freq = 100 MHz
VCO freq = 432 MHz
## 0.15
## 0.45
## -
## 0.40
## 0.75
mA
## I
## DDA(PLL)
## (4)
PLL power consumption on
## VDDA
VCO freq = 100 MHz
VCO freq = 432 MHz
## 0.30
## 0.55
## -
## 0.40
## 0.85
-   Take care of using the appropriate division factor M to obtain the specified PLL input clock values. The M factor is shared
between PLL and PLLI2S.
-   Guaranteed by design - Not tested in production.
-   The use of two PLLs in parallel could degraded the Jitter up to +30%.
-   Evaluated by characterization - Not tested in production.
Table 41. Main PLL characteristics (continued)
SymbolParameterConditionsMinTypMaxUnit
Table 42. PLLI2S (audio PLL) characteristics
SymbolParameterConditionsMinTypMaxUnit
f
## PLLI2S_IN
PLLI2S input clock
## (1)
## -0.95
## (2)
## 12.10
MHzf
## PLLI2S_OUT
PLLI2S multiplier output clock---216
f
## VCO_OUT
PLLI2S VCO output-100-432
t
## LOCK
PLLI2S lock time
VCO freq = 100 MHz75-200
μs
VCO freq = 432 MHz100-300
## Jitter
## (3)
Master I2S clock jitter
Cycle to cycle at
12.288 MHz on
48 kHz period,
## N=432, R=5
## RMS-90-
peak
to
peak
## - ±280-
ps
Average frequency of
12.288 MHz
## N = 432, R = 5
on 1000 samples
## -90 -
WS I2S clock jitter
Cycle to cycle at 48 KHz
on 1000 samples
## -400-
## I
## DD(PLLI2S)
## (4)
PLLI2S power consumption on
## V
## DD
VCO freq = 100 MHz
VCO freq = 432 MHz
## 0.15
## 0.45
## -
## 0.40
## 0.75
mA
## I
## DDA(PLLI2S)
## (4)
PLLI2S power consumption on
## V
## DDA
VCO freq = 100 MHz
VCO freq = 432 MHz
## 0.30
## 0.55
## -
## 0.40
## 0.85
-   Take care of using the appropriate division factor M to have the specified PLL input clock values.
-   Guaranteed by design - Not tested in production.
-   Value given with main PLL running.
-   Evaluated by characterization - Not tested in production.

DS10314 Rev 891/151
STM32F411xC STM32F411xEElectrical characteristics
## 124
6.3.11 PLL spread spectrum clock generation (SSCG) characteristics
The spread spectrum clock generation (SSCG) feature allows to reduce electromagnetic
interferences (see Table 49: EMI characteristics for LQFP100). It is available only on the
main PLL.

## Equation 1
The frequency modulation period (MODEPER) is given by the equation below:
f
## PLL_IN
and f
## Mod
must be expressed in Hz.

As an example:
If f
## PLL_IN
= 1 MHz, and f
## MOD
= 1 kHz, the modulation depth (MODEPER) is given by
equation 1:
## Equation 2
Equation 2 allows to calculate the increment step (INCSTEP):
f
## VCO_OUT
must be expressed in MHz.
With a modulation depth (md) = ±2 % (4 % peak to peak), and PLLN = 240 (in MHz):
An amplitude quantization error may be generated because the linear modulation profile is
obtained by taking the quantized values (rounded to the nearest integer) of MODPER and
INCSTEP. As a result, the achieved modulation depth is quantized. The percentage
quantized modulation depth is given by the following formula:
As a result:
Table 43. SSCG parameter constraints
SymbolParameterMinTypMax
## (1)
## Unit
f
## Mod
Modulation frequency--10kHz
mdPeak modulation depth0.25-2%
MODEPER * INCSTEP(Modulation period) * (Increment Step)--2
## 15
## -1-
-   Guaranteed by design - Not tested in production.
MODEPERround f
## PLL_IN
## 4f
## Mod
## ×()⁄[]=
MODEPERround 10
## 6
## 410
## 3
## ×()⁄[]250==
INCSTEPround2
## 15
1–()mdPLLN××()1005×MODEPER×()⁄[]=
INCSTEPround2
## 15
## 1–()2240××()1005×250×()⁄[]126md(quantitazed)%==
md
quantized
## %MODEPERINCSTEP×100×5×()2
## 15
## 1–()PLLN×()⁄=
md
quantized
## %250126×100×5×()2
## 15
## 1–()240×()⁄2.002%(peak)==

Electrical characteristicsSTM32F411xC STM32F411xE
92/151DS10314 Rev 8
Figure 28 and Figure 29 show the main PLL output clock waveforms in center spread and
down spread modes, where:
F0 is f
## PLL_OUT
nominal.
## T
mode
is the modulation period.
md is the modulation depth.
Figure 28. PLL output clock waveforms in center spread mode
Figure 29. PLL output clock waveforms in down spread mode
6.3.12       Memory       characteristics
Flash memory
The characteristics are given at T
## A
= - 40 to 125 °C unless otherwise specified.
The devices are shipped to customers with the flash memory erased.

Frequency (PLL_OUT)
## Time
## F0
tmode2xtmode
md
ai17291
md
Frequency (PLL_OUT)
## Time
## F0
tmode2xtmode
## 2xmd
ai17292b
Table 44. Flash memory characteristics
SymbolParameterConditionsMinTypMaxUnit
## I
## DD
Supply current
Write / Erase 8-bit mode, V
## DD
## = 1.7 V-5-
mAWrite / Erase 16-bit mode, V
## DD
## = 2.1 V-8-
Write / Erase 32-bit mode, V
## DD
## = 3.3 V-12-

DS10314 Rev 893/151
STM32F411xC STM32F411xEElectrical characteristics
## 124


Table 45. Flash memory programming
SymbolParameter ConditionsMin
## (1)
TypMax
## (1)
-   Evaluated by characterization - Not tested in production.
## Unit
t
prog
Word programming time
Program/erase parallelism
(PSIZE) = x 8/16/32
## -16100
## (2)
-   The maximum programming time is measured after 100K erase operations.
μs
t
## ERASE16KB
Sector (16 KB) erase time
Program/erase parallelism
(PSIZE) = x 8
## -400800
ms
Program/erase parallelism
(PSIZE) = x 16
## -300600
Program/erase parallelism
(PSIZE) = x 32
## -250500
t
## ERASE64KB
Sector (64 KB) erase time
Program/erase parallelism
(PSIZE) = x 8
## -12002400
ms
Program/erase parallelism
(PSIZE) = x 16
## -7001400
Program/erase parallelism
(PSIZE) = x 32
## -5501100
t
## ERASE128KB
Sector (128 KB) erase time
Program/erase parallelism
(PSIZE) = x 8
## -24
s
Program/erase parallelism
(PSIZE) = x 16
## -1.32.6
Program/erase parallelism
(PSIZE) = x 32
## -12
t
## ME
Mass erase time
Program/erase parallelism
(PSIZE) = x 8
## -816
s
Program/erase parallelism
(PSIZE) = x 16
## -5.511
Program/erase parallelism
(PSIZE) = x 32
## -48
## V
prog
Programming voltage
32-bit program operation2.7-3.6V
16-bit program operation2.1-3.6V
8-bit program operation1.7-3.6V
Table 46. Flash memory programming with V
## PP
voltage
SymbolParameter ConditionsMin
## (1)
TypMax
## (1)
## Unit
t
prog
Double word programming
## T
## A
=  0 to +40 °C
## V
## DD
## = 3.3 V
## V
## PP
## = 8.5 V
## -16100
## (2)
μs
t
## ERASE16KB
Sector (16 KB) erase time-230-
mst
## ERASE64KB
Sector (64 KB) erase time-490-
t
## ERASE128KB
Sector (128 KB) erase time-875-
t
## ME
Mass erase time-3.50-s

Electrical characteristicsSTM32F411xC STM32F411xE
94/151DS10314 Rev 8
Table 47. Flash memory endurance and data retention
6.3.13       EMC       characteristics
Susceptibility tests are performed on a sample basis during device characterization.
Functional EMS (electromagnetic susceptibility)
While a simple application is executed on the device (toggling 2 LEDs through I/O ports).
the device is stressed by two electromagnetic events until a failure occurs. The failure is
indicated by the LEDs:
•Electrostatic discharge (ESD) (positive and negative) is applied to all device pins until
a functional disturbance occurs. This test is compliant with the IEC 61000-4-2 standard.
•FTB: A burst of fast transient voltage (positive and negative) is applied to V
## DD
and V
## SS

through a 100 pF capacitor, until a functional disturbance occurs. This test is compliant
with the IEC 61000-4-4 standard.
A device reset allows normal operations to be resumed.
The test results are given in Table 49. They are based on the EMS levels and classes
defined in application note AN1709.
## V
prog
Programming voltage2.7-3.6V
## V
## PP
## V
## PP
voltage range7-9V
## I
## PP
Minimum current sunk on
the V
## PP
pin
10--mA
t
## VPP
## (3)
Cumulative time during
which V
## PP
is applied
## --1hour
-   Guaranteed by design - Not tested in production.
-   The maximum programming time is measured after 100K erase operations.
## 3.   V
## PP
should only be connected during programming/erasing.
SymbolParameter Conditions
## Value
## Unit
## Min
## (1)
-   Evaluated by characterization - Not tested in production.
## N
## END
## Endurance
## T
## A
= - 40 to + 85 °C (temp. range 6)
## T
## A
= - 40 to + 105 °C (temp. range 7)
## T
## A
= - 40 to + 125 °C (temp. range 3)
## 10
kcycles
t
## RET
Data retention
1 kcycle
## (2)
at T
## A
## = 85 °C
-   Cycling performed over the whole temperature range.
## 30
## Years
1 kcycle
## (2)
at T
## A
## = 105 °C10
1 kcycle
## (2)
at T
## A
## = 125 °C3
10 kcycle
## (2)
at T
## A
## = 55 °C20
Table 46. Flash memory programming with V
## PP
voltage  (continued)
SymbolParameter ConditionsMin
## (1)
TypMax
## (1)
## Unit

DS10314 Rev 895/151
STM32F411xC STM32F411xEElectrical characteristics
## 124

When the application is exposed to a noisy environment, it is recommended to avoid pin
exposition to disturbances. The pins showing a middle range robustness are: PA0, PA1,
PA2, on LQFP100 packages and PDR_ON on WLCSP49.
As a consequence, it is recommended to add a serial resistor (1 kΩ maximum) located as
close as possible to the MCU to the pins exposed to noise (connected to tracks longer than
50 mm on PCB).
Designing hardened software to avoid noise problems
EMC characterization and optimization are performed at component level with a typical
application environment and simplified MCU software. It should be noted that good EMC
performance is highly dependent on the user application and the software in particular.
Therefore it is recommended that the user applies EMC software optimization and
prequalification tests in relation with the EMC level requested for his application.
Software recommendations
The software flowchart must include the management of runaway conditions such as:
•Corrupted program counter
•Unexpected reset
•Critical Data corruption (control registers...)
Prequalification trials
Most of the common failures (unexpected reset and program counter corruption) can be
reproduced by manually forcing a low state on the NRST pin or the Oscillator pins for 1
second.
To complete these trials, ESD stress can be applied directly on the device, over the range of
specification values. When unexpected behavior is detected, the software can be hardened
to prevent unrecoverable errors occurring (see application note AN1015).
Table 48. EMS characteristics for LQFP100 package
SymbolParameterConditions
## Level/
## Class
## V
## FESD
Voltage limits to be applied on any I/O pin
to induce a functional disturbance
## V
## DD
## = 3.3 V, LQFP100, WLCSP49,
## T
## A
= +25 °C, f
## HCLK
= 100 MHz,
conforms to IEC 61000-4-2
## 2B
## V
## EFTB
Fast transient voltage burst limits to be
applied through 100 pF on V
## DD
and V
## SS
pins to induce a functional disturbance
## V
## DD
## = 3.3 V, LQFP100, WLCSP49,
## T
## A
= +25 °C, f
## HCLK
= 100 MHz,
conforms to IEC 61000-4-4
## 4A

Electrical characteristicsSTM32F411xC STM32F411xE
96/151DS10314 Rev 8
Electromagnetic Interference (EMI)
The electromagnetic field emitted by the device are monitored while a simple application,
executing EEMBC code, is running. This emission test is compliant with SAE IEC61967-2
standard which specifies the test board and the pin loading.

6.3.14 Absolute maximum ratings (electrical sensitivity)
Based on three different tests (ESD, LU) using specific measurement methods, the device is
stressed in order to determine its performance in terms of electrical sensitivity.
Electrostatic discharge (ESD)
Electrostatic discharges (a positive then a negative pulse separated by 1 second) are
applied to the pins of each sample according to each pin combination. The sample size
depends on the number of supply pins in the device (3 parts × (n+1) supply pins). This test
conforms to the JESD22-A114/C101 standard.


Table 49. EMI characteristics for LQFP100
SymbolParameterConditions
## Monitored
frequency band
Max vs.
## [f
## HSE
## /f
## CPU
## ]
## Unit
8/84 MHz
## S
## EMI
Peak level
## V
## DD
## = 3.6 V, T
## A
= 25 °C, conforming to
## IEC61967-2
0.1 to 30 MHz19
dBμV30 to 130 MHz17
130 MHz to 1 GHz12
SAE EMI Level3.5-
Table 50. ESD absolute maximum ratings
SymbolRatingsConditionsClass
## Maximum
value
## (1)
## Unit
## V
## ESD(HBM)
Electrostatic discharge
voltage (human body
model)
## T
## A
= +25 °C conforming to JESD22-A11422000
## V
## V
## ESD(CDM)
Electrostatic discharge
voltage (charge device
model)
## T
## A
= +25 °C conforming to
## ANSI/ESD STM5.3.1
## UFBGA100,
## UFQFPN48
## 4500
## WLCSP493400
## LQPF64,
## LQFP100
## 3250
-   Evaluated by characterization - Not tested in production.

DS10314 Rev 897/151
STM32F411xC STM32F411xEElectrical characteristics
## 124
Static latchup
Two complementary static tests are required on six parts to assess the latchup
performance:
•A supply overvoltage is applied to each power supply pin
•A current injection is applied to each input, output and configurable I/O pin
These tests are compliant with EIA/JESD 78A IC latchup standard.

6.3.15       I/O       current       injection characteristics
As a general rule, current injection to the I/O pins, due to external voltage below V
## SS
or
above V
## DD
(for standard, 3 V-capable I/O pins) should be avoided during normal product
operation. However, in order to give an indication of the robustness of the microcontroller in
cases when abnormal injection accidentally happens, susceptibility tests are performed on a
sample basis during device characterization.
Functional susceptibility to I/O current injection
While a simple application is executed on the device, the device is stressed by injecting
current into the I/O pins programmed in floating input mode. While current is injected into
the I/O pin, one at a time, the device is checked for functional failures.
The failure is indicated by an out of range parameter: ADC error above a certain limit (>5
LSB TUE), out of conventional limits of induced leakage current on adjacent pins
(out of –5 μA/+0 μA range), or other functional failure (for example reset, oscillator
frequency deviation).
Negative induced leakage current is caused by negative injection and positive induced
leakage current by positive injection.
The test results are given in Table 52.

Table 51. Electrical sensitivities
SymbolParameterConditionsClass
LUStatic latch-up classT
## A
= + 125 °C conforming to JESD78AII level A
Table 52. I/O current injection susceptibility
## (1)
SymbolDescription
Functional susceptibility
## Unit
## Negative
injection
## Positive
injection
## I
## INJ
Injected current on BOOT0 pin–0NA
mA
Injected current on NRST pin–0NA
Injected current on PB3, PB4, PB5, PB6, PB7,
## PB8, PB9, PC13, PC14, PC15, PH1, PDR_ON,
## PC0, PC1,PC2, PC3, PD1, PD5, PD6, PD7, PE0,
## PE2, PE3, PE4, PE5, PE6
## –0NA
Injected current on any other FT pin–5NA
Injected current on any other pins–5+5
-   NA = not applicable.

Electrical characteristicsSTM32F411xC STM32F411xE
98/151DS10314 Rev 8
Note:It is recommended to add a Schottky diode (pin to ground) to analog pins which may
potentially inject negative currents.
6.3.16       I/O       port       characteristics
General input/output characteristics
Unless otherwise specified, the parameters given in Table 53 are derived from tests
performed under the conditions summarized in Table 14. All I/Os are CMOS and TTL
compliant.

Table 53. I/O static characteristics
SymbolParameterConditionsMinTyp                  MaxUnit
## V
## IL
FT, TC and NRST I/O input low
level voltage
## 1.7 V
## ≤ V
## DD
## ≤ 3.6 V--0.3V
## DD
## (1)
## V
BOOT0 I/O input low level
voltage
## 1.75 V
## ≤ V
## DD
## ≤ 3.6 V,
## -40 °C≤ T
## A
## ≤ 125 °C
## --
## 0.1V
## DD
## +0.1
## (2)
## 1.7 V≤ V
## DD
## ≤ 3.6 V,
## 0 °C≤ T
## A
## ≤ 125 °C
## --
## V
## IH
FT, TC and NRST I/O input high
level voltage
## (5)
## 1.7 V≤ V
## DD
## ≤ 3.6 V
## 0.7V
## DD
## (1
## )
## --
## V
BOOT0 I/O input high level
voltage
## 1.75 V
## ≤ V
## DD
## ≤ 3.6 V,
## -40 °C
## ≤ T
## A
## ≤ 125 °C
## 0.17V
## DD
## +0.7
## (2)
## --
## 1.7 V
## ≤ V
## DD
## ≤ 3.6 V,
## 0 °C
## ≤ T
## A
## ≤ 125 °C
## V
## HYS
FT, TC and NRST I/O input
hysteresis
## 1.7 V
## ≤ V
## DD
## ≤ 3.6 V
## -
## 10% V
## DD
## (3)
## -V
BOOT0 I/O input hysteresis
## 1.75 V≤ V
## DD
## ≤ 3.6 V,
## -40 °C
## ≤ T
## A
## ≤ 125 °C
-100   -mV
## 1.7 V
## ≤ V
## DD
## ≤ 3.6 V,
## 0 °C
## ≤ T
## A
## ≤ 125 °C
## I
lkg
I/O input leakage current
## (4)
## V
## SS
## ≤ V
## IN
## ≤ V
## DD
## --±1
μA
I/O FT/TC input leakage current
## (5)
## V
## IN
## = 5 V--3

DS10314 Rev 899/151
STM32F411xC STM32F411xEElectrical characteristics
## 124
All I/Os are CMOS and TTL compliant (no software configuration required). Their
characteristics cover more than the strict CMOS-technology or TTL parameters. The
coverage of these requirements for FT and TC I/Os is shown in Figure 30.
## R
## PU
Weak pull-up
equivalent
resistor
## (6)
All pins
except for
## PA10
## (OTG_FS_ID)
## V
## IN
## = V
## SS
## 304050
kΩ
## PA10
## (OTG_FS_ID)
## -71014
## R
## PD
Weak pull-down
equivalent
resistor
## (7)
All pins
except for
## PA10
## (OTG_FS_ID)
## V
## IN
## = V
## DD
## 304050
## PA10
## (OTG_FS_ID)
## -71014
## C
## IO
## (8)
I/O pin capacitance--5-pF
-   Guaranteed by test in production.
-   Guaranteed by design - Not tested in production.
-   With a minimum of 200 mV.
-   Leakage could be higher than the maximum value, if negative current is injected on adjacent pins, Refer to Table 52: I/O
current injection susceptibility
-   To sustain a voltage higher than VDD +0.3 V, the internal pull-up/pull-down resistors must be disabled. Leakage could be
higher than the maximum value, if negative current is injected on adjacent pins.Refer to Table 52: I/O current injection
susceptibility
-   Pull-up resistors are designed with a true resistance in series with a switchable PMOS. This PMOS contribution to the
series resistance is minimum (~10% order).
-   Pull-down resistors are designed with a true resistance in series with a switchable NMOS. This NMOS contribution to the
series resistance is minimum (~10% order).
-    Hysteresis voltage between Schmitt trigger switching levels. Evaluated by characterization - Not tested in production.
Table 53. I/O static characteristics (continued)
SymbolParameterConditionsMinTyp                  MaxUnit

Electrical characteristicsSTM32F411xC STM32F411xE
100/151DS10314 Rev 8
Figure 30. FT/TC I/O input characteristics
Output driving current
The GPIOs (general purpose input/outputs) can sink or source up to ±8 mA, and sink or
source up to ±20 mA (with a relaxed V
## OL
## /V
## OH
) except PC13, PC14 and PC15 which can
sink or source up to ±3mA. When using the PC13 to PC15 GPIOs in output mode, the speed
should not exceed 2 MHz with a maximum load of 30 pF.
In the user application, the number of I/O pins which can drive current must be limited to
respect the absolute maximum rating specified in Section 6.2. In particular:
•The sum of the currents sourced by all the I/Os on V
## DD,
plus the maximum Run
consumption of the MCU sourced on V
## DD,
cannot exceed the absolute maximum rating
## ΣI
## VDD
## (see Table 12).
•The sum of the currents sunk by all the I/Os on V
## SS
plus the maximum Run
consumption of the MCU sunk on V
## SS
cannot exceed the absolute maximum rating
## ΣI
## VSS
## (see Table 12).
## MS33746V1
## 1.92
## 1.065
## 1.22
## 1.72.02.42.73.33.6
## 2.0
## 0.55
## 0.8
## VDD (V)
## VIL/VIH (V)
Tested in production  - CMOS requirement VIHmin = 0.7VDD
Tested in production  - CMOS requirement VILmax = 0.3VDD
Based on Design simulations, VILmax= 0.35VDD-0.04
TTL requirement
VIHmin = 2V
TTL requirement VILmax
## = 0.8V
## 0.51
## 2.52
Area not
determined
## 1.19
## 1.7
Based on Design simulations, VIHmin= 0.45VDD+0.3

DS10314 Rev 8101/151
STM32F411xC STM32F411xEElectrical characteristics
## 124
Output voltage levels
Unless otherwise specified, the parameters given in Table 54 are derived from tests
performed under ambient temperature and V
## DD
supply voltage conditions summarized in
Table 14. All I/Os are CMOS and TTL compliant.

Table 54. Output voltage characteristics
SymbolParameterConditionsMinMaxUnit
## V
## OL
## (1)
## 1.   The I
## IO
current sunk by the device must always respect the absolute maximum rating specified in Table 12.
and the sum of I
## IO
(I/O ports and control pins) must not exceed I
## VSS
## .
Output low level voltage for an I/O pin CMOS port
## (2)
## I
## IO
= +8 mA
## 2.7 V
## ≤ V
## DD
## ≤ 3.6 V
-   TTL and CMOS outputs are compatible with JEDEC standards JESD36 and JESD52.
## -0.4
## V
## V
## OH
## (3)
## 3.   The I
## IO
current sourced by the device must always respect the absolute maximum rating specified in
Table 12 and the sum of I
## IO
(I/O ports and control pins) must not exceed I
## VDD
## .
Output high level voltage for an I/O pin V
## DD
## –0.4-
## V
## OL
## (1)
Output low level voltage for an I/O pin TTL port
## (2)
## I
## IO
=+8 mA
## 2.7 V
## ≤ V
## DD
## ≤ 3.6 V
## -0.4
## V
## V
## OH
## (3)
Output high level voltage for an I/O pin 2.4-
## V
## OL
## (1)
Output low level voltage for an I/O pin
## I
## IO
= +20 mA
## 2.7 V
## ≤ V
## DD
## ≤ 3.6 V
## -1.3
## (4)
-   Evaluated by characterization - Not tested in production.
## V
## V
## OH
## (3)
Output high level voltage for an I/O pin V
## DD
## –1.3
## (4)
## -
## V
## OL
## (1)
Output low level voltage for an I/O pin
## I
## IO
= +6 mA
## 1.8 V
## ≤ V
## DD
## ≤ 3.6 V
## -0.4
## (4)
## V
## V
## OH
## (3)
Output high level voltage for an I/O pin V
## DD
## –0.4
## (4)
## -
## V
## OL
## (1)
Output low level voltage for an I/O pin
## I
## IO
= +4 mA
## 1.7 V
## ≤ V
## DD
## ≤ 3.6 V
## -0.4
## (5)
-   Guaranteed by design - Not tested in production.
## V
## V
## OH
## (3)
Output high level voltage for an I/O pin V
## DD
## –0.4
## (5)
## -

Electrical characteristicsSTM32F411xC STM32F411xE
102/151DS10314 Rev 8
Input/output AC characteristics
The definition and values of input/output AC characteristics are given in Figure 31 and
Table 55, respectively.
Unless otherwise specified, the parameters given in Table 55 are derived from tests
performed under the ambient temperature and V
## DD
supply voltage conditions summarized
in Table 14.

Table 55. I/O AC characteristics
## (1)(2)

OSPEEDRy
[1:0] bit
value
## (1)
SymbolParameterConditionsMinTypMaxUnit
## 00
f
max(IO)out
Maximum frequency
## (3)
## C
## L
= 50 pF, V
## DD
## ≥ 2.70 V--4
MHz
## C
## L
= 50 pF, V
## DD
## ≥ 1.7 V--2
## C
## L
= 10 pF, V
## DD
## ≥ 2.70 V--8
## C
## L
= 10 pF, V
## DD
## ≥ 1.7 V--4
t
f(IO)out
## /
t
r(IO)out
Output high to low level fall
time and output low to high
level rise time
## C
## L
= 50 pF, V
## DD
= 1.7 V to
## 3.6 V
## --100ns
## 01
f
max(IO)out
Maximum frequency
## (3)
## C
## L
= 50 pF, V
## DD
## ≥ 2.70 V--25
MHz
## C
## L
= 50 pF, V
## DD
## ≥ 1.7 V--12.5
## C
## L
= 10 pF, V
## DD
## ≥ 2.70 V--50
## C
## L
= 10 pF, V
## DD
## ≥ 1.7 V--20
t
f(IO)out
## /
t
r(IO)out
Output high to low level fall
time and output low to high
level rise time
## C
## L
= 50 pF, V
## DD
## ≥2.7 V--10
ns
## C
## L
= 50 pF, V
## DD
## ≥ 1.7 V--20
## C
## L
= 10 pF, V
## DD
## ≥ 2.70 V--6
## C
## L
= 10 pF, V
## DD
## ≥ 1.7 V--10
## 10
f
max(IO)out
Maximum frequency
## (3)
## C
## L
= 40 pF, V
## DD
## ≥ 2.70 V--50
## (4)
MHz
## C
## L
= 40 pF, V
## DD
## ≥ 1.7 V--25
## C
## L
= 10 pF, V
## DD
## ≥ 2.70 V--100
## (4)
## C
## L
= 10 pF, V
## DD
## ≥

## 1.7 V--50
## (4)
t
f(IO)out
## /
t
r(IO)out
Output high to low level fall
time and output low to high
level rise time
## C
## L
= 40 pF, V
## DD
## ≥ 2.70 V--6
ns
## C
## L
= 40 pF, V
## DD
## ≥ 1.7 V--10
## C
## L
= 10 pF, V
## DD
## ≥ 2.70 V--4
## C
## L
= 10 pF, V
## DD
## ≥ 1.7 V--6

DS10314 Rev 8103/151
STM32F411xC STM32F411xEElectrical characteristics
## 124
Figure 31. I/O AC characteristics definition
## 11
## F
max(IO)out
Maximum frequency
## (3)
## C
## L
= 30 pF, V
## DD
## ≥ 2.70 V--100
## (4)
MHzC
## L
= 30 pF, V
## DD
## ≥ 1.7 V--50
## (4)
t
f(IO)out
## /
t
r(IO)out
Output high to low level fall
time and output low to high
level rise time
## C
## L
= 30 pF, V
## DD
## ≥ 2.70 V--4
ns
## C
## L
= 30 pF, V
## DD
## ≥ 1.7 V--6
## C
## L
= 10 pF, V
## DD
## ≥ 2.70 V--2.5
## C
## L
= 10 pF, V
## DD
## ≥ 1.7 V--4
## -t
EXTIpw
Pulse width of external signals
detected by the EXTI
controller
## 10--ns
-   Evaluated by characterization - Not tested in production.
-   The I/O speed is configured using the OSPEEDRy[1:0] bits. Refer to the STM32F4xx reference manual for a description of
the GPIOx_SPEEDR GPIO port output speed register.
-   The maximum frequency is defined in Figure 31.
-   For maximum frequencies above 50 MHz and
## V
## DD
> 2.4 V, the compensation cell should be used.
Table 55. I/O AC characteristics
## (1)(2)
## (continued)
OSPEEDRy
[1:0] bit
value
## (1)
SymbolParameterConditionsMinTypMaxUnit
ai14131d
## 10%
## 90%
## 50%
t
r(IO)out
## OUTPUT
## EXTERNAL
## ON CL
Maximum frequency is achieved if (t
r
+ t
f
## 7DQGLIWKHGXW\F\FOHLV
## ZKHQORDGHGE\&
LVSHFLILHGLQWKHWDEOH³I/O AC characteristics”.

## 10%
## 50%
## 90%
## T
t
f(IO)out

Electrical characteristicsSTM32F411xC STM32F411xE
104/151DS10314 Rev 8
6.3.17       NRST       pin       characteristics
The NRST pin input driver uses CMOS technology. It is connected to a permanent pull-up
resistor, R
## PU
## (see Table 53).
Unless otherwise specified, the parameters given in Table 56 are derived from tests
performed under the ambient temperature and V
## DD
supply voltage conditions summarized
in Table 14. Refer to Table 53: I/O static characteristics for the values of VIH and VIL for
NRST pin.

Figure 32. Recommended NRST pin protection
-   The reset network protects the device against parasitic resets.
-   The user must ensure that the level on the NRST pin can go below the V
## IL(NRST)
max level specified in
Table 56. Otherwise the reset is not taken into account by the device.
Table 56. NRST pin characteristics
SymbolParameterConditionsMinTypMaxUnit
## R
## PU
Weak pull-up equivalent
resistor
## (1)
## V
## IN
## = V
## SS
304050kΩ
## V
## F(NRST)
## (2)
NRST Input filtered pulse--100ns
## V
## NF(NRST)
## (2)
NRST Input not filtered pulseV
## DD
## > 2.7 V300--ns
## T
## NRST_OUT
Generated reset pulse duration
## Internal Reset
source
## 20--μs
-   The pull-up is designed with a true resistance in series with a switchable PMOS. This PMOS contribution to the series
resistance must be minimum
(~10% order).
-   Guaranteed by design - Not tested in production.
ai14132c
## STM32F
## R
## PU
## NRST
## (2)
## V
## DD
## Filter
## Internal Reset
0.1 μF
## External
reset circuit
## (1)

DS10314 Rev 8105/151
STM32F411xC STM32F411xEElectrical characteristics
## 124
6.3.18       TIM       timer characteristics
The parameters given in Table 57 are guaranteed by design.
Refer to Section 6.3.16: I/O port characteristics for details on the input/output alternate
function characteristics (output compare, input capture, external clock, PWM output).

6.3.19       Communications       interfaces
## I
## 2
C interface

characteristics
## The I
## 2
C interface meets the requirements of the standard I
## 2
C communication protocol with
the following restrictions: the I/O pins SDA and SCL are mapped to are not “true” open-
drain. When configured as open-drain, the PMOS connected between the I/O pin and V
## DD

is
disabled, but is still present.
## The I
## 2
C characteristics are described in Table 58. Refer also to

Section 6.3.16: I/O port
characteristics
for more details on the input/output alternate function characteristics (SDA
and SCL)
## .
## The I
## 2
C bus interface supports standard mode (up to 100 kHz) and fast mode (up to 400
kHz). The I
## 2
C bus frequency can be increased up to 1 MHz. For more details about the
complete solution, please contact your local ST sales representative.
Table 57. TIMx characteristics
## (1)(2)

-   TIMx is used as a general term to refer to the TIM1 to TIM11 timers.
-   Guaranteed by design - Not tested in production.
SymbolParameter
## Conditions
## (3)
-   The maximum timer frequency on APB1 is 50 MHz and on APB2 is up to 100 MHz, by setting the TIMPRE
bit in the RCC_DCKCFGR register, if APBx prescaler is 1 or 2 or 4, then TIMxCLK = HCKL, otherwise
TIMxCLK >= 4x PCLKx.
MinMaxUnit
t
res(TIM)
Timer resolution time
AHB/APBx prescaler=1
or 2 or 4, f
TIMxCLK
## =
100 MHz
## 1-
t
TIMxCLK
## 11.9-ns
AHB/APBx prescaler>4,
f
TIMxCLK
= 100 MHz
## 1-
t
TIMxCLK
## 11.9-ns
f
## EXT
Timer external clock
frequency on CH1 to CH4
f
TIMxCLK
= 100 MHz
## 0
f
TIMxCLK
## /2
MHz
050MHz
## Res
## TIM
Timer resolution-16/32bit
t
## COUNTER
16-bit counter clock
period when internal clock
is selected
f
TIMxCLK
= 100 MHz
## 0.0119780μs
t
## MAX_COUNT
Maximum possible count
with 32-bit counter
## -
## 65536 ×
## 65536
t
TIMxCLK
f
TIMxCLK
= 100 MHz
## -51.1S

Electrical characteristicsSTM32F411xC STM32F411xE
106/151DS10314 Rev 8

## Table 58. I
## 2
C characteristics
SymbolParameter
Standard mode
## I
## 2
## C
## (1)(2)
## 1.
Guaranteed by design - Not tested in production.
Fast mode I
## 2
## C
## (1)(2)
-   f
## PCLK1
must be at least 2 MHz to achieve standard mode I
## 2
C frequencies. It must be at least 4 MHz to
achieve fast mode I
## 2
C frequencies, and a multiple of 10 MHz to reach the 400 kHz maximum I
## 2
C fast mode
clock.
## Unit
MinMaxMinMax
t
w(SCLL)
SCL clock low time4.7-1.3 -
μs
t
w(SCLH)
SCL clock high time4.0-0.6 -
t
su(SDA)
SDA setup time250-100 -
ns
t
h(SDA)
SDA data hold time03450
## (3)
-   The device must internally provide a hold time of at least 300 ns for the SDA signal in order to bridge the
undefined region of the falling edge of SCL.
## 0900
## (4)
-   The maximum data hold time has only to be met if the interface does not stretch the low period of SCL
signal.
t
r(SDA)
t
r(SCL)
SDA and SCL rise time-1000-300
t
f(SDA)
t
f(SCL)
SDA and SCL fall time-300-300
t
h(STA)
Start condition hold time4.0-0.6-
μs
t
su(STA)
Repeated Start condition
setup time
## 4.7-0.6                 -
t
su(STO)
Stop condition setup time4.0-0.6 -μs
t
w(STO:STA)
Stop to Start condition time
(bus free)
## 4.7-1.3-μs
t
## SP
Pulse width of the spikes
that are suppressed by the
analog filter for standard fast
mode
## 050
## (5)
-   The minimum width of the spikes filtered by the analog filter is above t
## SP
## (max)
## 050
## (5)
ns
## C
b
Capacitive load for each bus
line
-400-400pF

DS10314 Rev 8107/151
STM32F411xC STM32F411xEElectrical characteristics
## 124
## Figure 33. I
## 2
C bus AC waveforms and measurement circuit
## 1.   R
## S
= series protection resistor.
## 2.   R
## P
= external pull-up resistor.
## 3.   V
## DD_I2C
is the I2C bus power supply.

Table 59. SCL frequency (f
## PCLK1
= 50 MHz, V
## DD
## = V
## DD_I2C
## = 3.3 V)
## (1)(2)
## 1.   R
## P
= External pull-up resistance, f
## SCL
## = I
## 2
C speed
-   For speeds around 200 kHz, the tolerance on the achieved speed is of ±5%. For other speed ranges, the
tolerance on the achieved speed is ±2%. These variations depend on the accuracy of the external
components used to design the application.
f
## SCL
(kHz)
I2C_CCR value
## R
## P
= 4.7 kΩ
## 4000x8019
## 3000x8021
## 2000x8032
## 1000x0096
500x012C
200x02EE
ai14979d
## START
## SD A
## R
## P
I²C bus
## V
## DD_I2C
## STM32
## SDA
## SCL
t
f(SDA)
t
r(SDA)
## SCL
t
h(STA)
t
w(SCLH)
t
w(SCLL)
t
su(SDA)
t
r(SCL)
t
f(SCL)
t
h(SDA)
## START REPEATED
t
su(STA)
t
su(STO)
## STOP
t
w(STO:STA)
## V
## DD_I2C
## R
## P
## R
## S
## R
## S
## START

Electrical characteristicsSTM32F411xC STM32F411xE
108/151DS10314 Rev 8
SPI interface characteristics
Unless otherwise specified, the parameters given in Table 60 for the SPI interface are
derived from tests performed under the ambient temperature, f
PCLKx
frequency and V
## DD

supply voltage conditions summarized in Table 14, with the following configuration:
•Output speed is set to OSPEEDRy[1:0] = 10
•Capacitive load C = 30 pF
•Measurement points are done at CMOS levels: 0.5V
## DD
Refer to Section 6.3.16: I/O port characteristics for more details on the input/output alternate
function characteristics (NSS, SCK, MOSI, MISO for SPI).

Table 60. SPI dynamic characteristics
## (1)

SymbolParameterConditionsMinTypMaxUnit
f
## SCK
## 1/t
c(SCK)
SPI clock frequency
Master full duplex/receiver mode,
## 2.7 V < V
## DD
## < 3.6 V
## SPI1/4/5
## --42
MHz
Master full duplex/receiver mode,
## 3.0 V < V
## DD
## < 3.6 V
## SPI1/4/5
## --
## 50
Master transmitter mode
## 1.7 V < V
## DD
## < 3.6 V
## SPI1/4/5
## --
## 50
Master mode
## 1.7 V < V
## DD
## < 3.6 V
## SPI1/2/3/4/5
## --
## 25
Slave transmitter/full duplex mode
## 2.7 V < V
## DD
## < 3.6 V
## SPI1/4/5
## --
## 38
## (2)
Slave receiver mode,
## 1.8 V < V
## DD
## < 3.6 V
## SPI1/4/5
## --50
Slave mode,
## 1.8 V < V
## DD
## < 3.6 V
## SPI1/2/3/4/5
## --
## 25
Duty(SCK)
Duty cycle of SPI clock
frequency
Slave mode305070%
t
w(SCKH)
t
w(SCKL)
SCK high and low time    Master mode, SPI presc = 2T
## PCLK
## −1.5
## T
## PCLK
## T
## PCLK
## +1.5
ns
t
su(NSS)
NSS setup timeSlave mode, SPI presc = 23T
## PCLK
## --ns
t
h(NSS)
NSS hold timeSlave mode, SPI presc = 22T
## PCLK
## --ns
t
su(MI)
Data input setup time
Master mode4--ns
t
su(SI)
Slave mode2.5--ns
t
h(MI)
Data input hold time
Master mode7.5--ns
t
h(SI)
Slave mode3.5--ns

DS10314 Rev 8109/151
STM32F411xC STM32F411xEElectrical characteristics
## 124
Figure 34. SPI timing diagram - slave mode and CPHA = 0
t
a(SO
)Data output access time   Slave mode7-21ns
t
dis(SO)
Data output disable time  Slave mode5-12ns
t
v(SO)
Data output valid time
Slave mode (after enable edge),
## 2.7 V < V
## DD
## < 3.6 V
## -1113ns
Slave mode (after enable edge),
## 1.7 V < V
## DD
## < 3.6 V
## -1118.5ns
t
h(SO)
Data output hold time
Slave mode (after enable edge),
## 1.7 V < V
## DD
## < 3.6 V
## 8--ns
t
v(MO)
Data output valid timeMaster mode (after enable edge)-46ns
t
h(MO)
Data output hold time
Master mode (after enable edge)0--ns
-   Evaluated by characterization - Not tested in production.
-   Maximum frequency in Slave transmitter mode is determined by the sum of t
v(SO)
and t
su(MI)
which has to fit into SCK low or
high phase preceding the SCK sampling edge. This value can be achieved when the SPI communicates with a master
having t
su(MI)
= 0 while Duty(SCK) = 50%
Table 60. SPI dynamic characteristics
## (1)
## (continued)
SymbolParameterConditionsMinTypMaxUnit
SCK input
## (SI)
## MSB IN
## BIT1 IN
## LSB IN
## BIT6 OUT
## MSB OUT
## LSB OUT
NSS input
## MOSI
## INPUT
## MISO
## OUTPUT
## (SI)

Electrical characteristicsSTM32F411xC STM32F411xE
110/151DS10314 Rev 8
Figure 35. SPI timing diagram - slave mode and CPHA = 1
## (1)
Figure 36. SPI timing diagram - master mode
## (1)
ai14135b
NSS input
t
## SU(NSS)
tc(SCK)
th(NSS)
SCK input
## CPHA=1
## CPOL=0
## CPHA=1
## CPOL=1
t
w(SCKH)
tw(SCKL)
ta(SO)
tv(SO)
th(SO)
tr(SCK)
tf(SCK)
tdis(SO)
## MISO
## OUTPUT
## MOSI
## INPUT
t
su(SI)
th(SI)
## MSB OUT
## MSB IN
## BIT6 OUT
## LSB OUT
## LSB IN
## BIT 1 IN
SCK Output
## CPHA=0
## MOSI
## OUTPUT
## MISO
## INPUT
## CPHA=0
## LSB OUT
## LSB IN
## CPOL=0
## CPOL=1
## BIT1 OUT
NSS input
tc(SCK)
tw(SCKH)
tw(SCKL)
tr(SCK)
tf(SCK)
th(MI)
## High
SCK Output
## CPHA=1
## CPHA=1
## CPOL=0
## CPOL=1
tsu(MI)
tv(MO)
th(MO)
## MSB IN
## BIT6 IN
## MSB OUT
ai14136c

DS10314 Rev 8111/151
STM32F411xC STM32F411xEElectrical characteristics
## 124
## I
## 2
S interface characteristics
Unless otherwise specified, the parameters given in Table 61 for the I
## 2
S interface are
derived from tests performed under the ambient temperature, f
PCLKx
frequency and V
## DD

supply voltage conditions summarized in Table 14, with the following configuration:
•Output speed is set to OSPEEDRy[1:0] = 10
•Capacitive load C = 30 pF
•Measurement points are done at CMOS levels: 0.5V
## DD
Refer to Section 6.3.16: I/O port characteristics for more details on the input/output alternate
function characteristics (CK, SD, WS).

Note:Refer to the I2S section of RM0383 reference manual for more details on the sampling
frequency (F
## S
## ).
f
## MCK
, f
## CK
, and D
## CK
values reflect only the digital peripheral behavior. The values of these
parameters might be slightly impacted by the source clock precision. D
## CK
depends mainly
on the value of ODD bit. The digital contribution leads to a minimum value of
(I2SDIV/(2*I2SDIV+ODD) and a maximum value of (I2SDIV+ODD)/(2*I2SDIV+ODD). F
## S

maximum value is supported for each mode/condition.
## Table 61. I
## 2
S dynamic characteristics
## (1)

SymbolParameterConditionsMinMaxUnit
f
## MCK
I2S Main clock output -256x8K256xFs
## (2)
MHz
f
## CK
I2S clock frequency
Master data: 32 bits-64xFs
MHz
Slave data: 32 bits-64xFs
## D
## CK
I2S clock frequency duty cycle   Slave receiver3070%
t
v(WS)
WS valid time Master mode 07
ns
t
h(WS)
WS hold time Master mode 1.5-
t
su(WS)
WS setup time Slave mode 1.5-
t
h(WS)
WS hold time Slave mode 3-
t
su(SD_MR)
Data input setup time
Master receiver 1-
t
su(SD_SR)
Slave receiver 2.5-
t
h(SD_MR)
Data input hold time
Master receiver 7-
t
h(SD_SR)
Slave receiver 2.5-
t
v(SD_ST)
Data output valid time
Slave transmitter (after enable edge) -20
t
v(SD_MT)
Master transmitter (after enable edge) -6
t
h(SD_ST)
Data output hold time
Slave transmitter (after enable edge) 8-
t
h(SD_MT)
Master transmitter (after enable edge) 2-
-   Evaluated by characterization - Not tested in production.
-   The maximum value of 256xFs is 50 MHz (APB1 maximum frequency).

Electrical characteristicsSTM32F411xC STM32F411xE
112/151DS10314 Rev 8
## Figure 37. I
## 2
S slave timing diagram (Philips protocol)
## (1)

-   LSB transmit/receive of the previously transmitted byte. No LSB transmit/receive is sent before the first
byte.
## Figure 38. I
## 2
S master timing diagram (Philips protocol)
## (1)
-   LSB transmit/receive of the previously transmitted byte. No LSB transmit/receive is sent before the first
byte.

DS10314 Rev 8113/151
STM32F411xC STM32F411xEElectrical characteristics
## 124
USB OTG full speed (FS) characteristics
This interface is present in USB OTG FS controller.


## Note:
When VBUS sensing feature is enabled, PA9 should be left at their default state (floating
input), not as alternate function. A typical 200
μA current consumption of the embedded
sensing block (current to voltage conversion to determine the different sessions) can be
observed on PA9 when the feature is enabled.
Table 62. USB OTG FS startup time
SymbolParameter Max Unit
t
## STARTUP
## (1)
-   Guaranteed by design - Not tested in production.
USB OTG FS transceiver startup time1μs
Table 63. USB OTG FS DC electrical characteristics
SymbolParameterConditionsMin.
## (1)
-   All the voltages are measured from the local ground potential.
## Typ.   Max.
## (1)
## Unit
## Input
levels
## V
## DD
USB OTG FS operating
voltage
## 3.0
## (2)
-   The USB OTG FS functionality is ensured down to 2.7 V but not the full USB full speed electrical
characteristics which are degraded in the 2.7-to-3.0 V V
## DD
voltage range.
## -3.6V
## V
## DI
## (3)
-   Guaranteed by design - Not tested in production.
Differential input sensitivityI(USB_FS_DP/DM) 0.2--
## V
## V
## CM
## (3)
Differential common mode
range
## Includes V
## DI
range0.8-2.5
## V
## SE
## (3)
Single ended receiver
threshold
## 1.3-2.0
## Output
levels
## V
## OL
Static output level lowR
## L
of 1.5 kΩ to 3.6 V
## (4)
## 4.
## R
## L
is the load connected on the USB OTG FS drivers.
## --0.3
## V
## V
## OH
Static output level highR
## L
of 15 kΩ to V
## SS
## (4)
## 2.8-3.6
## R
## PD
## PA11, PA12
## (USB_FS_DM/DP)
## V
## IN
## = V
## DD
## 172124
kΩ
## PA9 (OTG_FS_VBUS)0.651.12.0
## R
## PU
## PA11, PA12
## (USB_FS_DM/DP)
## V
## IN
## = V
## SS
## 1.51.82.1
## PA9 (OTG_FS_VBUS) V
## IN
## = V
## SS
## 0.250.370.55

Electrical characteristicsSTM32F411xC STM32F411xE
114/151DS10314 Rev 8
Figure 39. USB OTG FS timings: definition of data signal rise and fall time

6.3.20       12-bit       ADC       characteristics
Unless otherwise specified, the parameters given in Table 65 are derived from tests
performed under the ambient temperature, f
## PCLK2
frequency and V
## DDA
supply voltage
conditions summarized in Table 14.

Table 64. USB OTG FS electrical characteristics
## (1)

-   Guaranteed by design - Not tested in production.
Driver characteristics
SymbolParameterConditionsMinMaxUnit
t
r
Rise time
## (2)
## 2.
Measured from 10% to 90% of the data signal. For more detailed informations, please refer to USB
## Specification - Chapter 7 (version 2.0).
## C
## L
= 50 pF

## 420ns
t
f
Fall time
## (2)
## C
## L
= 50 pF420ns
t
rfm
Rise/ fall time matchingt
r
## /t
f
## 90110%
## V
## CRS
Output signal crossover voltage1.32.0V
ai14137b
Cross over
points
## Differential
data lines
## V
## CRS
## VSS
tftr
Table 65. ADC characteristics
SymbolParameter ConditionsMinTyp

MaxUnit
## V
## DDA
Power supply
## V
## DDA
## − V
## REF+
## < 1.2 V
## 1.7
## (1)
## -3.6V
## V
## REF+
Positive reference voltage1.7
## (1)
## -V
## DDA
## V
f
## ADC
ADC clock frequency
## V
## DDA
## = 1.7
## (1)
to 2.4 V0.61518MHz
## V
## DDA
= 2.4 to 3.6 V0.63036MHz
f
## TRIG
## (2)
External trigger frequency
f
## ADC
= 30 MHz,
12-bit resolution
--1764kHz
## --171/f
## ADC
## V
## AIN
Conversion voltage range
## (3)
## 0 (V
## SSA
or V
## REF-

tied to ground)
## -V
## REF+
## V
## R
## AIN
## (2)
External input impedance
See Equation 1 for
details
--50kΩ
## R
## ADC
## (2)(4)
Sampling switch resistance--6kΩ
## C
## ADC
## (2)
Internal sample and hold
capacitor
-47pF

DS10314 Rev 8115/151
STM32F411xC STM32F411xEElectrical characteristics
## 124
t
lat
## (2)
Injection trigger conversion
latency
f
## ADC
= 30 MHz--0.100μs
## --3
## (5)
## 1/f
## ADC
t
latr
## (2)
Regular trigger conversion
latency
f
## ADC
= 30 MHz--0.067μs
## --2
## (5)
## 1/f
## ADC
t
## S
## (2)
Sampling time
f
## ADC
= 30 MHz0.100-16μs
## 3-4801/f
## ADC
t
## STAB
## (2)
Power-up time-23μs
t
## CONV
## (2)
Total conversion time (including
sampling time)
f
## ADC
= 30 MHz
12-bit resolution
## 0.50-16.40μs
f
## ADC
= 30 MHz
10-bit resolution
## 0.43-16.34μs
f
## ADC
= 30 MHz
8-bit resolution
## 0.37-16.27μs
f
## ADC
= 30 MHz
6-bit resolution
## 0.30-16.20μs
9 to 492 (t
## S
for sampling +n-bit resolution for successive
approximation)
## 1/f
## ADC
f
## S
## (2)
Sampling rate
## (f
## ADC
= 30 MHz, and
t
## S
= 3 ADC cycles)
12-bit resolution
Single ADC
--2Msps
12-bit resolution
Interleave Dual ADC
mode
--3.75Msps
12-bit resolution
Interleave Triple ADC
mode
--6Msps
## I
## VREF+
## (2)
## ADC V
## REF
DC current
consumption in conversion
mode
-300500μA
## I
## VDDA
## (2)
## ADC V
## DDA
DC current
consumption in conversion
mode
-1.61.8mA
## 1.   V
## DDA
minimum value of 1.7 V is possible with the use of an external power supply supervisor (refer to Section 3.15.2:
Internal reset OFF).
-   Evaluated by characterization - Not tested in production.
## 3.   V
## REF+
is internally connected to V
## DDA
and V
## REF-
is internally connected to V
## SSA
## .
## 4.   R
## ADC
maximum value is given for V
## DD
=1.7 V, and minimum value for V
## DD
## =3.3 V.
-   For external triggers, a delay of 1/f
## PCLK2
must be added to the latency specified in Table 65.
Table 65. ADC characteristics (continued)
SymbolParameter ConditionsMinTyp

MaxUnit

Electrical characteristicsSTM32F411xC STM32F411xE
116/151DS10314 Rev 8
## Equation 1: R
## AIN
max formula
The formula above (Equation 1) is used to determine the maximum external impedance
allowed for an error below 1/4 of LSB. N = 12 (from 12-bit resolution) and k is the number of
sampling periods defined in the ADC_SMPR1 register.



Table 66. ADC accuracy at f
## ADC
= 18 MHz
## (1)
-   Better performance could be achieved in restricted V
## DD
, frequency and temperature ranges.
SymbolParameterTest conditionsTypMax
## (2)
-   Evaluated by characterization - Not tested in production.
## Unit
ETTotal unadjusted error
f
## ADC
=18 MHz
## V
## DDA
= 1.7 to 3.6 V
## V
## REF
= 1.7 to 3.6 V
## V
## DDA
## − V
## REF
## < 1.2 V
## ±3±4
## LSB
EOOffset error±2±3
EGGain error±1±3
EDDifferential linearity error±1±2
ELIntegral linearity error±2±3
Table 67. ADC accuracy at f
## ADC
= 30 MHz
## (1)
-   Better performance could be achieved in restricted V
## DD
, frequency and temperature ranges.
SymbolParameterTest conditionsTypMax
## (2)
-   Evaluated by characterization - Not tested in production.
## Unit
ETTotal unadjusted error
f
## ADC
= 30 MHz,
## R
## AIN
< 10 kΩ,
## V
## DDA
= 2.4 to 3.6 V,
## V
## REF
= 1.7 to 3.6 V,
## V
## DDA
## − V
## REF
## < 1.2 V
## ±2±5
## LSB
EOOffset error±1.5±2.5
EGGain error±1.5±4
EDDifferential linearity error±1±2
ELIntegral linearity error±1.5±3
Table 68. ADC accuracy at f
## ADC
= 36 MHz
## (1)
-   Better performance could be achieved in restricted V
## DD
, frequency and temperature ranges.
SymbolParameterTest conditionsTypMax
## (2)
-   Evaluated by characterization - Not tested in production.
## Unit
ETTotal unadjusted error
f
## ADC
=36 MHz,
## V
## DDA
= 2.4 to 3.6 V,
## V
## REF
= 1.7 to 3.6 V
## V
## DDA
## − V
## REF
## < 1.2 V
## ±4±7
## LSB
EOOffset error±2±3
EGGain error±3±6
EDDifferential linearity error±2±3
ELIntegral linearity error±3±6
## R
## AIN
k0.5–()
f
## ADC
## C
## ADC
## 2
## N2+
## ()ln××
## ----------------------------------------------------------------R
## ADC
## –=

DS10314 Rev 8117/151
STM32F411xC STM32F411xEElectrical characteristics
## 124



Note:ADC accuracy vs. negative injection current: injecting a negative current on any analog
input pins should be avoided as this significantly reduces the accuracy of the conversion
being performed on another analog input. It is recommended to add a Schottky diode (pin to
ground) to analog pins which may potentially inject negative currents.
Any positive injection current within the limits specified for I
## INJ(PIN)
and ΣI
## INJ(PIN)
in
Section 6.3.16 does not affect the ADC accuracy.
Table 69. ADC dynamic accuracy at f
## ADC
= 18 MHz - limited test conditions
## (1)
SymbolParameterTest conditionsMinTypMaxUnit
ENOBEffective number of bits
f
## ADC
=18 MHz
## V
## DDA
## = V
## REF+
## = 1.7 V
Input Frequency = 20 KHz
Temperature = 25 °C
## 10.310.4-bits
SINADSignal-to-noise and distortion ratio6464.2-
dBSNRSignal-to-noise ratio6465-
THDTotal harmonic distortion--72-67
-   Evaluated by characterization - Not tested in production.
Table 70. ADC dynamic accuracy at f
## ADC
= 36 MHz - limited test conditions
## (1)
SymbolParameterTest conditionsMinTypMaxUnit
ENOBEffective number of bits
f
## ADC
= 36 MHz
## V
## DDA
## = V
## REF+
## = 3.3 V
Input Frequency = 20 KHz
Temperature = 25 °C
## 10.610.8-bits
SINADSignal-to noise and distortion ratio6667-
dBSNRSignal-to noise ratio6468-
THDTotal harmonic distortion--72-70
-   Evaluated by characterization - Not tested in production.

Electrical characteristicsSTM32F411xC STM32F411xE
118/151DS10314 Rev 8
Figure 40. ADC accuracy characteristics
-   See also Table 67.
-   Example of an actual transfer curve.
-   Ideal transfer curve.
-   End point correlation line.
## 5.   E
## T
= Total Unadjusted Error: maximum deviation between the actual and the ideal transfer curves.
EO = Offset Error: deviation between the first actual transition and the first ideal one.
EG = Gain Error: deviation between the last ideal transition and the last actual one.
ED = Differential Linearity Error: maximum deviation between actual steps and the ideal one.
EL = Integral Linearity Error: maximum deviation between any actual transition and the end point
correlation line.
Figure 41. Typical connection diagram using the ADC
-   Refer to Table 65 for the values of R
## AIN
## , R
## ADC
and C
## ADC
## .
## 2.   C
parasitic
represents the capacitance of the PCB (dependent on soldering and PCB layout quality) plus the
pad capacitance (roughly 5
pF). A high C
parasitic
value downgrades conversion accuracy. To remedy this,
f
## ADC
should be reduced.
ai14395c
## E
## O
## E
## G
## 1L SB
## IDEAL
## 4095
## 4094
## 4093
## 5
## 4
## 3
## 2
## 1
## 0
## 7
## 6
## 1234567
## 4093  4094  4095  4096
## (1)
## (2)
## E
## T
## E
## D
## E
## L
## (3)
## V
## DDA
## V
## SSA
## V
## REF+
## 4096
(or              depending on package)]
## V
## DDA
## 4096
## [1LSB
## IDEAL
## =

ai17534
## STM32F
## V
## DD
AINx
## I
## L
±1 μA
## 0.6 V
## V
## T
## R
## AIN
## (1)
## C
parasitic
## V
## AIN
## 0.6 V
## V
## T
## R
## ADC
## (1)
## C
## ADC
## (1)
## 12-bit
converter
Sample and hold ADC
converter

DS10314 Rev 8119/151
STM32F411xC STM32F411xEElectrical characteristics
## 124
General PCB design guidelines
Power supply decoupling should be performed as shown in Figure 42 or Figure 43,
depending on whether V
## REF+
is connected to V
## DDA
or not. The 10 nF capacitors should be
ceramic (good quality). They should be placed them as close as possible to the chip.
Figure 42. Power supply and reference decoupling (V
## REF+
not connected to V
## DDA
## )
## 1.   V
## REF+
and V
## REF-
inputs are both available on UFBGA100. V
## REF+
is also available on LQFP100. When
## V
## REF+
and V
## REF-
are not available, they are internally connected to V
## DDA
and V
## SSA
## .
## STM32F
1 μF // 10 nF
1 μF // 10 nF
## VREF+
## (1)
## VDDA
## VSSA/VREF-
## (1)
ai17535b

Electrical characteristicsSTM32F411xC STM32F411xE
120/151DS10314 Rev 8
Figure 43. Power supply and reference decoupling (V
## REF+
connected to V
## DDA
## )
## 1.   V
## REF+
and V
## REF-
inputs are both available on UFBGA100. V
## REF+
is also available on LQFP100. When
## V
## REF+
and V
## REF-
are not available, they are internally connected to V
## DDA
and V
## SSA
## .
6.3.21 Temperature sensor characteristics


## STM32F
1 μF // 10 nF
ai17536c
## VREF+/VDDA
## VREF-/VSSA
## (1)
## (1)
Table 71. Temperature sensor characteristics
SymbolParameterMinTypMaxUnit
## T
## L
## (1)
## V
## SENSE
linearity with temperature-±1±2°C
Avg_Slope
## (1)
Average slope-2.5-mV/°C
## V
## 25
## (1)
Voltage at 25 °C-0.76-V
t
## START
## (2)
Startup time-610μs
## T
## S_temp
## (2)
ADC sampling time when reading the temperature (1 °C accuracy)10--μs
-   Evaluated by characterization - Not tested in production.
-   Guaranteed by design - Not tested in production.
Table 72. Temperature sensor calibration values
SymbolParameterMemory address
TS_CAL1TS ADC raw data acquired at temperature of 30 °C, V
## DDA
= 3.3 V0x1FFF 7A2C - 0x1FFF 7A2D
TS_CAL2TS ADC raw data acquired at temperature of 110 °C, V
## DDA
= 3.3 V0x1FFF 7A2E - 0x1FFF 7A2F

DS10314 Rev 8121/151
STM32F411xC STM32F411xEElectrical characteristics
## 124
## 6.3.22       V
## BAT
monitoring characteristics

6.3.23       Embedded       reference       voltage
The parameters given in Table 74 are derived from tests performed under ambient
temperature and V
## DD
supply voltage conditions summarized in Table 14.


## Table 73. V
## BAT
monitoring characteristics
SymbolParameterMinTypMaxUnit
RResistor bridge for V
## BAT
## -50-KΩ
## Q
Ratio on V
## BAT
measurement-4-
## Er
## (1)
Error on Q–1-+1%
## T
## S_vbat
## (2)(2)
ADC sampling time when reading the V
## BAT
1 mV accuracy
## 5- -μs
-   Guaranteed by design - Not tested in production.
-   Shortest sampling time can be determined in the application by multiple iterations.
Table 74. Embedded internal reference voltage
SymbolParameterConditionsMin
## Typ

MaxUnit
## V
## REFINT
Internal reference voltage- 40 °C < T
## A
## < + 125 °C1.181.211.24V
## T
## S_vrefint
## (1)
ADC sampling time when reading the
internal reference voltage
## -10--μs
## V
RERINT_s
## (2)
Internal reference voltage spread over the
temperature range
## V
## DD
= 3V ± 10mV-35mV
## T
## Coeff
## (2)
Temperature coefficient--3050ppm/°C
t
## START
## (2)
Startup time--610μs
-   Shortest sampling time can be determined in the application by multiple iterations.
-   Guaranteed by design - Not tested in production.
Table 75. Internal reference voltage calibration values
SymbolParameterMemory address
## V
## REFIN_CAL
Raw data acquired at temperature of
## 30 °C V
## DDA
## = 3.3 V
0x1FFF 7A2A - 0x1FFF 7A2B

Electrical characteristicsSTM32F411xC STM32F411xE
122/151DS10314 Rev 8
6.3.24 SD/SDIO MMC/eMMC card host interface (SDIO) characteristics
Unless otherwise specified, the parameters given in Table 76 for the SDIO/MMC/eMMC
interface are derived from tests performed under the ambient temperature, f
## PCLK2
frequency
and V
## DD
supply voltage conditions summarized in Table 14, with the following configuration:
•Output speed is set to OSPEEDRy[1:0] = 10
•Capacitive load C = 30 pF (for eMMC C = 20 pF)
•Measurement points are done at CMOS levels: 0.5V
## DD
Refer to Section 6.3.16: I/O port characteristics for more details on the input/output
characteristics.
Figure 44. SDIO high-speed mode
Figure 45. SD default mode
ai14888
## CK
## D, CMD
## (output)
t
## OVD
t
## OHD

DS10314 Rev 8123/151
STM32F411xC STM32F411xEElectrical characteristics
## 124

Table 76. Dynamic characteristics: SD / MMC characteristics
## (1)(2)

SymbolParameterConditionsMinTypMaxUnit
f
## PP
Clock frequency in data transfer
mode
-0-50MHz
-SDIO_CK/fPCLK2 frequency ratio---8/3-
t
## W(CKL)
Clock low timefpp = 50 MHz10.511-
ns
t
## W(CKH)
Clock high timefpp = 50 MHz8.59-
CMD, D inputs (referenced to CK) in MMC and SD HS mode
t
## ISU
Input setup time HSfpp = 50 MHz2.5--
ns
t
## IH
Input hold time HS
fpp = 50 MHz
## -40°C<T
## A
## < 125°C
## 5- -
fpp = 50 MHz
## -40°C<T
## A
## <+85°C
## 2.5--
CMD, D outputs (referenced to CK) in MMC and SD HS mode
t
## OV
Output valid time HSfpp = 50 MHz-3.54
ns
t
## OH
Output hold time HSfpp = 50 MHz2--
CMD, D inputs (referenced to CK) in SD default mode
t
## ISUD
Input setup time SDfpp = 25 MHz3--
ns
t
## IHD
Input hold time SDfpp = 25 MHz4--
CMD, D outputs (referenced to CK) in SD default mode
t
## OVD
Output valid default time SDfpp =25 MHz-55.5
ns
t
## OHD
Output hold default time SDfpp =25 MHz4.5--
-   Evaluated by characterization - Not tested in production.
## 2.   V
## DD
= 2.7 to 3.6 V.

Electrical characteristicsSTM32F411xC STM32F411xE
124/151DS10314 Rev 8
6.3.25       RTC       characteristics

Table 77. Dynamic characteristics: eMMC characteristics V
## DD
= 1.7 V to 1.9 V
## (1)(2)

-   Evaluated by characterization - Not tested in production.
## 2.   C
load
= 20 pF
SymbolParameterConditionsMinTypMaxUnit
f
## PP
Clock frequency in data transfer
mode
-0-50MHz
-SDIO_CK/fPCLK2 frequency ratio---8/3-
t
## W(CKL)
Clock low timefpp = 50 MHz1010.5-
ns
t
## W(CKH)
Clock high timefpp = 50 MHz99.5-
CMD, D inputs (referenced to CK) in eMMC mode
t
## ISU
Input setup time HSfpp = 50 MHz0--ns
t
## IH
Input hold time HSfpp = 50 MHz6--
CMD, D outputs (referenced to CK) in eMMC mode
t
## OV
Output valid time HSfpp = 50 MHz-3.55
ns
t
## OH
Output hold time HSfpp = 50 MHz2--
Table 78. RTC characteristics
SymbolParameterConditionsMinMax
## -f
## PCLK1
## /RTCCLK

frequency ratio
Any read/write operation
from/to an RTC register
## 4-

DS10314 Rev 8125/151
STM32F411xC STM32F411xEPackage information
## 141
7           Package           information
In order to meet environmental requirements, ST offers these devices in different grades of
ECOPACK packages, depending on their level of environmental compliance. ECOPACK
specifications, grade definitions and product status are available at: www.st.com.
ECOPACK is an ST trademark.
7.1          Device          marking
Refer to technical note “Reference device marking schematics for STM32 microcontrollers
and microprocessors” (TN1433) available on www.st.com, for the location of pin 1 / ball A1
as well as the location and orientation of the marking areas versus pin 1 / ball A1.
Parts marked as “ES”, “E” or accompanied by an engineering sample notification letter, are
not yet qualified and therefore not approved for use in production. ST is not responsible for
any consequences resulting from such use. In no event will ST be liable for the customer
using any of these engineering samples in production. ST’s Quality department must be
contacted prior to any decision to use these engineering samples to run a qualification
activity.

Package informationSTM32F411xC STM32F411xE
126/151DS10314 Rev 8
7.2 WLCSP49 package information (A0ZV)
This WLCSP is a 49-ball, 2.999 x 3.185 mm, 0.4 mm pitch wafer level chip scale
Figure 46. WLCSP49 - Outline
-   Drawing is not to scale.
A1 orientation
reference
Wafer back side
## E
## D
## Detail A
## (rotated 90 °)
Seating plane
## Note 1
## A1
## Bump
b
Side view
## A
## A2
## Detail A
## 7
## 1
## G
## A
e1
## F
## G
e
e
A1 ball location
e2
## E
## A3
Bump side
eee
## Z
## Note 2
Front view
## A0ZV_ME_V1
ccc
ddd
bbb
## Z
## Z
## ZXY
## Z
aaa
## (4X)

DS10314 Rev 8127/151
STM32F411xC STM32F411xEPackage information
## 141

Figure 47. WLCSP49 - Footprint example
Table 79. WLCSP49 - Mechanical data
## Symbol
millimetersinches
## (1)
-   Values in inches are converted from mm and rounded to 4 decimal digits.
MinTypMaxMinTypMax
## A0.5250.5550.5850.02070.02190.0230
## A1-0.175--0.0069-
## A2-0.380--0.0150-
## A3
## (2)
-   Back side coating
## -0.025--0.0010-
b
## (3)
-   Dimension is measured at the maximum bump diameter parallel to primary datum Z.
## 0.2200.2500.2800.00870.00980.0110
## D2.9642.9993.0340.11670.11810.1194
## E3.1503.1853.2200.12400.12540.1268
e-0.400--0.0157-
e1-2.400--0.0945-
e2-2.400--0.0945-
## F-0.2995--0.0118-
## G-0.3925--0.0155-
aaa--0.100--0.0039
bbb--0.100--0.0039
ccc--0.100--0.0039
ddd--0.050--0.0020
eee--0.050--0.0020
## MS18965V2
## Dsm
## Dpad

Package informationSTM32F411xC STM32F411xE
128/151DS10314 Rev 8

Device marking for WLCSP49
The following figure gives an example of topside marking orientation versus ball A1 identifier
location. The printed markings may differ depending on the supply chain.
Other optional marking or inset/upset marks, which depend on supply chain operations, are
not indicated below.
Figure 48. WLCSP49 marking (package top view)
-   Parts marked as ES or E or accompanied by an Engineering Sample notification letter are not yet qualified
and therefore not approved for use in production. ST is not responsible for any consequences resulting
from such use. In no event will ST be liable for the customer using any of these engineering samples in
production. ST’s Quality department must be contacted prior to any decision to use these engineering
samples to run a qualification activity.
Table 80. WLCSP49 - Example of PCB design rules (0.4 mm pitch)
DimensionRecommended values
## Pitch0.4
## Dpad
260 μm max. (circular)
220 μm recommended
Dsm300 μm min. (for 260 μm diameter pad)
PCB pad designNon-solder mask defined via underbump allowed.
MSv36161V1
## E411CEB
## YWW
Product identification
## (1)
## R
## Ball 1
indentifier
Date code
Revision code

DS10314 Rev 8129/151
STM32F411xC STM32F411xEPackage information
## 141
7.3          UFQFPN48          package information (A0B9)
This UFQFPN is a 48-lead, 7 x 7 mm, 0.5 mm pitch, ultra thin fine pitch quad flat package.
Figure 49. UFQFPN48 – Outline
-   Drawing is not to scale.
-   All leads/pads should also be soldered to the PCB to improve the lead/pad solder joint life.
-   There is an exposed die pad on the underside of the UFQFPN48 package. It is recommended to connect
and solder this back-side pad to PCB ground.
## D1
## E1
## EXPOSED PAD
## E2
e
## D2
PIN 1 idenfier
## BOTTOM VIEW
## L
## A
## A3
## C
## FRONT VIEW
## DETAIL A
## SEATING PLANE
## LEADS COPLANARITY
## Cddd
## SEATING PLANE
## A1
## A1
## A
## C
## C
ddd
## PIN 1 IDENTIFIER
## LASER MAKER AREA
## E
## D
## TOP VIEW
## A0B9_UFQFPN48_ME_V4

Package informationSTM32F411xC STM32F411xE
130/151DS10314 Rev 8

Figure 50. UFQFPN48 – Footprint example
-   Dimensions are expressed in millimeters.
Table 81. UFQFPN48 – Mechanical data
## Symbol
millimetersinches
## (1)
-   Values in inches are converted from mm and rounded to four decimal digits.
MinTypMaxMinTypMax
## A0.5000.5500.6000.01970.02170.0236
## A10.0000.0200.0500.0000 0.00080.0020
## A3-0.152--0.0060-
b0.2000.2500.3000.00790.00980.0118
## D
## (2)
-   Dimensions D and E do not include mold protrusion, not exceed 0.15 mm.
## 6.9007.0007.1000.27170.27560.2795
## D15.4005.5005.6000.21260.21650.2205
## D2
## (3)
-   Dimensions D2 and E2 are not in accordance with JEDEC.
## 5.5005.6005.7000.21650.22050.2244
## E
## (2)
## 6.9007.0007.1000.27170.27560.2795
## E15.4005.5005.6000.21260.21650.2205
## E2
## (3)
## 5.5005.6005.7000.21650.22050.2244
e-0.500--0.0197-
## L0.3000.4000.5000.01180.01570.0197
ddd--0.080--0.0031
## 7.30
## 7.30
## 0.20
## 0.30
## 0.55
## 0.50
## 5.80
## 6.20
## 6.20
## 5.60
## 5.60
## 5.80
## 0.75
## A0B9_UFQFPN48_FP_V3
## 48
## 1
## 12
## 1324
## 25
## 36
## 37

DS10314 Rev 8131/151
STM32F411xC STM32F411xEPackage information
## 141
7.4 LQFP64 package information (5W)
This LQFP is 64-pin, 10 x 10 mm low-profile quad flat package.
Note:See list of notes in the notes section.
Figure 51. LQFP64 - Outline
## (15)
## D 1/4
## E 1/4
## (6)
aaa C A-B D
4x N/4 TIPS
bbb H A-B  D 4x
## (13)
(N – 4)x e
## 0.05
## A
## A2   A1
## (12)
b
dddC A-B D
ccc
## C
## C
## D
## (5) (2)
## (4)
## D1
## D
## (3)
## D 1/4
## E 1/4
## (6)
## 1
## 2
## 3
## (3)
## A
## B
## (3)
## (5)
## (2)
## E1
## E
## AA
(Section A-A)
## (4)
## 5W_LQFP64_ME_V1
## (10)
## N
## BOTTOM VIEW
## TOP VIEW
## SECTION A-A
## GAUGE PLANE
## B
## B
## SECTION B-B
## H
## L
## S
## R1
## R2
## SECTION B-B
b
b1
c
c1
## WITH PLATING
## BASE METAL
## 1
## 3
## 2
## (L1)
## (2)
## 0.25
## (11)
## (9)
## (11)
## (11)(11)
## (11)
## (1)

Package informationSTM32F411xC STM32F411xE
132/151DS10314 Rev 8

Table 82. LQFP64 - Mechanical data
## Symbol
millimetersinches
## (14)
MinTypMaxMinTypMax
## A--1.60--0.0630
## A1
## (12)
## 0.05-0.150.0020-0.0059
## A21.351.401.450.05310.05510.0570
b
## (9)(11)
## 0.170.220.270.00670.00870.0106
b1
## (11)
## 0.170.200.230.00670.00790.0091
c
## (11)
## 0.09-0.200.0035-0.0079
c1
## (11)
## 0.09-0.160.0035-0.0063
## D
## (4)
## 12.00 BSC0.4724 BSC
## D1
## (2)(5)
## 10.00 BSC0.3937 BSC
## E
## (4)
## 12.00 BSC0.4724 BSC
## E1
## (2)(5)
## 10.00 BSC0.3937 BSC
e0.50 BSC0.1970 BSC
## L0.450.600.750.01770.02360.0295
## L11.00 REF0.0394 REF
## N
## (13)
## 64
θ
## 0°3.5°7°0°3.5°7°
θ1
## 0°--0°--
θ2
## 10°12°14°10°12°14°
θ3
## 10°12°14°10°12°14°
## R10.08--0.0031--
## R20.08-0.200.0031-0.0079
## S0.20--0.0079--
aaa
## (1)
## 0.200.0079
bbb
## (1)
## 0.200.0079
ccc
## (1)
## 0.080.0031
ddd
## (1)
## 0.080.0031

DS10314 Rev 8133/151
STM32F411xC STM32F411xEPackage information
## 141
## Notes:
1.Dimensioning and tolerancing schemes conform to ASME Y14.5M-1994.
-     The Top package body size may be smaller than the bottom package size by as much
as 0.15 mm.
-     Datums A-B and D to be determined at datum plane H.
-     To be determined at seating datum plane C.
-     Dimensions D1 and E1 do not include mold flash or protrusions. Allowable mold flash
or protrusions is “0.25 mm” per side. D1 and E1 are Maximum plastic body size
dimensions including mold mismatch.
-     Details of pin 1 identifier are optional but must be located within the zone indicated.
-     All Dimensions are in millimeters.
-     No intrusion allowed inwards the leads.
-     Dimension “b” does not include dambar protrusion. Allowable dambar protrusion shall
not cause the lead width to exceed the maximum “b” dimension by more than 0.08 mm.
Dambar cannot be located on the lower radius or the foot. Minimum space between
protrusion and an adjacent lead is 0.07 mm for 0.4 mm and 0.5 mm pitch packages.
-   Exact shape of each corner is optional.
-   These dimensions apply to the flat section of the lead between 0.10 mm and 0.25 mm
from the lead tip.
-   A1 is defined as the distance from the seating plane to the lowest point on the package
body.
-   “N” is the number of terminal positions for the specified body size.
-   Values in inches are converted from mm and rounded to 4 decimal digits.
-   Drawing is not to scale.
Figure 52. LQFP64 - Footprint example
-   Dimensions are expressed in millimeters.
## 48
## 32
## 49
## 64
## 17
## 1
## 16
## 1.20
## 0.30
## 33
## 10.30
## 12.70
## 10.30
## 0.5
## 7.80
## 12.70
## 5W_LQFP64_FP_V2

Package informationSTM32F411xC STM32F411xE
134/151DS10314 Rev 8
7.5          LQFP100          package information (1L)
This LQFP is 100 lead, 14 x 14 mm low-profile quad flat package.
Note:See list of notes in the notes section.
Figure 53. LQFP100 - Outline
## (15)
## D1/4
## E1/4
4x N/4 TIPS
aaa
## C
## A-B
## D
bbb  H A-B
## D
## 4x
(N-4) x e
## A
## 0.05
## A2  A1
b
aaa
## C A-BD
ccc
## C
## C
## D
## D1
## D
## N
## A
## 1
## 2
## 3
## SECTION A-A
## A
## A
## B
## EE1
## SECTION A-A
## GAUGE PLANE
## B
## B
## SECTION B-B
## H
## E1/4
## D1/4
## L
## S
## R1
## R2
## SECTION B-B
b
b1
c
c1
## WITH PLATING
## BASE METAL
## TOP VIEW
## SIDE VIEW
## BOTTOM VIEW
## 1L_LQFP100_ME_V3
## (6)
## (6)
## (10)
ș2
ș
ș
ș
## (13)
## (12)
## (5)(2)
## (4)
## (4)
## (5)
## (2)
## (3)
## (L1)
## (9)
## (11)
## (11)
## (11)
## (11)
## (2)
## (11)(1)

DS10314 Rev 8135/151
STM32F411xC STM32F411xEPackage information
## 141

Table 83. LQFP100 - Mechanical data
## Symbol
millimetersinches
## (14)
MinTypMaxMinTypMax
## A-1.501.60-0.05900.0630
## A1
## (12)
## 0.05-0.150.0019-0.0059
## A21.351.401.450.05310.05510.0570
b
## (9)(11)
## 0.170.220.270.00670.00870.0106
b1
## (11)
## 0.170.200.230.00670.00790.0090
c
## (11)
## 0.09-0.200.0035-0.0079
c1
## (11)
## 0.09-0.160.0035-0.0063
## D
## (4)
## 16.00 BSC0.6299 BSC
## D1
## (2)(5)
## 14.00 BSC0.5512 BSC
## E
## (4)
## 16.00 BSC0.6299 BSC
## E1
## (2)(5)
## 14.00 BSC0.5512 BSC
e0.50 BSC0.0197 BSC
## L0.450.600.750.1770.02360.0295
## L1
## (1)(11)
## 1.00-0.0394-
## N
## (13)
## 100
θ
## 0°3.5°7°0°3.5°7°
θ1
## 0°--0°--
θ2
## 10°12°14°10°12°14°
θ3
## 10°12°14°10°12°14°
## R10.08--0.0031--
## R20.08-0.200.0031-0.0079
## S0.20--0.0079--
aaa
## (1)
## 0.200.0079
bbb
## (1)
## 0.200.0079
ccc
## (1)
## 0.080.0031
ddd
## (1)
## 0.080.0031

Package informationSTM32F411xC STM32F411xE
136/151DS10314 Rev 8
## Notes:
1.Dimensioning and tolerancing schemes conform to ASME Y14.5M-1994.
-     The Top package body size may be smaller than the bottom package size by as much
as 0.15 mm.
-     Datums A-B and D to be determined at datum plane H.
-     To be determined at seating datum plane C.
-     Dimensions D1 and E1 do not include mold flash or protrusions. Allowable mold flash
or protrusions is “0.25 mm” per side. D1 and E1 are Maximum plastic body size
dimensions including mold mismatch.
-     Details of pin 1 identifier are optional but must be located within the zone indicated.
-     All Dimensions are in millimeters.
-     No intrusion allowed inwards the leads.
-     Dimension “b” does not include dambar protrusion. Allowable dambar protrusion shall
not cause the lead width to exceed the maximum “b” dimension by more than 0.08 mm.
Dambar cannot be located on the lower radius or the foot. Minimum space between
protrusion and an adjacent lead is 0.07 mm for 0.4 mm and 0.5 mm pitch packages.
-   Exact shape of each corner is optional.
-   These dimensions apply to the flat section of the lead between 0.10 mm and 0.25 mm
from the lead tip.
-   A1 is defined as the distance from the seating plane to the lowest point on the package
body.
-   “N” is the number of terminal positions for the specified body size.
-   Values in inches are converted from mm and rounded to 4 decimal digits.
-   Drawing is not to scale.
Figure 54. LQFP100 - Footprint example
-   Dimensions are expressed in millimeters.
## 7551
## 5076
## 0.5
## 0.3
## 16.714.3
## 10026
## 12.3
## 25
## 1.2
## 16.7
## 1
## 1L_LQFP100_FP_V1

DS10314 Rev 8137/151
STM32F411xC STM32F411xEPackage information
## 141
7.6          UFBGA100          package information (A0C2)
This UFBGA is a 100-ball, 7 x 7 mm, 0.50 mm pitch, ultra fine pitch ball grid array package.
Note:See list of notes in the notes section.
Figure 55. UFBGA100 - Outline
## (13)
## A0C2_UFBGA_ME_V8
e
## D
## A
Øb (N balls)
## E
## TOP VIEW
## BOTTOM VIEW
## 1
e
## A
## A
## B
## D1
## E1
eee
## CA B
fff
## Ø
## Ø
## M
## M
## C
A1 ball pad
corner
## B
## C
## E
## D
## F
## G
## H
## J
## K
## L
## M
## 3245 76891110
Seating plane
## C
## A1A2
ddd
cccC
## C
## Detail A
Solder balls
Mold resin
## Substrate
## (8)
## (DATUM A)
## (DATUM B)
aaaC
## (4X)
## (9)
## SIDE VIEW
## DETAIL A
## C
## 12
## SE
## SD
A1 ball pad
corner

Package informationSTM32F411xC STM32F411xE
138/151DS10314 Rev 8

## Notes:
1.Dimensioning and tolerancing schemes conform to ASME Y14.5M-2009 apart
European projection.
-     UFBGA stands for ulta profile fine pitch ball grid array: 0.50 mm < A ≤ 0.65 mm / fine
pitch e < 1.00 mm.
-     The profile height, A, is the distance from the seating plane to the highest point on the
package. It is measured perpendicular to the seating plane.
-     A1 is defined as the distance from the seating plane to the lowest point on the package
body.
-     Dimension b is measured at the maximum diameter of the terminal (ball) in a plane
parallel to primary datum C.
-     BSC stands for BASIC dimensions. It corresponds to the nominal value and has no
tolerance. For tolerances refer to form and position table. On the drawing these
dimensions are framed.
-     Primary datum C is defined by the plane established by the contact points of three or
more solder balls that support the device when it is placed on top of a planar surface.
-     The terminal (ball) A1 corner must be identified on the top surface of the package by
using a corner chamfer, ink or metalized markings, or other feature of package body or
Table 84. UFBGA100 - Mechanical data
## Symbol
millimeters
## (1)
inches
## (12)
Min.Typ.Max.Min.Typ.Max.
## A
## (2)(3)
## --0.60--0.0236
## A1
## (4)
## 0.05--0.0020--
## A2                   -0.43--0.0169-
b
## (5)
## 0.230.280.330.00900.01100.0130
## D
## (6)
## 7.00 BSC0.2756 BSC
## D1 5.50 BSC0.2165 BSC
## E 7.00 BSC0.2756 BSC
## E1 5.50 BSC0.2165 BSC
e
## (9)
## 0.50 BSC0.0197 BSC
## N
## (11)
## 100
## SD
## (12)
## 0.25 BSC0.0098 BSC
## SE
## (12)
## 0.25 BSC0.0098 BSC
aaa0.150.0059
ccc0.200.0079
ddd                                       0.080.0031
eee                                       0.150.0059
fff                                         0.050.0020

DS10314 Rev 8139/151
STM32F411xC STM32F411xEPackage information
## 141
integral heat slug. A distinguish feature is allowable on the bottom surface of the
package to identify the terminal A1 corner. Exact shape of each corner is optional.
-     e represents the solder ball grid pitch.
-   N   represents   the total number of balls on the BGA.
-   Basic dimensions SD and SE are defined with respect to datums A and B. It defines the
position of the centre ball(s) in the outer row or column of a fully populated matrix.
-   Values in inches are converted from mm and rounded to 4 decimal digits.
-   Drawing is not to scale.
Figure 56. UFBGA100 - Footprint example

Table 85. UFBGA100 - Example of PCB design rules (0.5 mm pitch BGA)
DimensionValues
Pitch0.50 mm
Dpad0.280 mm
## Dsm
0.370 mm typ. (depends on the solder mask
registration tolerance)
Stencil opening0.280 mm
Stencil thicknessBetween 0.100 mm and 0.125 mm
## BGA_WLCSP_FT_V1
## Dsm
## Dpad

Package informationSTM32F411xC STM32F411xE
140/151DS10314 Rev 8
7.7          Thermal          characteristics
The maximum chip junction temperature (T
## J
max) must never exceed the values given in
Table 14: General operating conditions on page 59.
The maximum chip-junction temperature, T
## J
max., in degrees Celsius, may be calculated
using the following equation:
## T
## J
max = T
## A
max + (PD max x Θ
## JA
## )
## Where:
## •T
## A
max is the maximum ambient temperature in °C,
## •Θ
## JA
is the package junction-to-ambient thermal resistance, in °C/W,
•PD max is the sum of P
## INT
max and P
## I/O
max (PD max = P
## INT
max + P
## I/O
max),
## •P
## INT
max is the product of I
## DD
and

## V
## DD
, expressed in Watts. This is the maximum chip
internal power.
## P
## I/O
max represents the maximum power dissipation on output pins where:
## P
## I/O
max = Σ (V
## OL
## × I
## OL
## ) + Σ((V
## DD
## – V
## OH
## ) × I
## OH
## ),
taking into account the actual V
## OL
## / I
## OL
and V
## OH
## / I
## OH

of the I/Os at low and high level in the
application.
7.7.1         Reference         document
JESD51-2 Integrated Circuits Thermal Test Method Environment Conditions - Natural
Convection (Still Air). Available from www.jedec.org.
Table 86. Package thermal characteristics
SymbolParameterValueUnit
## Θ
## JA
Thermal resistance junction-ambient
## UFQFPN48
## 32
## °C/W
Thermal resistance junction-ambient
## WLCSP49
## 51
Thermal resistance junction-ambient
## LQFP64
## 47
Thermal resistance junction-ambient
## LQFP100
## 43
Thermal resistance junction-ambient
## UFBGA100
## 62

DS10314 Rev 8141/151
STM32F411xC STM32F411xEOrdering information
## 141
8           Ordering           information

For a list of available options (memory, package, and so on) or for further information on any
aspect of this device, contact the nearest ST sales office.
Table 87. Ordering information scheme
Example:STM32 F    411  C   EY   6TR
Device family
STM32 = Arm
## ®
-based 32-bit microcontroller
Product type
## F = General-purpose
Device subfamily
411 = 411 family
Pin count
C = 48/49 pins
R = 64 pins
V = 100 pins
Flash memory size
C = 256 Kbytes of flash memory
E = 512 Kbytes of flash memory
## Package
## H = UFBGA
## T = LQFP
## U = UFQFPN
## Y = WLCSP
Temperature range
6 = Industrial temperature range, - 40 to 85 °C
7 = Industrial temperature range, - 40 to 105 °C
3 = Industrial temperature range, - 40 to 125 °C
## Packing
TR = tape and reel
No character = tray or tube

Recommendations when using the internal reset OFFSTM32F411xC STM32F411xE
142/151DS10314 Rev 8
Appendix A Recommendations when using the internal
reset OFF
When the internal reset is OFF, the following integrated features are no longer supported:
•The integrated power-on-reset (POR)/power-down reset (PDR) circuitry is disabled.
•The brownout reset (BRO) circuitry must be disabled. By default BOR is OFF.
•The embedded programmable voltage detector (PVD) is disabled.
## •V
## BAT
functionality is no more available and VBAT pin should be connected to V
## DD
## .
A.1         Operating         conditions

Table 88. Limitations depending on the operating power supply range
## Operating
power supply
range
## ADC
operation
## Maximum
flash memory
access
frequency
with no wait
state
## (f
## Flashmax
## )
## Maximum
flash memory
access
frequency
with no wait
states
## (1)

## (2)
-   Applicable only when the code is executed from flash memory. When the code is executed from RAM, no
wait state is required.
-   Thanks to the ART accelerator and the 128-bit flash memory, the number of wait states given here does not
impact the execution speed from flash memory since the ART accelerator allows to achieve a performance
equivalent to 0 wait state program execution.
I/O operation
Possible flash
memory
operations
## V
## DD
= 1.7 to
## 2.1 V
## (3)
## 3.   V
## DD
## /V
## DDA
minimum value of 1.7 V, with the use of an external power supply supervisor (refer to
Section 3.15.1: Internal reset ON).
## Conversion
time up to
## 1.2 Msps
20 MHz
## (4)
-   Prefetch is not available. Refer to AN3430 application note for details on how to adjust performance and
power.
100 MHz with
6 wait states
No I/O
compensation
8-bit erase and
program
operations only

DS10314 Rev 8143/151
STM32F411xC STM32F411xEApplication block diagrams
## 146
Appendix B Application block diagrams
B.1 USB OTG Full Speed (FS) interface solutions
Figure 57. USB controller configured as peripheral-only and used in Full-Speed mode
-   The external voltage regulator is only needed when building a V
## BUS
powered device.
Figure 58. USB controller configured as host-only and used in Full-Speed mode
-   The current limiter is required only if the application has to support a V
## BUS
powered device. A basic power
switch can be used if 5V are available on the application board.
## MS35538V1
## V

STM32F411xCxE
## OSC_IN
## OSC_OUT
## PA11
## PA12
## DD
5 V to VDD
## Voltage
regulator
## (1)
## VBUS
## DM
## DP
## V
## SS
USB Std-B connector
## MS35539V1



STM32F411xCxE
## GPIO
## GPIO+IRQ
## PA11
## PA12
## OSC_IN
## OSC_OUT
## EN
## Overcurrent
## V
## DD
Current limiter
power switch
## (1)
## 5 V Power
## VBUS
## DM
## DP
## V
## SS
USB Std-A connector

Application block diagramsSTM32F411xC STM32F411xE
144/151DS10314 Rev 8
Figure 59. USB controller configured in dual mode and used in Full-Speed mode
-   The external voltage regulator is only needed when building a V
## BUS
powered device.
-   The current limiter is required only if the application has to support a V
## BUS
powered device. A basic power
switch can be used if 5 V are available on the application board.
-   The ID pin is required in dual role only.
## MS35540V1

## V
## DD
## PA12




## PA10
## (2)
## PA9
## PA11
## GPIO+IRQ
## GPIO
STM32F411xCxE
## OSC_IN
## OSC_OUT
## V
## DD
## EN
## Overcurrent
Current limiter
power switch
5V power
5 V to VDD
voltage
regulator
## (1)
USBnicro-AB connector
## VSS
## ID
## (3)
## DP
## DM
## VBUS

DS10314 Rev 8145/151
STM32F411xC STM32F411xEApplication block diagrams
## 146
B.2 Sensor Hub application example
Figure 60. Sensor Hub application example
## Accelerometer
## Gyroscope
## Magnetometer
## Pressure
Ambient light
## Proximity
## Micro
## SPI
Temperature/Humidity
## I2S
## SCL
## SDA
## PB6/PB10/PA8
## PB7/PB9/PB4
## SLK
## DATA
## PB13
## PB15
## NSS
## PA 4
## SCK
## MISO
## MOSI
## PA 5
## PA 6
## PA 7
## PA 1/PA 3
## TX
## RX
## PA 9
## PA 10
## UART
## I2C
## ADC
## PC15
## PC14
OSC 32k
## NRST
## SWDIO
## PB3
## PA 14
## PA 13
## SWCLK
## SWO
## JTAG
## PDRON
## VDD
## GPIO
15x GPIO
Up to 10 ADC inputs possible for the 48 and 49 pins package
## BOOT0
## 10k
## MS35548V1
STM32F411xE
48- and 49-pin package
## HOST

Application block diagramsSTM32F411xC STM32F411xE
146/151DS10314 Rev 8
B.3         Batch         Acquisition Mode (BAM) example
Data is transferred through the DMA from interfaces into the internal SRAM while the rest of
the MCU is set in low power mode.
•Code execution from RAM before switching off the Flash.
•Flash is set in power down and flash interface (ART™ accelerator) clock is stopped.
•The clocks are enabled only for the required interfaces.
•MCU core is set in sleep mode (core clock stopped waiting for interrupt).
•Only the needed DMA channels are enabled and running.
Figure 61. Batch Acquisition Mode (BAM) example
Temperature/Humidity
## SCL
## SDA
## PB6/PB10/PA8
## PB7/PB9/PB4
## SLK
## DATA
## PB13
## PB15
## NSS
## PA 4
## SCK
## MISO
## MOSI
## PA 5
## PA 6
## PA 7
## PA 1/PA 3
## TX
## RX
## PA 9
## PA 10
## PC15
## PC14
OSC 32k
## NRST
## SWDIO
## PB3
## PA 14
## PA 13
## SWCLK
## SWO
## JTAG
## PDRON
## VDD
## GPIO
15x GPIO
Up to 10 ADC inputs possible for the 48 and 49 pins package
## BOOT0
## 10k
## MS35549V1
STM32F411xE
48- and 49-pin package
1x 12-bit ADC
10 channels/2 Msps
5x SPI or
5x I2S
(2x full duplex)
3x I2C
## CORTEX M4
## CPU + MPU
## + FPU
100 MHz
512 kB Flash
## ART
128 kB SRAM
## DMA
Legend:                         Low-power                         partActive part
## HOST
## Proximity
## Micro
Ambient light
## Magnetometer
## Accelerometer
## Gyroscope
## Pressure
## I2C
## I2S
## UART
## SPI
## ADC

DS10314 Rev 8147/151
STM32F411xC STM32F411xEImportant security notice
## 147
9 Important security notice
The STMicroelectronics group of companies (ST) places a high value on product security,
which is why the ST product(s) identified in this documentation may be certified by various
security certification bodies and/or may implement our own security measures as set forth
herein. However, no level of security certification and/or built-in security measures can
guarantee that ST products are resistant to all forms of attacks. As such, it is the
responsibility of each of ST's customers to determine if the level of security provided in an
ST product meets the customer needs both in relation to the ST product alone, as well as
when combined with other components and/or software for the customer end product or
application. In particular, take note that:
•ST products may have been certified by one or more security certification bodies, such
as Platform Security Architecture (www.psacertified.org) and/or Security Evaluation
standard for IoT Platforms (www.trustcb.com). For details concerning whether the ST
product(s) referenced herein have received security certification along with the level
and current status of such certification, either visit the relevant certification standards
website or go to the relevant product page on www.st.com for the most up to date
information. As the status and/or level of security certification for an ST product can
change from time to time, customers should re-check security certification status/level
as needed. If an ST product is not shown to be certified under a particular security
standard, customers should not assume it is certified.
•Certification bodies have the right to evaluate, grant and revoke security certification in
relation to ST products. These certification bodies are therefore independently
responsible for granting or revoking security certification for an ST product, and ST
does not take any responsibility for mistakes, evaluations, assessments, testing, or
other activity carried out by the certification body with respect to any ST product.
•Industry-based cryptographic algorithms (such as AES, DES, or MD5) and other open
standard technologies which may be used in conjunction with an ST product are based
on standards which were not developed by ST. ST does not take responsibility for any
flaws in such cryptographic algorithms or open technologies or for any methods which
have been or may be developed to bypass, decrypt or crack such algorithms or
technologies.
•While robust security testing may be done, no level of certification can absolutely
guarantee protections against all attacks, including, for example, against advanced
attacks which have not been tested for, against new or unidentified forms of attack, or
against any form of attack when using an ST product outside of its specification or
intended use, or in conjunction with other components or software which are used by
customer to create their end product or application. ST is not responsible for resistance
against such attacks. As such, regardless of the incorporated security features and/or
any information or support that may be provided by ST, each customer is solely
responsible for determining if the level of attacks tested for meets their needs, both in
relation to the ST product alone and when incorporated into a customer end product or
application.
•All security features of ST products (inclusive of any hardware, software,
documentation, and the like), including but not limited to any enhanced security
features added by ST, are provided on an "AS IS" BASIS. AS SUCH, TO THE EXTENT
## PERMITTED BY APPLICABLE LAW, ST DISCLAIMS ALL WARRANTIES, EXPRESS
## OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF
MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, unless the
applicable written and signed contract terms specifically provide otherwise.

Revision historySTM32F411xC STM32F411xE
148/151DS10314 Rev 8
Revision history

Table 89. Document revision history
DateRevisionChanges
19-Jun-20141Initial release.
10-Sep-20142
Introduced the BAM feature in Features, Section 2: Description., and Section 3.3: Batch
Acquisition mode (BAM).
Updated Section 3.5: Embedded flash memory, Section 3.14: Power supply schemes
and Section 3.18: Low-power modes, Section 3.20.2: General-purpose timers (TIMx)
and Section 3.30: Temperature sensor.
Modified Table 8: STM32F411xC/xE pin definitions, Table 9: Alternate function mapping
and APB2 in Table 10: STM32F411xC/xE  register boundary addresses.
Modified Table 34: Low-power mode wakeup timings
## (1)
, Table 20: Typical and maximum
current consumption, code with data processing (ART  accelerator disabled) running
from SRAM - V
## DD
= 1.7 V, Table 21: Typical and maximum current consumption, code
with data processing (ART  accelerator disabled) running from SRAM - V
## DD
## = 3.6 V,
Table 25: Typical and maximum current consumption in run mode, code with data
processing  (ART accelerator enabled with prefetch) running from flash memory - V
## DD
## =
3.6 V, Table 26: Typical and maximum current consumption in Sleep mode - V
## DD
## = 3.6 V
and Table 58: I
## 2
C characteristics and Figure 33: I
## 2
C bus AC waveforms and
measurement circuit.
Added Figure 21: Low-power mode wakeup, Section Appendix A: Recommendations
when using the internal reset OFF and Section Appendix B: Application block diagrams.
27-Nov-20143
Changed datasheet status to Production Data.
Updated Table 31: Typical and maximum current consumptions in V
## BAT
mode.
Section : On-chip peripheral current consumption: changed HCLK frequency and
updated DMA1 and DMA2 current consumption in Table 33: Peripheral current
consumption.
Updated Table 55: I/O AC characteristics.
Updated THD in Table 69: ADC dynamic accuracy at f
## ADC
= 18 MHz - limited test
conditions and Table 70: ADC dynamic accuracy at f
## ADC
= 36 MHz - limited test
conditions.
Updated Table 55: I/O AC characteristics.
Updated Figure 48: WLCSP49 - 49-ball, 2.999 x 3.185 mm, 0.4 mm pitch wafer level
chip scale package outline and Figure 48: WLCSP49 marking (package top view).
Added Figure 49: WLCSP49 - 49-ball, 2.999 x 3.185 mm, 0.4 mm pitch wafer level chip
scale recommended footprint and Table 82: WLCSP49 recommended PCB design rules
(0.4 mm pitch).
Updated Figure 7.4: LQFP64 package information (5W), Figure 57: LQFP64 marking
example (package top view), Figure 61: LQPF100 marking example (package top view),
and Figure 91: UFBGA100 - 100-ball, 7 x 7 mm, 0.50 mm pitch, ultra fine pitch ball grid
array package mechanical data.
04-Feb-20154
Added VPP alternate function for BOOT0 in Table 8: STM32F411xC/xE pin definitions.
Added TC inputs in Table 11: Voltage characteristics, Table 12: Current characteristics,
Table 14: General operating conditions,
Table 53: I/O static characteristics and
Figure 30: FT/TC I/O input characteristics.
## Updated V
## ESD(CDM)
in Table 50: ESD absolute maximum ratings.
A3 minimum and maximum values removed in Table 83: UFBGA100 - 100-ball, 7 x 7
mm, 0.50 mm pitch, ultra fine pitch  ball grid array package mechanical data.

DS10314 Rev 8149/151
STM32F411xC STM32F411xERevision history
## 150
21-Nov-20165
## Updated:
–Features
–Figure 1: Compatible board design for LQFP100 package
–Figure 2: Compatible board design for LQFP64 package
–Figure 3: STM32F411xC/xE block diagram
–Figure 22: High-speed external clock source AC timing diagram
–Figure 23: Low-speed external clock source AC timing diagram
–Figure 33: I
## 2
C bus AC waveforms and measurement circuit
–Figure 64: UFBGA100 - 100-ball, 7 x 7 mm, 0.50 mm pitch, ultra fine pitch ball grid
array package outline
–Table 2: STM32F411xC/xE features and peripheral counts
–Table 8: STM32F411xC/xE pin definitions
–Table 13: Thermal characteristics
–Table 14: General operating conditions
–From Table 20: Typical and maximum current consumption, code with data processing
(ART  accelerator disabled) running from SRAM - V
## DD
= 1.7 V to Table 31: Typical and
maximum current consumptions in V
## BAT
mode
–Table 35: High-speed external user clock characteristics
–Table 36: Low-speed external user clock characteristics
–Table 39: HSI oscillator characteristics
–Table 47: Flash memory endurance and data retention
–Table 51: Electrical sensitivities
–Table 53: I/O static characteristics
–Table 76: Dynamic characteristics: SD / MMC characteristics
–Table 87: Ordering information scheme
## Added:
–To optimize the power consumption the flash memory can also be switched off in Run
or in Sleep mode (see Section 3.18: Low-power modes). Two modes are available:
Flash in Stop mode or in DeepSleep mode (trade off between power saving and
startup time, see Table 34: Low-power mode wakeup timings
## (1)
). Before disabling the
flash memory, the code must be executed from the internal RAM. One-time
programmable bytes
–Table 86: Package thermal characteristics
05-Dec-20166
## Updated:
–Table 27: Typical and maximum current consumptions in Stop mode - V
## DD
## = 1.7 V
–Table 28: Typical and maximum current consumption in Stop mode - V
## DD
## =3.6 V
–Table 29: Typical and maximum current consumption in Standby mode - V
## DD
## = 1.7 V
–Table 30: Typical and maximum current consumption in Standby mode - V
## DD
## = 3.6 V
Table 89. Document revision history
DateRevisionChanges

Revision historySTM32F411xC STM32F411xE
150/151DS10314 Rev 8
14-Dec-20177
## Updated:
–Table 27: Typical and maximum current consumptions in Stop mode - V
## DD
## = 1.7 V
–Table 28: Typical and maximum current consumption in Stop mode - V
## DD
## =3.6 V
–Table 29: Typical and maximum current consumption in Standby mode - V
## DD
## = 1.7 V
–Table 30: Typical and maximum current consumption in Standby mode - V
## DD
## = 3.6 V
29-Jan-20248
## Updated:
–Features
## – Description
– Table 9: Alternate function mapping
– Table 9: STM32F411xC/xE WLCSP49 pinout
– Section 7: Package information
– Section 7.2: WLCSP49 package information (A0ZV)
– Section 7.3: UFQFPN48 package information (A0B9)
– Section 7.5: LQFP100 package information (1L)
– Section 7.6: UFBGA100 package information (A0C2)
## Added:
## – Application
–Section 7.1: Device marking
– Section 9: Important security notice
Removed all markings except the WLCSP marking.
Table 89. Document revision history
DateRevisionChanges

DS10314 Rev 8151/151
STM32F411xC STM32F411xE
## 151
## IMPORTANT NOTICE – READ CAREFULLY
STMicroelectronics NV and its subsidiaries (“ST”) reserve the right to make changes, corrections, enhancements, modifications, and
improvements to ST products and/or to this document at any time without notice. Purchasers should obtain the latest relevant information on
ST products before placing orders. ST products are sold pursuant to ST’s terms and conditions of sale in place at the time of order
acknowledgment.
Purchasers are solely responsible for the choice, selection, and use of ST products and ST assumes no liability for application assistance or
the design of purchasers’ products.
No license, express or implied, to any intellectual property right is granted by ST herein.
Resale of ST products with provisions different from the information set forth herein shall void any warranty granted by ST for such product.
ST and the ST logo are trademarks of ST. For additional information about ST trademarks, refer to www.st.com/trademarks. All other product
or service names are the property of their respective owners.
Information in this document supersedes and replaces information previously supplied in any prior versions of this document.
© 2024 STMicroelectronics – All rights reserved