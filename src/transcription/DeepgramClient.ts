export class DeepgramClient {
  private socket: WebSocket | null = null;
  private isOpen = false;

  connect(onTranscript: (text: string) => void) {
    const apiKey = import.meta.env.VITE_DEEPGRAM_API_KEY;

    console.log("DG KEY →", apiKey);

    if (!apiKey) {
      console.error("Deepgram API key missing");
      return;
    }

    const url =
      "wss://api.deepgram.com/v1/listen" +
      "?encoding=linear16" +
      "&sample_rate=16000" +
      "&punctuate=true" +
      "&interim_results=true";

    this.socket = new WebSocket(url, ["token", apiKey]);

    this.socket.onopen = () => {
      console.log("Deepgram connected");
      this.isOpen = true;
    };

    this.socket.onmessage = (message) => {
      const data = JSON.parse(message.data);
      const transcript =
        data.channel?.alternatives?.[0]?.transcript;

      if (transcript && transcript.trim() !== "") {
        onTranscript(transcript + " ");
      }
    };

    this.socket.onerror = (err) => {
      console.error("Deepgram socket error", err);
    };

    this.socket.onclose = () => {
      this.isOpen = false;
    };
  }

  sendAudio(pcm: Int16Array) {
    if (this.socket && this.isOpen) {
      this.socket.send(pcm);
    }
  }

  close() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
      this.isOpen = false;
    }
  }
}
