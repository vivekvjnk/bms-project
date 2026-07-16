# Module Boundary: low-voltage-power-supply

> **System:** BMS (Battery Management System)  
> **Document Version:** 1.0  
> **Source Documents Ingested:** [BMS-design.md, ucc28750-datasheet.md, ucc28750-eval-board.md]  
> **Last Updated:** 2025-05-14

---

## 1. Identity

| Field | Value |
|:---|:---|
| **Module Name** | low-voltage-power-supply |
| **Role** | Converts input power (external 12V auxiliary or low-voltage pack bus) into regulated DC rails (12V, 5V, 3.3V, 1.2V) to power the BMS logic and communication modules. |
| **Domain / Zone** | Low-Voltage (LV) Domain |
| **Instantiation** | Singleton |
| **Primary Component(s)** | UCC28750 (Current-Mode Flyback Controller) |

---


## 2. Port Definition & Pin Mapping
> This section serves as the "Physical Truth." Every resource consumed or produced must be assigned to a specific port here.

### 2.1 Domain: Primary / Input Side
| Port ID | Direction | Signal Type | Voltage Level | Mapped Resource | Function & Logic |
|:---|:---|:---|:---|:---|:---|
| **P1.1** | Input | Power | 12V / 64V / 85V-265V RMS | VIN+ | Main DC or AC rectified input. |
| **P1.2** | Passive | Ground | Primary GND | VIN- / GND | Primary side return reference. |
| **P1.3** | Input | Analog | Variable | FB | Voltage feedback from secondary side (via opto-coupler). |
| **P1.4** | Input | Analog | 0V - 5V | FLT | Fault sensing (Brownout / OTP / OVP). |
| **P1.5** | Input | Analog | 0V - 5V | CS | Primary-side current sense. |

### 2.2 Domain: Secondary / Output Side
| Port ID | Direction | Signal Type | Voltage Level | Mapped Resource | Function & Logic |
|:---|:---|:---|:---|:---|:---|
| **P2.1** | Output | Power | 12V DC | VOUT_12V | Primary 12V regulated rail (2A capability). |
| **P2.2** | Output | Power | 5V DC | VOUT_5V | Regulated rail for TMS57012 and peripherals. |
| **P2.3** | Output | Power | 3.3V DC | VOUT_3V3 | Regulated rail for TMS57012 and peripherals. |
| **P2.4** | Output | Power | 1.2V DC | VOUT_1V2 | Regulated rail for TMS57012 core. |
| **P2.5** | Passive | Ground | LV GND | GND_SEC | System-level digital ground reference. |


## 3. Consumed Resources _(what this module needs)_

For each entry: name the resource, classify it, specify its requirement, and state whether the provider is known or unresolved.

### 3.1 Power
| Rail / Supply | Voltage | Max Current | Required Quality | Provider (module or external) |
|:---|:---|:---|:---|:---|
| External Aux Supply | 12V DC | TBD | Stable | External (Vehicle/System) |
| Low-Voltage Pack Bus | 64V DC | TBD | Filtered | External (Battery Pack) |

### 3.2 Signals & Data
| Signal / Bus | Direction | Protocol / Format | Timing Constraint | Provider |
|:---|:---|:---|:---|:---|
| Feedback Signal | Input | Opto-isolated Analog | Fast loop response | Output Stage (Internal) |

### 3.3 Clock & Synchronisation
| Clock / Trigger | Frequency / Period | Edge / Polarity | Provider |
|:---|:---|:---|:---|
| Switching Frequency | 65kHz / 100kHz | N/A | Internal (UCC28750) |

### 3.4 Physical & Environmental
| Constraint | Specification | Notes |
|:---|:---|:---|
| Connector / Interface | Terminal Blocks / Pins | For 12V/64V input and logic rail outputs. |
| Thermal dissipation | Natural Convection | Protection via internal thermal shutdown. |
| Creepage / Clearance | 1000V DC (Reinforced) | Required for isolation between primary and secondary domains. |

### 3.5 State & Configuration
| Config Item | Type | Who sets it | When |
|:---|:---|:---|:---|
| Switching Frequency | Pin Config (Variant) | Designer | Part Selection (65k/100k) |
| Protection Response | Pin Config (Variant) | Designer | Part Selection (Auto-restart/Latch) |

### 3.6 Unresolvable Dependencies _(system boundary surface)_
> Resources in the above sections whose provider is **outside the system** — cannot be satisfied by any other module.

| Resource | Class | External Source | Specification |
|:---|:---|:---|:---|
| External Aux / Pack Input | Power | Vehicle 12V / Battery Bus | Source of all logic power. |

---

## 4. Produced Resources _(what this module offers)_

### 4.1 Power Outputs
| Rail | Voltage | Max Current | Load Regulation | Consumer(s) |
|:---|:---|:---|:---|:---|
| 12V Rail | 12V DC | 2.0 A | +/- 5% | communication-bridge, auxiliary loads |
| 5V Rail | 5V DC | TBD | High stability | microcontroller-module, current-sensing |
| 3.3V Rail | 3.3V DC | TBD | High stability | microcontroller-module, current-sensing, communication-bridge |
| 1.2V Rail | 1.2V DC | TBD | High stability | microcontroller-module (Core) |

### 4.2 Signals & Data Outputs
| Signal / Bus | Direction | Protocol / Format | Update Rate | Consumer(s) |
|:---|:---|:---|:---|:---|
| N/A | | | | |

### 4.3 Capability Outputs
> Actions this module can execute that affect system state — protection trips, mode switches, actuation, interrupts.

| Capability | Trigger Condition | Effect on System | Consumer(s) |
|:---|:---|:---|:---|
| Logic Power Supply | Input voltage present | Enables system boot and operation. | All LV Modules |
| Power Fault Detection | OPP / OSC / OVP | Disables power output to protect logic. | All LV Modules |

### 4.4 Physical Interfaces Offered
| Interface | Type | Mating Requirement |
|:---|:---|:---|
| Logic Power Bus | PCB Rails | Distribution to other modules. |

---

## 4. Direct Connections

> Flat list of modules this module is **directly** coupled to. No transitive hops.

| Connected Module | Resource Exchanged | Direction | Interface Type |
|:---|:---|:---|:---|
| microcontroller-module | 5V, 3.3V, 1.2V DC Power | Output | PCB Trace |
| communication-bridge | 12V, 3.3V/5V DC Power | Output | PCB Trace |
| current-sensing | 3.3V/5V DC Power (Cold Side) | Output | PCB Trace |
| External 12V Aux / Pack Bus | 12V / 64V DC Power | Input | Terminal Connectors |

---

## 5. Operational Contracts

### 5.1 Initialisation Contract
- Preconditions: Input voltage (12V or 64V) must be within the UVLO/OVLO range.
- Guarantees: Stable 12V, 5V, 3.3V, and 1.2V rails within 4ms (soft-start).

### 5.2 Steady-State Contract
- Continuously produces regulated DC rails for all logic-domain components.
- Maintains efficiency > 89% at nominal loads (per EVM).

### 5.3 Fault Contract
- **Under-Voltage Lockout (UVLO):** Shuts down if input falls below threshold.
- **Over-Power Protection (OPP):** Limits output power to safe levels.
- **Output Short-Circuit (OSC):** Enters auto-restart or latching mode.
- **Thermal Shutdown:** Disables switching if internal temperature exceeds limits.

---

## 5. Isolation & Domain Boundaries

> Only populate if this module sits on or crosses a domain boundary.

| Boundary Type | Isolation Method | Rating | Notes |
|:---|:---|:---|:---|
| Galvanic Isolation | Isolated Flyback Transformer | 1000V DC (suggested) | Separates the external/primary power source from the internal logic ground. |

---

## 6. Open Items

| Item | Type (Dependency / Constraint / Decision) | Status |
|:---|:---|:---|
| Specific 5V/3.3V/1.2V Regulators | Design Detail | Choice of LDOs or secondary buck converters for derived rails. |
| Input Voltage for 64V case | Constraint | Verification of UCC28750 performance at 64V DC input. |
| Max current for 5V/3.3V/1.2V rails | Constraint | Total power budget for TMS57012 and peripherals to be finalized. |
