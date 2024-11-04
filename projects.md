[Go back to home](README.md)

# Project ideas:

## Uncategorised
1. Design and build DC variable load device
1. Design and build VSD - multiphase sine wave simulator
1. Develop a multi-purpose automation product for various industries enabling simple end-user setup and SCADA system for any simple automation applications
1. Design and build an efficient Vertical Axis Wind Turbine (for 1kW or so)
1. Design and 3D print / cast a supersonic rocket nozzle
1. Design and build an independently driven wheel hybrid 4x4 from scratch (road legal) - requires a lot of tooling for turning, milling, CNC cutting, casting, and heat-treatment - not realistic, but a multi-year project dream
1. Investigate SOFC - cheap build - efficiency compromise
1. Flow meter using only power and frequency values of a pump (VSD) - simple to calibrate


# Electronic
* Variable DC load - capable of MPPT, up to 10A, and up to 100 V, Maximum power limits of 300 W - 500 W - transistor and heat sink limits, active temperature monitoring on transistors, active load balancing
* True Sinewave inverter - up to 350 W or so.
  - True sinewave inverter - takes 12-24 V
  - Accept additional DC source
  - High-speed feedback control on output voltage
  - High-speed charger - settable battery specs

* DC load balancer:
  -  Output connected to inverter
  -  Priority balance multiple DC sources with MPPT tracking optional
  -  Consider battery as DC input?
 
* Affordable solar irradiance sensor
  - Short-circuit a small solar panel 


# Electro-mechanical
* Vertical Axis Wind Turbine VAWT, 250 - 500 W
  - Braking - electrically? - Transistors? - Resistors? + mechanical
  - DC generator
  - Monitor power profile: Power at wind speed and rotor RPM, used for quick MPPT reference.
  - Simulate power profile: CFD simulation of turbine at ambient conditions - specifically in Cape Town
* Permanent magnet reluctance motor (few kW)
  - FEM simulation on EMF during design
  - use VSD to drive - power requirement as reference (similar to a car)
* EMF shock absorber/actuator
  - See final year project for references
  - Design for go-cart
  - Use regen? Dissipate into a variable load?- changing stiffness.



# Stuff to learn and implement (Computing, homelab, etc):
## Learn:
* Linux - get comfortable with CLI
* Docker - get comfortable with CLI
* Proxmox
* Web server
* Learn networking



## Homelab stuff, etc., and check-out
### Media
* NAS
* Plex and/or Jellyfin
* Handbrake
* QBitTorrent
	
	
### Storage:
* Nextcloud
* SMB	
* Onedrive backup
* Google Drive backup?
* Some cloud backup?
* Some Raspberry Pi remote backup solution - for critical data only. Minimal media	
	

### Services:
* Webserver - for website tests
* Quoting software - etc.	
* Landing page - with status checks
* NVR
* Some cashing? for Steam perhaps?
* Project Management - Open Project
* Colab Wiki - Outline - instead of notion - or look at alternatives
	
	
### Check out:
* Spreadsheet alt - Grist
* Mealie
