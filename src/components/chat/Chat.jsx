import { useState } from "react";
import { useChat } from "./use-chat";
import { useNavigate } from "react-router-dom";
import "./Chat.css";
import { auth } from "../../services/fb/firebase";

const games = ["all", "Ssbu", "Street Fighter 6", "Tekken 8", "Mortal Kombat"];

const Chat = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [selectedGame, setSelectedGame] = useState("all");

  const user = auth.currentUser;
  const { messages, sendMessage, deleteMessage, editMessage } = useChat(selectedGame);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      navigate("/user");
      return;
    }
    sendMessage(message);
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

            {user && user.uid === msg.userId && (
              <div>
                <button onClick={() => {
                  const newText = prompt("Edit message:", msg.Message);
                  if (newText) {
                    editMessage(msg.id, newText);
                  }
                }}>Edit</button>
                <button onClick={() => deleteMessage(msg.id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="input-area">
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