import { useState, useEffect } from "react";
import { getMicrophoneStream } from "./audio/useMicrophone";
import { AudioRecorder } from "./audio/AudioRecorder";
import { DeepgramClient } from "./transcription/DeepgramClient";

const recorder = new AudioRecorder();
const deepgram = new DeepgramClient();

function App() {
  const [recording, setRecording] = useState(false);
  const [text, setText] = useState("");
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (recording) {
      const id = setInterval(() => setPulse((p) => !p), 700);
      return () => clearInterval(id);
    }
  }, [recording]);

  async function startRecording() {
    const stream = await getMicrophoneStream();

    deepgram.connect((t) => {
      setText((prev) => prev + t);
    });

    recorder.start(stream, (pcm) => {
      deepgram.sendAudio(pcm);
    });

    setRecording(true);
  }

  function stopRecording() {
    recorder.stop();
    deepgram.close();
    setRecording(false);
    setPulse(false);
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>Wispr Flow Clone</h1>
          <span
            style={{
              ...styles.status,
              backgroundColor: recording ? "#dc2626" : "#16a34a",
            }}
          >
            {recording ? "Listening" : "Idle"}
          </span>
        </div>

        <p style={styles.subtitle}>
          Press and hold to dictate. Release when done.
        </p>

        <div
          style={{
            ...styles.micCircle,
            transform: pulse ? "scale(1.1)" : "scale(1)",
            backgroundColor: recording ? "#ef4444" : "#2563eb",
          }}
          onMouseDown={startRecording}
          onMouseUp={stopRecording}
        >
          🎙
        </div>

        <textarea
          style={styles.textarea}
          value={text}
          placeholder="Your spoken words will appear here…"
          readOnly
        />
      </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    height: "100vh",
    background:
      "linear-gradient(135deg, #1e3a8a, #312e81, #020617)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "system-ui, sans-serif",
  },
  card: {
    width: "640px",
    padding: "28px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.95)",
    boxShadow: "0 30px 60px rgba(0,0,0,0.35)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    margin: 0,
    fontSize: "30px",
    fontWeight: 800,
  },
  status: {
    padding: "6px 12px",
    borderRadius: "999px",
    color: "#fff",
    fontSize: "12px",
    fontWeight: 600,
  },
  subtitle: {
    marginTop: "8px",
    marginBottom: "24px",
    color: "#475569",
  },
  micCircle: {
    width: "96px",
    height: "96px",
    borderRadius: "50%",
    margin: "0 auto 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "36px",
    color: "#fff",
    cursor: "pointer",
    transition: "all 0.3s ease",
    userSelect: "none",
  },
  textarea: {
    width: "100%",
    height: "220px",
    resize: "none",
    padding: "14px",
    fontSize: "15px",
    borderRadius: "12px",
    border: "1px solid #cbd5f5",
    outline: "none",
    backgroundColor: "#f8fafc",
  },
};

export default App;
