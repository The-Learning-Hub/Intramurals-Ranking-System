// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getDatabase, ref, set, update, onValue } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN8N1XcIONOH1eRFj9kKvZEj0B2uUSVC8",
  authDomain: "intramurals-ranking.firebaseapp.com",
  databaseURL: "https://intramurals-ranking-default-rtdb.firebaseio.com",
  projectId: "intramurals-ranking",
  storageBucket: "intramurals-ranking.appspot.com", // ✅ fixed
  messagingSenderId: "1066884209753",
  appId: "1:1066884209753:web:3d7fabfcfb828fb0fb6548",
  measurementId: "G-XBP1PB2SMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, set, update, onValue };
