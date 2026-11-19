---
title:
  zh: "Gesture Demo 即時手勢辨識"
  en: "Gesture Demo: Real-time Hand Gestures"
summary:
  zh: "用攝影機即時辨識 15 種手勢並觸發互動（捏合、抓取拖曳、畫筆、圖片音效），自己錄資料、自己訓練模型。"
  en: "Recognizes 15 hand gestures from a webcam in real time and drives interactions (pinch, grab-and-drag, drawing, image and sound triggers), with a self-collected dataset and a self-trained model."
story:
  zh:
    - "我想做一個不用滑鼠、只靠手勢就能操作的互動 demo：捏合、抓住東西拖曳、在空中畫畫、觸發圖片和音效。一開始用手寫的幾何規則判斷手勢，但手稍微轉個角度就判錯，所以我決定自己錄資料、自己訓練模型。"
    - "我錄了 15 種手勢、共 33,809 筆資料，訓練一個小型神經網路，測試準確率 95.73%。這個專案我最在意的是「數字要可信」：影片裡相鄰的畫面幾乎一樣，如果隨機切分訓練和測試資料，分數會虛高，所以我以整段錄影為單位切分；同樣的指令跑兩次，結果差了 1%，我就把所有隨機來源固定住，讓每次訓練的結果完全相同，並自動記錄當次的設定和資料版本。"
    - "接著我看混淆矩陣找出最常被搞混的三個手勢，針對它們補錄資料，F1 從 0.73／0.79／0.83 提升到 0.97／1.00／0.99。比讚（thumb_up）的召回率目前仍只有 0.75，這個弱點我也照實記錄下來。程式架構上，鏡頭、偵測、平滑、辨識、互動、繪圖各自獨立，所以從規則式換成模型時只改了一個檔案，兩種辨識方式還能在執行中即時切換比較。"
  en:
    - "I wanted an interactive demo you control with your hands instead of a mouse: pinch, grab and drag objects, draw in the air, trigger images and sounds. My first version used hand-written geometric rules, which broke as soon as the hand rotated, so I decided to record my own data and train my own model."
    - "I recorded 33,809 samples across 15 gestures and trained a small neural network that reaches 95.73% test accuracy. What I cared about most was that the number can be trusted. Neighboring video frames are nearly identical, so a random train/test split inflates the score; I split by whole recording instead. Two identical runs differed by 1%, so I fixed every source of randomness until training was exactly reproducible, and every run now logs its settings and data version."
    - "Then I used the confusion matrix to find the three most-confused gestures and recorded more data for them, raising F1 from 0.73/0.79/0.83 to 0.97/1.00/0.99. Thumbs-up recall is still only 0.75, and I documented that weakness openly. Camera, detection, smoothing, recognition, interaction and rendering are separate modules, so switching from rules to the model changed a single file, and both recognizers can be swapped live for comparison."
diagram: gesture
tier: 1
featured: true
order: 3
date:
  zh: "2026 夏"
  en: "Summer 2026"
sortDate: 2026-08-12
role:
  zh:
    - "獨立開發：架構設計、資料採集、模型訓練、評估與互動功能"
  en:
    - "Solo project: architecture, data collection, model training, evaluation and interactions"
stack: ["Python", "PyTorch", "MediaPipe", "OpenCV", "scikit-learn", "pygame"]
highlights:
  zh:
    - "15 類手勢、測試準確率 95.73%、自錄 33,809 筆資料"
    - "管線 camera → detector → smoother → recognizer → interaction → renderer，每個模組只透過固定格式的資料溝通，換掉一個不影響其他"
    - "規則式與 ML 兩種辨識器可在執行中即時切換比較"
    - "已知弱點：比讚（thumb_up）的召回率只有 0.75"
  en:
    - "15 gesture classes, 95.73% test accuracy, 33,809 self-recorded samples"
    - "Pipeline camera → detector → smoother → recognizer → interaction → renderer; modules talk only through fixed data formats, so one can be replaced without touching the rest"
    - "Rule-based and ML recognizers can be switched live for side-by-side comparison"
    - "Known weakness: thumbs-up recall is only 0.75"
challenges:
  - problem:
      zh: "手寫幾何規則對手的角度很敏感，比讚時手一轉就判錯。"
      en: "Hand-written geometric rules break as soon as the hand rotates (for example, a thumbs-up)."
    solution:
      zh: "改用自己訓練的 MLP 分類器。因為模組之間分得很乾淨，替換時只改了 recognizer 一個檔案，其他模組一行都沒動。"
      en: "Replaced them with a self-trained MLP classifier. Because the modules are cleanly separated, only the recognizer file changed; no other module was touched."
  - problem:
      zh: "手在畫面的位置與遠近不同，特徵差很多；深度座標雜訊又大。"
      en: "Hand position and distance change the features a lot, and the depth coordinate is noisy."
    solution:
      zh: "正規化：減去手腕座標、除以手掌大小；實測 z 拖累準確率，所以只用 x、y。"
      en: "Normalize by subtracting the wrist and dividing by palm size; z hurt accuracy in tests, so only x and y are used."
  - problem:
      zh: "連續影格幾乎相同，隨機切分會讓測試分數虛高。"
      en: "Consecutive frames are nearly identical, so a random split inflates test accuracy."
    solution:
      zh: "以整段錄製（session）為單位、分層切分 train/test，避免資料洩漏。"
      en: "Stratified split by whole recording session to prevent data leakage."
  - problem:
      zh: "同樣指令跑兩次，準確率差約 1%，無法判斷改動是否有效。"
      en: "Two identical runs differed by about 1%, making it impossible to tell whether a change helped."
    solution:
      zh: "固定 3 個隨機來源（切分、權重初始化、DataLoader 洗牌），權重檔逐位元可重現；每次訓練自動記錄設定、git commit 與資料雜湊。"
      en: "Seeded all three sources of randomness (split, weight init, DataLoader shuffle) for bit-identical weights, and logged config, git commit and data hash on every run."
  - problem:
      zh: "部分手勢互相混淆。"
      en: "Some gestures were confused with each other."
    solution:
      zh: "依混淆矩陣針對性補錄資料，三個手勢的 F1 由 0.73／0.79／0.83 升到 0.97／1.00／0.99。"
      en: "Targeted re-recording guided by the confusion matrix raised F1 for three gestures from 0.73/0.79/0.83 to 0.97/1.00/0.99."
links:
  - label:
      zh: "GitHub 原始碼"
      en: "Source on GitHub"
    url: "https://github.com/WaveHank0496/Gesture_demo"
cover: "/images/projects/gesture.webp"
isPrivate: false
---
