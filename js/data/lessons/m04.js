FEA.addLesson({
  id: "m04-l01", module: "m04",
  title: "Szkielet dynamicznego edita: hook, build-up, drop, outro",
  program: "Oba", duration: 30, level: "Średni",
  explain: "Dobry football edit ma **dramaturgię**: zatrzymuje widza w pierwszej sekundzie (**hook**), narasta napięcie (**build-up**), eksploduje na **dropie** i szybko się kończy (**outro**). Cały montaż układasz więc wokół muzyki, a nie odwrotnie.",
  steps: [
    "Wybierz 4 sekcje utworu i oznacz je znacznikami (M): **hook (0–2 s) → build-up (2–8 s) → drop (8–16 s) → outro (16–20 s)**.",
    "**Hook:** najmocniejszy kadr (twarz, gol, drybling) – krótkie, 1,5 s, najlepiej z lekkim zoomem lub slow-mo.",
    "**Build-up:** 4–6 ujęć po 0,5–1 s. Każde kolejne krótsze od poprzedniego. Dodaj narastający zoom (Scale 100 → 110 przez całą sekcję).",
    "**Drop:** na pierwszym uderzeniu wstaw najlepsze ujęcie + biały flash (2–3 klatki) + punch-in. Następnie cięcia co 0,2–0,4 s.",
    "**Outro:** zwolnij – 1 mocne ujęcie 1–1,5 s, wygaszenie obrazu (Fade) i końcówka muzyki.",
    "Przejrzyj całość bez dźwięku: czy rytm obrazu sam opowiada historię? Jeśli któreś ujęcie „wisi”, skróć je."
  ],
  settings: [
    ["Długość całości", "15–20 s (idealnie do 25 s)"],
    ["Hook", "≈ 1,5 s"],
    ["Build-up", "4–6 ujęć, 0,5–1 s"],
    ["Drop", "cięcia co 0,2–0,4 s"],
    ["Flash na dropie", "biały, 2–3 klatki"],
    ["Outro", "1–1,5 s + fade"]
  ],
  example: "Edit o napastniku: hook – zbliżenie na twarz w slow-mo; build-up – 5 dryblingów z narastającym zoomem; drop – gol w punch-inie z flashem, potem szybka seria asyst i strzałów; outro – radość i fade-out.",
  task: "Zbuduj 15-sekundowy szkielet wg schematu (hook / build-up / drop / outro) na jednym utworze, bez efektów – tylko rytm cięć i jedno ujęcie z flashem na dropie.",
  checklist: [
    "Cztery sekcje oznaczone znacznikami",
    "Hook trwa ≤ 2 s",
    "Cięcia w build-upie stopniowo przyspieszają",
    "Drop ma flash i punch-in",
    "Całość ma maksymalnie 20 s"
  ]
});

FEA.addLesson({
  id: "m04-l02", module: "m04",
  title: "Analiza edita: rozbiór filmu referencyjnego",
  program: "Oba", duration: 25, level: "Średni",
  explain: "Najszybciej uczysz się, rozbierając gotowy edit na części. Film referencyjny (ok. 21 s, 30 fps) ma **cztery wyraźne sekcje**: długi, szeroki kadr → przejście z rozmyciem → szybki montaż z różnych kątów → końcówka z bohaterem, mocnym gradem i spokojniejszym tempem. Poniższe czasy są **orientacyjne** (z wykrytych cięć i klatek) – dokładne punkty ustalisz sam na osi czasu.",
  steps: [
    "Zaimportuj film referencyjny do projektu 9:16 **tylko do analizy** (nie do publikacji) i ustaw go na V1 na osobnej osi czasu.",
    "Włącz znaczniki (M) i zaznacz każdą zmianę ujęcia. Wykryte cięcia to ok. **4,8 s, 5,8 s, 6,6 s, 7,1 s, 13,6 s, 16,4 s**; między nimi są też płynne zmiany (zoom / blur), których nie widać jako twardego cięcia.",
    "Rozpisz sekcje: **0–5 s** szeroki kadr z góry (spokojny start), **5–7 s** przejście z rozmytą klatką, **7–13 s** szybki montaż z różnych kątów, **13,5 s–koniec** ujęcia bohatera i celebracja.",
    "Przejdź przez film klatka po klatce (strzałki ← →) i zanotuj przy każdej zmianie: typ przejścia (cięcie, zoom, blur), czy jest zmiana prędkości i czy jest zmiana koloru.",
    "Odtwórz film bez dźwięku, a potem z dźwiękiem: sprawdź, które cięcia wypadają na uderzenie muzyki (to są Twoje punkty beat sync).",
    "Porównaj grade: początek ma kolor zbliżony do naturalnego, końcówka jest ciemniejsza, z winietą i ciepłymi światłami. Odtwórz to wg lekcji z modułu 8.",
    "Zbuduj własną wersję na swoich klipach, trzymając się **proporcji** sekcji (ok. 25% spokojny start, 10% przejście, 30% szybki montaż, 35% finał), a nie kopiując ujęcia."
  ],
  settings: [
    ["Długość referencji", "ok. 21,6 s · 30 fps"],
    ["Sekcje (orientacyjnie)", "0–5 s · 5–7 s · 7–13 s · 13,5 s–koniec"],
    ["Tempo cięć", "wolne → szybkie → wolne"],
    ["Przejście między sekcjami", "rozmyta klatka / zoom"],
    ["Końcówka", "ciemniejszy grade + winieta, dłuższe ujęcia"],
    ["Znaczniki", "M na każdej zmianie ujęcia"]
  ],
  example: "Zamiast kopiować film, zapisujesz jego plan: „5 s spokojnego wstępu, przejście z blurem, 6 s szybkiego montażu, 8 s finału z gradem”. Ten sam plan wypełniasz własnymi ujęciami i własnym utworem.",
  task: "Rozpisz film referencyjny na kartce lub w notatniku: sekcje z czasami, typy przejść i rodzaje ujęć. Potem zrób własny 15–20 s edit o tej samej strukturze, z innego materiału.",
  checklist: [
    "Zaznaczono wszystkie zmiany ujęć znacznikami",
    "Rozpisano cztery sekcje z czasami",
    "Wiem, które przejścia to zoom, blur i cięcie",
    "Porównano grade początku i końcówki",
    "Własny edit powtarza strukturę, nie same ujęcia"
  ]
});
