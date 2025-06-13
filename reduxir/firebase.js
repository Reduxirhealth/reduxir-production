
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCmmJpmqllEJ1GozLE-G1gn7XqA8tcnT0c",
  authDomain: "reduxirdb.firebaseapp.com",
  projectId: "reduxirdb",
  storageBucket: "reduxirdb.firebasestorage.app",
  messagingSenderId: "529198971070",
  appId: "1:529198971070:web:9aa10efe52902e138906ef",
  measurementId: "G-VEK10ST5L3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
