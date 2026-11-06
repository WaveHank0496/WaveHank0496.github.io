---
title:
  zh: "麥勾滑 mindgohua"
  en: "mindgohua: Stop Mindless Scrolling"
summary:
  zh: "Android app：在 Instagram、YouTube 連續滑超過設定時間，就跳出全螢幕的貓問你要不要繼續。全程在手機上處理，沒有網路權限。"
  en: "An Android app that interrupts long scrolling sessions on Instagram or YouTube with a full-screen cat asking whether to keep going. Fully on-device, with no network permission."
tier: 2
featured: false
order: 4
date:
  zh: "2026 秋"
  en: "Fall 2026"
sortDate: 2026-09-11
role:
  zh:
    - "獨立開發，上線後每天自用；需求取捨、產品決定與實機驗收由我負責，程式實作以 Claude Code 輔助"
    - "行為設計、架構、測試與隱私保證"
  en:
    - "Solo project that I use daily; I own requirements, product decisions and on-device acceptance, with implementation assisted by Claude Code"
    - "Behavior design, architecture, testing and privacy guarantees"
stack: ["Kotlin", "Jetpack Compose", "Coroutines", "DataStore", "JUnit"]
highlights:
  zh:
    - "約 7,500 行 Kotlin、231 個單元測試"
    - "3 款外觀主題，OPPO Reno7 實機過夜 9 小時不中斷"
    - "4 份心理學文獻調查，其中一份專找反面證據；發現「10 分鐘門檻」查無實證，據此修改文案"
    - "靈感來自 ZOKUZOKU 的 Cat Gatekeeper，Android 版為獨立實作，貓是自行繪製的向量圖"
  en:
    - "About 7,500 lines of Kotlin and 231 unit tests"
    - "3 visual themes; survived a 9-hour overnight run on an OPPO Reno7"
    - "4 psychology literature reviews, one dedicated to counter-evidence; found no evidence for a popular 10-minute threshold and rewrote the copy accordingly"
    - "Inspired by ZOKUZOKU's Cat Gatekeeper; this Android version is an independent implementation with original vector art"
challenges:
  - problem:
      zh: "隱私承諾很容易在改功能時被無聲打破。"
      en: "Privacy promises are easy to break silently while changing features."
    solution:
      zh: "不宣告網路權限，並用會失敗的測試守住承諾：掃描網路函式庫、禁止無障礙服務與備份，連隱私文案是否宣稱做不到的事都有檢查。"
      en: "No INTERNET permission, enforced by failing tests: dependency scans for network libraries, no accessibility service, no backups, and even checks that the privacy copy makes no false claims."
  - problem:
      zh: "計時、冷卻、門檻這些邊界邏輯最容易出錯，又很難在手機上測。"
      en: "Timing, cooldown and threshold edge cases are the most error-prone and hard to test on a device."
    solution:
      zh: "寫成不依賴 Android 的純 Kotlin 狀態機，時間由外部傳入，全部用一般單元測試覆蓋。"
      en: "Implemented as a pure-Kotlin state machine with no Android dependency and injected time, fully covered by plain unit tests."
  - problem:
      zh: "一鍵關閉的按鈕兩週後會變成反射動作，失去打斷效果。"
      en: "A one-tap dismiss button turns into a reflex within two weeks."
    solution:
      zh: "防習慣化設計：停下來一鍵、再滑要按住 2 秒、「我在傳訊息」用不同形狀與位置。"
      en: "Anti-habituation design: stopping takes one tap, continuing requires a 2-second hold, and 'I'm texting' uses a different shape and position."
  - problem:
      zh: "測試全綠不代表沒有問題。"
      en: "All-green tests did not mean the app was correct."
    solution:
      zh: "讓 4 個 AI 子代理平行稽核 4 層架構，新寫 96 個測試（當時 20 個紅），找出 62 個問題並分 4 批修正，其中包含多個沉默失效。"
      en: "Ran 4 AI sub-agents in parallel to audit 4 architecture layers, wrote 96 new tests (20 failing at first), found 62 issues and fixed them in 4 batches, including several silent failures."
links: []
cover: "/images/projects/mindgohua.webp"
isPrivate: true
---
