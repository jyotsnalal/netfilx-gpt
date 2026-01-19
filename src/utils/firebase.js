import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDw5aw393oUqQgdzGSzwzgm6Jq2ppU1pGw",
  authDomain: "netflix-gpt-4b9bf.firebaseapp.com",
  projectId: "netflix-gpt-4b9bf",
  storageBucket: "netflix-gpt-4b9bf.appspot.com",
  messagingSenderId: "940827690966",
  appId: "1:940827690966:web:779e54669f55945cd08677",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
