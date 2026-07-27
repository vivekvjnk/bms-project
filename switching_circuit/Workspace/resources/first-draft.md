## Architectural Summary

| Parameter / Feature | Value / Design Choice | Engineering Justification |
| --- | --- | --- |
| **System Voltage / Power** | **72V Nominal (84V Peak), 3.6kW** | Matches 20S LiPo voltage limits; 100V MOSFET rating provides ~16% voltage margin above peak charge. |
| **Continuous Rating** | **50A Continuous** | Yields ~12.5A per parallel device, keeping thermal dissipation extremely low. |
| **Short-Circuit Rating** | **500A Peak (10ms trip delay)** | Yields 125A per device during a fault, sitting comfortably within the 10ms SOA boundary line. |
| **Switching Topology** | **Low-Side, Common-Drain, Back-to-Back** | Allows independent control of charge and discharge paths while utilizing low $R_{DS(on)}$ N-channel silicon. |
| **FET Matrix** | **4 DSG + 4 CHG (8 Total)**<br>

<br>100V, 120A, $R_{DS(on)} \approx 3.9\text{--}4.0\text{ m}\Omega$ | Lowers total bank resistance ($R_{DS(on)(hot)} \approx 1.5\text{ m}\Omega$) to minimize conduction losses. |
| **Transient Protection** | **Dedicated RC Snubbers + TVS Diodes** | Clamps inductive voltage spikes ($L \cdot \frac{di}{dt}$) generated during rapid 500A short-circuit turn-off events. |
| **Gate Drive Circuitry** | **Optocoupler-Isolated Drive** | Electrically isolates low-voltage microcontroller logic from high-voltage switching transients and gate noise. |

---

## Engineering & Thermal Verification

### 1. Steady-State Conduction Losses (50A Continuous)

* **Current per MOSFET:** $50\text{A} / 4 = 12.5\text{A}$
* **Hot Resistance ($T_j \approx 100^\circ\text{C}$):** $4.0\text{ m}\Omega \times 1.5 = 6.0\text{ m}\Omega$
* **Power Dissipation per MOSFET:** $(12.5\text{A})^2 \times 6.0\text{ m}\Omega = 0.9375\text{W}$
* **Total Bank Dissipation (DSG or CHG):** $4 \times 0.9375\text{W} \approx 3.75\text{W}$

> **Thermal Verdict:** At **~0.94W per device**, the surface-mount TO-263 packages will run very cool on heavy PCB copper, staying well under the standard 1.5W–2.0W thermal envelope without requiring an external heatsink.

### 2. Fault Endurance (500A Short Circuit, 10ms Window)

* **Fault Current per MOSFET:** $500\text{A} / 4 = 125\text{A}$
* **SOA Limits:** From the datasheet Safe Operating Area (SOA) curves, at $V_{DS} \approx 72\text{V}\text{--}84\text{V}$, a 10ms pulse can tolerate peak transient pulses above this operating point.

> **SOA Verdict:** A 125A fault current per MOSFET for 10ms falls within the device's transient power envelope.

### 3. Transient & Isolation Strategy

* **RC Snubbers & TVS Diodes:** When shutting down a 500A fault current within microseconds, trace inductance will create severe $V = L \cdot \frac{di}{dt}$ voltage spikes. The local TVS diodes limit this voltage surge below the 100V drain-source breakdown threshold, while the RC snubbers damp high-frequency ringing across the switches.
    - 100V, 600W SMB TVS diode 
    - RC snubber
* **Optocouplers:** Provide clean signal isolation between the BMS controller and the low-side power ground plane, protecting sensitive control ICs from ground bounce during extreme current transients.

