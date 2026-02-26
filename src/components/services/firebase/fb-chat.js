import { ref, push, onValue } from "firebase/database";
import { db } from "./firebase";

export const sendMessage = (messageData) => {
  const messagesRef = ref(db, "messages");
  return push(messagesRef, messageData);
};

export const subscribeToMessages = (callback) => {
  const messagesRef = ref(db, "messages");

  return onValue(messagesRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const messagesArray = Object.entries(data).map(([id, value]) => ({
        id,
        ...value
      }));
      callback(messagesArray);
    } else {
      callback([]);
    }
  });
};