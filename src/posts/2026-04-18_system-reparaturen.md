---
# Basis-Metadaten
title: "Systemupdate: Starlog GUI"
description: ""
pubDate: 2026-04-18

# Medien
image:
  url: "/images/blog/2026-04/JS_footerStatus.png"
  alt: "Screenshot of footerStatus.js"

# Kategorien & Stimmung
tags:
  - post
  - persönlich
  - journal
  - tech

mood: "Faul"

# Sonstiges
music:
  title: "Orbit Capture"
  artist: "Moebius FM"
  url: "https://youtu.be/7FtCRl0io9E"

draft: false
---

Mittags. Der Brownie ist gegessen.  
Updates der Graphical User Interface des Starlogs vorgenommen.

**Fokus:** Report.

## Update 1/3 - Cursor und Favicon

Der Cursor wurde angepasst.  


<figure>
<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; justify-items: center;">
<img src="../../images/cursor1.gif" style="width: 32px;"/> 
<img src="../../images/cursor2.gif" style="width: 32px;"/>
<img src="../../images/favicon.png" style="width: 32px;"/>
</div>
</figure>
<figure>

## Update 2/3 - Farbmodi

Es wurden alternative Farbmodi implementiert.  
Die Optionen sind Gold (Standard), Weiß und Grün.  
Auswahlmöglichkeiten befinden sich rechts oben im Header.

<figure>
<div>
<img src="/images/blog/2026-04/choose-a-color.png">
</div>
<figcaption>Screenshot: header</figcaption>
<pre>
  &lt;button onclick="setTheme('default')"&gt;[0]&lt;/button&gt;
  &lt;button onclick="setTheme('theme-white')"&gt;[1]&lt;/button&gt;
  &lt;button onclick="setTheme('theme-green')"&gt;[2]&lt;/button&gt;
</pre>
  <figcaption>Quellcode</figcaption>
</figure>

## Update 3/3

Es lag ein Fehler in den Systemanzeigen vor.  
Die Signalanzeige [SIG] sowie Systemstatus [SYS] waren statisch.  

Das Problem konnte mithilfe von JavaScript behoben werden.  
Die Statusanzeige passt sich nun automatisch an die Systeme an.

<figure>
<div>
<img src="/images/blog/2026-04/screenshot_footer.png" />
  </div>
  <figcaption>Screenshot: footer</figcaption>
</figure>

<figure>
  <div>
  <img src="/images/blog/2026-04/JS_footerStatus.png" />  
  </div>
  <figcaption>Screenshot: footerStatus.js</figcaption>
</figure>

## Status

Systems up to date.  
No new updates planned at this point.
