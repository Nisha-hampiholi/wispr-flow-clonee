# 🎙️ Wispr Flow Clone

A cross-platform **voice-to-text desktop application** inspired by Wispr Flow.  
Built using **Tauri + React** with **Deepgram** for real-time speech transcription.

This project demonstrates real-time audio capture, WebSocket streaming, and AI-powered transcription in a native desktop app.

---

## 📸 Application Screenshot

### Push-to-Talk Voice Transcription

> Press and hold the microphone button to dictate.  
> Release the button to stop recording and finalize the transcript.

![Wispr Flow Clone UI](assets/app-screenshot.png)

> 📌 **Note:**  
> Make sure the screenshot is uploaded at:
> ```
> assets/app-screenshot.png
> ```

---

## ✨ Features

- 🎤 Push-to-talk voice input
- ⚡ Real-time speech-to-text transcription
- 🖥️ Cross-platform desktop app (Windows / macOS / Linux)
- 🔌 WebSocket-based audio streaming
- 🧠 Clean separation of concerns (UI, audio, transcription)
- 🎨 Simple, modern, and intuitive interface

---

## 🛠️ Tech Stack

- **Tauri** – Lightweight and secure desktop framework
- **React + TypeScript** – Frontend UI
- **Deepgram Speech-to-Text API** – Real-time transcription
- **Web Audio API** – Microphone access and audio processing
- **Vite** – Frontend build tooling

---

## 🧩 Architecture Overview

The application follows a modular and maintainable architecture:

- **UI Layer (React)**  
  Handles user interaction, recording controls, and transcript display.

- **Audio Layer (Web Audio API)**  
  Captures microphone input, converts audio to 16kHz PCM format, and streams audio chunks.

- **Transcription Layer (Deepgram WebSocket)**  
  Streams audio data to Deepgram and receives real-time transcription results.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/wispr-flow-clone.git
cd wispr-flow-clone

