import { db } from "./firebase";
import { collection, getDocs, addDoc, deleteDoc, onSnapshot } from "firebase/firestore";

export const getNews = async () => {
  const snapshot = await getDocs(collection(db, "news"))

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const deleteAllNews = async () => {
  const snapshot = await getDocs(collection(db, "news"));

  const deletions = snapshot.docs.map(doc =>
    deleteDoc(doc.ref)
  );

  await Promise.all(deletions);
};

export const addNews = async (news) => {
  await addDoc(collection(db, "news"), {
    ...news
  });
};

export const subscribeToNews = (callback) => {
  return onSnapshot(collection(db, "news"), (snapshot) => {
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    callback(data);
  });
};