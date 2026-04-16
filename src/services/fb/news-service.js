import { db } from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const getNews = async () => {
  const snapshot = await getDocs(collection(db, "news"))

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const addNews = async (news) => {
  await addDoc(collection(db, "news"), {
    ...news
  });
};