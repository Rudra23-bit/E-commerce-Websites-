import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCHq-IyDOwAC1Fy_6xwFChsDuPIzaLnvy0",
  authDomain: "stylevibe-419a8.firebaseapp.com",
  projectId: "stylevibe-419a8",
  storageBucket: "stylevibe-419a8.appspot.com", // corrected
  messagingSenderId: "34210888961",
  appId: "1:34210888961:web:56d0f2cddf985f2dbeef00"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app); 


export default app;