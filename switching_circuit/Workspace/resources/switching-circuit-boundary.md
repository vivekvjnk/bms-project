# Module Boundary: switching-circuit

> **System:** Battery Management System (BMS)  
> **Document Version:** 1.0  
> **Source Documents Ingested:** 
> - first-draft.md
> - system-boundary.md
> - crmicro-CRSS042N10N.md
> **Last Updated:** 2026-07-20

---

## 1. Identity

| Field | Value |
|:---|:---|
| **Module Name** | switching-circuit |
| **Role** | Performs low-side power switching (CHG/DSG) and provides integrated precision shunt current sensing. |
| **Domain / Zone** | Spans High-Voltage (HV) and Low-Voltage (LV) domains. |
| **Instantiation** | Singleton |
| **Primary Component(s)** | 8x CRSS042N10N (100V, 120A MOSFETs), 1.0mΩ Precision Shunt, Isolated Gate Drivers. |

---

## 2. Port Definition & Pin Mapping

### 2.1 Domain: High-Voltage (Power Path)
| Port ID | Direction | Signal Type | Voltage Level | Mapped Resource | Function & Logic |
|:---|:---|:---|:---|:---|:---|
| **P1.1** | Input | Power | 0V - 100V | BAT- Terminal | Connection to battery pack negative pole. |
| **P1.2** | Output | Power | 0V - 100V | PACK- Terminal | System-level return (to Load/Charger). |

### 2.2 Domain: High-Voltage (Sense & Gate Drive)
| Port ID | Direction | Signal Type | Voltage Level | Mapped Resource | Function & Logic |
|:---|:---|:---|:---|:---|:---|
| **P2.1** | Output | Analog | ±250 mV | SRP | Current sense positive (Kelvin tap). |
| **P2.2** | Output | Analog | ±250 mV | SRN | Current sense negative (Kelvin tap). |
| **P2.3** | Input | Power | 12V DC | Gate Drive (12V) | Isolated supply for MOSFET gate driving (from HVPS). |
| **P2.4** | Passive | Ground | HV GND | GND_B | Local ground reference for the HV side of the module. |

### 2.3 Domain: Low-Voltage (Control & Telemetry)
| Port ID | Direction | Signal Type | Voltage Level | Mapped Resource | Function & Logic |
|:---|:---|:---|:---|:---|:---|
| **P3.1** | Input | Digital | 3.3V | CTRL_DSG | MCU command to enable/disable Discharge bank. |
| **P3.2** | Input | Digital | 3.3V | CTRL_CHG | MCU command to enable/disable Charge bank. |
| **P3.3** | Output | Digital | 3.3V | STAT_DSG | Telemetry indicating physical state of DSG FETs. |
| **P3.4** | Output | Digital | 3.3V | STAT_CHG | Telemetry indicating physical state of CHG FETs. |
| **P3.5** | Passive | Ground | LV GND | GND_LV | System-level logic ground. |

---

## 3. Consumed Resources

### 3.1 Power
| Rail / Supply | Voltage | Max Current | Required Quality | Provider |
|:---|:---|:---|:---|:---|
| Gate Drive (12V) | 12V DC | ~100mA (Peak) | Regulated, Isolated | high-voltage-power-supply |

### 3.2 Signals & Data
| Signal / Bus | Direction | Protocol / Format | Timing Constraint | Provider |
|:---|:---|:---|:---|:---|
| FET Control (CHG/DSG) | Input | Discrete Logic | < 1ms response | microcontroller-module |

### 3.3 Physical & Environmental
| Constraint | Specification | Notes |
|:---|:---|:---|
| Continuous Current | 50A | Total load through CHG/DSG banks. |
| Peak Current | 500A | 10ms survival window during short-circuit. |
| Thermal Dissipation | ~10W total | 50A load: 3.75W per bank + 2.5W shunt. |
| MOSFET Package | TO-263 | Surface mount with optimized copper pour for heat. |

---

## 4. Produced Resources

### 4.1 Signals & Data Outputs
| Signal / Bus | Direction | Protocol / Format | Update Rate | Consumer(s) |
|:---|:---|:---|:---|:---|
| Shunt Voltage (SRP/SRN) | Output | Diff Analog | Real-time | current-sensing |
| FET Status (CHG/DSG) | Output | Discrete Logic | Real-time | microcontroller-module |

### 4.2 Capability Outputs
| Capability | Trigger Condition | Effect on System | Consumer(s) |
|:---|:---|:---|:---|
| Power Routing | Gate Drive Signals | Connects/Disconnects Pack from Load | System |
| Fault Survival | Short-circuit | Withstands 500A for 10ms | System Safety |

### 4.3 Physical Interfaces Offered
| Interface | Type | Mating Requirement |
|:---|:---|:---|
| BAT- Terminal | High-Power Lug/Bolt | M6 or M8 Ring Terminal |
| PACK- Terminal | High-Power Lug/Bolt | M6 or M8 Ring Terminal |

---

## 5. Direct Connections

| Connected Module | Resource Exchanged | Direction | Interface Type |
|:---|:---|:---|:---|
| microcontroller-module | FET Control & Status | Bi-Di | Opto-isolated Digital |
| current-sensing | Shunt Voltage (SRP/SRN) | Output | Kelvin Pair (RC Filtered) |
| high-voltage-power-supply | Gate Drive (12V) | Input | Isolated Power Trace |

---

## 6. Operational Contracts

### 6.1 Initialization Contract
- **Preconditions:** 12V Gate Drive supply is stable.
- **Guarantees:** FETs remain OFF (Pull-down) until active high signals received on CTRL_DSG/CHG.

### 6.2 Steady-State Contract
- **Guarantees:** Conduction loss < 1.0W per MOSFET at 50A continuous (total 50A / 4 FETs).
- **Accuracy:** SRP/SRN Kelvin taps provide raw voltage with minimal PCB trace error.

### 6.3 Fault Contract
- **Action:** In event of logic loss, Gate-Source resistors ($R_{GS}$) pull FETs to OFF state.
- **Over-Current:** MOSFETs survive 500A pulse for 10ms within SOA.

---

## 7. Isolation & Domain Boundaries

| Boundary Type | Isolation Method | Rating | Crossing Resource(s) |
|:---|:---|:---|:---|
| LV to HV (Control/Status)| Optocouplers | 1000V DC | CTRL_DSG, CTRL_CHG, STAT_DSG, STAT_CHG |

---

## 8. Open Items

| Item | Type | Status |
|:---|:---|:---|
| FET Thermal Performance | Verification | Confirm 50A continuous load thermal stability in enclosure. |
| Status Logic Thresholds | Specification | Define exact $V_{DS}$ levels for STAT_DSG/CHG logic high/low transitions. |
| Shunt Resistor Precision | Specification | Confirm tolerance and temperature coefficient for the 1.0mΩ shunt. |
