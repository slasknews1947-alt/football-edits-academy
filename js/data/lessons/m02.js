FEA.addLesson({
  id: "m02-l01", module: "m02",
  title: "Znaczniki beatu i cięcie w rytm",
  program: "Oba", duration: 25, level: "Podstawy",
  explain: "**Beat Sync** to cięcie i akcentowanie obrazu dokładnie w momentach uderzeń muzyki. Najpierw oznaczasz beaty **znacznikami**, potem układasz cięcia i efekty na znacznikach. Dzięki temu edit „czuć” – nawet bez dodatkowych efektów.",
  steps: [
    "Wrzuć utwór na ścieżkę audio (A1) i wytnij fragment, który ma być edytem (15–25 s, najlepiej z dropem).",
    "**CapCut:** zaznacz klip audio → w panelu po prawej zakładka **Beats** → włącz **Auto beat** i wybierz wariant Beat 1 lub Beat 2 (testuj, który lepiej trafia). Znaczniki pojawią się na audio.",
    "**DaVinci Resolve:** odtwarzaj muzykę i naciskaj **M** na każdym uderzeniu. Włącz przyciąganie (**N** – Snapping), żeby cięcia same łapały znaczniki.",
    "Ustaw playhead na pierwszym znaczniku i tnij klip wideo (**Ctrl+B** w obu programach). Kolejne cięcia rób na następnych znacznikach.",
    "Usuń zbędne końcówki klipów (Ripple Delete: zaznacz fragment → **Shift+Delete** w Resolve, **Delete** w CapCut) tak, aby klipy stykały się bez przerw.",
    "Odtwórz całość i sprawdź: czy zmiana ujęcia wypada dokładnie „na” uderzeniu? Jeśli czujesz opóźnienie, przesuń cięcie o 1–2 klatki wcześniej."
  ],
  settings: [
    ["Wstęp / build-up", "cięcie co 2 beaty"],
    ["Drop", "cięcie co 1 beat (lub co 1/2 beatu)"],
    ["Długość beatu", "60 ÷ BPM s (np. 130 BPM ≈ 0,46 s)"],
    ["Skrót – znacznik", "M (Resolve)"],
    ["Skrót – cięcie", "Ctrl+B"],
    ["Korekta", "tnij 1–2 klatki przed uderzeniem"]
  ],
  example: "Utwór 130 BPM: w build-upie zmieniasz ujęcie co ok. 0,9 s (2 beaty), na dropie co 0,46 s. Zmiana ujęcia zawsze wypada na uderzeniu, a strzał lub drybling trafia w najmocniejszy akcent.",
  task: "Wybierz utwór, oznacz beaty (znacznikami) i zrób 10-sekundowy edit z minimum 8 cięć dokładnie na beatach – w drugiej połowie ścisnąć tempo cięć.",
  checklist: [
    "Znaczniki beatu ustawione na całym fragmencie",
    "Min. 8 cięć trafia w beat",
    "Tempo cięć rośnie w stronę dropu",
    "Brak przerw między klipami",
    "Sprawdzone odsłuchem na słuchawkach"
  ]
});
