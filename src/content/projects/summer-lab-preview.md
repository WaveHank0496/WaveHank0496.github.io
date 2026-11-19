---
title:
  zh: "2026 暑期實驗室預備：NumPy 與 PyTorch"
  en: "2026 Summer Lab Prep: NumPy and PyTorch"
summary:
  zh: "暑假的自學紀錄：從 NumPy 陣列操作一路練到 CNN 分類器與遷移學習。"
  en: "Summer self-study: from NumPy array basics to CNN classifiers and transfer learning."
story:
  zh:
    - "為了準備進實驗室，我在 2026 暑假自己從頭補機器學習的基礎，一個主題一個 notebook。"
    - "NumPy 做了 10 個主題的練習加上一份期末練習；PyTorch 從 tensor 和 autograd 開始，一路做到自己寫 CNN 分類器，最後用 ResNet 在 CIFAR 上做遷移學習，每個階段都搭配自我測驗。同一個暑假稍後做的 Gesture Demo，模型就是用 PyTorch 自己訓練的。"
  en:
    - "To prepare for joining a lab, I rebuilt my machine-learning foundations from scratch over summer 2026, one notebook per topic."
    - "For NumPy I worked through 10 topics plus a final exercise. For PyTorch I went from tensors and autograd to writing my own CNN classifier, then transfer learning with ResNet on CIFAR, with self-tests at each stage. Later that summer I trained the model for Gesture Demo myself in PyTorch."
tier: 3
featured: false
order: 9
date:
  zh: "2026 暑假"
  en: "Summer 2026"
sortDate: 2026-07-07
role:
  zh:
    - "個人學習專案"
  en:
    - "Personal study project"
stack: ["Python", "NumPy", "PyTorch", "Jupyter"]
highlights:
  zh:
    - "NumPy 10 個主題：建立、索引、廣播運算、線性代數、統計、布林遮罩等"
    - "PyTorch：tensor、autograd、nn.Module、DataLoader、CNN、ResNet 遷移學習（CIFAR）"
  en:
    - "10 NumPy topics: creation, indexing, element-wise math, linear algebra, statistics, boolean masking and more"
    - "PyTorch: tensors, autograd, nn.Module, DataLoader, CNNs, ResNet transfer learning on CIFAR"
challenges:
  - problem:
      zh: "直接用框架容易只會呼叫 API、不懂背後在算什麼。"
      en: "Jumping straight into frameworks risks calling APIs without understanding the math."
    solution:
      zh: "先用 NumPy 打穩陣列與線性代數，再依序練 autograd、loss、資料管線到完整分類器，每階段搭配自我測驗。"
      en: "Built a NumPy foundation first, then progressed through autograd, losses and data pipelines to full classifiers, with self-tests at each stage."
links: []
cover: "/images/projects/summer-lab.svg"
isPrivate: true
---
