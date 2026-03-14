import { useEffect, useState } from "react";
import { db, auth } from "../../services/fb/firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  deleteDoc,
  updateDoc,
  doc
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

  const sendMessage = async (message) => {
    const user = auth.currentUser;
    if (!user || !message) return;

    await addDoc(
      collection(db, "chats", selectedGame, "messages"),
      {
        Username: user.displayName,
        Message: message,
        userId: user.uid,
        timestamp: serverTimestamp()
      }
    );
  };

  const deleteMessage = async (id) => {
    await deleteDoc(doc(
      db, "chats", selectedGame, "messages", id)
    );
  }
  const editMessage = async (id, newMessage) => {
    const ref = doc(db, "chats", selectedGame, "messages", id);

    await updateDoc(ref, {
      Message: newMessage
    });
  };
  return { messages, sendMessage, deleteMessage, editMessage };
};