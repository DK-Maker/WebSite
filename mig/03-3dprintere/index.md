# 3D Printere

Lidt om 3d printere generelt.. FDM / Resin

## Firmware - Klipper

På alle mine 3D printere køre jeg [Klipper](https://www.klipper3d.org) som er en firmware skrevet i både C++ og Python.

Hele logikken / beregningen foregår i en [Raspberry Pi](https://www.raspberrypi.org), og printerens controller board har kun ansvaret for at bruge IO porte, samt styre stepper drivere.

Dette er anderledes end f.eks. [Marlin Firmware](https://marlinfw.org) hvor alle beregninger laves direkte på controller boardet.

Af andre foredele ved Klipper kan nævnes
- Hastighed, ved man bruger en Raspberry får man markant bedre performance
- Controller er mindre væsentlig da Raspberry agere CPU, så selv de gamle 8bit boards vil virke fint med et større performance løfte
- Tuning / Calibering er rigtig nemt med f.eks.
  - [Preasure Advance](https://www.klipper3d.org/Pressure_Advance.html) - Sørger for at man ikke overextruder/under ved hjørner
  - [Input Shaper](https://www.klipper3d.org/Resonance_Compensation.html) - Forebygger Ringing/Ghosting ved højere hastigheder
  - [Bed Level](https://www.klipper3d.org/Bed_Level.html) - Sikre dig et godt 1. lag

Jeg har lavet en hel dedikeret [Klipper Config](/mig/03-3dprintere/klipperconfig) sektion til min konfiguration