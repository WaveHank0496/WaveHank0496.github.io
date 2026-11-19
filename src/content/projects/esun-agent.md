---
title:
  zh: "AI CUP 2026 玉山 Agent 基金經理人"
  en: "AI CUP 2026 E.SUN Agent Fund Manager"
summary:
  zh: "每天在雲端自動產生並繳交 ETF 投資計畫的 LLM Agent，模擬操作 10 億元、150 檔股票池。"
  en: "An LLM agent on the cloud that builds and submits an ETF investment plan every day, managing a simulated NT$1B portfolio over a 150-stock universe."
story:
  zh:
    - "這是玉山銀行在 AI CUP 2026 出的題目：每支隊伍讓 AI 管理一檔模擬 10 億元的 ETF，每個交易日晚上 11 點前交出投資計畫，排行榜看的是累積報酬率。我們隊三個人，兩位隊友是金融背景，負責研究策略和規則；程式從頭到尾都是我寫的。"
    - "難的不是讓 AI 選股，而是讓它每天都不出錯。LLM 會算錯數字、會編理由，而比賽規定違規或漏交都會被記點。所以我把系統設計成「AI 只負責判斷，其他交給程式把關」：AI 決定買賣哪些股票、大概的比重；股數、現金、持股檔數由程式照官方公式計算。AI 寫的每一句推論都要引用資料編號，程式會逐條核對那筆資料是否真的存在。就算 AI 完全失敗，系統也會一路退回規則式的保底方案，確保每天都交得出合規的計畫。"
    - "我也花了不少時間證明哪些東西沒用：回測了 15 種技術指標和新聞情緒，都沒有帶來額外效果，所以只給 AI 參考，不放進評分。整條流程放在 Google Cloud 上，每天晚上和清晨各自動跑一次，跑完寄信給我。11/11（第 12 個交易日）我們的累積報酬排名來到 409 隊中的第 4。"
  en:
    - "This is E.SUN Bank's challenge for AI CUP 2026: each team lets an AI manage a simulated NT$1B ETF and must submit an investment plan before 11 p.m. every trading day, ranked by cumulative return. We are a team of three. My two teammates have finance backgrounds and work on strategy and rules; I wrote all of the code."
    - "The hard part is not getting an AI to pick stocks; it is making sure it never fails on any given day. LLMs miscalculate and make up reasons, and the rules penalize violations and missed submissions. So the system is built on one idea: the AI only makes judgments, and code checks everything else. The AI decides what to buy or sell and roughly how much; share counts, cash and the number of holdings are computed by code from the official formulas. Every claim the AI writes must cite a fact ID, and code checks that the fact exists. If the AI fails completely, the system falls back step by step to a rule-based plan, so a compliant plan is always submitted."
    - "I also spent real time proving what does not work: I backtested 15 technical indicators and news sentiment, found no added value, and kept them out of the score. The whole pipeline runs on Google Cloud twice a day and emails me when it finishes. On Nov 11 (trading day 12) our cumulative return ranked #4 out of 409 teams."
tier: 1
featured: true
order: 1
date:
  zh: "2026 秋（參賽中）"
  en: "Fall 2026 (in progress)"
sortDate: 2026-10-19
status:
  zh: "參賽中・11/11 全國第 4"
  en: "Competing · #4 on Nov 11"
role:
  zh:
    - "3 人團隊中唯一的開發者，全部程式由我開發；兩位金融背景隊友負責領域知識與策略規則"
    - "端到端自動化：Cloud Scheduler 觸發 Cloud Run Job，每天兩輪（晚上產生、清晨更新）"
    - "選股訊號、風控規則引擎、AI 決策流程、失敗保底、回測"
    - "用多個 Claude Code 對話分工開發，自己設計共用進度看板與協作規則，負責決策與驗收"
  en:
    - "Sole developer on a 3-person team; two finance-background teammates provided domain knowledge and strategy rules"
    - "End-to-end automation: Cloud Scheduler triggers a Cloud Run Job twice a day (evening build, early-morning update)"
    - "Stock signals, risk-rule engine, AI decision pipeline, fallbacks and backtesting"
    - "Split development across several Claude Code sessions with a shared status board and collaboration rules I designed; I owned decisions and acceptance"
stack: ["Python", "Gemini API", "Google Cloud Run", "Cloud Scheduler", "Cloud Monitoring", "Backtesting"]
highlights:
  zh:
    - "11/11（第 12／24 交易日）累積報酬排名全國第 4（409 隊，社會組＋學生組合併），學生組第 3（318 隊），當天名次上升 56 名"
    - "一條管線串起官方資料下載、9 種資料蒐集、訊號計算、Gemini 決策、規則修正、合規檢查、後台檢核、送出與通知信"
    - "技術分數與籌碼分數用 tanh 壓到 −1～1，綜合分數 = 0.7 × 技術 + 0.3 × 籌碼，權重依回測決定"
    - "題材選擇：16 份獨立 AI 作答投票（半數盲測、Borda 計分、規則事先鎖定），選出 PCB 為主、塑化為輔"
  en:
    - "On Nov 11 (trading day 12 of 24), ranked #4 nationwide by cumulative return among 409 teams (open + student divisions) and #3 of 318 student teams, up 56 places that day"
    - "One pipeline: official data download, 9 data sources, signal scoring, Gemini decisions, rule correction, compliance checks, backend validation, submission and email notification"
    - "Technical and chip-flow scores squashed into −1…1 with tanh; composite = 0.7 × technical + 0.3 × chips, weights chosen by backtest"
    - "Theme selection by voting over 16 independent AI answers (half blind, Borda count, rules locked in advance): PCB as core, plastics as satellite"
challenges:
  - problem:
      zh: "LLM 算數不可靠：實測 Gemini 給的權重加總常超過 100%。"
      en: "LLMs are bad at arithmetic: the weights Gemini returned often summed to more than 100%."
    solution:
      zh: "把判斷和計算拆開。AI 只決定買賣誰與相對權重，股數、現金、檔數一律由程式依官方公式計算。"
      en: "Separate judgment from calculation. The AI only picks what to buy or sell and relative weights; shares, cash and position counts are computed by code using the official formulas."
  - problem:
      zh: "AI 可能編造數據或理由。"
      en: "The AI may fabricate numbers or reasons."
    solution:
      zh: "把資料整理成有編號、有來源的「事實」清單，推論必須引用事實編號，程式逐條檢查引用是否存在。"
      en: "Data is turned into numbered, sourced facts; every inference must cite fact IDs, and code verifies each citation."
  - problem:
      zh: "比賽規章複雜，違規或沒交計畫都會被記點。"
      en: "Competition rules are strict; violations or missed submissions are penalized."
    solution:
      zh: "把規章轉成更嚴的程式規則（單檔 8%、台積電 22%、持股 22～28 檔、現金 5～15%、Active Share ≥ 20%）；錯誤回饋給 AI 重做最多 4 次，主模型失敗自動換備用模型，全部失敗再依序退到規則式建倉、持股不動、最小保底，確保 23:00 前一定交得出合規計畫。"
      en: "Rules were encoded stricter than required (8% per stock, 22% for TSMC, 22–28 holdings, 5–15% cash, Active Share ≥ 20%). Errors are fed back for up to 4 retries, a backup model takes over on failure, and if everything fails the system falls back to rule-based allocation, then holding positions, then a minimal safe plan, so a compliant plan is always submitted before 23:00."
  - problem:
      zh: "很多「看起來有用」的訊號其實沒用。"
      en: "Many signals that look useful turn out not to be."
    solution:
      zh: "回測 15 種技術指標與新聞情緒，發現沒有額外效果，因此只給 AI 當參考、不納入分數。"
      en: "Backtested 15 technical indicators and news sentiment; none added value, so they are shown to the AI as context only and excluded from the score."
links: []
cover: "/images/projects/esun.webp"
isPrivate: true
---
