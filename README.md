# Football Edits Academy

Statyczna strona (HTML + CSS + JS), bez instalacji i bez serwera.

## Uruchomienie
1. Rozpakuj folder `football-edits-academy`.
2. Kliknij dwukrotnie `index.html` (otworzy się w przeglądarce).
3. Postępy zapisują się w LocalStorage tej przeglądarki. Wyczyszczenie danych witryny je usunie (jest eksport JSON w „Mój postęp”).

## Struktura
```
index.html              szkielet strony i kolejność skryptów
css/style.css           cały wygląd
js/app.js               router, widoki, przyciski
js/storage.js           zapis postępów (LocalStorage)
js/data/modules.js      lista 10 modułów + funkcje pomocnicze
js/data/lessons/mXX.js  lekcje danego modułu (po jednym pliku na moduł)
js/data/effects.js      biblioteka efektów
```

## Jak dodać lekcję
Otwórz `js/data/lessons/mXX.js` i dopisz na końcu kolejny blok. **Nie ruszaj** `app.js` ani CSS.

```js
FEA.addLesson({
  id: "m02-l02",            // unikalne: mXX-lNN (nie zmieniaj po publikacji – po nim zapisują się postępy)
  module: "m02",
  title: "Tytuł lekcji",
  program: "Oba",           // "CapCut" | "DaVinci" | "Oba"
  duration: 20,             // minuty
  level: "Podstawy",
  explain: "Tekst. **pogrubienie**, `kod/skrót`.",
  steps: ["Krok 1", "Krok 2"],
  settings: [["Parametr", "Wartość"]],
  example: "Przykład zastosowania.",
  task: "Zadanie praktyczne.",
  checklist: ["Punkt 1", "Punkt 2"]
});
```
Kolejność lekcji w module = kolejność w pliku. Nowy moduł: dopisz wpis w `modules` w `modules.js`, utwórz `lessons/mXX.js` i dodaj `<script>` w `index.html`.

## Jak dodać efekt
W `js/data/effects.js` dopisz `FEA.addEffect({ id, name, program, tags, desc, steps, settings })`.
