import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-8bfc2.firebaseapp.com",
  projectId: "mern-blog-8bfc2",
  storageBucket: "mern-blog-8bfc2.appspot.com",
  messagingSenderId: "110916948794",
  appId: "1:110916948794:web:3e84f8d339b43c7d3cf603"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

