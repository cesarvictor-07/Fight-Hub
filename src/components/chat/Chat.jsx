import "./Chat.css";
import { UseChat } from "./use-chat.js";

function Chat() {
  const {
    messages,
    username,
    setUsername,
    text,
    setText,
    handleSubmit
  } = UseChat();
  return (
    <main className="chat-container">
      <section className="chat-section">
        <section className="messages-section">
          {messages.sort((a, b) => a.createdAt - b.createdAt).map((msg) => (
            <div key={msg.id} className="message">
              <span className="username">{msg.username}</span>
              <p>{msg.message}</p>
            </div>
          ))}
        </section>
        <form className="send-message" onSubmit={handleSubmit}>
          <input className="user-box" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <textarea className="text-box" name="message" rows="2" placeholder="Write here" value={text} onChange={(e) => setText(e.target.value)} />
          <button className="send-button" type="submit">Send message</button>
        </form>
      </section>
    </main>
  )
}

export default Chat;