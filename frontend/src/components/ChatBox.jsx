import { useState } from "react";
import { sendMessage } from "../services/api";
import Message from "./Message";

const ChatBox = () => {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {

    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {

      const reply = await sendMessage(input);

      const botMessage = { role: "bot", text: reply };

      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="chat-container">

      <div className="chat-card">

        <h2 className="chat-title">AI Chatbot</h2>

        <div className="chat-messages">

          {messages.map((msg, i) => (
            <Message key={i} role={msg.role} text={msg.text} />
          ))}

          {loading && (
            <div className="typing">AI is typing...</div>
          )}

        </div>

        <div className="chat-input">

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something..."
          />

          <button onClick={handleSend}>
            Send
          </button>

        </div>

      </div>

    </div>
  );
};

export default ChatBox;