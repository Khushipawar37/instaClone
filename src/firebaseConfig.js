import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKtLE9fyYMwA1Q_LMf5pNUZHdcNvf79jQ",
  authDomain: "instaclone-9e980.firebaseapp.com",
  projectId: "instaclone-9e980",
  storageBucket: "instaclone-9e980.firebasestorage.app",
  messagingSenderId: "547180509799",
  appId: "1:547180509799:web:55df732c60da30017ff2c2",
  measurementId: "G-R0J09BJ20P"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
