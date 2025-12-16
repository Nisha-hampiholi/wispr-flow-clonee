# 🎙️ Wispr Flow Clone – Voice-to-Text Desktop App

A cross-platform desktop application that enables **push-to-talk voice input** and **real-time speech-to-text transcription**, inspired by Wispr Flow.

This project was built as a practical technical assignment to demonstrate **AI-powered desktop application development** using modern tools.

---

## 📸 Application Screenshot

### Push-to-Talk Voice Transcription

Press and hold the microphone button to dictate.  
Release the button to stop recording and finalize the transcript.
![Wispr Flow Clone UI](Screenshot%202025-12-15%20223018.png)


---

## ✨ Features

- 🎤 Push-to-talk voice recording  
- ⚡ Real-time speech-to-text transcription  
- 🖥️ Cross-platform desktop app (Windows / macOS / Linux)  
- 🔌 WebSocket-based audio streaming  
- 🧠 Clean separation of concerns (UI, audio, transcription)  
- 🎨 Simple, modern, and intuitive interface  

---

## 🛠️ Tech Stack

- **Tauri** – Lightweight, secure desktop framework  
- **React + TypeScript** – Frontend UI and application logic  
- **Deepgram Speech-to-Text API** – Real-time transcription  
- **Web Audio API** – Microphone access and audio processing  
- **Vite** – Frontend build tooling  

---

## 🧩 Architecture Overview

The application is structured with a clear separation of responsibilities:

- **UI Layer (React)**  
  Handles user interactions, recording controls, and displaying transcribed text.

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
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Configure Environment Variables

Create a `.env` file in the project root:

```env
VITE_DEEPGRAM_API_KEY=your_deepgram_api_key_here
```

> ⚠️ The `.env` file is intentionally excluded from version control.

---

### 4️⃣ Run the App (Development Mode)

```bash
npm run tauri dev
```

The desktop application will launch automatically.

---

## ⚠️ Known Limitations

- Uses `ScriptProcessorNode` instead of `AudioWorklet`  
- No global keyboard shortcut (push-to-talk via UI button)  
- UI focuses on functionality rather than production polish  
- English language transcription by default  

---

## 🚧 Possible Future Improvements

- Global hotkey support  
- Clipboard auto-copy / auto-paste  
- Audio waveform visualization  
- Multi-language transcription support  
- Enhanced UI animations  

---

## 🎬 Demo Video

📽️ **Demo Video:**  
_Add your YouTube (Unlisted) or Google Drive link here_

---

## 📄 License

This project was created for educational and technical evaluation purposes.
