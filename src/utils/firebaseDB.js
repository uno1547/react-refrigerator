import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCvruDr7rch3E_LgvWJQBaCBzH-WcPg3EI",
  authDomain: "refrigerator-40912.firebaseapp.com",
  projectId: "refrigerator-40912",
  storageBucket: "refrigerator-40912.firebasestorage.app",
  messagingSenderId: "721096345733",
  appId: "1:721096345733:web:464e6db6bfa59cf82a01ec"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;