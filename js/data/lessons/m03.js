FEA.addLesson({
  id: "m03-l01", module: "m03",
  title: "Keyframes: pozycja, skala, rotacja i easing",
  program: "Oba", duration: 25, level: "Podstawy",
  explain: "**Keyframe** (klatka kluczowa) zapamiętuje wartość parametru w danym momencie. Dwa keyframe’y z różnymi wartościami = animacja między nimi. To fundament punch-inów, zoomów, tekstu i trzęsienia kamery. **Easing** (łagodne rozpędzanie i hamowanie) odróżnia płynny ruch od „plastikowego”.",
  steps: [
    "**CapCut:** zaznacz klip → Video → Basic. Przy parametrach **Scale / Position / Rotate** kliknij ikonę rombu, aby dodać keyframe.",
    "**DaVinci Resolve:** zaznacz klip na Edit page → Inspector → Video → Transform. Kliknij romb obok **Zoom / Position / Rotation Angle**.",
    "Ustaw playhead na początku ruchu, dodaj keyframe i zostaw Scale = 100.",
    "Przesuń playhead o 6 klatek do przodu i zmień Scale na 115 – keyframe dodaje się automatycznie.",
    "**Resolve – easing:** kliknij prawym na keyframe → **Ease In and Out** (lub otwórz Keyframe Editor przy ikonie rombu w klipie i zaokrąglij krzywą).",
    "**CapCut – easing:** krzywe keyframe’ów mogą nie być dostępne w wersji Free. Wtedy dodaj jeden pośredni keyframe (np. 108 przy 3. klatce), żeby ruch był mniej liniowy.",
    "Odtwórz w pętli (Resolve: **Ctrl+/**) i dopracuj tempo – na uderzeniu muzyki ruch ma osiągnąć szczyt."
  ],
  settings: [
    ["Punch-in", "Scale 100 → 115, czas 4–6 klatek"],
    ["Pozycja (shake)", "± 10–15 px"],
    ["Rotacja", "± 1–2°"],
    ["Easing", "Ease In & Out (Resolve)"],
    ["Czas animacji", "kończ ruch dokładnie na beacie"]
  ],
  example: "W momencie strzału zawodnika scale rośnie ze 100 do 115% w 5 klatek (punch-in), a po uderzeniu piłki wraca do 100% w 10 klatek. Ruch w stronę akcentu jest szybki, powrót wolniejszy.",
  task: "Na jednym klipie zrób animację: punch-in na beacie, delikatna rotacja ±1° i powrót do normalnego kadru. Wykonaj to w CapCut i w Resolve.",
  checklist: [
    "Rozumiem, że 2 keyframe’y tworzą animację",
    "Punch-in trafia w uderzenie muzyki",
    "Powrót do 100% jest wolniejszy niż wejście",
    "Zastosowany easing lub pośredni keyframe",
    "Ruch nie ucina ważnych elementów kadru"
  ]
});
