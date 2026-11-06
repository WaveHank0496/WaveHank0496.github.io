---
title:
  zh: "Kinect 體感爵士鼓＋和弦雙人演奏"
  en: "Kinect Air Drums and Chords Duet"
summary:
  zh: "用一台 Kinect v2 讓兩個人同時站在感測器前，不碰實體樂器就能合奏：一人打鼓、一人彈和弦。"
  en: "One Kinect v2 lets two people play together without touching an instrument: one on air drums, the other on chords."
tier: 2
featured: false
order: 5
date:
  zh: "2026 春（多媒體課程期末專題）"
  en: "Spring 2026 (Multimedia course final project)"
sortDate: 2026-05-29
role:
  zh:
    - "團隊專題，使用 Git 與組員協作開發"
    - "Unity 端的互動判定、雙人追蹤與音訊系統"
  en:
    - "Team project, developed collaboratively with Git"
    - "Unity-side interaction logic, two-player tracking and audio"
stack: ["Unity (URP)", "C#", "Kinect v2 SDK", ".NET", "UDP", "DSP"]
highlights:
  zh:
    - "鼓手用握拳打鼓、用腳踩大鼓；和弦手指向兩個輪盤選根音與和弦性質，握拳彈出"
    - "鼓用取樣音檔，和弦沒有音檔，完全即時合成"
  en:
    - "The drummer strikes with closed fists and kicks with the feet; the chord player points at two wheels to choose root and quality, then closes a fist to play"
    - "Drums use samples; chords use no audio files at all and are synthesized in real time"
challenges:
  - problem:
      zh: "兩人共用一台 Kinect，走動、遮擋、走出畫面時角色會亂跳。"
      en: "Two players share one Kinect, and roles get swapped when people move, overlap or leave the frame."
    solution:
      zh: "先依站位分配角色，第一次同時看到兩人時綁定 TrackingId；追蹤中斷後以「離上次位置最近」接回原角色，並可按空白鍵重新定位。"
      en: "Assign roles by position, lock them to Kinect TrackingIds once both players are seen, rebind lost players by nearest previous position, and allow re-calibration with the space bar."
  - problem:
      zh: "Kinect SDK 和 Unity 不好直接整合。"
      en: "The Kinect SDK does not integrate cleanly with Unity."
    solution:
      zh: "寫一支只負責轉送資料的 C# 程式，把骨架打包成自訂 binary UDP 封包送給 Unity，所有判斷集中在 Unity 端。"
      en: "A thin C# sender forwards skeleton data as custom binary UDP packets; all interpretation lives in Unity."
  - problem:
      zh: "和弦需要可即時控制、又不能爆音的音色。"
      en: "Chords needed a playable synth voice that never clips."
    solution:
      zh: "在 OnAudioFilterRead 逐取樣做減法合成：失諧鋸齒波＋脈衝波 → 低通濾波 → ADSR 包絡，12 聲複音並用 tanh 軟削波防爆音。"
      en: "Per-sample subtractive synthesis in OnAudioFilterRead: detuned saws plus a pulse wave, low-pass filter and ADSR envelope, 12-voice polyphony with tanh soft clipping."
links: []
cover: "/images/projects/kinect.webp"
isPrivate: true
---
