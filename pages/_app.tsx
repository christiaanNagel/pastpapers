import '../styles/globals.css'
import type { AppProps } from 'next/app'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbMJ8X_JhkH0-pwdlgbUGZ4EmeLFUGeL8",
  authDomain: "pastpapers-3c898.firebaseapp.com",
  projectId: "pastpapers-3c898",
  storageBucket: "pastpapers-3c898.appspot.com",
  messagingSenderId: "167936540209",
  appId: "1:167936540209:web:048b017e2ba16728dbdf10",
  measurementId: "G-CD0VJTLHJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
