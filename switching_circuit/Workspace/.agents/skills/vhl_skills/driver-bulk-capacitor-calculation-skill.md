---
name: gate-driver-bulk-capacitance-calculator
description: Calculates the local bulk decoupling capacitance for MOSFET gate drivers. Use this skill when designing power electronics or battery management systems to ensure the driver power supply sustains peak transient currents without excessive voltage droop.
---

# Gate Driver Bulk Capacitance Calculator

## Instructions

When tasked with sizing the decoupling capacitors for a gate driver circuit, follow this calculation workflow:

1. **Determine Total Gate Charge**
Identify the total gate charge ($Q_g$) for a single MOSFET from its datasheet. Multiply this by the number of MOSFETs driven in parallel by the single driver channel to find the total charge ($Q_{total}$).
2. **Define Acceptable Voltage Droop**
Determine the maximum allowable voltage drop ($\Delta V_{droop}$) on the gate driver's supply rail ($V_{CC}$ or $V_{DRV}$) during the switching transient. A standard engineering rule of thumb is 2% to 5% of the nominal drive voltage.
3. **Calculate Theoretical Minimum Capacitance**
Use the charge-voltage relationship to find the absolute minimum capacitance required to supply the transient charge without exceeding the allowable droop:

$$C_{min} = \frac{Q_{total}}{\Delta V_{droop}}$$


4. **Apply Real-World Safety Multiplier**
Multiply $C_{min}$ by a factor of 10. This accounts for the DC bias capacitance loss inherent to ceramic capacitors (especially MLCCs like X7R/X5R under applied voltage), temperature drift, and PCB trace resistance.
5. **Assign High-Frequency Bypass**
Always pair the calculated bulk capacitor with a smaller, low-ESR ceramic capacitor (typically $0.1\,\mu\text{F}$ / $100\text{ nF}$) placed as physically close to the driver's power pins as possible to absorb high-frequency noise and lower total loop impedance.

## Examples

**Scenario: 4 Parallel MOSFETs in a Stackable BMS Switch**

* **MOSFET $Q_g$:** $90\text{ nC}$ per FET
* **Number of parallel FETs:** 4
* **Gate Drive Voltage ($V_{DRV}$):** $15\text{ V}$

**Workflow Execution:**

1. **Total Gate Charge:** $Q_{total} = 4 \times 90\text{ nC} = 360\text{ nC}$
2. **Voltage Droop Limit:** Choosing a conservative 2% droop on a $15\text{ V}$ supply yields $\Delta V_{droop} = 0.3\text{ V}$.
3. **Minimum Capacitance:** $C_{min} = \frac{360\text{ nC}}{0.3\text{ V}} = 1.2\,\mu\text{F}$.
4. **Real-World Multiplier:** $1.2\,\mu\text{F} \times 10 = 12\,\mu\text{F}$.
5. **Final Component Selection:** Select a **$10\,\mu\text{F}$ or $15\,\mu\text{F}$ X7R ceramic capacitor** (rated for $25\text{ V}$ or $50\text{ V}$) for bulk decoupling, paired with a **$0.1\,\mu\text{F}$ X7R ceramic capacitor** for high-frequency bypass.