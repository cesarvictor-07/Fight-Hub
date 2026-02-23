// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8h5Xpz6TdwNk8SxclO6xW7QpS69YZ6FY",
  authDomain: "fight-hub-12490.firebaseapp.com",
  projectId: "fight-hub-12490",
  storageBucket: "fight-hub-12490.firebasestorage.app",
  messagingSenderId: "972419283148",
  appId: "1:972419283148:web:dc9b5a2bfc6e92680fea69",
  measurementId: "G-KV7EM9J6MP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);