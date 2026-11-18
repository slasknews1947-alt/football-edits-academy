FEA.addLesson({
  id: "m01-l01", module: "m01",
  title: "Projekt 9:16 i porządek na osi czasu",
  program: "Oba", duration: 20, level: "Podstawy",
  explain: "Football edit to pionowy film (TikTok / Reels / Shorts) w proporcjach **9:16**. Złe ustawienia projektu na starcie dają rozmyty obraz, czarne pasy i problemy z płynnością. Drugą podstawą jest **stały układ ścieżek** – dzięki niemu każdy kolejny montaż idzie szybciej.",
  steps: [
    "**CapCut:** Create project → zaimportuj klipy (Import) → w oknie podglądu kliknij **Ratio** i wybierz **9:16**.",
    "**DaVinci Resolve:** File → Project Settings → Master Settings → Timeline resolution: **Custom 1080 × 1920**, Timeline frame rate: **30** (lub 60).",
    "**DaVinci Resolve:** Project Settings → Image Scaling → Mismatched resolution files: **Scale full frame with crop** (klipy 16:9 wypełnią pionowy kadr).",
    "Przeciągnij klip na oś czasu. W CapCut: jeśli klip jest poziomy, wybierz Video → Basic → Scale i powiększ do wypełnienia kadru.",
    "Ułóż ścieżki: **V1** materiał główny, **V2** efekty / nakładki, **V3** tekst, **A1** muzyka, **A2** efekty dźwiękowe.",
    "Zapisz projekt (Ctrl+S) i nazwij go wg schematu `edit_zawodnik_wersja01`."
  ],
  settings: [
    ["Rozdzielczość", "1080 × 1920"],
    ["Proporcje", "9:16"],
    ["Klatkaż (FPS)", "30 (60 przy dużej ilości slow-mo)"],
    ["Resolve – skalowanie", "Scale full frame with crop"],
    ["Układ ścieżek", "V1 materiał · V2 efekty · V3 tekst · A1 muzyka · A2 SFX"]
  ],
  example: "Masz klip z meczu w 16:9. Po ustawieniu 9:16 powiększasz go tak, by zawodnik wypełniał środek kadru, a piłka i twarz zostają w tzw. „bezpiecznej strefie” (nie pod interfejsem TikToka na dole i po prawej).",
  task: "Utwórz pionowy projekt w obu programach, zaimportuj 3 klipy, każdy przytnij do ok. 3 s i ułóż je jeden po drugim na V1. Zapisz projekt.",
  checklist: [
    "Projekt ma 1080×1920 (9:16)",
    "Klatkaż ustawiony świadomie (30 lub 60)",
    "Klipy wypełniają kadr, bez czarnych pasów",
    "Ścieżki ułożone zgodnie ze schematem",
    "Projekt zapisany pod czytelną nazwą"
  ]
});
