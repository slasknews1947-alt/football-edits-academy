FEA.addLesson({
  id: "m06-l01", module: "m06",
  title: "Zoom transition z motion blur i camera shake",
  program: "Oba", duration: 35, level: "Średni",
  explain: "**Zoom transition** to najpopularniejsze przejście w football editach: koniec klipu A gwałtownie się przybliża (z rozmyciem), a klip B zaczyna z przybliżenia i wraca do normy. **Motion blur** maskuje szybki ruch, a **camera shake** dodaje energii na akcencie. Całość robisz keyframe’ami – bez płatnych wtyczek.",
  steps: [
    "Zostaw ok. 6–10 klatek zapasu na końcu klipu A i na początku klipu B (nie tnij ich co do klatki).",
    "**Klip A:** keyframe Scale = 100 na 8 klatek przed cięciem, Scale = 150 na ostatniej klatce. Easing: Ease In (Resolve) lub dodatkowy keyframe pośredni (CapCut).",
    "**Klip B:** keyframe Scale = 150 na pierwszej klatce, Scale = 100 po 8 klatkach (Ease Out). Środek obu ruchów to punkt cięcia.",
    "**Motion blur (Resolve):** zaznacz klip → Fusion page → dodaj węzeł **Directional Blur** (Shift+Spacja → szukaj) → Type: **Zoom** → animuj Length 0 → 0,08 → 0 w czasie przejścia.",
    "**Motion blur (CapCut):** Effects → Video effects → wyszukaj „Blur” / „Zoom” – użyj dowolnego **bez ikony korony** i skróć go do długości przejścia.",
    "**Camera shake – CapCut:** Effects → wyszukaj „Shake” (darmowy wariant) i nałóż na 6–10 klatek akcentu.",
    "**Camera shake – Resolve:** animuj Position X/Y i Rotation w Inspectorze: co 2 klatki zmieniaj wartości o losowe ±12 px i ±0,8°, a amplitudę zmniejszaj do zera (wygaszenie ok. 10 klatek)."
  ],
  settings: [
    ["Długość przejścia", "6–10 klatek (0,2–0,33 s przy 30 fps)"],
    ["Scale w zoomie", "100 → 150%"],
    ["Directional Blur (Fusion)", "Type: Zoom · Length 0,05–0,1"],
    ["Shake – pozycja", "± 10–15 px"],
    ["Shake – rotacja", "± 0,5–1°"],
    ["Shake – interwał", "co 2 klatki, wygaszenie ~10 klatek"]
  ],
  example: "Przejście z dryblingu do strzału: koniec pierwszego klipu mocno się przybliża z rozmyciem, drugi klip „odpływa” do normalnego kadru, a w momencie uderzenia piłki kamera krótko drży i uspokaja się.",
  task: "Zrób dwa zoom-transitions między trzema klipami, dodaj motion blur do jednego z nich oraz camera shake na wybranym akcencie. Zgraj punkt cięcia z beatem.",
  checklist: [
    "Zoom A i zoom B mają ten sam punkt cięcia",
    "Przejście trwa max 10 klatek",
    "Dodany motion blur (efekt darmowy)",
    "Camera shake wygasa, nie trwa cały czas",
    "Cięcie wypada na beacie"
  ]
});
