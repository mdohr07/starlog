---
title: "Systemwechsel: Linux Mint Cinnamon"
description: "Ein Logeintrag über die Migration von Windows 11 zu Linux Mint Cinnamon mit Beobachtungen."
pubDate: 2026-03-30
slug: wechsel-zu-linux
tags: 
  - post
  - persönlich
  - reflexion
mood: ""
music:
  title: "Voyage Voyage"
  artist: "Sirenia"
  url: "https://youtu.be/XVFRnepLO4Q"
---


Abends mit Bier. Draußen ist es noch hell. Die Rollos sind unten.

## Hauptfokus: Wechsel zu Linux

Migration von Windows 11 zu Linux Mint durchgeführt.  
Die Benutzeroberfläche ist angepasst.  
Aktuelles Theme: *Alien the roleplaying game*, Türkis und Dunkelgrau.  
Essentielle Software ist installiert.  
System läuft einwandfrei.  

### Beobachtungspunkte: Windows 11

Der Bildschirm flackerte, der Grund bleibt unbekannt.  
Der Speicher konstant am Limit. Anzahl und Größe von Apps als Hauptgrund von System diagnostiziert.  
Windows-native Applikationen und Hintergrundprozesse als eigentliche Ursache erkannt.  

Weiteres:  
- Microsoft führt KI als Standard in OS ein.  
- Snapshots durch KI auf Windows-Systemen bevorstehend. Bedenklich.  

### Beobachtungspunkte: Linux Mint

Initiale Installation reibungslos.  
Schritt eins: Anpassung der Benutzeroberfläche.  
Spektrum an Möglichkeiten: angenehm.  
Nutzung des Terminals erhöht.  
Clip Studio Paint sieht Betrieb auf Linux Systemen nicht vor.   
Ein Installationsversuch wurde nicht gestartet. 

<img src="/images/blog/2026-03/current-linux-setup.png" />

#### Abweichungen

1. Fehlermeldungen beim Herunterfahren:  
    `ACPI BIOS Error (bug): Could not resolve symbol [\_TZ.ETMD], AE_NOT_FOUND (xxxxxxxx/psargs-332)`  

    `ACPI Error: Aborting method \_SB.IETH._OSC due to previous error (AE_NOT_FOUND) (xxxxxxxx/psargs-529)`
2. Warnung mit fehlerhaft anmutenden RGB-Werten bei Browserstart via Terminal
3. Server-Vebindungsfehler trotz WiFi-Konnektivität

Punkt zwei beruhte auf unvollständigem Icon-Pack. Das Entfernen des Icon-Packs löste das Problem.  
Punkt drei konnte nach mehreren Stunden auf ein fehlendes Paket zurückgeführt werden.  
Die nachträgliche Installation des Pakets löste den Verbindungsfehler. Punkt eins war dadurch ebenfalls gelöst.  

### Abgleich / Muster

Das neue System läuft stabil. Anpassungsmöglichkeiten spiegeln persönliche Präferenzen wider.  
Seit Systemwechsel sind 364,4GB mehr verfügbar.  

**Status:** Treiberinstallation für Drucker und Scanner ausstehend.  

<img src="/images/blog/2026-03/voyage-voyage.png" />