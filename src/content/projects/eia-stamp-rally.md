---
title:
  zh: "東澳 EIA 在地集點系統"
  en: "Dong'ao EIA Local Stamp Rally"
summary:
  zh: "串連宜蘭東澳 10 家在地商家的集點活動：掃店家 QR 蓋章，集滿 3 家用扭蛋機兌換，附東澳飛魚主題小遊戲。"
  en: "A stamp-rally system connecting 10 local shops in Dong'ao, Yilan: scan a shop's QR code to collect a stamp, collect 3 to redeem a capsule-toy prize, plus a flying-fish mini game."
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
