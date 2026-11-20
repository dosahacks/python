// ==========================================================================
// PYTHON PRACTICAL CENTRE — SENIOR DEV ORANGE CAT 🐈
// Interactive Logic & Self-Contained Vector Doodle Engine
// ==========================================================================

let currentExperiment = null;
let activeCategory = 'all';
let searchQuery = '';

// Hinglish Senior Dev Sigma Cat Dialogues (Python Edition)
const HINGLISH_MEME_QUOTES = [
  "Maine code review kiya... LGTM (Looks Garbage To Me)! 😼",
  "Main 7 saal se Senior Architect hoon, tu Indentation bhool gaya? 👓",
  "IndentationError: Expected an indented block. Tab dabana nahi aata kya? 💀",
  "Chai pee li? Ab chup chap Python code copy kar aur nikal.",
  "Git commit -m 'Fixed bug by replacing loops with list comprehension' — Sigma move 😼",
  "print(\"Padh le bhai viva hai\"); 🐾",
  "Main billi hoon, par mera code production pe bina Memory Leak ke chalta hai. 👔",
  "Dictionary samjha nahi, direct key lookup pe KeyError khaa gaya!",
  "Pythonic ban: Simple is better than complex, bina faltu boilerplate ke.",
  "Tera code dekh ke CPython interpreter ne voluntarily segfault kar diya.",
  "Le garreb, tu bhi kya aish karega! 😼",
  "Human detected. Intelligence not detected.",
  "Zen of Python: Readability counts, beta!"
];

// DOM Elements
const homeView = document.getElementById('home-view');
const codeView = document.getElementById('code-view');
const experimentsContainer = document.getElementById('experiments-container');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.neu-filter-btn');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

// Code View Elements
const backBtn = document.getElementById('back-btn');
const expNumEl = document.getElementById('code-exp-num');
const expCatEl = document.getElementById('code-exp-cat');
const expTitleEl = document.getElementById('code-exp-title');
const expAimEl = document.getElementById('code-exp-aim');
const expObjEl = document.getElementById('code-exp-obj');
const codeContainer = document.getElementById('code-content');
const lineNumbersContainer = document.getElementById('line-numbers');
const fileNameEl = document.getElementById('file-name');
const locCountEl = document.getElementById('loc-count');
const bigCopyBtn = document.getElementById('big-copy-btn');
const downloadBtn = document.getElementById('download-btn');
const prevExpBtn = document.getElementById('prev-exp-btn');
const nextExpBtn = document.getElementById('next-exp-btn');
const outputSection = document.getElementById('output-section');
const outputBody = document.getElementById('output-body');
const outputHeader = document.getElementById('output-header');

// Dynamic Mascot & Companion Elements
const heroCatMascot = document.getElementById('hero-mascot-card');
const heroCatBubble = document.getElementById('hero-cat-bubble');
const companionCatBox = document.getElementById('companion-cat-box');
const companionCatQuote = document.getElementById('companion-cat-quote');

// Sound synthesis stub
function playCatChirp() {
  // Peaceful experience
}

// ==========================================================================
// Initialize Self-Contained Vector Doodle Artwork
// ==========================================================================
function initVectorArtwork() {
  if (typeof CAT_ART === 'undefined') return;

  const splashWrapper = document.getElementById('splash-img-wrapper');
  if (splashWrapper && CAT_ART.splash) {
    splashWrapper.innerHTML = CAT_ART.splash;
  }

  const headerAvatar = document.getElementById('header-avatar');
  if (headerAvatar && CAT_ART.logo) {
    headerAvatar.innerHTML = CAT_ART.logo;
  }

  const heroAvatar = document.getElementById('hero-cat-avatar');
  if (heroAvatar && CAT_ART.heroMascot) {
    heroAvatar.innerHTML = CAT_ART.heroMascot;
  }

  const companionAvatar = document.getElementById('companion-cat-avatar');
  if (companionAvatar && CAT_ART.companion) {
    companionAvatar.innerHTML = CAT_ART.companion;
  }

  const toastMini = document.getElementById('toast-cat-mini');
  if (toastMini && CAT_ART.logo) {
    toastMini.innerHTML = CAT_ART.logo;
  }
}

// ==========================================================================
// Python Syntax Highlighter (Clean, safe, client-side regex engine)
// ==========================================================================
function highlightPython(code) {
  let escaped = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const tokens = [];

  // Triple-quoted Strings (Docstrings)
  escaped = escaped.replace(/(?:"""[\s\S]*?"""|'''[\s\S]*?''')/g, match => {
    tokens.push({ type: 'string', value: match });
    return `___TOKEN_${tokens.length - 1}___`;
  });

  // Single-line Comments (# ...)
  escaped = escaped.replace(/#.*$/gm, match => {
    tokens.push({ type: 'comment', value: match });
    return `___TOKEN_${tokens.length - 1}___`;
  });

  // Double-quoted Strings
  escaped = escaped.replace(/"(\\.|[^"\\])*"/g, match => {
    tokens.push({ type: 'string', value: match });
    return `___TOKEN_${tokens.length - 1}___`;
  });

  // Single-quoted Strings
  escaped = escaped.replace(/'(\\.|[^'\\])*'/g, match => {
    tokens.push({ type: 'string', value: match });
    return `___TOKEN_${tokens.length - 1}___`;
  });

  // Decorators / Directives (@decorator)
  escaped = escaped.replace(/(@\w+)/g, '<span class="token-directive">$1</span>');

  // Python Reserved Keywords
  const keywords = [
    'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def',
    'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if',
    'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise',
    'return', 'try', 'while', 'with', 'yield', 'True', 'False', 'None'
  ];
  const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
  escaped = escaped.replace(keywordRegex, '<span class="token-keyword">$1</span>');

  // Python Standard Built-ins & Exception Types
  const builtins = [
    'print', 'input', 'len', 'range', 'int', 'float', 'str', 'list', 'dict', 'set',
    'tuple', 'bool', 'open', 'type', 'sorted', 'zip', 'sum', 'min', 'max', 'abs',
    'round', 'enumerate', 'map', 'filter', 'all', 'any', 'id', 'dir', 'help',
    'super', 'isinstance', 'issubclass', 'Exception', 'ValueError', 'TypeError',
    'KeyError', 'IndexError', 'FileNotFoundError', 'IOError'
  ];
  const builtinRegex = new RegExp(`\\b(${builtins.join('|')})\\b`, 'g');
  escaped = escaped.replace(builtinRegex, '<span class="token-type">$1</span>');

  // Common Methods / Operations
  const methods = [
    'append', 'extend', 'insert', 'remove', 'pop', 'clear', 'index', 'count',
    'sort', 'reverse', 'copy', 'keys', 'values', 'items', 'get', 'update',
    'split', 'join', 'strip', 'lstrip', 'rstrip', 'replace', 'find', 'startswith',
    'endswith', 'lower', 'upper', 'title', 'capitalize', 'union', 'intersection',
    'difference', 'read', 'write', 'readline', 'readlines', 'close'
  ];
  const methodRegex = new RegExp(`\\b(${methods.join('|')})\\b`, 'g');
  escaped = escaped.replace(methodRegex, '<span class="token-keyword">$1</span>');

  // Numbers (Integers, Floats, Hex/Binary)
  escaped = escaped.replace(/\b(\d+(?:\.\d+)?|0x[0-9a-fA-F]+|0b[01]+)\b/g, '<span class="token-number">$1</span>');

  // Restore protected tokens
  escaped = escaped.replace(/___TOKEN_(\d+)___/g, (_, index) => {
    const token = tokens[parseInt(index, 10)];
    return `<span class="token-${token.type}">${token.value}</span>`;
  });

  return escaped;
}

function generateLineNumbers(code) {
  const lineCount = code.split('\n').length;
  let numbers = '';
  for (let i = 1; i <= lineCount; i++) {
    numbers += `${i}\n`;
  }
  return { html: numbers, count: lineCount };
}

// ==========================================================================
// Render Home View Cards (Doodle Editorial Cards with Vector Stamps)
// ==========================================================================
function renderExperiments() {
  const query = searchQuery.toLowerCase().trim();

  const filtered = EXPERIMENTS.filter(exp => {
    const key = exp.categoryKey || '';
    const catText = exp.category.toLowerCase();
    
    let matchesCat = (activeCategory === 'all');
    if (activeCategory === 'lists') {
      matchesCat = (key === 'lists' || catText.includes('list') || catText.includes('sequence') || catText.includes('set'));
    } else if (activeCategory === 'strings') {
      matchesCat = (key === 'strings' || catText.includes('string') || catText.includes('search') || catText.includes('text'));
    } else if (activeCategory === 'dict') {
      matchesCat = (key === 'dict' || catText.includes('dict') || catText.includes('mapping') || catText.includes('frequency'));
    } else if (activeCategory === 'files_basics') {
      matchesCat = (key === 'files' || key === 'basics' || catText.includes('file') || catText.includes('basic') || catText.includes('math'));
    }

    const matchesSearch = !query || 
      exp.title.toLowerCase().includes(query) ||
      exp.number.toLowerCase().includes(query) ||
      exp.shortNumber.toLowerCase().includes(query) ||
      exp.category.toLowerCase().includes(query) ||
      (exp.fileName && exp.fileName.toLowerCase().includes(query)) ||
      (exp.aim && exp.aim.toLowerCase().includes(query));

    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    const emptySvg = (typeof CAT_ART !== 'undefined' && CAT_ART.empty) ? CAT_ART.empty : '';
    experimentsContainer.innerHTML = `
      <div style="text-align: center; padding: 3rem 1.5rem; background: var(--color-warm-white); border-radius: var(--radius-xl); border: 3px solid var(--color-border-ink); box-shadow: var(--shadow-sketch-md);">
        <div style="display: flex; justify-content: center; margin-bottom: 1.25rem;">
          ${emptySvg}
        </div>
        <div style="font-family: var(--font-display); font-size: 1.2rem; font-weight: 800; color: var(--color-deep-orange); margin-bottom: 0.5rem;">
          404: ModuleNotFoundError: No module named 'Dimag' 🙀
        </div>
        <h3 style="font-family: var(--font-display); font-size: 1.4rem; font-weight: 900; color: var(--color-text-main);">No experiments found</h3>
        <p style="color: var(--color-text-sub); margin-top: 0.35rem; font-weight: 600;">Senior Dev Cat looked through all Python scripts and couldn't find a match. Try another search or click 'All Experiments'.</p>
      </div>
    `;
    return;
  }

  experimentsContainer.innerHTML = filtered.map(exp => {
    const catClass = exp.categoryKey || 'basics';
    const stampInfo = (typeof CAT_ART !== 'undefined' && CAT_ART.getExperimentStamp)
      ? CAT_ART.getExperimentStamp(exp.id)
      : { title: 'Senior Cat Approved', svg: '' };

    return `
      <a href="#/experiment/${exp.slug}" class="neu-card" data-slug="${exp.slug}">
        <div class="card-exp-num">
          <span class="lbl">EXP</span>
          <span class="val">${exp.shortNumber}</span>
        </div>
        
        <div class="card-info">
          <div class="card-tag-row">
            <span class="tag-badge ${catClass}">${exp.category}</span>
            <span class="cat-stamp-text">★ ${stampInfo.title}</span>
          </div>
          <h2 class="card-title-text">${exp.title}</h2>
        </div>

        <div class="card-cat-stamp" title="${stampInfo.title}">
          ${stampInfo.svg}
        </div>

        <div class="card-arrow-box" aria-label="Open Code">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </a>
    `;
  }).join('');
}

// ==========================================================================
// Code Page View
// ==========================================================================
function openExperiment(exp) {
  currentExperiment = exp;

  // Set Details
  expNumEl.textContent = exp.number;
  expCatEl.textContent = exp.category;
  expTitleEl.textContent = exp.title;
  expAimEl.textContent = exp.aim || exp.title;
  expObjEl.textContent = exp.objective || '';

  const fileName = exp.fileName || `${exp.slug}.py`;
  fileNameEl.textContent = fileName;

  // Syntax Highlighting & Line Numbers
  const { html: lineHtml, count } = generateLineNumbers(exp.code);
  lineNumbersContainer.textContent = lineHtml;
  locCountEl.textContent = `${count} lines`;
  codeContainer.innerHTML = highlightPython(exp.code);

  // Sample Output
  if (exp.sampleOutput) {
    outputSection.style.display = 'block';
    outputBody.textContent = exp.sampleOutput;
  } else {
    outputSection.style.display = 'none';
  }

  // Prev / Next Navigation buttons
  const currentIndex = EXPERIMENTS.findIndex(e => e.id === exp.id);
  if (currentIndex > 0) {
    prevExpBtn.disabled = false;
    prevExpBtn.onclick = () => window.location.hash = `#/experiment/${EXPERIMENTS[currentIndex - 1].slug}`;
  } else {
    prevExpBtn.disabled = true;
  }

  if (currentIndex < EXPERIMENTS.length - 1) {
    nextExpBtn.disabled = false;
    nextExpBtn.onclick = () => window.location.hash = `#/experiment/${EXPERIMENTS[currentIndex + 1].slug}`;
  } else {
    nextExpBtn.disabled = true;
  }

  // Set random witty quote for companion cat
  if (companionCatQuote) {
    companionCatQuote.textContent = getRandomQuote();
  }

  // Switch View
  homeView.classList.remove('active');
  codeView.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function showHome() {
  currentExperiment = null;
  codeView.classList.remove('active');
  homeView.classList.add('active');
}

function getRandomQuote() {
  return HINGLISH_MEME_QUOTES[Math.floor(Math.random() * HINGLISH_MEME_QUOTES.length)];
}

// ==========================================================================
// Copy to Clipboard (Robust with Fallback)
// ==========================================================================
async function copyCurrentCode() {
  if (!currentExperiment) return;

  const codeToCopy = currentExperiment.code;
  let success = false;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(codeToCopy);
      success = true;
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = codeToCopy;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      success = document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  } catch (err) {
    console.error('Copy failed:', err);
    success = false;
  }

  if (success) {
    playCatChirp();
    showToast('Copied Successfully! 😼');

    if (companionCatQuote) {
      companionCatQuote.textContent = "Maine bola tha na, copy kar aur aish kar! 🐾";
    }

    // Button feedback
    const originalText = bigCopyBtn.innerHTML;
    bigCopyBtn.classList.add('copied');
    bigCopyBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>COPIED TO CLIPBOARD! 😼</span>
    `;

    setTimeout(() => {
      bigCopyBtn.classList.remove('copied');
      bigCopyBtn.innerHTML = originalText;
    }, 2400);
  } else {
    showToast('Failed to copy. Please select manually.');
  }
}

// Toast Display
let toastTimeout;
function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

// Download .py file
function downloadCurrentCode() {
  if (!currentExperiment) return;
  const fileName = currentExperiment.fileName || `${currentExperiment.slug}.py`;
  const blob = new Blob([currentExperiment.code], { type: 'text/x-python;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  playCatChirp();
  showToast(`Downloaded ${fileName}! 🐈`);
}

// ==========================================================================
// Routing (Hash-based)
// ==========================================================================
function handleRouting() {
  const hash = window.location.hash;

  if (hash.startsWith('#/experiment/')) {
    const slug = hash.replace('#/experiment/', '');
    const found = EXPERIMENTS.find(e => e.slug === slug || String(e.id) === slug);
    if (found) {
      openExperiment(found);
      return;
    }
  }

  showHome();
}

// ==========================================================================
// 3-Second "MASALA DOSA?" Splash Screen Handler
// ==========================================================================
function initSplashScreen() {
  const splash = document.getElementById('splash-screen');
  if (!splash) return;

  const dismissSplash = () => {
    splash.classList.add('fade-out');
    setTimeout(() => {
      splash.style.display = 'none';
    }, 400);
  };

  // Automatically fade out after 1.5 seconds (1500ms)
  setTimeout(dismissSplash, 1500);

  // Allow clicking anywhere on the splash to enter immediately
  splash.addEventListener('click', dismissSplash);
}

// ==========================================================================
// Event Listeners & Cat Interactions
// ==========================================================================
window.addEventListener('hashchange', handleRouting);
window.addEventListener('DOMContentLoaded', () => {
  initVectorArtwork();
  initSplashScreen();
  renderExperiments();
  handleRouting();

  if (heroCatBubble) {
    heroCatBubble.textContent = "Maine code review kiya... LGTM (Looks Garbage To Me)! 😼";
  }
});

// Search input
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderExperiments();
});

// Category filter buttons
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.category;
    playCatChirp();
    renderExperiments();
  });
});

// Big Copy Button
bigCopyBtn.addEventListener('click', copyCurrentCode);

// Download button
downloadBtn.addEventListener('click', downloadCurrentCode);

// Back to experiments
backBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.hash = '#/';
});

// Logo click
document.querySelector('.logo-group').addEventListener('click', (e) => {
  e.preventDefault();
  window.location.hash = '#/';
});

// Output toggle collapse/expand
if (outputHeader) {
  outputHeader.addEventListener('click', () => {
    outputBody.style.display = outputBody.style.display === 'none' ? 'block' : 'none';
  });
}

// Interactive Cat Clicks
if (heroCatMascot) {
  heroCatMascot.addEventListener('click', () => {
    playCatChirp();
    if (heroCatBubble) {
      heroCatBubble.textContent = getRandomQuote();
    }
  });
}

if (companionCatBox) {
  companionCatBox.addEventListener('click', () => {
    playCatChirp();
    if (companionCatQuote) {
      companionCatQuote.textContent = getRandomQuote();
    }
  });
}

// Keyboard shortcuts
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && codeView.classList.contains('active')) {
    window.location.hash = '#/';
  }

  if ((e.key === 'c' || e.key === 'C') && codeView.classList.contains('active')) {
    if (document.activeElement !== searchInput) {
      copyCurrentCode();
    }
  }

  if ((e.key === '/' || (e.ctrlKey && e.key === 'k')) && homeView.classList.contains('active')) {
    if (document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  }
});
