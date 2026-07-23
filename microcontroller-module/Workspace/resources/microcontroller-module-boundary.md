# Module Boundary: stm32-microcontroller-module

> **System:** Battery Management System (BMS)  
> **Document Version:** 1.1.0  
> **Source Documents Ingested:** 
> - BMS-design.md
> - stm32f411ce_datasheet.md
> - STM32F411CEU6_manual.md
> - STM32F411_pin_functions_map.csv
> **Last Updated:** 2026-07-16

---

## 1. Identity

| Field | Value |
|:---|:---|
| **Module Name** | microcontroller-module |
| **Role** | Executes safety logic, SOC/SOH estimation, contactor control, and external system communication (excluding native CAN). |
| **Domain / Zone** | Low-Voltage (LV) Domain |
| **Instantiation** | Singleton |
| **Primary Component(s)** | STM32F411CE (Arm Cortex-M4 with FPU) |

---


## 2. Port Definition & Pin Mapping
> This section serves as the "Physical Truth." Every resource consumed or produced must be assigned to a specific port here.

### 2.1 Domain: Low-Voltage (External / System Interface)
| Port ID | Direction | Signal Type | Voltage Level | Mapped Resource | Function & Logic |
|:---|:---|:---|:---|:---|:---|
| **P1.1** | Input | Power | 3.3V DC | LVPS | Primary external power source (to be regulated by PMIC). |
| **P1.2** | Bi-Di | Digital Bus | 3.3V / USB | Host Comm | External communication via USART, SPI, or USB OTG FS. |
| **P1.3** | Output | Digital | 3.3V | Contactor Control | Signal to drive external pack-level contactors/relays. |
| **P1.4** | Passive | Ground | LV GND | Chassis Ground | Common ground reference for the low-voltage domain. |

### 2.2 Domain: Low-Voltage (Internal Module Interface)
| Port ID | Direction | Signal Type | Voltage Level | Mapped Resource | Function & Logic |
|:---|:---|:---|:---|:---|:---|
| **P2.1** | Input | Power | 1.7V - 3.6V | VDD | Main logic supply (typically 3.3V) from PMIC. |
| **P2.2** | Passive | Ground | LV GND | VSS | Ground reference for the MCU and local peripherals. |
| **P2.3** | Bi-Di | Digital Bus | 3.3V | UART/SPI | Data link to Communication Bridge (BQ79600). |
| **P2.4** | Input | Analog | 0V - 3.3V | Isolated Current | Single-ended current measurement signal from Current Sensing module. |
| **P2.5** | Output | Digital | 3.3V | Sync Signal | Synchronization trigger for BQ79616 "Global Cell Sample". |


## 3. Consumed Resources _(what this module needs)_

### 3.1 Power
| Rail / Supply | Voltage | Max Current | Required Quality | Provider (module or external) |
|:---|:---|:---|:---|:---|
| VDD Rail | 3.3V | ~50mA | Stable, low noise | Low-Voltage Power Supply (PMIC) |

### 3.2 Signals & Data
| Signal / Bus | Direction | Protocol / Format | Timing Constraint | Provider |
|:---|:---|:---|:---|:---|
| Cell Data | Input | UART/SPI | Periodic Update | Communication Bridge |
| Current Sample | Input | Single-ended Analog | 1kHz Sampling | Current Sensing Module |
| Fault Signal | Input | Discrete (Low) | Asynchronous | Communication Bridge (NFAULT) |

### 3.3 Clock & Synchronisation
| Clock / Trigger | Frequency / Period | Edge / Polarity | Provider |
|:---|:---|:---|:---|
| HSE Oscillator | 4-26 MHz | External Crystal | External Component (Optional) |
| HSI Oscillator | 16 MHz | Internal RC | Internal |

### 3.4 Physical & Environmental
| Constraint | Specification | Notes |
|:---|:---|:---|
| Package | UFQFPN48 | 7 x 7 mm body. |
| Operating Temp | -40°C to +105°C | Industrial/Automotive range. |
| Placement | LV Domain | Must be isolated from HV tracks by creepage/clearance distances. |

### 3.5 State & Configuration
| Config Item | Type | Who sets it | When |
|:---|:---|:---|:---|
| Safety Thresholds | Firmware Const | Developer | Compile time |
| OCV Lookup Table | Data Array | Firmware | Compile time |
| Calibration Offsets | NVM | Firmware | Power-On Self-Test (POST) |

### 3.6 Unresolvable Dependencies _(system boundary surface)_
| Resource | Class | External Source | Specification |
|:---|:---|:---|:---|
| System Firmware | Data/State | Developer | Code implementing BMS logic. |

---

## 4. Produced Resources _(what this module offers)_

### 4.1 Power Outputs
| Rail | Voltage | Max Current | Load Regulation | Consumer(s) |
|:---|:---|:---|:---|:---|
| N/A | | | | |

### 4.2 Signals & Data Outputs
| Signal / Bus | Direction | Protocol / Format | Update Rate | Consumer(s) |
|:---|:---|:---|:---|:---|
| Wake-up Ping | Output | UART/SPI | On Boot/Wakeup | Communication Bridge |
| Pack Status | Output | UART/USB/SPI | 10Hz - 100Hz | External Monitoring System |
| Sync Command | Output | GPIO Pulse | 1kHz | Current Sensing / Daisy Chain |

### 4.3 Capability Outputs
| Capability | Trigger Condition | Effect on System | Consumer(s) |
|:---|:---|:---|:---|
| Safety Trip | OV/UV/OC detected | Opens contactors to isolate pack | External Contactors |
| SOC/SOH Est. | Continuous | Calculates state for system monitoring | Internal/External System |

### 4.4 Physical Interfaces Offered
| Interface | Type | Mating Requirement |
|:---|:---|:---|
| Debug Interface | SWD/JTAG | ST-Link / J-Link Connector |
| Serial/USB Port | Header/Micro-USB | External monitoring tool |

---

## 4. Direct Connections

| Connected Module | Resource Exchanged | Direction | Interface Type |
|:---|:---|:---|:---|
| Low-Voltage Power Supply | Power (VDD) | Input | PCB Trace |
| Communication Bridge | Data, Faults, Wakeup | Bi-Di | UART/SPI / Discrete |
| Current Sensing | Isolated Current | Input | Single-ended Analog |
| External Contactors | Safety Trip | Output | Digital/Discrete |

---

## 5. Operational Contracts

### 5.1 Initialisation Contract
- **Preconditions:** VDD (3.3V) is stable within 1.7V - 3.6V range.
- **Guarantees:** Sends wake-up command to Communication Bridge and performs POST.

### 5.2 Steady-State Contract
- **Guarantees:** Executes safety loop at deterministic frequency; maintains SOC/SOH estimation.
- **Accuracy:** ADC sampling accuracy according to datasheet (12-bit).

### 5.3 Fault Contract
- **Action:** If NFAULT from Bridge is asserted or current exceeds limits, enters Safe State (opens contactors).
- **Internal Fault:** Reboots via Watchdog if firmware hangs.

---

## 5. Isolation & Domain Boundaries

| Boundary Type | Isolation Method | Rating | Notes |
|:---|:---|:---|:---|
| LV to HV | External (Bridge/Sense) | 1000V DC | This module itself is purely LV; isolation is provided by connected modules. |

---

## 6. Open Items

| Item | Type (Dependency / Constraint / Decision) | Status |
|:---|:---|:---|
| Specific Pin Mapping | Decision | Final GPIO assignment for contactors and sync signal pending. |
| ADC Input Scaling | Hardware Constraint | Ensure signal conditioning in Current Sensing module matches MCU ADC range (0-3.3V). |
