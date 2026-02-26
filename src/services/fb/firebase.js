import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8h5Xpz6TdwNk8SxclO6xW7QpS69YZ6FY",
  authDomain: "fight-hub-12490.firebaseapp.com",
  projectId: "fight-hub-12490",
  storageBucket: "fight-hub-12490.firebasestorage.app",
  messagingSenderId: "972419283148",
  appId: "1:972419283148:web:dc9b5a2bfc6e92680fea69",
  measurementId: "G-KV7EM9J6MP"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);