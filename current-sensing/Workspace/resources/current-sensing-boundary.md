# Module Boundary: current-sensing

> **System:** BMS High Level Design (MVP Architecture)  
> **Document Version:** 1.0  
> **Source Documents Ingested:** 
> - BMS-design.md
> - amc1301-datasheet.md
> - amc130x-eval-board.md
> **Last Updated:** 2024-05-22  

---

## 1. Identity

| Field | Value |
|:---|:---|
| **Module Name** | current-sensing |
| **Role** | Measures pack current via a low-side shunt resistor and provides an isolated differential analog signal for SOC/SOH estimation and over-current protection. |
| **Domain / Zone** | Spans High-Voltage (HV) and Low-Voltage (LV) domains. |
| **Instantiation** | Singleton (Pack-level sensing) |
| **Primary Component(s)** | AMC1301 (Isolated Amplifier), Sub-milliohm Manganin Shunt resistor (0.1m$\Omega$ to 0.5m$\Omega$) |

---


## 2. Port Definition & Pin Mapping
> This section serves as the "Physical Truth." Every resource consumed or produced must be assigned to a specific port here.

### 2.1 Domain: High-Voltage / Hot Side
| Port ID | Direction | Signal Type | Voltage Level | Mapped Resource | Function & Logic |
|:---|:---|:---|:---|:---|:---|
| **P1.1** | Input | Analog | $\pm 250$ mV | Shunt Voltage (INP/INN) | Kelvin sense connection for current measurement. |
| **P1.2** | Input | Power | 3.3V - 5.5V | VDD1 | Supply for isolated front-end logic. |
| **P1.3** | Passive | Ground | HV- Ref | GND1 | Isolated reference ground for the HV domain. |

### 2.2 Domain: Low-Voltage / Cold Side
| Port ID | Direction | Signal Type | Voltage Level | Mapped Resource | Function & Logic |
|:---|:---|:---|:---|:---|:---|
| **P2.1** | Output | Diff Analog | 0V - 5V | Isolated Current (OUTP/OUTN) | Output proportional to shunt current (Fixed Gain 8.2x). |
| **P2.2** | Input | Power | 3.3V / 5V | VDD2 | Logic supply for the LV output stage. |
| **P2.3** | Passive | Ground | LV GND | GND2 | System-level digital ground reference. |


## 3. Consumed Resources _(what this module needs)_

### 3.1 Power
| Rail / Supply | Voltage | Max Current | Required Quality | Provider (module or external) |
|:---|:---|:---|:---|:---|
| VDD1 (HV) | 3.3V - 5.5V | 10mA (Typ) | Stable DC | BQ79616 (VREG5) or UCC28881 |
| VDD2 (LV) | 3.3V / 5V | 6mA (Typ) | Stable DC | Microcontroller Module / PMIC |

### 3.2 Signals & Data
| Signal / Bus | Direction | Protocol / Format | Timing Constraint | Provider |
|:---|:---|:---|:---|:---|
| Shunt Voltage | Input | Differential Analog | High Bandwidth (210kHz) | External Shunt Resistor |

### 3.3 Clock & Synchronisation
| Clock / Trigger | Frequency / Period | Edge / Polarity | Provider |
|:---|:---|:---|:---|
| Global Cell Sample Sync | 1 kHz | Periodic | Microcontroller Module |

### 3.4 Physical & Environmental
| Constraint | Specification | Notes |
|:---|:---|:---|
| Package | SOIC-8 (DWV) | 5.85 mm x 7.50 mm body |
| Operating Temperature | -40°C to +125°C | Automotive grade |
| Creepage / Clearance | 9.1 mm | land pattern nominal |

### 3.5 State & Configuration
| Config Item | Type | Who sets it | When |
|:---|:---|:---|:---|
| Zero-Point Offset | Firmware Calibration | MCU | Power-On Self-Test (POST) |
| Gain Scaling | Firmware Constant | MCU | Initialization |

### 3.6 Unresolvable Dependencies _(system boundary surface)_
| Resource | Class | External Source | Specification |
|:---|:---|:---|:---|
| Shunt Voltage | Sensing | Battery Pack Bus | Derived from low-side shunt in traction path |

---

## 4. Produced Resources _(what this module offers)_

### 4.1 Power Outputs
| Rail | Voltage | Max Current | Load Regulation | Consumer(s) |
|:---|:---|:---|:---|:---|
| N/A | | | | |

### 4.2 Signals & Data Outputs
| Signal / Bus | Direction | Protocol / Format | Update Rate | Consumer(s) |
|:---|:---|:---|:---|:---|
| Isolated Current | Output | Diff Analog | Real-time (210kHz BW) | Microcontroller Module (ADC) |

### 4.3 Capability Outputs
| Capability | Trigger Condition | Effect on System | Consumer(s) |
|:---|:---|:---|:---|
| Fast Over-Current Detection | Pack current > limit | Signal to MCU for cut-off | Microcontroller Module |
| Accurate Coulomb Counting | Current samples integrated | Pack SOC estimation | Microcontroller Module |

### 4.4 Physical Interfaces Offered
| Interface | Type | Mating Requirement |
|:---|:---|:---|
| Kelvin Sense Terminals | Screw Terminals (EVM) | Direct Shunt Connection |

---

## 4. Direct Connections

| Connected Module | Resource Exchanged | Direction | Interface Type |
|:---|:---|:---|:---|
| BMS Monitor Module | VDD1 Power (optional) | Input | 5V Regulated (VREG5) |
| High-Voltage Power Supply | VDD1 Power (optional) | Input | UCC28881 Buck Output |
| Microcontroller Module | Isolated Current Signal | Output | Differential Analog |
| Microcontroller Module | VDD2 Power | Input | 3.3V/5V Rail |
| Microcontroller Module | Sync Command | Input | ADC Trigger |

---

## 5. Operational Contracts

### 5.1 Initialisation Contract
- **Preconditions:** VDD1 and VDD2 must be within specified range (3.3V to 5.5V). Shunt current must be zero for calibration.
- **Guarantees:** Differential output centered at VDD2/2 after startup.

### 5.2 Steady-State Contract
- **Guarantees:** Continuous measurement with <0.5% accuracy (post-calibration).
- **Latency:** Differential signal updated in real-time with 210 kHz bandwidth.

### 5.3 Fault Contract
- **Supply Fault:** AMC1301 provides system-level diagnostic features for missing high-side supply voltage detection.
- **Signal Fault:** MCU monitors for out-of-range ADC readings.

---

## 5. Isolation & Domain Boundaries

| Boundary Type | Isolation Method | Rating | Notes |
|:---|:---|:---|:---|
| HV-to-LV | Reinforced (SiO2 barrier) | 1000V DC continuous | 7070V PK Reinforced (VDE 0884-17) |

---

## 6. Open Items

| Item | Type (Dependency / Constraint / Decision) | Status |
|:---|:---|:---|
| Selection of VDD1 source | Design Decision | Depends on whether BMS IC or dedicated HV Buck is preferred for power |
| Signal Scaling Buffer | Hardware Constraint | Op-Amp buffer may be needed for full MCU ADC range |
| RC Filter tuning | Constraint | RC low-pass filter to be tuned for inverter noise suppression |
