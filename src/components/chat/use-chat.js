import { useEffect, useState } from "react";
import { db } from "../../services/fb/firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp
} from "firebase/firestore";

export const useChat = (selectedGame) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (!selectedGame) return;
    const q = query(
      collection(db, "chats", selectedGame, "messages"),
      orderBy("timestamp", "asc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [selectedGame]);

  const sendMessage = async (username, message) => {
    if (!username || !message) return;

    await addDoc(
      collection(db, "chats", selectedGame, "messages"),
      {
        Username: username,
        Message: message,
        timestamp: serverTimestamp()
      }
    );
  };

  return { messages, sendMessage };
};