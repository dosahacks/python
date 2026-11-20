# 🐈 Python Practical Centre — Senior Dev Orange Cat Edition 👓

A high-personality **Neumorphic Soft UI & Editorial Doodle** Python Programming practical code library revolving around the viral **Senior Dev Orange Cat** mascot. Featuring **100% self-contained vector SVG illustrations** (zero external raster image or remote URL dependencies), tactile Neumorphic soft shadows, interactive Hinglish meme dialogues, and 1-click code copying for all 9 experiments from the official **Python Programming Laboratory Manual** (*Indrayani Vidya Mandir's Yashoda Mahadeo Kakade College of Engineering, Second-Year Computer Science and Engineering*).

---

## 🎨 Main Theme & Character Identity

Recreated directly from the viral Senior Dev Cat selfie (*Image 1*), colored-pencil doodle illustration (*Image 2*), and the iconic Side-Eye Orange Cat meme:

- **Character Likeness**:
  - **Ginger Tabby Coat**: Forehead "M" marking, cheek stripes, and soft peach muzzle.
  - **Hipster Browline Glasses**: Bold black top browline, distinct thin white lower rims, keyhole nose bridge, and corner metallic pin rivets.
  - **Formal Outfit**: Crisp white dress shirt collar pointed outward with a dark navy blue necktie and silver tie bar.
  - **Coding Desk Scene**: Tilted computer monitor displaying syntax-highlighted IDE code lines, desk plant in terracotta pot, keyboard, and foreground selfie paw.
  - **Sigma Personality**: Deadpan judging squint, mischievous slight smirk, and heavy-lidded eyes with real CSS eye-blinking animation.
- **Zero External Dependencies**:
  - All illustrations are embedded directly as vector paths in [`cat-art.js`](file:///c:/Users/admin/OneDrive/Desktop/dosa-main/cat-art.js).
  - No remote CDNs, no missing image paths on GitHub Pages, and instant zero-latency loading.
- **Neumorphic Soft UI Design**:
  - Convex tactile cards with smooth dual inset/drop shadows.
  - Tactile pressed button states.
  - Cream and warm white background tones with vibrant orange accents (`#F28C28`, `#D96B16`).
- **Micro-Interactions**:
  - Eye blinking animation on the cat mascot (`@keyframes catBlink`).
  - Wobbling speech bubble cycling witty Python Hinglish code review quotes on click.
  - Companion Cat outside the code window with witty Senior Dev commentary.
  - 9 custom doodle reaction stamps tailored for each Python experiment card.
  - 404 empty state: `ModuleNotFoundError: No module named 'Dimag'` with the confused cat peering over slipped glasses.
  - 1.5-second splash screen featuring the viral side-eye orange cat mascot with its iconic deadpan expression.

---

## 📚 9 Lab Experiments Included (Complete Python Lab Manual)

1. **Experiment 01 — Area of Triangle, Rectangle, and Circle**
   - File: `area_shapes.py`
   - Covers: Basic Python syntax, variables, arithmetic operators, Heron's formula for triangle area (`math.sqrt`), rectangle area, and circle area with $\pi \cdot r^2$.
2. **Experiment 02 — Union of Two Lists**
   - File: `list_union.py`
   - Covers: Dynamic list input via `input()` and `append()`, list concatenation (`list1 + list2`), and set conversion (`set()`) to find unique union elements.
3. **Experiment 03 — Intersection of Two Lists**
   - File: `list_intersection.py`
   - Covers: Dynamic list input, set conversion, and the set intersection method (`set(list1).intersection(set(list2))`).
4. **Experiment 04 — Remove the i-th Occurrence of a Word from a List**
   - File: `remove_occurrence.py`
   - Covers: Sequential list scanning, occurrence tallying, finding the exact $i$-th target index, and removal using `list.pop(index)`.
5. **Experiment 05 — Count the Occurrences of Each Word in a Sentence**
   - File: `word_count.py`
   - Covers: String splitting into words (`sentence.split()`), word list enumeration, and occurrence tallying using `list.count()`.
6. **Experiment 06 — Check Whether a Substring Is Present in a String**
   - File: `check_substring.py`
   - Covers: Python membership testing (`sub in main_string`), `string.find()` index lookup, and conditional branch validation.
7. **Experiment 07 — Map Two Lists into a Dictionary**
   - File: `map_lists_to_dict.py`
   - Covers: Parallel list iteration, key-value association, and idiomatic dictionary construction using `dict(zip(keys, values))`.
8. **Experiment 08 — Count Word Frequency Using a Dictionary**
   - File: `word_frequency.py`
   - Covers: Sentence splitting, dictionary hash table frequency mapping, `dict.get(word, 0)` accumulator pattern, and formatted frequency output.
9. **Experiment 09 — Read a File and Capitalize the First Letter of Every Word**
   - File: `capitalize_file.py`
   - Covers: Context manager `with open(filename, 'r')`, safe file reading, `line.title()` string transformation, and clean stream handling.

---

## 🚀 Key Features

- **Python Syntax Highlighter**: Client-side regex engine coloring Python keywords (`def`, `for`, `in`, `with`, `as`), built-ins (`print`, `len`, `dict`, `set`, `list`, `zip`), strings, docstrings, numbers, and `#` comments in an IDE-style container.
- **Fast Filtering & Search**: Instant filter chips (*All Experiments*, *Lists & Sets*, *Strings & Search*, *Dictionaries*, *Files & Basics*) and search bar (shortcut: `/` or `Ctrl+K`).
- **Single-Click Copy & Download**: Prominent **COPY CODE** button (shortcut: `C`) with clipboard fallback and **Download .py** file support (`text/x-python`).
- **Verified STDOUT Outputs**: Collapsible terminal box displaying exact manual verification outputs.
- **Full Responsiveness & Accessibility**: Tested for desktop, tablet, and mobile, with `@media (prefers-reduced-motion: reduce)` support.

---

## 💻 How to Run

1. Open [`index.html`](file:///c:/Users/admin/OneDrive/Desktop/dosa-main/index.html) directly in any browser (Chrome, Edge, Firefox, Safari).
2. Ready for instant deployment to **GitHub Pages** with zero build steps or broken asset paths (`.nojekyll` and GitHub Actions workflow included).
