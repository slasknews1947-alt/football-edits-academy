/* ==========================================================
   FOOTBALL EDITS ACADEMY – rdzeń danych kursu
   ----------------------------------------------------------
   JAK DODAĆ LEKCJĘ: otwórz plik js/data/lessons/mXX.js
   danego modułu i dopisz kolejny FEA.addLesson({...}).
   Pola lekcji: patrz README.md (sekcja „Schemat lekcji”).
   ========================================================== */
window.FEA = {
  modules: [
    { id: "m01", n: 1,  title: "Podstawy montażu",                 desc: "Projekt 9:16, import, oś czasu, porządek w ścieżkach." },
    { id: "m02", n: 2,  title: "Muzyka i Beat Sync",               desc: "Znaczniki beatu i cięcie dokładnie w rytm." },
    { id: "m03", n: 3,  title: "Keyframes i animacje",             desc: "Pozycja, skala, rotacja i płynność ruchu." },
    { id: "m04", n: 4,  title: "Dynamic Football Edits",           desc: "Struktura edita: hook, build-up, drop, outro." },
    { id: "m05", n: 5,  title: "Velocity i Speed Ramping",         desc: "Krzywe prędkości zgrane z muzyką." },
    { id: "m06", n: 6,  title: "Przejścia i efekty",               desc: "Zoom, motion blur, camera shake, glow, RGB split." },
    { id: "m07", n: 7,  title: "Maskowanie i 3D",                  desc: "Tekst za zawodnikiem i pseudo-głębia." },
    { id: "m08", n: 8,  title: "Color Grading",                    desc: "Filmowy look: kontrast, teal & orange, winieta." },
    { id: "m09", n: 9,  title: "Sound Design",                     desc: "Whoosh, impact, riser i miks głośności." },
    { id: "m10", n: 10, title: "Profesjonalny workflow i projekt końcowy", desc: "Proces od surowych klipów do eksportu." }
  ],
  lessons: [],
  effects: [],
  addLesson(l) { this.lessons.push(l); },
  addEffect(e) { this.effects.push(e); },
  /* lekcje w kolejności: moduł → kolejność dodania */
  ordered() {
    const idx = {}; this.modules.forEach((m, i) => (idx[m.id] = i));
    return this.lessons
      .map((l, i) => ({ l, i }))
      .sort((a, b) => idx[a.l.module] - idx[b.l.module] || a.i - b.i)
      .map(x => x.l);
  },
  lessonsOf(mid) { return this.ordered().filter(l => l.module === mid); },
  lesson(id) { return this.lessons.find(l => l.id === id); },
  module(id) { return this.modules.find(m => m.id === id); }
};
