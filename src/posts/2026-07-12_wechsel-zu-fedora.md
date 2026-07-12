---
# Basis-Metadaten
title: "Systemwechsel: Wechsel zu Fedora"
description: "Ein persönlicher Eintrag über meinen Wechsel von Linux Mint zu Fedora Workstation"
pubDate: 2026-07-12

# Medien
image:
  url: ""
  alt: ""

# Kategorien & Stimmung
tags:
  - post
  - persönlich
  - tech
  - journal
  - personal_log

mood: "Hungrig"

# Sonstiges
music:
  title: "Echoes of Time"
  artist: "Cliamp Synthwave Stream"
  url: "http://radio.cliamp.stream/synthwave/stream"
---

Draußen scheint die Sonne, drinnen ist es kühl.  
Der vierte Chai des Tages steht bereit.  
Ich habe schon zu viel gesessen.

**Hauptfokus:** Wechsel zu Fedora

## Beobachtungen
Ein Wechsel von Linux Mint zu Linux Fedora Workstation ist erfolgt.  
Die Benutzeroberfläche ist mithilfe von Erweiterungen angepasst.  
Aktuelles Theme: Dolmenwood TTRPG.  
Essentielle Software ist installiert.  
Das System und seine Anwendungen laufen jetzt fehlerfrei.

### Beobachtungspunkte: Linux Mint Cinnamon
Beim Herunterfahren trat ein Bios/UEFI-bezogener Fehler auf.  

    `ACPI BIOS Error (bug): Could not resolve symbol [\_TZ.ETMD], AE_NOT_FOUND (xxxxxxxx/psargs-332)`  

    `ACPI Error: Aborting method \_SB.IETH._OSC due to previous error (AE_NOT_FOUND) (xxxxxxxx/psargs-529)`

Der Fehler war nicht kritisch, jedoch störend.  
Verschlüsseln der Festplatte wurde bei der Installation versäumt.  
Das Theming (Ricing) war befriedigend, jedoch inkonsistent.

Die vorliegenden Probleme waren minimal.  
Insgesamt war Linux Mint Cinnamon sehr angenehm.  
Interesse an anderen Distributionen wurde dennoch geweckt.  

### Beobachtungspunkte: Fedora Workstation
Bei der initialen Installation traten kaum Schwierigkeiten auf.  
Die Overview war ungewohnt.  
Es wurden Erweiterungen installiert und zahlreiche Anpassungen gemacht.  

Relevante Erweiterungen:  
- **ArcMenu** > Darstellung und Anpassung eines klassischen Menüs.
- **Dash To Dock** > Macht aus dem Dashboard ein anpassbares Dock.
- **Extension List** > Zeigt installierte Erweiterungen in Menübar an.
- **User Themes** > Erlaubt Verwendung von Themes.

> Erweiterungen eins und zwei verfügen über Funktionalitäten, die Overview zu deaktivieren.

Die Overview ist nun nicht mehr aktiv, die Navigation ruhiger.

<figure>
  <div>
  <img src="/images/blog/2026-07/Screenshot_fedora_desktop.png" />  
  </div>
  <figcaption>Screenshot des aktuellen Desktop</figcaption>
</figure>

<figure>
  <div>
  <img src="/images/blog/2026-07/Screenshot_fedora_cliamp+files.png" />  
  </div>
  <figcaption>Screenshot von Cliamp im Kitty-Terminal und Dateien</figcaption>
</figure>

<figure>
  <div>
  <img src="/images/blog/2026-07/Screenshot_fedora_codium.png" />  
  </div>
  <figcaption>Screenshot von VSCodium mit dem Theme "Maron Theme: Moon Stars [Operator]"</figcaption>
</figure>

## Abweichungen
Die Installation von Drucker und Scanner erledigten sich von selbst.  
Die Einrichtung von Steam erwies sich als problematisch.  
Ursache waren die Abwesenheit von Nvidia-Treiber, fehlendem Kernel und automatischer Fallback auf Noveau anstelle von Nvidia.

## Status
Alles ist bereit.  