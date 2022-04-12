import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCLfx1S6ZARBMudT1iz6IFNJyjcJHRDSN4",
  authDomain: "responsive-ema-jhon.firebaseapp.com",
  projectId: "responsive-ema-jhon",
  storageBucket: "responsive-ema-jhon.appspot.com",
  messagingSenderId: "8907428004",
  appId: "1:8907428004:web:4fadf0daf589977e619631",
};

const app = initializeApp(firebaseConfig);
export const auth = getAut(app);
export default app;
