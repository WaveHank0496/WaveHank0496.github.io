---
title:
  zh: "C++ 大富翁"
  en: "Monopoly in C++"
summary:
  zh: "物件導向程式設計課的期末專題：在終端機上玩的大富翁，含地產、銀行、卡片商店、事件格與小遊戲。"
  en: "Final project for an object-oriented programming course: a terminal Monopoly game with properties, a bank, a card shop, event tiles and mini games."
tier: 3
featured: false
order: 7
date:
  zh: "2025 春"
  en: "Spring 2025"
sortDate: 2025-04-20
role:
  zh:
    - "團隊專題，與組員共同設計類別架構並實作"
  en:
    - "Team project; designed the class structure and implemented it with teammates"
stack: ["C++", "OOP", "Visual Studio"]
challenges:
  - problem:
      zh: "地圖上有很多種格子（地產、監獄、醫院、商店、事件、小遊戲），行為各不相同。"
      en: "The board has many tile types (property, jail, hospital, shop, event, mini game), each behaving differently."
    solution:
      zh: "用繼承與多型讓每種格子實作自己的行為，遊戲主迴圈只呼叫共同介面；共用資源用單例管理。"
      en: "Inheritance and polymorphism let each tile type implement its own behavior behind a shared interface; shared resources are managed through singletons."
links: []
cover: "/images/projects/monopoly.svg"
isPrivate: true
---
