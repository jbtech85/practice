import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmYboMCgee5rPStrqfxLkqEEoAmUMDfGI",
  authDomain: "pantry-f6427.firebaseapp.com",
  projectId: "pantry-f6427",
  storageBucket: "pantry-f6427.firebasestorage.app",
  messagingSenderId: "1072787579720",
  appId: "1:1072787579720:web:f2e870e094f7aef396c97d",
  measurementId: "G-ZNMGLEMNC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
