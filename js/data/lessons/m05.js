FEA.addLesson({
  id: "m05-l01", module: "m05",
  title: "Speed ramping krzywą prędkości",
  program: "Oba", duration: 30, level: "Średni",
  explain: "**Velocity / Speed Ramping** to płynna zmiana prędkości klipu w trakcie jego trwania: normalne tempo → szybkie przyspieszenie → slow-mo na akcencie → powrót. Efekt „oddycha” razem z muzyką. Najlepiej wygląda na materiale **60 fps**, bo slow-mo jest wtedy płynne.",
  steps: [
    "**CapCut:** zaznacz klip → zakładka **Speed** → **Curve** → wybierz **Customise**. (Presety z ikoną korony pomiń – to Pro.)",
    "W CapCut dodaj punkty na krzywej (kliknij na linii) i przeciągaj je: w górę = szybciej, w dół = wolniej. Zrób kształt: start 1x → szczyt ok. 3x → dół ok. 0,3x → powrót do 1x.",
    "**DaVinci Resolve:** prawy klik na klipie → **Retime Controls** (Ctrl+R). Pojawi się pasek prędkości nad klipem.",
    "W Resolve ustaw playhead w miejscu zmiany i wybierz z menu paska **Add Speed Point**. Przeciągaj górną krawędź segmentu, aby zmienić jego prędkość w %.",
    "Wygładź przejścia: prawy klik na punkcie / segmencie → **Change Speed → Speed Ramp** (płynna zmiana zamiast skoku).",
    "Retime Process (Inspector → Video → Retime and Scaling): ustaw **Optical Flow** dla slow-mo. **Nie używaj** Speed Warp – to funkcja Studio.",
    "Przesuń punkty tak, aby koniec spowolnienia wypadał **dokładnie na beacie** lub akcencie akcji (np. kontakt z piłką)."
  ],
  settings: [
    ["Normalne tempo", "100%"],
    ["Przyspieszenie", "150–300%"],
    ["Slow-mo na akcencie", "20–40%"],
    ["Długość rampy", "8–12 klatek"],
    ["Retime Process (Resolve)", "Optical Flow"],
    ["Materiał źródłowy", "60 fps (lub więcej)"]
  ],
  example: "Zawodnik rozpędza się (przyspieszenie do 250%), tuż przed strzałem tempo spada do 30%, w momencie kontaktu z piłką trafia dokładnie na beat, a po strzale wraca do 100%.",
  task: "Weź klip z dryblingiem lub strzałem i zrób jednej sekwencji ramping: szybko → slow-mo na akcencie → normalnie. Zgraj koniec slow-mo z beatem.",
  checklist: [
    "Ramp jest płynny (bez skoków prędkości)",
    "Slow-mo wypada na najważniejszym momencie akcji",
    "Koniec spowolnienia trafia w beat",
    "Użyto tylko darmowych funkcji (bez korony / Studio)",
    "Obraz w slow-mo nie „szarpie”"
  ]
});
