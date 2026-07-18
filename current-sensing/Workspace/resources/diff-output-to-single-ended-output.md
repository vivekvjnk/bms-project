

## Application Brief
Interfacing a Differential-Output (Isolated) Amp to a
Single-Ended Input ADC
## Ashley Kang
## Introduction
Whether you are sensing current in an industrial 3-
phase servo motor system, a battery management
system for an electric vehicle, or a photo voltaic
inverter, it is often necessary to include some sort
of safety isolation scheme. Safety-related standards
define the specific isolation requirements for the
end equipment associated with the particular design.
Various factors come into play when determining
what level of safety insulation (basic, supplemental,
or reinforced) is required depending on the type
of equipment, the voltage levels involved, and the
environment that the equipment is to be installed.
Texas Instruments offers a variety of isolated current
shunt amplifiers that are used in the previously-
mentioned applications for voltage and current shunt
sensing that meet either basic or reinforced insulation
requirements. For applications requiring reinforced
insulation, one such device is the AMC1301. The
output of the AMC1301 is a fully differential signal
centered around a common-mode voltage of 1.44 V
that can be fed directly to a stand-alone analog-to-
digital converter (ADC) as shown in Figure 1, or to
the on-board ADC found in the MSP430 and C2000
family of microcontroller devices.
## VOUTP
## VOUTN
## VDD2
## GND2
## GND1
## VINP
## VINN
## VDD1
## AMC1301
## HV+
## HV-
## To Load
## Floating
## Power Supply
3.3 V or 5.0 V
## R
## SHUNT
## Gate
## Driver
## Gate
## Driver
## ADS7263
14-Bit ADC
3.3 V or
## 5.0 V
## Reinforced Isolation
Figure 1. AMC1301 Functional Block Diagram
Embedded ADCs
Both the MSP430 and C2000 family of processors
have embedded single-ended input ADCs so the
question becomes: How do I get this differential signal
into my single-ended data converter?
The simplest way to achieve this is to use only
one output of the AMC1301 leaving the second
output floating. The down side to this design is that
only half the output voltage swing is available to
the data converter, reducing the dynamic range of
the measurement. The analog input range to the
AMC1301 is ±250 mV. With a fixed gain of 8.2, the
VOUTN and VOUTP voltages are ±1.025 V centered
around the 1.44-V common-mode output as shown in
Figure 2. Differentially, the output voltage is ±2.05 V.
## Figure 2. Differential Output Voltage
The addition of a differential to single-ended amplifier
output stage, shown in Figure 3, allows the full output
range of the AMC1301 to be provided to the ADC.
Figure 3. Differential to Single-Ended Output
www.ti.com
## SBAA229B – APRIL 2017 – REVISED JUNE 2023
## Submit Document Feedback
Interfacing a Differential-Output (Isolated) Amp to a Single-Ended Input ADC1
## Copyright © 2023 Texas Instruments Incorporated

Assuming a full scale sine wave of ±250 mV is applied
at VIN; the internal gain of the AMC1301 provides
2.05 Vpk-pk outputs at points VOUTP and VOUTN
which are 180° out of phase. The difference between
these signals, VODIF, is 4.1 Vpk-pk. When R1 = R4
and R2 = R3, Equation 1 shows the transfer function
of the output stage.
## VOUT = VOUTP×
## R4
## R3
## −VOUTN×
## R1
## R2
## +VCM
## (1)
With equal value resistors for R1 through R4 in
Equation 1 and VCM set to 2.5 V,Equation 2 reduces
to:
## VOUT = VOUTP−VOUTN+VCM
## (2)
The plots of Figure 4 show the input voltage and
output voltages of the AMC1301 along with the output
voltage of the final differential to single-ended output
stage. Note that the differential voltage of ±2.05 V is
transposed to a single-ended signal from 0.5 to 4.5 V.
Figure 4. Single-Ended Output Voltage
Depending on the input voltage range of the ADC,
gain or attenuation can be incorporated into the
differential to single-ended stage to adjust the output
swing. The output common-mode voltage can be
adjusted to fit the input needs of the ADC as well.
## Design Example
The ADC12 found on the MSP430 devices have
an input voltage range of 0–2.5 V when using the
internal voltage reference. Using the VOUTP from the
AMC1301 can provide the ADC12 with an input signal
ranging from 0.415 V to 2.465 V, well within the input
range of the converter while only using half the input
range of the AMC1301. As Figure 5 shows, using a
differential to single-ended amplifier configuration with
a gain of 0.5 and common mode voltage of 1.25 V, the
entire voltage range of the AMC1301 can be applied
to the ADC12.
Figure 5. Scaled Differential to Single-Ended
## Output
## Alternative Device Recommendations
The AMC1100 or AMC1200 provide basic isolation
with similar performance to the AMC1301 at a lower
price point. Forthe TLV170 provides this option for
applications that require a bipolar output.
## Table 1. Alternative Device Recommendations
DeviceOptimized ParameterPerformance Trade-Off
AMC1100Galvanic Isolation up to 4250
## V
## PEAK
## Lower Transient Immunity
AMC1200Galvanic Isolation up to 4250
## V
## PEAK
Basic Isolation versus
## Reinforced
TLV170Bi-polar operation to ±18 VHigher input bias current
## Conclusion
While it is possible to use a single output of the
AMC1301 to drive a single-ended ADC, adding a
differential to single-ended op-amp stage at the output
ensures the target application has the largest possible
dynamic range.
## Related Documentation
1.Low-Drift, Low-Side Current Measurements for
Three-Phase Systems
2.Precision Current Measurements on High Voltage
## Power Supply Rails
www.ti.com
2Interfacing a Differential-Output (Isolated) Amp to a Single-Ended Input ADCSBAA229B – APRIL 2017 – REVISED JUNE 2023
## Submit Document Feedback
## Copyright © 2023 Texas Instruments Incorporated

## IMPORTANT NOTICE AND DISCLAIMER
TI PROVIDES TECHNICAL AND RELIABILITY DATA (INCLUDING DATA SHEETS), DESIGN RESOURCES (INCLUDING REFERENCE
DESIGNS), APPLICATION OR OTHER DESIGN ADVICE, WEB TOOLS, SAFETY INFORMATION, AND OTHER RESOURCES “AS IS”
AND WITH ALL FAULTS, AND DISCLAIMS ALL WARRANTIES, EXPRESS AND IMPLIED, INCLUDING WITHOUT LIMITATION ANY
IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT OF THIRD
## PARTY INTELLECTUAL PROPERTY RIGHTS.
These resources are intended for skilled developers designing with TI products. You are solely responsible for (1) selecting the appropriate
TI products for your application, (2) designing, validating and testing your application, and (3) ensuring your application meets applicable
standards, and any other safety, security, regulatory or other requirements.
These resources are subject to change without notice. TI grants you permission to use these resources only for development of an
application that uses the TI products described in the resource. Other reproduction and display of these resources is prohibited. No license
is granted to any other TI intellectual property right or to any third party intellectual property right. TI disclaims responsibility for, and you
will fully indemnify TI and its representatives against, any claims, damages, costs, losses, and liabilities arising out of your use of these
resources.
TI’s products are provided subject to TI’s Terms of Sale or other applicable terms available either on ti.com
or provided in conjunction with
such TI products. TI’s provision of these resources does not expand or otherwise alter TI’s applicable warranties or warranty disclaimers for
TI products.
TI objects to and rejects any additional or different terms you may have proposed. IMPORTANT NOTICE
## Mailing Address: Texas Instruments, Post Office Box 655303, Dallas, Texas 75265
## Copyright © 2023, Texas Instruments Incorporated