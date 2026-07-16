# Module Boundary: Microcontroller Module

> **System:** Battery Management System (BMS)  
> **Document Version:** 1.0.0  
> **Source Documents Ingested:** 
> - BMS-design.md
> - documents/microcontroller-module/TMS57012-launchpad-eval-board.md
> - documents/microcontroller-module/tms570ls1227-datasheet.md
> - documents/microcontroller-module/tms75012-reference-manual.md
> **Last Updated:** 2024-05-24

---

## 1. Identity

| Field | Value |
|:---|:---|
| **Module Name** | Microcontroller Module |
| **Role** | Executes safety logic, SOC/SOH estimation, contactor control, and external system communication. |
| **Domain / Zone** | Low-Voltage (LV) Domain |
| **Instantiation** | Singleton |
| **Primary Component(s)** | TMS570LS1224/TMS570LS1227 (Hercules Automotive-Grade Safety MCU) |

---


## 2. Port Definition & Pin Mapping
> This section serves as the "Physical Truth." Every resource consumed or produced must be assigned to a specific port here.

### 2.1 Domain: Low-Voltage (External / System Interface)
| Port ID | Direction | Signal Type | Voltage Level | Mapped Resource | Function & Logic |
|:---|:---|:---|:---|:---|:---|
| **P1.1** | Input | Power | 12V DC | 12V Aux | Primary external power source for the logic domain. |
| **P1.2** | Bi-Di | Digital Bus | 3.3V/5V | CAN Bus | External vehicle/system communication (CAN High/Low). |
| **P1.3** | Output | Digital | 12V/Logic | Contactor Control | High-level control for pack-level safety disconnects. |
| **P1.4** | Passive | Ground | LV GND | Chassis Ground | Common ground reference for the low-voltage domain. |

### 2.2 Domain: Low-Voltage (Internal Module Interface)
| Port ID | Direction | Signal Type | Voltage Level | Mapped Resource | Function & Logic |
|:---|:---|:---|:---|:---|:---|
| **P2.1** | Input | Power | 5V DC | 5V Rail | Logic supply from Low-Voltage Power Supply (PMIC). |
| **P2.2** | Input | Power | 3.3V DC | 3.3V Rail | I/O and Peripheral supply from PMIC. |
| **P2.3** | Input | Power | 1.2V DC | 1.2V Rail | MCU Core supply from PMIC. |
| **P2.4** | Bi-Di | Digital Bus | 3.3V | UART/SPI | Isolated data link to Communication Bridge (BQ79600). |
| **P2.5** | Input | Diff Analog | 0V - 5V | Isolated Current | Current measurement signal from Current Sensing module. |
| **P2.6** | Output | Digital | 3.3V | Sync Signal | Synchronization trigger for BQ79616 "Global Cell Sample". |

---

## 3. Consumed Resources _(what this module needs)_

### 3.1 Power
| Rail / Supply | Voltage | Max Current | Required Quality | Provider (module or external) |
|:---|:---|:---|:---|:---|
| 12V Aux | 12V | TBD | Automotive grade | External (Vehicle Supply) |
| 5V Rail | 5V | TBD | Stable | Low-Voltage Power Supply (PMIC) |
| 3.3V Rail | 3.3V | TBD | Low noise | Low-Voltage Power Supply (PMIC) |
| 1.2V Rail | 1.14 - 1.32V | TBD | High precision | Low-Voltage Power Supply (PMIC) |

### 3.2 Signals & Data
| Signal / Bus | Direction | Protocol / Format | Timing Constraint | Provider |
|:---|:---|:---|:---|:---|
| Cell Data | Input | UART/SPI | Periodic Update | Communication Bridge |
| Current Sample | Input | Differential Analog | 1kHz Sampling | Current Sensing Module |

### 3.3 Clock & Synchronisation
| Clock / Trigger | Frequency / Period | Edge / Polarity | Provider |
|:---|:---|:---|:---|
| Internal System Clock | 160MHz - 180MHz | N/A | Internal FMPLL |

### 3.4 Physical & Environmental
| Constraint | Specification | Notes |
|:---|:---|:---|
| Connector / Interface | Micro-B USB / BoosterPack Headers | Based on LaunchPad layout. |
| Thermal dissipation | Standard Air Cooling | Automotive grade operating range (-40 to 125°C). |
| Creepage / Clearance | 1000V DC rated | Barrier between LV and HV domain modules. |

### 3.5 State & Configuration
| Config Item | Type | Who sets it | When |
|:---|:---|:---|:---|
| Safety Limits (OV/UV/OC) | Parameter | Firmware Developer | Design Time / Boot |
| Shunt Calibration | Table | Firmware | Manufacturing / Boot |

### 3.6 Unresolvable Dependencies _(system boundary surface)_
| Resource | Class | External Source | Specification |
|:---|:---|:---|:---|
| 12V Aux Power | Power | Vehicle Auxiliary Battery | Standard 12V automotive battery system. |
| Vehicle CAN Bus | Communication | Vehicle Main Controller | J1939 or custom CAN protocol. |

---

## 4. Produced Resources _(what this module offers)_

### 4.1 Power Outputs
| Rail | Voltage | Max Current | Load Regulation | Consumer(s) |
|:---|:---|:---|:---|:---|
| None | N/A | N/A | N/A | N/A |

### 4.2 Signals & Data Outputs
| Signal / Bus | Direction | Protocol / Format | Update Rate | Consumer(s) |
|:---|:---|:---|:---|:---|
| Pack Status (SOC/SOH) | Output | CAN Bus | 10Hz - 100Hz | Vehicle Control Unit (VCU) |
| Wake-up Command | Output | UART/SPI | Event-driven (Boot) | Communication Bridge |

### 4.3 Capability Outputs
| Capability | Trigger Condition | Effect on System | Consumer(s) |
|:---|:---|:---|:---|
| Contactor Trip | Safety violation (OV, UV, OC) | Galvanic isolation of pack from load. | Battery Pack Contactors |
| Coulomb Counting | Continuous | Global SOC estimation. | Internal System State |

### 4.4 Physical Interfaces Offered
| Interface | Type | Mating Requirement |
|:---|:---|:---|
| CAN Interface | Header/Terminal | Twisted Pair |
| Contactor Driver | PWM/Digital Out | External Relay/Contactor Driver |

---

## 4. Direct Connections

| Connected Module | Resource Exchanged | Direction | Interface Type |
|:---|:---|:---|:---|
| Low-Voltage Power Supply | Power Rails (5V, 3.3V, 1.2V) | Input | Direct PCB Trace |
| Communication Bridge | Cell Data, Wake-up | Bi-Di | UART/SPI |
| Current Sensing | Pack Current Signal | Input | Differential Analog |
| Vehicle VCU | Pack Status | Bi-Di | CAN Bus |
| Battery Contactors | Safety Control | Output | Digital/PWM |

---

## 5. Operational Contracts

### 5.1 Initialisation Contract
- **Preconditions:** 12V Aux power is stable. PMIC rails are within spec.
- **Guarantees:** Sends wake-up command to Communication Bridge within [TBD] ms of boot.

### 5.2 Steady-State Contract
- **Guarantees:** Samples current at 1kHz. Recalculates SOC/SOH every [TBD] ms.
- **Latency:** Safety trip response time < [TBD] ms from fault detection.

### 5.3 Fault Contract
- **Action:** If Communication Bridge link is lost, the module defaults to a "Safe State" (open contactors).
- **Propagation:** Broadcasts Error state via CAN Bus before/during shutdown.

---

## 5. Isolation & Domain Boundaries

| Boundary Type | Isolation Method | Rating | Notes |
|:---|:---|:---|:---|
| LV-HV Boundary | Galvanic Isolation | 1000V DC | Maintained via BQ79600 (Comm) and AMC1301 (Sense). |

---

## 6. Open Items

| Item | Type (Dependency / Constraint / Decision) | Status |
|:---|:---|:---|
| Exact safety trip response time | Constraint | Pending firmware specification. |
| Contactor drive current capability | Constraint | Pending contactor selection. |
| CAN protocol definition | Decision | Pending vehicle integration spec. |
