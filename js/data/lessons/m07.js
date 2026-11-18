FEA.addLesson({
  id: "m07-l01", module: "m07",
  title: "Tekst za zawodnikiem (maska + pseudo-3D)",
  program: "DaVinci", duration: 40, level: "Zaawansowany",
  explain: "Efekt „3D” w editach to zwykle **warstwy**: tło → tekst → zawodnik wycięty maską. Dzięki temu napis znajduje się **za** piłkarzem, co daje wrażenie głębi. Free Resolve wycina zawodnika oknem (**Power Window**) z trackerem, więc nie potrzebujesz Magic Mask (to Studio).",
  steps: [
    "Wstaw klip na **V1**. Skopiuj go (Alt + przeciągnij) na **V3**. Na **V2** dodaj tekst (Effects → Titles → Text+) i ustaw go duży, pośrodku.",
    "Zaznacz klip na V3 → przejdź na **Color page**. Utwórz węzeł (Alt+S) i narysuj **Power Window** typu **Polygon** dookoła zawodnika (klikaj punkty obrysu, zamknij kształt).",
    "Rozszerz **Soft 1** w oknie na ok. 3–5, aby krawędź nie była ostra.",
    "Śledź ruch: panel **Tracker → Window**, zaznacz **Pan / Tilt / Zoom**, kliknij Track Forward. Popraw punkty maski tam, gdzie tracker odpływa.",
    "Prawy klik w obszarze węzłów → **Add Alpha Output**. Połącz niebieski trójkąt **Key Output** węzła z maską z wejściem **Alpha Output**.",
    "Wróć na Edit page: klip na V3 ma teraz przezroczystość wszędzie poza zawodnikiem, więc tekst z V2 przechodzi za nim.",
    "Dodaj lekki keyframe Scale tekstu (100 → 108) oraz delikatny ruch przeciwny do kamery, aby wzmocnić głębię."
  ],
  settings: [
    ["Warstwy", "V1 oryginał · V2 tekst · V3 kopia z maską"],
    ["Okno", "Power Window – Polygon"],
    ["Soft (krawędź)", "3–5"],
    ["Tracker", "Pan / Tilt / Zoom"],
    ["Wyjście alfa", "Key Output → Alpha Output"],
    ["Wielkość tekstu", "tak duży, by zawodnik go częściowo zasłaniał"]
  ],
  example: "Napis z nazwiskiem zawodnika wyświetla się wielkimi literami na środku kadru, a zawodnik biegnie „przed” napisem. W CapCut Free podobny, prostszy efekt zrobisz maską typu prostokąt / koło z keyframami.",
  task: "Zrób 3-sekundowy klip z nazwiskiem zawodnika za jego sylwetką. Sprawdź krawędzie w 100% zoomie i popraw punkty maski w 2–3 miejscach.",
  checklist: [
    "Trzy warstwy ułożone poprawnie (V1/V2/V3)",
    "Maska ma miękką krawędź",
    "Tracker prowadzi maskę przez cały klip",
    "Alpha Output podłączony",
    "Tekst przechodzi za zawodnikiem bez migotania"
  ]
});
