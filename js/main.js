const columns = [
  { label: "openQA", hint: "Avg. ↑", low: false },
  { label: "MCQ", hint: "Avg. ↑", low: false },
  { label: "T2P L₂", hint: "↓", low: true },
  { label: "T2B mIoU", hint: "↑", low: false },
  { label: "Acc", hint: "↑", low: false },
  { label: "R-L", hint: "↑", low: false },
  { label: "B-4", hint: "↑", low: false },
  { label: "mIoU", hint: "↑", low: false },
  { label: "F1", hint: "↑", low: false },
  { label: "R-L", hint: "↑", low: false },
  { label: "B-4", hint: "↑", low: false },
  { label: "Acc", hint: "↑", low: false },
  { label: "Acc", hint: "↑", low: false },
  { label: "Acc", hint: "↑", low: false },
  { label: "F1", hint: "↑", low: false },
  { label: "F1", hint: "↑", low: false },
];

const groups = [
  ["Average", 2],
  ["GTL", 2],
  ["GTD", 3],
  ["GSL", 1],
  ["GSD", 3],
  ["GDO", 1],
  ["GDR", 1],
  ["GCD", 1],
  ["ARR", 1],
  ["PV", 1],
];

const models = [
  ["Gemini-2.5-Flash", "closed", [0.111, 0.537, 0.237, 0.032, 0.432, 0.152, 0.065, 0.074, 0.493, 0.267, 0.109, 0.557, 0.385, 0.816, 0.000, 0.111]],
  ["Gemini-2.5-Pro", "closed", [0.191, 0.644, 0.189, 0.085, 0.532, 0.159, 0.065, 0.197, 0.588, 0.227, 0.109, 0.792, 0.575, 0.731, 0.049, 0.529]],
  ["Gemini-3.7-Flash", "closed", [0.298, 0.770, 0.131, 0.038, 0.609, 0.237, 0.149, 0.047, 0.717, 0.276, 0.124, 0.901, 0.785, 0.840, 0.621, 0.630]],
  ["Gemini-3.1-Pro", "closed", [0.196, 0.746, 0.194, 0.029, 0.581, 0.137, 0.102, 0.040, 0.742, 0.204, 0.107, 0.875, 0.734, 0.800, 0.140, 0.642]],
  ["DeepSeek-V4-Flash", "closed", [0.181, 0.394, 0.341, 0.023, 0.258, 0.125, 0.115, 0.026, 0.314, 0.137, 0.067, 0.615, 0.292, 0.493, 0.000, 0.797]],
  ["GLM-5.3-Flash", "closed", [0.170, 0.639, 0.254, 0.090, 0.515, 0.175, 0.097, 0.247, 0.606, 0.277, 0.117, 0.770, 0.666, 0.640, 0.095, 0.180]],
  ["Grok-4.6", "closed", [0.250, 0.645, 0.241, 0.076, 0.505, 0.236, 0.153, 0.128, 0.586, 0.205, 0.092, 0.785, 0.642, 0.707, 0.404, 0.533]],
  ["Qwen3-Max", "closed", [0.192, 0.405, 0.342, 0.019, 0.271, 0.161, 0.096, 0.014, 0.306, 0.189, 0.086, 0.580, 0.274, 0.593, 0.000, 0.800]],
  ["GPT-5.6-Sol", "closed", [0.256, 0.641, 0.176, 0.116, 0.510, 0.257, 0.179, 0.248, 0.513, 0.267, 0.122, 0.785, 0.573, 0.824, 0.048, 0.672]],
  ["Qwen3-VL-2B", "open", [0.087, 0.465, 0.387, 0.040, 0.394, 0.210, 0.116, 0.081, 0.483, 0.128, 0.061, 0.550, 0.237, 0.660, 0.000, 0.011]],
  ["Qwen3.5-2B", "open", [0.142, 0.421, 0.372, 0.070, 0.377, 0.241, 0.153, 0.104, 0.340, 0.140, 0.045, 0.461, 0.209, 0.720, 0.182, 0.126]],
  ["InternVL3-2B", "open", [0.100, 0.453, 0.610, 0.020, 0.370, 0.212, 0.119, 0.045, 0.444, 0.235, 0.092, 0.532, 0.249, 0.671, 0.000, 0.000]],
  ["InternVL3.5-2B", "open", [0.113, 0.463, 0.536, 0.005, 0.434, 0.195, 0.123, 0.177, 0.495, 0.218, 0.081, 0.590, 0.196, 0.602, 0.000, 0.000]],
  ["RynnBrain-2B", "open", [0.146, 0.557, 0.369, 0.000, 0.494, 0.153, 0.115, 0.000, 0.540, 0.043, 0.053, 0.711, 0.334, 0.704, 0.000, 0.658]],
  ["Embodied-R1-3B", "open", [0.194, 0.469, 0.765, 0.004, 0.389, 0.136, 0.080, 0.022, 0.438, 0.160, 0.069, 0.546, 0.292, 0.682, 0.115, 0.777]],
  ["Qwen3-VL-4B", "open", [0.147, 0.550, 0.329, 0.058, 0.496, 0.223, 0.127, 0.121, 0.568, 0.223, 0.102, 0.545, 0.352, 0.789, 0.000, 0.233]],
  ["Qwen2.5-VL-7B", "open", [0.143, 0.506, 0.591, 0.008, 0.403, 0.142, 0.066, 0.038, 0.445, 0.174, 0.074, 0.522, 0.385, 0.773, 0.261, 0.244]],
  ["MiMo-Embodied-7B", "open", [0.114, 0.210, 0.859, 0.004, 0.120, 0.101, 0.042, 0.005, 0.001, 0.121, 0.031, 0.268, 0.044, 0.616, 0.000, 0.496]],
  ["Pelican-VL-7B", "open", [0.088, 0.532, 0.732, 0.000, 0.379, 0.189, 0.107, 0.000, 0.450, 0.128, 0.064, 0.721, 0.352, 0.758, 0.118, 0.012]],
  ["RoboBrain-2.0-7B", "open", [0.081, 0.561, 0.511, 0.004, 0.391, 0.184, 0.095, 0.002, 0.391, 0.180, 0.082, 0.757, 0.535, 0.731, 0.025, 0.000]],
  ["VeBrain-7B", "open", [0.226, 0.496, 0.476, 0.026, 0.399, 0.285, 0.148, 0.058, 0.508, 0.121, 0.052, 0.449, 0.362, 0.760, 0.157, 0.760]],
  ["InternVL3-8B", "open", [0.237, 0.548, 0.326, 0.044, 0.468, 0.200, 0.109, 0.179, 0.490, 0.264, 0.107, 0.551, 0.449, 0.780, 0.025, 0.777]],
  ["InternVL3.5-8B", "open", [0.207, 0.467, 0.227, 0.088, 0.452, 0.159, 0.108, 0.177, 0.304, 0.183, 0.088, 0.613, 0.241, 0.724, 0.000, 0.734]],
  ["Embodied-R1.5-8B", "open", [0.203, 0.617, 0.246, 0.068, 0.508, 0.215, 0.128, 0.241, 0.611, 0.164, 0.091, 0.725, 0.506, 0.736, 0.000, 0.583]],
  ["RoboBrain-2.5-8B", "open", [0.188, 0.569, 0.319, 0.049, 0.488, 0.132, 0.053, 0.237, 0.566, 0.210, 0.081, 0.589, 0.411, 0.793, 0.000, 0.603]],
  ["RynnBrain-9B", "open", [0.165, 0.322, 0.687, 0.007, 0.154, 0.091, 0.036, 0.068, 0.149, 0.131, 0.049, 0.527, 0.198, 0.580, 0.000, 0.779]],
  ["Qwen3.5-27B", "open", [0.227, 0.498, 0.173, 0.137, 0.339, 0.262, 0.167, 0.340, 0.060, 0.210, 0.095, 0.724, 0.576, 0.791, 0.049, 0.467]],
  ["Qwen3.6-27B", "open", [0.239, 0.487, 0.229, 0.112, 0.340, 0.270, 0.181, 0.395, 0.048, 0.211, 0.095, 0.724, 0.534, 0.789, 0.025, 0.498]],
  ["Qwen3.8-27B", "open", [0.232, 0.401, 0.223, 0.152, 0.159, 0.282, 0.179, 0.294, 0.032, 0.221, 0.085, 0.640, 0.365, 0.811, 0.025, 0.539]],
  ["Hy-Embodied-30B", "open", [0.062, 0.603, 0.262, 0.000, 0.434, 0.079, 0.100, 0.002, 0.542, 0.171, 0.079, 0.748, 0.500, 0.791, 0.000, 0.000]],
  ["Qwen3-VL-32B", "open", [0.228, 0.641, 0.255, 0.108, 0.569, 0.221, 0.135, 0.366, 0.667, 0.239, 0.103, 0.693, 0.482, 0.796, 0.000, 0.529]],
  ["InternVL3-38B", "open", [0.163, 0.655, 0.336, 0.092, 0.552, 0.185, 0.112, 0.253, 0.592, 0.259, 0.113, 0.755, 0.557, 0.818, 0.025, 0.197]],
  ["InternVL3.5-38B", "open", [0.178, 0.577, 0.694, 0.092, 0.462, 0.205, 0.098, 0.290, 0.478, 0.210, 0.088, 0.728, 0.429, 0.787, 0.000, 0.358]],
  ["LookAnything", "ours", [0.522, 0.839, 0.096, 0.321, 0.726, 0.453, 0.272, 0.596, 0.856, 0.416, 0.209, 0.916, 0.856, 0.842, 0.783, 0.923]],
].map(([name, group, scores], order) => ({ name, group, scores, order }));

const state = { filter: "all", query: "", col: 0, bestFirst: true };

function better(a, b, col) {
  return columns[col].low ? a < b : a > b;
}

function secondBest() {
  return columns.map((_, col) => {
    const pool = models.filter((m) => m.group !== "ours").map((m) => m.scores[col]);
    let best = pool[0];
    for (const value of pool) if (better(value, best, col)) best = value;
    return best;
  });
}

const baselineBest = secondBest();

function visibleModels() {
  const q = state.query.trim().toLowerCase();
  return models.filter((model) => {
    const groupOk = state.filter === "all" || model.group === state.filter || (state.filter === "open" && model.group === "ours");
    const textOk = !q || model.name.toLowerCase().includes(q);
    return groupOk && textOk;
  });
}

function sortedModels() {
  const rows = visibleModels();
  rows.sort((a, b) => {
    const av = a.scores[state.col];
    const bv = b.scores[state.col];
    if (av !== bv) {
      const cmp = av < bv ? -1 : 1;
      const bestDirection = columns[state.col].low ? 1 : -1;
      return cmp * bestDirection * (state.bestFirst ? 1 : -1);
    }
    return a.order - b.order;
  });
  return rows;
}

function pill(group) {
  if (group === "ours") return '<span class="pill ours">Ours</span>';
  if (group === "closed") return '<span class="pill closed">Closed</span>';
  return '<span class="pill open">Open</span>';
}

function renderLeaderboard() {
  const body = document.querySelector("#leaderboard-body");
  const rows = sortedModels();
  if (!rows.length) {
    body.innerHTML = '<tr><td class="empty-row" colspan="17">No models match this search.</td></tr>';
    return;
  }
  body.innerHTML = rows.map((model, index) => {
    const cells = model.scores.map((value, col) => {
      let cls = "";
      if (model.group === "ours") cls = "best";
      else if (Math.abs(value - baselineBest[col]) < 1e-9) cls = "second";
      return `<td class="${cls}">${value.toFixed(3)}</td>`;
    }).join("");
    return `<tr class="${model.group === "ours" ? "ours" : ""}"><td><div class="model-cell"><span class="rank">${index + 1}</span><span>${model.name}</span>${pill(model.group)}</div></td>${cells}</tr>`;
  }).join("");
}

function renderSortHeaders() {
  document.querySelectorAll("[data-sort]").forEach((button) => {
    const col = Number(button.dataset.sort);
    const active = col === state.col;
    button.setAttribute("aria-sort", active ? (state.bestFirst ? "descending" : "ascending") : "none");
    const arrow = button.querySelector(".arrow");
    if (arrow) arrow.textContent = active ? (state.bestFirst ? "↓" : "↑") : "";
  });
}

function setupLeaderboard() {
  const head = document.querySelector("#leaderboard-head");
  const groupRow = groups.map(([name, span]) => `<th class="group-head" colspan="${span}">${name}</th>`).join("");
  const metricRow = columns.map((col, index) => {
    return `<th><button class="sort-btn" type="button" data-sort="${index}" aria-sort="none">${col.label} ${col.hint} <span class="arrow"></span></button></th>`;
  }).join("");
  head.innerHTML = `<tr><th rowspan="2">Model</th>${groupRow}</tr><tr>${metricRow}</tr>`;
  head.addEventListener("click", (event) => {
    const button = event.target.closest("[data-sort]");
    if (!button) return;
    const col = Number(button.dataset.sort);
    if (state.col === col) state.bestFirst = !state.bestFirst;
    else {
      state.col = col;
      state.bestFirst = true;
    }
    renderSortHeaders();
    renderLeaderboard();
  });
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((item) => {
        item.setAttribute("aria-pressed", item === button ? "true" : "false");
      });
      renderLeaderboard();
    });
  });
  document.querySelector("#model-search").addEventListener("input", (event) => {
    state.query = event.target.value;
    renderLeaderboard();
  });
  renderSortHeaders();
  renderLeaderboard();
}

function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupLightbox() {
  const dialog = document.querySelector("#lightbox");
  const image = dialog.querySelector("img");
  document.querySelectorAll("[data-zoom]").forEach((button) => {
    button.addEventListener("click", () => {
      const source = button.querySelector("img");
      image.src = button.dataset.zoom;
      image.alt = source ? source.alt : "";
      dialog.showModal();
    });
  });
  dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

function attachVideo(video, button) {
  const show = () => { button.hidden = false; };
  const hide = () => { button.hidden = true; };
  button.addEventListener("click", () => {
    const play = video.play();
    if (play) play.catch(() => show());
  });
  video.addEventListener("play", hide);
  video.addEventListener("pause", () => {
    if (video.currentTime > 0 && !video.ended) return;
    show();
  });
  video.addEventListener("error", () => {
    const note = video.parentElement.querySelector(".media-error");
    if (note) note.classList.add("show");
    show();
  });
}

function setupHero() {
  attachVideo(document.querySelector("#hero-video"), document.querySelector("#hero-play"));
}

function setupSwitchers() {
  document.querySelectorAll("[data-switcher]").forEach((root) => {
    const video = root.querySelector("video");
    const play = root.querySelector(".play-btn");
    const caption = root.querySelector("p[data-caption]");
    const tabs = [...root.querySelectorAll("[role='tab']")];
    const select = (tab, autoplay) => {
      tabs.forEach((item) => {
        const on = item === tab;
        item.setAttribute("aria-selected", on ? "true" : "false");
        item.tabIndex = on ? 0 : -1;
      });
      video.pause();
      video.preload = "none";
      video.poster = tab.dataset.poster;
      video.src = tab.dataset.src;
      caption.textContent = tab.dataset.caption;
      play.hidden = false;
      const note = root.querySelector(".media-error");
      if (note) note.classList.remove("show");
      if (autoplay) {
        const pending = video.play();
        if (pending) pending.catch(() => { play.hidden = false; });
      }
    };
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => select(tab, video.currentTime > 0 && !video.paused));
      tab.addEventListener("keydown", (event) => {
        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
        event.preventDefault();
        const next = event.key === "ArrowRight" ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length;
        tabs[next].focus();
        select(tabs[next], false);
      });
    });
    attachVideo(video, play);
    select(tabs[0], false);
  });
}

setupNav();
setupHero();
setupSwitchers();
setupLightbox();
setupLeaderboard();
