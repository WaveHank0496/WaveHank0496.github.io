---
title:
  zh: "東澳 EIA 在地集點系統"
  en: "Dong'ao EIA Local Stamp Rally"
summary:
  zh: "串連宜蘭東澳 10 家在地商家的集點活動：掃店家 QR 蓋章，集滿 3 家用扭蛋機兌換，附東澳飛魚主題小遊戲。"
  en: "A stamp-rally system connecting 10 local shops in Dong'ao, Yilan: scan a shop's QR code to collect a stamp, collect 3 to redeem a capsule-toy prize, plus a flying-fish mini game."
story:
  zh:
    - "這個專案從課程作業開始，最後真的在宜蘭東澳上線。目的是把遊客帶進當地 10 家小店：在店家掃 QR code 蓋章，集滿 3 家就能到扭蛋機換獎品，網站上還有一個東澳飛魚主題的小遊戲。活動期間累積 1,657 次瀏覽、420 人次參與集點。"
    - "因為真的有人在用、而且有獎品可以換，我花最多心力的地方是「怎麼不被作弊」。點數一律由後端重新計算，前端傳來的數字一個都不信；兌換用的 QR code 經過 AES-256-GCM 加密並帶有簽發時間，截圖轉傳或重複使用都會被擋下；API 有依 IP 的速率限制和輸入檢查。我也自己寫了一份威脅模型，列出 SSRF、CORS、偽造兌換這些風險，以及哪些風險我評估後選擇接受。"
    - "後端整個跑在 Cloudflare Workers 上，沒有自己的伺服器要維護。另外也處理了很多到現場才會碰到的問題：很多人是從 LINE 或 Facebook 點連結進來，內建瀏覽器的行為不一樣，所以要偵測並提示；換手機的人可以用卡號找回進度；網站也有英文版。"
  en:
    - "This started as a course project and ended up running for real in Dong'ao, Yilan. The goal was to bring visitors into 10 local shops: scan a shop's QR code to get a stamp, collect 3 and redeem a prize from a capsule-toy machine, with a flying-fish mini game on the site. During the event it had 1,657 views and 420 stamp-rally participations."
    - "Because real people used it and there were real prizes, most of my effort went into preventing cheating. Stamps are always recounted on the backend and nothing the client sends is trusted. Redemption QR codes are encrypted with AES-256-GCM and carry an issue time, so screenshots and replays are rejected. The API has per-IP rate limits and input checks. I also wrote my own threat model covering SSRF, CORS and forged redemptions, including which risks I chose to accept and why."
    - "The backend runs entirely on Cloudflare Workers, with no server to maintain. I also handled problems that only show up in the field: many people open the link inside LINE or Facebook, whose in-app browsers behave differently, so the site detects them and shows a hint; people who switch phones can restore progress with their card number; and the site has an English version."
gallery:
  - src: "/images/projects/eia-card.webp"
    phone: true
    alt:
      zh: "東澳集點卡畫面，10 家店家各有一個手繪章"
      en: "The Dong'ao stamp card, with a hand-drawn stamp for each of the 10 shops"
    caption:
      zh: "集點卡：10 家店家各有一個章，蓋到的會變色，集滿 3 家就能換扭蛋。"
      en: "The stamp card: each of the 10 shops has its own stamp, which lights up once collected; any 3 earn a capsule."
diagram: eia
tier: 1
featured: true
order: 2
date:
  zh: "2026 春～夏"
  en: "Spring–Summer 2026"
sortDate: 2026-04-07
role:
  zh:
    - "系統設計與開發（與 AI 討論設計，Claude Code 輔助實作），起源於課程專案"
    - "Cloudflare Workers 後端 API、前端集點卡、兌換加密與安全防護"
    - "自己整理威脅模型：SSRF、CORS、偽造兌換與已知取捨"
  en:
    - "Designed and built the system (design discussed with AI, implementation assisted by Claude Code); started as a course project"
    - "Cloudflare Workers backend API, stamp-card frontend, redemption encryption and security hardening"
    - "Wrote my own threat model: SSRF, CORS, forged redemptions and known trade-offs"
stack: ["JavaScript", "Cloudflare Workers", "Cloudflare KV", "Web Crypto (AES-256-GCM)"]
highlights:
  zh:
    - "累積瀏覽 1,657 次、參與集點遊戲 420 人次"
    - "無伺服器架構，8 支 API，沒有源站主機"
    - "跨裝置用卡號還原進度、偵測 LINE／Facebook 內建瀏覽器、中英雙語"
    - "匿名流量來源統計（NFC、店家 QR、直接進站）與問卷彙總"
  en:
    - "1,657 total views and 420 stamp-rally participations"
    - "Serverless: 8 API endpoints, no origin server"
    - "Cross-device progress recovery by card number, LINE/Facebook in-app browser detection, bilingual UI"
    - "Anonymous traffic-source stats (NFC, shop QR, direct) and survey aggregation"
challenges:
  - problem:
      zh: "使用者可以改前端程式，偽造自己集滿點數。"
      en: "Users can tamper with the frontend to fake a full stamp card."
    solution:
      zh: "兌換資格一律由後端從資料庫重算，完全不信任前端傳來的數字。"
      en: "Eligibility is always recomputed on the backend from stored data; numbers sent by the client are never trusted."
  - problem:
      zh: "兌換 QR 被截圖分享或重複使用。"
      en: "Redemption QR codes could be screenshotted, shared or replayed."
    solution:
      zh: "兌換 QR 用 AES-256-GCM 加密並帶簽發時間，由扭蛋機端解密驗證。"
      en: "Redemption QR payloads are encrypted with AES-256-GCM and carry an issue time; the capsule machine decrypts and verifies them."
  - problem:
      zh: "公開 API 容易被濫用或灌資料。"
      en: "A public API invites abuse and junk data."
    solution:
      zh: "依 IP 速率限制（10 秒 50 次）、輸入白名單驗證，機密只放在平台的 secret 設定、不進版控。"
      en: "Per-IP rate limiting (50 requests per 10 s), allow-list input validation, and secrets kept only in platform secret storage, never in version control."
links:
  - label:
      zh: "活動網站 dongao-eia.com"
      en: "Live site: dongao-eia.com"
    url: "https://dongao-eia.com"
cover: "/images/projects/eia.webp"
isPrivate: false
---
