---
title:
  zh: "Fuel 影片學習工具"
  en: "Fuel: Burn Your Info-fat"
summary:
  zh: "反囤積的學習工具：貼上 YouTube 連結，由 Gemini 產生測驗與摘要，搭配槽位限制與養成寵物機制，逼自己真正消化收藏的影片。"
  en: "An anti-hoarding learning tool: paste a YouTube link and Gemini generates a quiz and summary, with slot limits and a pet system that push you to actually digest saved videos."
story:
  zh:
    - "「稍後觀看」清單只會越來越長。Fuel 把收藏的影片當成要燒掉的「資訊脂肪」：貼上 YouTube 連結，程式自動抓字幕，Gemini 出一份理解測驗和摘要，答過測驗才算真的消化。"
    - "為了讓人不要繼續囤積，我用遊戲規則取代提醒：一次最多只能放 5 支影片，放進「煉獄區」的影片 24 小時內沒處理就會自動銷毀；還有一隻浣熊寵物，狀態會跟著你的學習進度變化。"
    - "最早是終端機版本，之後做了桌面版（CustomTkinter）和網頁版（FastAPI＋Alpine.js）。原本規劃接著做 Telegram 和 LINE Bot，目前暫停開發。"
  en:
    - "Watch-later lists only grow. Fuel treats saved videos as info-fat to burn: paste a YouTube link, the app pulls the transcript, Gemini writes a comprehension quiz and summary, and a video only counts once you have taken the quiz."
    - "To stop hoarding, I used game rules instead of reminders: you can hold at most 5 videos, anything left in the 'purgatory' area for 24 hours self-destructs, and a raccoon pet's mood follows your learning progress."
    - "It began as a terminal app, then got a desktop version (CustomTkinter) and a web version (FastAPI + Alpine.js). Telegram and LINE bots were next on the roadmap; development is currently paused."
tier: 2
featured: false
order: 6
date:
  zh: "2026 冬（開發暫停）"
  en: "Winter 2026 (paused)"
sortDate: 2026-01-27
status:
  zh: "開發暫停"
  en: "Paused"
role:
  zh:
    - "獨立開發：產品概念、AI 測驗流程、桌面版與網頁版"
  en:
    - "Solo project: product concept, AI quiz flow, desktop and web versions"
stack: ["Python", "FastAPI", "Alpine.js", "Tailwind CSS", "Gemini API", "CustomTkinter"]
highlights:
  zh:
    - "自動擷取 YouTube 字幕，AI 生成理解測驗"
    - "5 個槽位上限防止囤積，24 小時沒處理就自動清除"
  en:
    - "Automatic YouTube transcript extraction and AI-generated comprehension quizzes"
    - "A 5-slot limit prevents hoarding; items untouched for 24 hours are cleared"
challenges:
  - problem:
      zh: "「稍後觀看」清單只會越積越多，收藏不等於學會。"
      en: "Watch-later lists only grow; saving is not learning."
    solution:
      zh: "用遊戲化的限制取代提醒：槽位上限、限時清除，寵物狀態反映學習進度，必須通過測驗才算消化。"
      en: "Replace reminders with game-like constraints: limited slots, timed expiry, and a pet whose state reflects progress; a video only counts once you pass its quiz."
links: []
cover: "/images/projects/fuel.svg"
isPrivate: true
---
