
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCY4jYuvom_ICv8qgrXdvt9Zaji-B5X_2U",
  authDomain: "appmarta-dbfa2.firebaseapp.com",
  projectId: "appmarta-dbfa2",
  storageBucket: "appmarta-dbfa2.appspot.com",
  messagingSenderId: "701928106964",
  appId: "1:701928106964:web:bddcd6eca3240c34678441"
};



export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);