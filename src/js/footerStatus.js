(function () {
  // Zufällige Zahl
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Balken je nach Prozentwert
  function getBar(pct) {
    if (pct <= 20)  return "░░░░"; 
    if (pct <= 40)  return "█░░░";   
    if (pct <= 80)  return "███░"; 
    return                 "████";        
  }

  const sysStates = ["OK", "OK", "OK", "IDLE", "WARN", "ERR"];

  function getSys() {
    return sysStates[rand(0, sysStates.length - 1)];
  }

  // DOM-Update beim Laden
  document.addEventListener("DOMContentLoaded", function () {
    const sigEl = document.getElementById("sig-display");
    const sysEl = document.getElementById("sys-display");

    if (sigEl) {
      const pct = rand(1, 100);
      sigEl.textContent = "[SIG: " + getBar(pct) + " " + pct + "%]";
    }

    if (sysEl) {
      const sys = getSys();
      sysEl.textContent = sys;

      if (sys === "WARN") sysEl.classList.add("sys-warn");
      if (sys === "ERR") sysEl.classList.add("sys-err");
    }
  });
})();