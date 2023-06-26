import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APP_FIREBASE_apiKey,
//   authDomain: import.meta.env.VITE_APP_FIREBASE_authDomain,
//   projectId: import.meta.env.VITE_APP_FIREBASE_projectId,
//   storageBucket: import.meta.env.VITE_APP_FIREBASE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_APP_FIREBASE_messagingSenderId,
//   appId: import.meta.env.VITE_APP_FIREBASE_appId,
//   measurementId: import.meta.env.VITE_APP_FIREBASE_measurementId
// };

const firebaseConfig = {
  apiKey: "AIzaSyD9Makb7xuP_W0Q4zt2gFV8jVr8IMUZm14",
  authDomain: "test-proj-b92fc.firebaseapp.com",
  projectId: "test-proj-b92fc",
  storageBucket: "test-proj-b92fc.appspot.com",
  messagingSenderId: "218241729441",
  appId: "1:218241729441:web:7fd78a3f43b4b6295341e0",
  measurementId: "G-JQR9Y1P7NF"
}

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const auth = getAuth(app);