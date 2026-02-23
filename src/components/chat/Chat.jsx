import "./Chat.css";

function Chat() {
  return (
    <main className="chat-container">
      <section className="message-section"></section>
      <form className="send-message">
        <input type="text" name="message" placeholder="Write here" />
        <button type="submit">Send message</button>
      </form>
    </main>
  )
}

export default Chat;