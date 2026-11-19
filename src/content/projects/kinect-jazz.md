---
title:
  zh: "Kinect 體感爵士鼓＋和弦雙人演奏"
  en: "Kinect Air Drums and Chords Duet"
summary:
  zh: "用一台 Kinect v2 讓兩個人同時站在感測器前，不碰實體樂器就能合奏：一人打鼓、一人彈和弦。"
  en: "One Kinect v2 lets two people play together without touching an instrument: one on air drums, the other on chords."
story:
  zh:
    - "多媒體課程的期末專題。我們想做一個不用碰任何樂器、兩個人就能合奏的體驗：兩個人站在同一台 Kinect 前，一個用拳頭打空氣鼓、用腳踩大鼓；另一個用手指向畫面上的兩個輪盤選和弦，握拳就彈出聲音。"
    - "我負責 Unity 這一端：判斷動作、兩位玩家的輸入、處理聲音。整個系統最麻煩的是兩人共用一台感測器，只要有人走動或互相擋到，Kinect 就可能把兩個人的身分對調，鼓手突然變成和弦手。解法放在轉送程式裡：先依站的位置分配，左邊的人是鼓手、右邊是和弦手，第一次同時看到兩人時就把角色綁定在 Kinect 給的追蹤編號上；追蹤中斷再出現時，接回離上次位置最近的角色，真的亂掉也可以按空白鍵重新定位。"
    - "和弦的聲音沒有用任何音檔，是在 Unity 裡逐個取樣即時合成的：兩個微微走音的鋸齒波加一個脈衝波，經過低通濾波和音量包絡，最多 12 個音同時發聲，再用軟削波避免爆音。Kinect 的骨架資料則由一支 C# 轉送程式打包成每幀 219 bytes 的二進位 UDP 封包送進 Unity；鼓和和弦是兩個場景，執行時疊在同一個世界裡。"
  en:
    - "Final project for a multimedia course. We wanted two people to play music together without touching an instrument: both stand in front of one Kinect; one plays air drums with closed fists and kicks the bass drum with a foot, while the other points at two on-screen wheels to choose a chord and closes a fist to play it."
    - "I handled the Unity side: gesture logic, input for both players, and audio. The hardest part of the system was sharing one sensor. Whenever someone moved or blocked the other, Kinect could swap their identities and the drummer would suddenly become the chord player. The fix lives in the sender program: roles are assigned by position (left is the drummer, right is the chord player), lock them to Kinect's tracking IDs the first time both players are visible, and when a player is lost and reappears, reattach them to the nearest previous position. If it still goes wrong, the space bar recalibrates."
    - "The chords use no audio files at all; they are synthesized sample by sample inside Unity from two slightly detuned saw waves and a pulse wave, run through a low-pass filter and volume envelope, with up to 12 notes at once and soft clipping to avoid distortion. Skeleton data from Kinect is packed by a C# sender into a 219-byte binary UDP packet per frame; drums and chords are two scenes loaded into one Unity world."
diagram: kinect
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
    - "Unity 端的互動判定、兩位玩家的輸入與音訊系統"
  en:
    - "Team project, developed collaboratively with Git"
    - "Unity-side interaction logic, input for both players and audio"
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
      zh: "在轉送程式裡依站位分配角色，第一次同時看到兩人時綁定 TrackingId；追蹤中斷後以「離上次位置最近」接回原角色，並可按空白鍵重新定位。"
      en: "In the sender, assign roles by position, lock them to Kinect TrackingIds once both players are seen, rebind lost players by nearest previous position, and allow re-calibration with the space bar."
  - problem:
      zh: "Kinect SDK 和 Unity 不好直接整合。"
      en: "The Kinect SDK does not integrate cleanly with Unity."
    solution:
      zh: "用一支 C# 轉送程式讀 Kinect、分配角色，再把骨架打包成自訂 binary UDP 封包送給 Unity；打鼓、指輪盤、合成聲音這些判斷都在 Unity 端。"
      en: "A C# sender reads Kinect, assigns roles and forwards skeletons as custom binary UDP packets; drumming, wheel pointing and synthesis all live in Unity."
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
