FEA.addLesson({
  id: "m09-l01", module: "m09",
  title: "Sound design: whoosh, impact, riser i miks",
  program: "Oba", duration: 30, level: "Średni",
  explain: "Dźwięk robi połowę efektu. **Whoosh** towarzyszy przejściom, **impact** (uderzenie) akcentuje drop, **riser** buduje napięcie przed dropem. Najważniejszy jest **miks**: efekty mają być słyszalne, ale nie zagłuszać muzyki ani nie powodować przesterowania.",
  steps: [
    "Pobierz darmowe efekty (whoosh, impact, riser, bass drop) z bibliotek z jasną licencją (np. Pixabay, Freesound CC0) i zapisz je w folderze **03_SFX**.",
    "Wstaw SFX na **A2/A3** (nad muzyką). **Whoosh** zaczynaj ok. **3–5 klatek przed** punktem cięcia, żeby szczyt dźwięku trafiał w zmianę ujęcia.",
    "**Riser** ułóż tak, aby kończył się dokładnie na początku dropu (ok. 1–2 s przed). Na dropie wstaw **impact** w tym samym momencie co flash / punch-in.",
    "Ustaw głośność: muzyka **−8 dB**, whoosh **−12 dB**, impact **−6 dB**. W CapCut: zaznacz audio → Basic → Volume. W Resolve: Inspector → Audio → Volume.",
    "**Ducking:** tuż przed dropem obniż muzykę o ok. 3 dB na 0,3 s keyframem głośności, aby impact „przebił się” przez miks.",
    "Dodaj **fade out** na 0,5–1 s na końcu utworu (uchwyt fade na klipie audio).",
    "Odsłuchaj całość na słuchawkach i głośniku telefonu. Szczyty nie mogą przekraczać **−1 dB** (wskaźnik na mierniku)."
  ],
  settings: [
    ["Muzyka", "około −8 dB"],
    ["Whoosh", "−12 dB, start 3–5 klatek przed cięciem"],
    ["Impact", "−6 dB, dokładnie na dropie"],
    ["Riser", "kończy się na pierwszym uderzeniu dropu"],
    ["Ducking muzyki", "−3 dB na 0,3 s przed dropem"],
    ["Limit szczytów", "max −1 dB"]
  ],
  example: "Na zoom-transitions dodajesz krótkie whoosh, w dropie uderza impact z lekkim basem, a przed dropem narasta riser. Muzyka na ułamek sekundy ściszona sprawia, że uderzenie robi wrażenie „kopa”.",
  task: "Dodaj do swojego edita: 3 whoosh na przejściach, 1 riser i 1 impact na dropie. Wyreguluj głośność wg tabeli i zrób odsłuch kontrolny na telefonie.",
  checklist: [
    "Efekty pochodzą z darmowych źródeł z licencją",
    "Whoosh startuje przed cięciem",
    "Riser kończy się na dropie",
    "Muzyka jest ściszona pod efekty",
    "Brak przesteru (szczyty do −1 dB)"
  ]
});
