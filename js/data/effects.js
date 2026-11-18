/* Biblioteka efektów – dodawaj kolejne wpisem FEA.addEffect({...}) */
FEA.addEffect({
  id: "punch-zoom", name: "Punch Zoom", program: "Oba", tags: ["zoom", "keyframes"],
  desc: "Szybkie przybliżenie na uderzeniu beatu – podstawowy akcent edita.",
  steps: [
    "Playhead na beacie → keyframe Scale = 100.",
    "4–6 klatek później: Scale = 112–115.",
    "Po 8–10 klatkach wróć do 100 (wolniej niż wejście).",
    "Resolve: Ease In and Out na keyframe’ach."
  ],
  settings: [["Scale", "100 → 115 → 100"], ["Czas", "4–6 klatek w górę, 8–10 w dół"]]
});
FEA.addEffect({
  id: "camera-shake", name: "Camera Shake", program: "Oba", tags: ["shake", "keyframes"],
  desc: "Drżenie kamery na mocnym akcencie (strzał, gol, drop).",
  steps: [
    "CapCut: Effects → wyszukaj „Shake” → wybierz wariant bez korony → przytnij do 6–10 klatek.",
    "Resolve: keyframe’y Position X/Y i Rotation co 2 klatki o losowe wartości.",
    "Zmniejszaj amplitudę do zera w ok. 10 klatek.",
    "Powiększ klip o 5–8%, aby nie pokazywać brzegów kadru."
  ],
  settings: [["Pozycja", "± 12 px"], ["Rotacja", "± 0,8°"], ["Skala zapasowa", "105–108%"]]
});
FEA.addEffect({
  id: "rgb-split", name: "RGB Split", program: "DaVinci", tags: ["glitch", "kolor"],
  desc: "Rozdzielenie kanałów R/G/B – kolorowe obrzeża na akcencie. Wersja darmowa, bez pluginów.",
  steps: [
    "Powiel klip na V1, V2, V3.",
    "Color page: w każdej kopii węzeł RGB Mixer – kopia 1 tylko kanał R, kopia 2 tylko G, kopia 3 tylko B.",
    "Edit page → Inspector → Composite Mode: **Add** dla V2 i V3.",
    "Przesuń Position X: czerwony −8 px, niebieski +8 px, zielony 0 – tylko na 3–5 klatek.",
    "CapCut: w Effects wyszukaj „RGB” / „Glitch” i użyj wariantu bez korony."
  ],
  settings: [["Przesunięcie", "± 6–10 px"], ["Composite Mode", "Add"], ["Czas", "3–5 klatek"]]
});
FEA.addEffect({
  id: "glow", name: "Glow", program: "Oba", tags: ["światło", "kolor"],
  desc: "Miękka poświata na światłach – kinowy, „śnieżny” klimat.",
  steps: [
    "Powiel klip na wyższą ścieżkę.",
    "Dodaj Gaussian Blur (Resolve: Effects → Resolve FX Blur; CapCut: Adjust / efekt Blur bez korony) o wartości 30–60.",
    "Tryb mieszania **Screen** (Resolve: Composite Mode; CapCut: Blend mode).",
    "Obniż Opacity do 30–50%."
  ],
  settings: [["Blur", "30–60"], ["Blend", "Screen"], ["Opacity", "30–50%"]]
});
FEA.addEffect({
  id: "flash-frame", name: "Flash Frame", program: "Oba", tags: ["drop", "przejście"],
  desc: "Biały błysk na dropie – akcentuje pierwsze uderzenie.",
  steps: [
    "Dodaj biały klip koloru (CapCut: Media → Library → White; Resolve: Effects → Generators → Solid Color).",
    "Połóż na V2 dokładnie na uderzeniu, długość 2–3 klatki.",
    "Keyframe Opacity: 100 → 0 w czasie błysku.",
    "Połącz z punch-zoomem i dźwiękiem impact."
  ],
  settings: [["Długość", "2–3 klatki"], ["Opacity", "100 → 0"]]
});
FEA.addEffect({
  id: "motion-blur", name: "Motion Blur (Zoom)", program: "DaVinci", tags: ["blur", "przejście"],
  desc: "Rozmycie ruchu na szybkim zoomie – maskuje cięcie.",
  steps: [
    "Zaznacz klip → Fusion page.",
    "Shift+Spacja → dodaj węzeł **Directional Blur**.",
    "Type: **Zoom**, animuj Length: 0 → 0,08 → 0.",
    "Czas rozmycia = czas zoom-transition (6–10 klatek)."
  ],
  settings: [["Type", "Zoom"], ["Length", "0 → 0,08 → 0"]]
});
