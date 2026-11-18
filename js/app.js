/* Football Edits Academy – logika aplikacji (router, widoki, postępy) */
(function () {
  const $ = s => document.querySelector(s);
  const view = $("#view");
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const fmt = s => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/`(.+?)`/g, "<code>$1</code>");
  const XP_PER_LESSON = 100;
  const LEVELS = [[0, "Rookie"], [300, "Amator"], [800, "Edytor"], [1500, "Zaawansowany"], [2500, "Pro"], [4000, "Legenda"]];
  const LABELS = { done: "Ukończono lekcję", undone: "Cofnięto ukończenie lekcji", open: "Otwarto lekcję" };

  /* ---------- statystyki ---------- */
  function stats() {
    const all = FEA.lessons, total = all.length;
    const done = all.filter(l => Store.isDone(l.id)).length;
    const xp = done * XP_PER_LESSON;
    let li = 0; LEVELS.forEach((l, i) => { if (xp >= l[0]) li = i; });
    const nxt = LEVELS[li + 1];
    const lvlPct = nxt ? Math.round(((xp - LEVELS[li][0]) / (nxt[0] - LEVELS[li][0])) * 100) : 100;
    return { total, done, xp, level: li + 1, levelName: LEVELS[li][1], nextXp: nxt ? nxt[0] : null, lvlPct, pct: total ? Math.round((done / total) * 100) : 0 };
  }
  function modStats(mid) {
    const ls = FEA.lessonsOf(mid), d = ls.filter(l => Store.isDone(l.id)).length;
    return { total: ls.length, done: d, pct: ls.length ? Math.round((d / ls.length) * 100) : 0 };
  }
  function nextLesson() {
    const ord = FEA.ordered(), last = FEA.lesson(Store.last());
    if (last && !Store.isDone(last.id)) return { l: last, resume: true };
    const from = last ? ord.indexOf(last) + 1 : 0;
    const n = ord.slice(from).find(l => !Store.isDone(l.id)) || ord.find(l => !Store.isDone(l.id));
    return n ? { l: n, resume: false } : null;
  }
  const when = t => new Date(t).toLocaleString("pl-PL", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
  const bar = p => `<div class="bar"><i style="width:${p}%"></i></div>`;
  const badge = p => `<span class="badge b-${p === "Oba" ? "both" : p === "CapCut" ? "cc" : "dr"}">${esc(p)}</span>`;

  /* ---------- widoki ---------- */
  function dashboard() {
    const s = stats(), nx = nextLesson();
    const hist = Store.history().slice(0, 5).map(h => {
      const l = FEA.lesson(h.id);
      return l ? `<li><a href="#/lesson/${l.id}">${LABELS[h.type]}: <b>${esc(l.title)}</b></a><time>${when(h.t)}</time></li>` : "";
    }).join("");
    const cont = nx
      ? `<div class="card hero-card"><span class="eyebrow">${nx.resume ? "Kontynuuj naukę" : Store.doneCount() ? "Następna lekcja" : "Zacznij tutaj"}</span>
         <h2>${esc(nx.l.title)}</h2>
         <p class="muted">Moduł ${FEA.module(nx.l.module).n} · ${esc(FEA.module(nx.l.module).title)} · ${nx.l.duration} min</p>
         <a class="btn primary" href="#/lesson/${nx.l.id}">${nx.resume ? "Wróć do lekcji" : "Rozpocznij lekcję"} →</a></div>`
      : `<div class="card hero-card"><span class="eyebrow">Gotowe</span><h2>Wszystkie dostępne lekcje ukończone</h2><p class="muted">Kolejne moduły pojawią się w Etapie 2.</p><a class="btn" href="#/progress">Zobacz postęp</a></div>`;
    const mods = FEA.modules.map(m => {
      const ms = modStats(m.id);
      return `<a class="card mod-mini" href="#/course/${m.id}"><span class="num">${String(m.n).padStart(2, "0")}</span><div><b>${esc(m.title)}</b>${bar(ms.pct)}<small class="muted">${ms.done}/${ms.total} lekcji</small></div></a>`;
    }).join("");
    return `<header class="page-h"><h1>Dashboard</h1><p class="muted">Twoja droga do profesjonalnych football edits.</p></header>
      ${cont}
      <section class="grid4">
        <div class="card stat"><small class="muted">Poziom</small><strong>${s.level}</strong><span>${esc(s.levelName)}</span></div>
        <div class="card stat"><small class="muted">XP</small><strong>${s.xp}</strong>${bar(s.lvlPct)}<span class="muted">${s.nextXp ? "do poziomu " + (s.level + 1) + ": " + (s.nextXp - s.xp) + " XP" : "maksymalny poziom"}</span></div>
        <div class="card stat"><small class="muted">Ukończone lekcje</small><strong>${s.done}<em>/${s.total}</em></strong><span class="muted">dostępnych w kursie</span></div>
        <div class="card stat"><small class="muted">Postęp</small><strong>${s.pct}%</strong>${bar(s.pct)}</div>
      </section>
      <h3 class="sec">Moduły</h3><section class="grid2">${mods}</section>
      <h3 class="sec">Ostatnia aktywność</h3>
      <div class="card">${hist ? `<ul class="hist">${hist}</ul>` : `<p class="muted">Brak aktywności – otwórz pierwszą lekcję.</p>`}</div>`;
  }

  function course(openId) {
    const openMod = openId || (FEA.lesson(Store.last()) || {}).module || "m01";
    const items = FEA.modules.map(m => {
      const ls = FEA.lessonsOf(m.id), ms = modStats(m.id);
      const rows = ls.length ? ls.map(l => `<a class="lrow" href="#/lesson/${l.id}">
          <span class="dot ${Store.isDone(l.id) ? "on" : ""}">${Store.isDone(l.id) ? "✓" : ""}</span>
          <span class="lt">${esc(l.title)}<small class="muted">${l.duration} min · ${esc(l.level)}</small></span>${badge(l.program)}</a>`).join("")
        : `<p class="muted pad">Lekcje pojawią się wkrótce.</p>`;
      return `<details class="card mod" id="mod-${m.id}" ${m.id === openMod ? "open" : ""}>
        <summary><span class="num">${String(m.n).padStart(2, "0")}</span>
          <div class="grow"><b>${esc(m.title)}</b><small class="muted">${esc(m.desc)}</small></div>
          <div class="msum"><small class="muted">${ms.done}/${ms.total}</small>${bar(ms.pct)}</div></summary>
        <div class="lessons">${rows}</div></details>`;
    }).join("");
    return `<header class="page-h"><h1>Kurs</h1><p class="muted">10 modułów od podstaw do poziomu zaawansowanego.</p></header>${items}`;
  }

  function lesson(id) {
    const l = FEA.lesson(id);
    if (!l) return notFound();
    Store.open(id);
    const ord = FEA.ordered(), i = ord.indexOf(l), prev = ord[i - 1], next = ord[i + 1], m = FEA.module(l.module);
    const sec = (t, body) => `<section class="card sec-c"><h3>${t}</h3>${body}</section>`;
    return `<a class="back" href="#/course/${m.id}">← Moduł ${m.n}: ${esc(m.title)}</a>
      <header class="page-h"><h1>${esc(l.title)}</h1>
        <div class="meta">${badge(l.program)}<span class="chip">${l.duration} min</span><span class="chip">${esc(l.level)}</span></div></header>
      ${sec("Wyjaśnienie techniki", `<p>${fmt(l.explain)}</p>`)}
      ${sec("Instrukcja krok po kroku", `<ol class="steps">${l.steps.map(s => `<li>${fmt(s)}</li>`).join("")}</ol>`)}
      ${sec("Konkretne ustawienia", `<table class="tbl"><tbody>${l.settings.map(r => `<tr><th>${esc(r[0])}</th><td>${fmt(r[1])}</td></tr>`).join("")}</tbody></table>`)}
      ${sec("Przykład zastosowania", `<p>${fmt(l.example)}</p>`)}
      ${sec("Zadanie praktyczne", `<p>${fmt(l.task)}</p>
        <label class="chk task"><input type="checkbox" data-action="task" data-id="${l.id}" ${Store.taskDone(l.id) ? "checked" : ""}><span>Zadanie wykonane</span></label>`)}
      ${sec(`Checklista <small id="chk-count" class="muted"></small>`, l.checklist.map((c, k) =>
        `<label class="chk"><input type="checkbox" data-action="check" data-id="${l.id}" data-i="${k}" ${Store.isChecked(l.id, k) ? "checked" : ""}><span>${esc(c)}</span></label>`).join(""))}
      <div class="card finish"><button id="done-btn" class="btn" data-action="done" data-id="${l.id}"></button><small id="done-hint" class="muted"></small></div>
      <nav class="pn">${prev ? `<a class="btn" href="#/lesson/${prev.id}">← ${esc(prev.title)}</a>` : "<span></span>"}${next ? `<a class="btn" href="#/lesson/${next.id}">${esc(next.title)} →</a>` : "<span></span>"}</nav>`;
  }
  function refreshLesson(id) {
    const l = FEA.lesson(id); if (!l) return;
    const n = l.checklist.filter((_, k) => Store.isChecked(id, k)).length, done = Store.isDone(id);
    $("#chk-count").textContent = `(${n}/${l.checklist.length})`;
    const b = $("#done-btn");
    b.textContent = done ? "✓ Lekcja ukończona – cofnij" : "Oznacz lekcję jako ukończoną";
    b.className = "btn " + (done ? "ok" : n === l.checklist.length ? "primary" : "");
    $("#done-hint").textContent = done ? "+" + XP_PER_LESSON + " XP zapisane" : n === l.checklist.length ? "Wszystko odhaczone – możesz zakończyć lekcję." : "Odhacz checklistę i wykonaj zadanie.";
  }

  const lib = { q: "", p: "all" };
  function library() {
    const chips = [["all", "Wszystkie"], ["CapCut", "CapCut"], ["DaVinci", "DaVinci Resolve"]]
      .map(c => `<button class="chip btn-chip ${lib.p === c[0] ? "on" : ""}" data-action="filter" data-p="${c[0]}">${c[1]}</button>`).join("");
    return `<header class="page-h"><h1>Biblioteka efektów</h1><p class="muted">Instrukcje konkretnych efektów – tylko darmowe metody.</p></header>
      <div class="tools"><input id="lib-q" class="search" type="search" placeholder="Szukaj efektu…" value="${esc(lib.q)}" autocomplete="off"><div class="chips">${chips}</div></div>
      <div id="lib-list">${libList()}</div>`;
  }
  function libList() {
    const q = lib.q.trim().toLowerCase();
    const r = FEA.effects.filter(e => (lib.p === "all" || e.program === "Oba" || e.program === lib.p) &&
      (!q || (e.name + " " + e.desc + " " + e.tags.join(" ")).toLowerCase().includes(q)));
    if (!r.length) return `<p class="muted pad">Brak wyników.</p>`;
    return r.map(e => `<details class="card eff"><summary><div class="grow"><b>${esc(e.name)}</b><small class="muted">${esc(e.desc)}</small></div>${badge(e.program)}</summary>
      <div class="eff-b"><ol class="steps">${e.steps.map(s => `<li>${fmt(s)}</li>`).join("")}</ol>
      <table class="tbl"><tbody>${e.settings.map(x => `<tr><th>${esc(x[0])}</th><td>${fmt(x[1])}</td></tr>`).join("")}</tbody></table></div></details>`).join("");
  }

  function progress() {
    const s = stats(), C = 2 * Math.PI * 52;
    const mods = FEA.modules.map(m => { const ms = modStats(m.id);
      return `<div class="prow"><span>${String(m.n).padStart(2, "0")} ${esc(m.title)}</span><small class="muted">${ms.done}/${ms.total}</small>${bar(ms.pct)}</div>`; }).join("");
    const tasks = FEA.ordered().map(l => `<label class="chk"><input type="checkbox" data-action="task" data-id="${l.id}" ${Store.taskDone(l.id) ? "checked" : ""}><span><b>${esc(l.title)}</b><small class="muted">${fmt(l.task)}</small></span></label>`).join("");
    const hist = Store.history().slice(0, 30).map(h => { const l = FEA.lesson(h.id);
      return l ? `<li><a href="#/lesson/${l.id}">${LABELS[h.type]}: <b>${esc(l.title)}</b></a><time>${when(h.t)}</time></li>` : ""; }).join("");
    return `<header class="page-h"><h1>Mój postęp</h1></header>
      <section class="card ring-c">
        <svg viewBox="0 0 120 120" class="ring"><circle cx="60" cy="60" r="52" class="rb"/><circle cx="60" cy="60" r="52" class="rf" style="stroke-dasharray:${(C * s.pct / 100).toFixed(1)} ${C.toFixed(1)}"/><text x="60" y="66" text-anchor="middle">${s.pct}%</text></svg>
        <div><h2>Poziom ${s.level} – ${esc(s.levelName)}</h2><p class="muted">Ukończono ${s.done} z ${s.total} dostępnych lekcji · ${s.xp} XP</p></div>
      </section>
      <h3 class="sec">Moduły</h3><div class="card">${mods}</div>
      <h3 class="sec">Zadania praktyczne</h3><div class="card">${tasks}</div>
      <h3 class="sec">Historia nauki</h3><div class="card">${hist ? `<ul class="hist">${hist}</ul>` : `<p class="muted">Historia jest pusta.</p>`}</div>
      <div class="row-btns"><button class="btn" data-action="export">Eksportuj postępy (JSON)</button><button class="btn danger" data-action="reset">Resetuj postępy</button></div>`;
  }
  const notFound = () => `<header class="page-h"><h1>Nie znaleziono</h1></header><a class="btn" href="#/dashboard">Wróć do Dashboardu</a>`;

  /* ---------- router ---------- */
  function route() {
    const [name = "dashboard", arg] = location.hash.replace(/^#\/?/, "").split("/");
    const map = { dashboard: () => dashboard(), course: () => course(arg), lesson: () => lesson(arg), library, progress };
    const fn = map[name] || (() => notFound());
    view.innerHTML = fn();
    document.querySelectorAll("[data-nav]").forEach(a => a.classList.toggle("active", a.dataset.nav === (name === "lesson" ? "course" : name)));
    view.style.animation = "none"; void view.offsetWidth; view.style.animation = "";
    if (name === "lesson") refreshLesson(arg);
    const t = name === "course" && arg ? document.getElementById("mod-" + arg) : null;
    t ? t.scrollIntoView() : window.scrollTo(0, 0);
  }

  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 2200);
  }

  /* ---------- zdarzenia ---------- */
  document.addEventListener("change", e => {
    const el = e.target.closest("[data-action]"); if (!el) return;
    const id = el.dataset.id;
    if (el.dataset.action === "check") { Store.toggleCheck(id, +el.dataset.i); refreshLesson(id); }
    if (el.dataset.action === "task") Store.toggleTask(id);
  });
  document.addEventListener("input", e => {
    if (e.target.id === "lib-q") { lib.q = e.target.value; $("#lib-list").innerHTML = libList(); }
  });
  document.addEventListener("click", e => {
    const el = e.target.closest("[data-action]"); if (!el) return;
    const a = el.dataset.action;
    if (a === "done") { const on = Store.toggleDone(el.dataset.id); refreshLesson(el.dataset.id); toast(on ? "Lekcja ukończona! +" + XP_PER_LESSON + " XP" : "Cofnięto ukończenie lekcji"); }
    if (a === "filter") { lib.p = el.dataset.p; view.innerHTML = library(); }
    if (a === "reset" && confirm("Na pewno usunąć cały postęp? Tej operacji nie można cofnąć.")) { Store.reset(); route(); toast("Postępy zresetowane"); }
    if (a === "export") {
      const url = URL.createObjectURL(new Blob([Store.exportJSON()], { type: "application/json" }));
      const x = document.createElement("a"); x.href = url; x.download = "football-edits-postepy.json"; x.click(); URL.revokeObjectURL(url);
    }
  });
  window.addEventListener("hashchange", route);
  route();
})();
