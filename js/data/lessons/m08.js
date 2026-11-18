FEA.addLesson({
  id: "m08-l01", module: "m08",
  title: "Cinematic grade: kontrast, teal & orange, winieta",
  program: "DaVinci", duration: 35, level: "Średni",
  explain: "**Color grading** nadaje edytowi spójny, filmowy wygląd. Pracuj zawsze w kolejności: **1) wyrównaj ekspozycję i balans bieli, 2) dodaj kontrast, 3) nadaj look kolorystyczny, 4) winieta**. Każdy etap w osobnym węźle – łatwo cofniesz zmiany.",
  steps: [
    "Przejdź na **Color page**. Utwórz serię 4 węzłów szeregowo (Alt+S): **01 Balance → 02 Contrast → 03 Look → 04 Vignette**.",
    "**01 Balance:** ustaw ekspozycję kołem Gain/Gamma, wyrównaj biel (Temp / Tint). Biel boiska ma być neutralna.",
    "**02 Contrast:** zwiększ Contrast do ok. **1,15**, pivot zostaw **0,435**. Opcjonalnie lekka krzywa S na Custom Curves.",
    "**03 Look:** przesuń kółko **Lift** w stronę niebiesko-zielonego (cienie), kółko **Gain** w stronę pomarańczowego (światła) – po ok. 10% promienia. **Saturation** ok. **55**.",
    "**04 Vignette:** Power Window typu Circle, **Invert**, Soft ok. 80, w węźle obniż Gain o ok. 0,2.",
    "Skopiuj grade na pozostałe klipy: zaznacz dobrze wyglądający klip → **Ctrl+C**, zaznacz resztę → **Ctrl+Alt+V** (wklej atrybuty) lub użyj Grade Ripple.",
    "**CapCut:** dodaj **Adjustment layer** na całość i ustaw: Contrast +10, Saturation +8, Shadows −10, Highlights −5, dodaj darmowy filtr (bez korony) z intensywnością 30–50."
  ],
  settings: [
    ["Contrast (Resolve)", "1,15 · Pivot 0,435"],
    ["Saturation (Resolve)", "ok. 55"],
    ["Lift (cienie)", "lekki teal"],
    ["Gain (światła)", "lekki pomarańcz"],
    ["Winieta", "Circle · Invert · Soft ≈ 80 · Gain −0,2"],
    ["CapCut Adjustment", "Contrast +10 · Saturation +8 · Shadows −10 · Highlights −5"]
  ],
  example: "Ten sam materiał z meczu bez gradingu wygląda płasko i telewizyjnie. Po gradzie skóra zawodnika ma ciepły odcień, a trawa i tło są chłodniejsze i ciemniejsze, co skupia wzrok na zawodniku.",
  task: "Wybierz 3 klipy z różnych meczów i nadaj im identyczny look (Resolve: 4 węzły + kopiowanie grade; CapCut: adjustment layer). Porównaj przed/po.",
  checklist: [
    "Ekspozycja i biel wyrównane przed lookiem",
    "Cztery osobne węzły (Resolve)",
    "Teal & orange subtelny, nie przesadzony",
    "Winieta bez widocznych krawędzi",
    "Wszystkie klipy mają spójny wygląd"
  ]
});
