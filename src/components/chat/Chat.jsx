import { useState } from "react";
import { useChat } from "./use-chat";
import { useNavigate } from "react-router-dom";
import "./Chat.css";
import { auth } from "../../services/fb/firebase";
import { FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { exportChat } from "../../services/fb/export-service";

const Chat = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [selectedGame, setSelectedGame] = useState("all");

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const user = auth.currentUser;
  const { messages, sendMessage, deleteMessage, editMessage } = useChat(selectedGame);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      navigate("/user");
      return;
    }
    if (!message.trim()) return;
    sendMessage(message);
    setMessage("");
  };

  const startEdit = (msg) => {
    setEditingId(msg.id);
    setEditText(msg.Message || msg.message);
  };

  const saveEdit = (id) => {
    if (!editText.trim()) return;
    editMessage(id, editText);
    setEditingId(null);
  };

  const handleDelete = (id) => {
    if (deleteConfirm === id) {
      deleteMessage(id);
      setDeleteConfirm(null);
    } else {
      setDeleteConfirm(id);
    }
  };

  return (
    <>
      <div className="chat-container">
        <select className="game-change" onChange={(e) => setSelectedGame(e.target.value)}>
          <option value="all">All</option>
          <option value="Ssbu">Ssbu</option>
          <option value="Tekken 8">Tekken 8</option>
          <option value="Street Fighter 6">Street Fighter 6</option>
          <option value="Mortal Kombat">Mortal Kombat</option>
        </select>

        <div className="messages">
          {messages.map(msg => {
            const isOwner = user && user.uid === msg.userId;
            const isEditing = editingId === msg.id;

            return (
              <div key={msg.id} className={`message ${isOwner ? "own" : ""}`}>
                <div className="message-user-time">
                  <strong>{msg.Username || msg.username}</strong>
                  <span>
                    {msg.timestamp?.toDate().toLocaleTimeString()}
                  </span>
                </div>

                {isEditing ? (
                  <div className="edit-area">
                    <textarea
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      rows={2}
                    />
                    <div className="edit-options">
                      <button onClick={() => saveEdit(msg.id)}>Save</button>
                      <button onClick={() => setEditingId(null)}>Cancel</button>
                    </div>
                  </div>
                ) : (
                  <p>{msg.Message || msg.message}</p>
                )}

                {isOwner && !isEditing && (
                  <div className="message-actions">

                    <button onClick={() => startEdit(msg)}>
                      <FaPencil />
                    </button>

                    <button
                      className={deleteConfirm === msg.id ? "confirm-delete" : ""}
                      onClick={() => handleDelete(msg.id)}
                    >
                      {deleteConfirm === msg.id ? "For real?" : <FaTrash />}
                    </button>

                  </div>
                )}
              </div>
            );
          }
          )}
        </div>

        <form onSubmit={handleSubmit} className="input-area">
          <textarea
            placeholder="Write your message here..."
            value={message}
            rows={2}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <button className="send-button" type="submit">Send</button>
        </form>
      </div>
      <section className="export-section">
        <h4>Export the chat's contents in different formats! </h4>
        <p>Reminder: You export the chat you're on right now</p>
        <div className="export-buttons">
          <button onClick={() => exportChat(selectedGame, "json")}>
            Export JSON
          </button>

          <button onClick={() => exportChat(selectedGame, "csv")}>
            Export CSV
          </button>

          <button onClick={() => exportChat(selectedGame, "xml")}>
            Export XML
          </button>
        </div>
      </section>
    </>
  );
};

export default Chat;