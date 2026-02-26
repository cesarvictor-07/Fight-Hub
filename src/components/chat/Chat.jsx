import { useState } from "react";
import { useChat } from "./use-chat";
import "./Chat.css";

const games = ["all", "Ssbu", "Street Fighter 6", "Tekken 8", "Mortal Kombat"];

const Chat = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [selectedGame, setSelectedGame] = useState("all");

  const { messages, sendMessage } = useChat(selectedGame);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(username, message);
    setMessage("");
  };

  return (
    <div className="chat-container">
      <select className="game-change" onChange={(e) => setSelectedGame(e.target.value)}>
        <option value="all">All</option>
        <option value="Ssbu">Ssbu</option>
        <option value="Tekken 8">Tekken 8</option>
        <option value="Street Fighter 6">Street Fighter 6</option>
        <option value="Mortal Kombat">Mortal Kombat</option>
      </select>

      <div className="messages">
        {messages.map(msg => (
          <div key={msg.id} className="message">
            <strong>{msg.Username || msg.username}</strong>
            <p>{msg.Message || msg.message}</p>
            <span>
              {msg.timestamp?.toDate().toLocaleTimeString()}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="input-area">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea
          placeholder="Write your message here..."
          value={message}
          rows={2}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;