/* Zapis postępów w LocalStorage (z zapasem w pamięci, gdy LocalStorage jest zablokowany) */
(function () {
  const KEY = "fea.v1";
  const blank = () => ({ done: {}, checks: {}, tasks: {}, history: [], last: null, created: Date.now() });
  let st;
  try { st = Object.assign(blank(), JSON.parse(localStorage.getItem(KEY) || "{}")); }
  catch (e) { st = blank(); }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} };
  const log = (type, id) => {
    st.history.unshift({ t: Date.now(), type, id });
    st.history = st.history.slice(0, 100);
  };

  window.Store = {
    isDone: id => !!st.done[id],
    toggleDone(id) {
      if (st.done[id]) { delete st.done[id]; log("undone", id); }
      else { st.done[id] = Date.now(); log("done", id); }
      save(); return !!st.done[id];
    },
    checks: id => st.checks[id] || [],
    isChecked: (id, i) => (st.checks[id] || []).includes(i),
    toggleCheck(id, i) {
      const a = st.checks[id] || (st.checks[id] = []);
      const p = a.indexOf(i);
      p >= 0 ? a.splice(p, 1) : a.push(i);
      save();
    },
    taskDone: id => !!st.tasks[id],
    toggleTask(id) { st.tasks[id] ? delete st.tasks[id] : (st.tasks[id] = Date.now()); save(); },
    last: () => st.last,
    open(id) { if (st.last !== id) { st.last = id; log("open", id); save(); } },
    doneCount: () => Object.keys(st.done).length,
    history: () => st.history,
    exportJSON: () => JSON.stringify(st, null, 2),
    reset() { st = blank(); try { localStorage.removeItem(KEY); } catch (e) {} }
  };
})();
