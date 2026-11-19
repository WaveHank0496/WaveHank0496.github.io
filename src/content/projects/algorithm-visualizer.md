---
title:
  zh: "演算法可視化工具"
  en: "Algorithm Visualizer"
summary:
  zh: "用動畫一步步呈現 6 種排序演算法，也能並排比較兩種演算法。"
  en: "Animates 6 sorting algorithms step by step and lets you compare two side by side."
story:
  zh:
    - "一個單頁網頁，用動畫一步一步播放 6 種排序演算法。可以暫停、單步前進、調整速度，也能把兩種演算法並排比較；畫面上會即時顯示比較次數、交換次數和時間複雜度。"
    - "做法是先把排序過程中的每一次比較與交換記錄下來，再依序播放成動畫，並用顏色區分已排序和未排序的區段。沒有用任何框架，只用 HTML、CSS、JavaScript。"
  en:
    - "A single-page site that animates 6 sorting algorithms step by step. You can pause, step forward, change speed and compare two algorithms side by side, with live counts of comparisons and swaps and each algorithm's time complexity."
    - "It records every comparison and swap first, then replays them as an animation, coloring sorted and unsorted regions. No framework, just HTML, CSS and JavaScript."
tier: 3
featured: false
order: 8
date:
  zh: "2026 冬"
  en: "Winter 2026"
sortDate: 2026-01-23
role:
  zh:
    - "獨立製作的單頁網頁"
  en:
    - "Solo single-page web app"
stack: ["HTML", "CSS", "JavaScript"]
highlights:
  zh:
    - "支援 Bubble、Quick、Merge、Insertion、Selection、Heap Sort"
  en:
    - "Covers Bubble, Quick, Merge, Insertion, Selection and Heap Sort"
challenges:
  - problem:
      zh: "排序過程一瞬間就結束，看不出每一步在做什麼。"
      en: "Sorting finishes instantly, hiding what each step does."
    solution:
      zh: "把每一步比較與交換記錄下來，再依序播放成動畫，並用顏色標示已排序與未排序區段。"
      en: "Record every comparison and swap, replay them as an animation, and color-code sorted and unsorted regions."
links:
  - label:
      zh: "線上試玩"
      en: "Live demo"
    url: "https://wavehank0496.github.io/algorithm_anime/"
  - label:
      zh: "GitHub 原始碼"
      en: "Source on GitHub"
    url: "https://github.com/WaveHank0496/algorithm_anime"
cover: "/images/projects/algorithm.svg"
isPrivate: false
---
