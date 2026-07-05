# Module Boundary: high-voltage-power-supply

> **System:** BMS (Battery Management System)  
> **Document Version:** 1.0  
> **Source Documents Ingested:** [BMS-design.md, ucc28881-datasheet.md, ucc28881-eval-board.md]  
> **Last Updated:** 2025-05-14

---

## 1. Identity

| Field | Value |
|:---|:---|
| **Module Name** | high-voltage-power-supply |
| **Role** | Converts high-voltage (HV) traction pack bus voltage into a stable low-voltage DC rail (3.3V or 5V) to power the isolated current-sensing "hot side." |
| **Domain / Zone** | High-Voltage (HV) / Hot Side |
| **Instantiation** | Singleton (per pack or per shunt location) |
| **Primary Component(s)** | UCC28881 (700-V, 225-mA Off-Line Converter) |

---


## 2. Port Definition & Pin Mapping
> This section serves as the "Physical Truth." Every resource consumed or produced must be assigned to a specific port here.

### 2.1 Domain: High-Voltage / Hot Side
| Port ID | Direction | Signal Type | Voltage Level | Mapped Resource | Function & Logic |
|:---|:---|:---|:---|:---|:---|
| **P1.1** | Input | Power | 85V - 400V (700V Max) | HVIN / DRAIN | Input from High-Voltage Bus (+). |
| **P1.2** | Passive | Ground | HV- Ref | GND | High-Voltage Return (HV-) reference. |
| **P1.3** | Output | Power | 3.3V / 5V | VOUT / VDD | Regulated output to power current-sensing "hot side." |
| **P1.4** | Input | Analog | Variable | FB | Feedback terminal for output regulation. |


## 3. Consumed Resources _(what this module needs)_

For each entry: name the resource, classify it, specify its requirement, and state whether the provider is known or unresolved.

### 3.1 Power
| Rail / Supply | Voltage | Max Current | Required Quality | Provider (module or external) |
|:---|:---|:---|:---|:---|
| Traction Pack HV Bus | 85V - 400V DC | < 1W (negligible) | High-voltage stable | External (Traction Pack Bus) |

### 3.2 Signals & Data
| Signal / Bus | Direction | Protocol / Format | Timing Constraint | Provider |
|:---|:---|:---|:---|:---|
| N/A | | | | |

### 3.3 Clock & Synchronisation
| Clock / Trigger | Frequency / Period | Edge / Polarity | Provider |
|:---|:---|:---|:---|
| PWM Switching | Load dependent | N/A | Internal (Self-biased) |

### 3.4 Physical & Environmental
| Constraint | Specification | Notes |
|:---|:---|:---|
| Thermal dissipation | Thermal shutdown protection | Integrated in UCC28881. |
| Creepage / Clearance | High-voltage isolation spacing | Essential for 400V safety. |

### 3.5 State & Configuration
| Config Item | Type | Who sets it | When |
|:---|:---|:---|:---|
| Output Voltage | Hardware (Resistor Divider) | Designer | PCB Assembly |

### 3.6 Unresolvable Dependencies _(system boundary surface)_
> Resources in the above sections whose provider is **outside the system** — cannot be satisfied by any other module.

| Resource | Class | External Source | Specification |
|:---|:---|:---|:---|
| Traction Pack HV | Power | HV Battery Bus | DC input 85V to 400V. |

---

## 4. Produced Resources _(what this module offers)_

### 4.1 Power Outputs
| Rail | Voltage | Max Current | Load Regulation | Consumer(s) |
|:---|:---|:---|:---|:---|
| VOUT (Hot Side Rail) | 3.3V or 5V DC | 225 mA | Stable regulated output | current-sensing (AMC1301 hot side) |

### 4.2 Signals & Data Outputs
| Signal / Bus | Direction | Protocol / Format | Update Rate | Consumer(s) |
|:---|:---|:---|:---|:---|
| N/A | | | | |

### 4.3 Capability Outputs
| Capability | Trigger Condition | Effect on System | Consumer(s) |
|:---|:---|:---|:---|
| Hot-Side Power | HV Bus energized | Provides bias for current sensing. | current-sensing (AMC1301) |

### 4.4 Physical Interfaces Offered
| Interface | Type | Mating Requirement |
|:---|:---|:---|
| Output Terminals | DC Rail | Connection to AMC1301 VDD1/GND1. |

---

## 4. Direct Connections

> Flat list of modules this module is **directly** coupled to. No transitive hops.

| Connected Module | Resource Exchanged | Direction | Interface Type |
|:---|:---|:---|:---|
| Traction Pack Bus | HV Power | Input | Terminal Connectors |
| current-sensing | 3.3V/5V DC Power | Output | PCB Trace / Rail |

---

## 5. Operational Contracts

### 5.1 Initialisation Contract
- Preconditions: HV Bus voltage must be within 85V - 400V range.
- Guarantees: Stable 3.3V/5V output after internal soft-start completion.

### 5.2 Steady-State Contract
- Continuously produces a stable 3.3V/5V DC rail for current-sensing front-end logic.
- Maintains efficiency up to 80% at full load.

### 5.3 Fault Contract
- If HV Bus is absent or low (< UVLO), output is disabled.
- Internal thermal shutdown triggers upon over-temperature.
- Output short-circuit protection limits current and restarts after fault removal.

---

## 5. Isolation & Domain Boundaries

> Only populate if this module sits on or crosses a domain boundary.

| Boundary Type | Isolation Method | Rating | Notes |
|:---|:---|:---|:---|
| Non-Isolated Step-Down | Buck Topology | 700V (MOSFET Rating) | Referenced to HV-. No galvanic isolation between input and output. |

---

## 6. Open Items

| Item | Type (Dependency / Constraint / Decision) | Status |
|:---|:---|:---|
| Precise Inductor Selection | Design Detail | To be confirmed based on final 3.3V vs 5V selection. |
| Creepage/Clearance Distances | Safety Constraint | To be validated in PCB layout. |
