const fixtures = [
  {
    short: "RR vs CSK",
    date: "March 30, 2026",
    time: "7:30 PM IST",
    venue: "Barsapara Cricket Stadium, Guwahati",
    note: "Opening night pressure, fresh combinations, and immediate spotlight on the new-look squad.",
    status: "Season opener"
  },
  {
    short: "CSK vs PBKS",
    date: "April 3, 2026",
    time: "7:30 PM IST",
    venue: "M. A. Chidambaram Stadium, Chennai",
    note: "First Chepauk outing of the phase and the first full home atmosphere of the campaign.",
    status: "Homecoming"
  },
  {
    short: "RCB vs CSK",
    date: "April 5, 2026",
    time: "7:30 PM IST",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    note: "A high-noise rivalry fixture that usually swings on death-over execution.",
    status: "Rivalry watch"
  },
  {
    short: "CSK vs DC",
    date: "April 11, 2026",
    time: "7:30 PM IST",
    venue: "M. A. Chidambaram Stadium, Chennai",
    note: "A tactical contest likely to revolve around spin matchups and middle-overs control.",
    status: "Phase closer"
  }
];

const squad = [
  { name: "Ruturaj Gaikwad", role: "batter", tag: "Captain", style: "Composed opener and tempo setter." },
  { name: "MS Dhoni", role: "wk-batter", tag: "Finisher", style: "Late-innings calm and game-reading authority." },
  { name: "Sanju Samson", role: "wk-batter", tag: "Strokeplay", style: "Explosive top-order shotmaker." },
  { name: "Dewald Brevis", role: "batter", tag: "Impact", style: "High-ceiling ball striker with range." },
  { name: "Ayush Mhatre", role: "batter", tag: "Youth", style: "Emerging batting option with intent." },
  { name: "Kartik Sharma", role: "wk-batter", tag: "Depth", style: "Wicketkeeping cover and batting flexibility." },
  { name: "Sarfaraz Khan", role: "batter", tag: "Middle order", style: "Busy scorer who manipulates the field." },
  { name: "Urvil Patel", role: "wk-batter", tag: "Utility", style: "Aggressive keeper-batter option." },
  { name: "Anshul Kamboj", role: "all-rounder", tag: "Seam support", style: "Useful overs and lower-order value." },
  { name: "Jamie Overton", role: "all-rounder", tag: "Pace power", style: "Hit-the-deck overs with batting muscle." },
  { name: "Ramakrishna Ghosh", role: "all-rounder", tag: "Balance", style: "Squad balance through both skills." },
  { name: "Prashant Veer", role: "all-rounder", tag: "Versatile", style: "Multi-phase option with bat and ball." },
  { name: "Matthew Short", role: "all-rounder", tag: "Flexible", style: "Top-order utility and part-time overs." },
  { name: "Aman Khan", role: "all-rounder", tag: "Cover", style: "Depth piece for batting and medium pace." },
  { name: "Zakary Foulkes", role: "all-rounder", tag: "Control", style: "All-round depth with tidy execution." },
  { name: "Shivam Dube", role: "all-rounder", tag: "Power", style: "Spin-hitting force through the middle." },
  { name: "Khaleel Ahmed", role: "bowler", tag: "Left-arm seam", style: "Angle and swing with the new ball." },
  { name: "Noor Ahmad", role: "bowler", tag: "Spin threat", style: "Wrist-spin variation and wicket-taking bursts." },
  { name: "Mukesh Choudhary", role: "bowler", tag: "Powerplay", style: "Early overs specialist with shape." },
  { name: "Nathan Ellis", role: "bowler", tag: "Death overs", style: "Change-ups and control in closing overs." },
  { name: "Shreyas Gopal", role: "bowler", tag: "Leg-spin", style: "Middle-over control through spin." },
  { name: "Gurjapneet Singh", role: "bowler", tag: "Tall pacer", style: "Bounce and hard-length option." },
  { name: "Akeal Hosein", role: "bowler", tag: "Left-arm spin", style: "Economy-focused spin matchup tool." },
  { name: "Matt Henry", role: "bowler", tag: "Precision", style: "Hit-the-seam discipline and experience." },
  { name: "Rahul Chahar", role: "bowler", tag: "Leg-spin", style: "Attacking spin with drift and dip." }
];

const news = [
  {
    title: "BCCI announces schedule for first phase of TATA IPL 2026",
    type: "Announcement",
    date: "March 11, 2026",
    copy: "The initial phase of the 2026 season is locked in, giving supporters an early run of four Chennai fixtures to track."
  },
  {
    title: "TATA IPL 2026 Player Retentions Announced",
    type: "Squad update",
    date: "November 15, 2025",
    copy: "CSK entered the auction cycle with one of the larger remaining purses and clear intent to refresh the squad core."
  },
  {
    title: "TATA IPL 2026 - Player Trade updates",
    type: "Transfer watch",
    date: "November 15, 2025",
    copy: "The trade window reshaped the conversation around Chennai's roster and shifted attention to a new batting mix."
  },
  {
    title: "Chennai Super Kings sign Urvil Patel as injury replacement for Vansh Bedi",
    type: "Replacement signing",
    date: "May 5, 2025",
    copy: "A squad management move that added another wicketkeeping option and batting depth into the wider group."
  },
  {
    title: "Chennai Super Kings sign Dewald Brevis as a replacement for the injured Gurjapneet Singh",
    type: "Replacement signing",
    date: "April 18, 2025",
    copy: "Brevis was brought in as an impact addition, giving supporters another explosive batter to watch."
  },
  {
    title: "Ruturaj Gaikwad takes over Chennai Super Kings captaincy from MS Dhoni",
    type: "Leadership",
    date: "March 21, 2024",
    copy: "A major passing-of-the-baton moment that still shapes the story arc of the current side."
  }
];

const tickerStates = [
  {
    phase: "Pre-match buzz",
    score: "CSK 0/0",
    update: "Training clips are out, combinations are being debated, and the spotlight is on how quickly the new group settles."
  },
  {
    phase: "Powerplay charge",
    score: "CSK 54/1",
    update: "A fast start changes the entire mood. Intent in the first six overs is often the first signal of a confident CSK outing."
  },
  {
    phase: "Spin squeeze",
    score: "RR 109/4",
    update: "This is where Chennai usually wants control: middle-overs pressure, singles denied, wickets forced."
  },
  {
    phase: "Death overs",
    score: "CSK need 18 off 12",
    update: "Close finishes are a franchise identity test. Calm decision-making matters as much as raw hitting power here."
  }
];

const pollKey = "csk-fan-poll";
const wallKey = "csk-fan-wall";

const defaultPoll = {
  "Powerplay intent": 41,
  "Spin choke": 33,
  "Finisher calm": 26
};

const defaultWallPosts = [
  { name: "Mahi Stand", message: "Keep the chase alive and let the yellow noise travel.", stamp: "Pinned chant" },
  { name: "Chepauk Echo", message: "The squad looks different, but the pressure-handling DNA still matters.", stamp: "Fan note" }
];

function getSavedJson(key, fallback) {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function setSavedJson(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Local storage can fail in restricted contexts. The UI still works in memory.
  }
}

function renderFixtures() {
  const container = document.getElementById("fixtures-grid");
  container.innerHTML = fixtures.map((fixture) => `
    <article class="fixture-card card">
      <span class="fixture-status">${fixture.status}</span>
      <h3>${fixture.short}</h3>
      <p>${fixture.note}</p>
      <footer>
        <strong>${fixture.date}</strong><br>
        ${fixture.time}<br>
        ${fixture.venue}
      </footer>
    </article>
  `).join("");
}

function formatRole(role) {
  return role
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("-");
}

function renderSquad(filter = "all") {
  const container = document.getElementById("squad-grid");
  const filteredSquad = filter === "all"
    ? squad
    : squad.filter((player) => player.role === filter);

  if (!filteredSquad.length) {
    container.innerHTML = '<div class="empty-state">No players match this role filter.</div>';
    return;
  }

  container.innerHTML = filteredSquad.map((player) => `
    <article class="player-card card">
      <div class="player-meta">
        <span class="player-role">${formatRole(player.role)}</span>
        <span class="player-tag">${player.tag}</span>
      </div>
      <h3>${player.name}</h3>
      <p>${player.style}</p>
    </article>
  `).join("");
}

function renderNews() {
  const container = document.getElementById("news-grid");
  container.innerHTML = news.map((item) => `
    <article class="news-card card">
      <div>
        <span class="fixture-status">${item.type}</span>
        <h3>${item.title}</h3>
        <p>${item.copy}</p>
      </div>
      <footer>
        <time datetime="${item.date}">${item.date}</time>
        <span>CSK desk</span>
      </footer>
    </article>
  `).join("");
}

function startCountdown() {
  const target = new Date("2026-03-30T19:30:00+05:30");
  const parts = document.querySelectorAll("#countdown strong");

  function tick() {
    const now = new Date();
    const remaining = Math.max(target.getTime() - now.getTime(), 0);
    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((remaining / (1000 * 60)) % 60);
    const seconds = Math.floor((remaining / 1000) % 60);

    [days, hours, minutes, seconds].forEach((value, index) => {
      parts[index].textContent = String(value).padStart(2, "0");
    });
  }

  tick();
  window.setInterval(tick, 1000);
}

function startTicker() {
  const phase = document.getElementById("ticker-phase");
  const score = document.getElementById("ticker-score");
  const update = document.getElementById("ticker-update");
  let index = 0;

  function paintState() {
    const state = tickerStates[index];
    phase.textContent = state.phase;
    score.textContent = state.score;
    update.textContent = state.update;
    index = (index + 1) % tickerStates.length;
  }

  paintState();
  window.setInterval(paintState, 3200);
}

function renderPoll() {
  const pollData = getSavedJson(pollKey, defaultPoll);
  const totalVotes = Object.values(pollData).reduce((sum, value) => sum + value, 0);
  const container = document.getElementById("poll-results");

  container.innerHTML = Object.entries(pollData).map(([label, value]) => {
    const percent = totalVotes === 0 ? 0 : Math.round((value / totalVotes) * 100);
    return `
      <div class="poll-row">
        <header>
          <span>${label}</span>
          <strong>${percent}%</strong>
        </header>
        <div class="bar"><span style="width: ${percent}%"></span></div>
      </div>
    `;
  }).join("");
}

function attachPollHandler() {
  const form = document.getElementById("poll-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const choice = formData.get("matchEdge");

    if (!choice) {
      return;
    }

    const pollData = getSavedJson(pollKey, defaultPoll);
    pollData[choice] += 1;
    setSavedJson(pollKey, pollData);
    renderPoll();
    form.reset();
  });
}

function renderWall() {
  const posts = getSavedJson(wallKey, defaultWallPosts);
  const container = document.getElementById("fan-wall");

  container.innerHTML = posts.map((post) => `
    <article>
      <small>${post.stamp}</small>
      <h4>${post.name}</h4>
      <p>${post.message}</p>
    </article>
  `).join("");
}

function attachWallHandler() {
  const form = document.getElementById("fan-form");
  const nameInput = document.getElementById("fan-name");
  const messageInput = document.getElementById("fan-message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !message) {
      return;
    }

    const posts = getSavedJson(wallKey, defaultWallPosts);
    const nextPosts = [
      {
        name,
        message,
        stamp: "Just posted"
      },
      ...posts
    ].slice(0, 6);

    setSavedJson(wallKey, nextPosts);
    renderWall();
    form.reset();
  });
}

function attachFilters() {
  const chips = Array.from(document.querySelectorAll(".filter-chip"));
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((item) => item.classList.remove("is-active"));
      chip.classList.add("is-active");
      renderSquad(chip.dataset.filter);
    });
  });
}

function attachNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function init() {
  renderFixtures();
  renderSquad();
  renderNews();
  renderPoll();
  renderWall();
  attachPollHandler();
  attachWallHandler();
  attachFilters();
  attachNavToggle();
  startCountdown();
  startTicker();
}

document.addEventListener("DOMContentLoaded", init);
