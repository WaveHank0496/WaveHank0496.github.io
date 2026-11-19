---
title:
  zh: "C++ 大富翁"
  en: "Monopoly in C++"
summary:
  zh: "物件導向程式設計課的期末專題：在終端機上玩的大富翁，含地產、銀行、卡片商店、事件格與小遊戲。"
  en: "Final project for an object-oriented programming course: a terminal Monopoly game with properties, a bank, a card shop, event tiles and mini games."
story:
  zh:
    - "物件導向程式設計課的期末專題：在終端機上玩的大富翁，最多 4 位玩家，有地產升級、銀行、卡片商店、命運與機會、醫院、監獄和小遊戲格。"
    - "我們把每種格子寫成各自的類別，都繼承同一個 Tile 基底，遊戲主迴圈不需要知道現在踩到的是哪一種格子。玩家顏色、起始金額、遊戲模式和對話文字都放在 JSON 設定檔裡，不用重新編譯就能調整。另外做了 /move、/give、/get 這類除錯指令，可以直接把玩家移到指定格子或發錢，測試特定情境時不用一直擲骰子碰運氣。"
  en:
    - "Final project for an object-oriented programming course: Monopoly in the terminal for up to 4 players, with property upgrades, a bank, a card shop, fate and chance tiles, a hospital, a jail and mini-game tiles."
    - "Each tile type is its own class inheriting from a shared Tile base, so the main loop never needs to know which kind of tile a player landed on. Player colors, starting money, game modes and dialogue live in JSON config files and can be changed without recompiling. We also added debug commands such as /move, /give and /get to jump a player to any tile or hand out money, so specific situations can be tested without rolling dice over and over."
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
