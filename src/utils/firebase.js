// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getAnalytics} from 'firebase/analytics'


const firebaseConfig = {
  apiKey: "AIzaSyDw5aw393oUqQgdzGSzwzgm6Jq2ppU1pGw",
  authDomain: "netflix-gpt-4b9bf.firebaseapp.com",
  projectId: "netflix-gpt-4b9bf",
  storageBucket: "netflix-gpt-4b9bf.firebasestorage.app",
  messagingSenderId: "940827690966",
  appId: "1:940827690966:web:779e54669f55945cd08677"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics=getAnalytics(app)

export const auth=getAuth()