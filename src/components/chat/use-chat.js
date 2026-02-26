import { useEffect, useState } from "react";
import { sendMessage, subscribeToMessages } from "../services/firebase/fb-chat";

export function UseChat() {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const unsubscribe = subscribeToMessages(setMessages);
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !text) return;

    await sendMessage({
      username,
      message: text,
      category: "general",
      createdAt: Date.now()
    });

    setText("");
  };

  return {
    messages,
    username,
    setUsername,
    text,
    setText,
    handleSubmit
  };
}