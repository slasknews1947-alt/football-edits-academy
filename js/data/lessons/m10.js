FEA.addLesson({
  id: "m10-l01", module: "m10",
  title: "Workflow od klipów do eksportu",
  program: "Oba", duration: 30, level: "Zaawansowany",
  explain: "Profesjonalny workflow to **stała kolejność pracy**: zbieranie → selekcja → rytm → efekty → kolor → dźwięk → eksport. Dzięki niej nie wracasz do poprawek, które psują wcześniejsze etapy, a każdy edit powstaje szybciej.",
  steps: [
    "Przygotuj foldery: `01_Footage`, `02_Music`, `03_SFX`, `04_Projects`, `05_Export`. Wszystkie klipy nazywaj czytelnie (np. `mbappe_dribble_01`).",
    "**Selekcja:** wybierz 15–25 najlepszych ujęć (1–3 s każde). Oznacz hook, drop i outro.",
    "**Rytm:** wstaw muzykę, oznacz beaty i zrób surowy montaż (moduły 2 i 4).",
    "**Animacje i prędkość:** dodaj punch-iny, ramping i zoom-transitions (moduły 3, 5, 6).",
    "**Kolor i dźwięk:** zrób grade jednym spójnym lookiem, potem sound design i miks (moduły 8 i 9).",
    "**Eksport CapCut:** Export → 1080p, 30 lub 60 fps (jak projekt), Codec H.264, Bitrate: Recommended lub Higher.",
    "**Eksport Resolve:** Deliver page → Format MP4, Codec H.264, Resolution 1080×1920, Frame rate jak timeline, Quality: Restrict to ok. 15 000 kb/s, Audio AAC 256 kb/s → Add to Render Queue → Render All."
  ],
  settings: [
    ["Rozdzielczość eksportu", "1080 × 1920"],
    ["Klatkaż", "taki jak w projekcie (30 lub 60)"],
    ["Kodek", "H.264 (MP4)"],
    ["Bitrate (Resolve)", "ok. 15 000 kb/s"],
    ["Audio", "AAC 256 kb/s"],
    ["Foldery projektu", "01_Footage … 05_Export"]
  ],
  example: "Projekt końcowy: 20-sekundowy edit jednego zawodnika – hook ze slow-mo, build-up z zoomami, drop z flashem i shake, spójny grade, pełny sound design, eksport w pionie 1080×1920.",
  task: "Zrób kompletny, 15–20-sekundowy edit od zera wg workflow, a po eksporcie obejrzyj go na telefonie. Zanotuj 3 rzeczy do poprawy w kolejnej wersji.",
  checklist: [
    "Foldery projektu są uporządkowane",
    "Edit ma strukturę hook / build-up / drop / outro",
    "Zastosowano animacje, ramping i przejścia",
    "Grade i dźwięk są spójne",
    "Eksport 1080×1920 sprawdzony na telefonie"
  ]
});
