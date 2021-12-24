import { createApp } from 'vue'
import App from './App.vue'
import './Mystyle.css';
import 'bootstrap' 
import firebase from 'firebase/app'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9ZaybyQC-mCQJBliBLmaVmgO15RJ4Smo",
  authDomain: "codable-website.firebaseapp.com",
  projectId: "codable-website",
  storageBucket: "codable-website.appspot.com",
  messagingSenderId: "148598445878",
  appId: "1:148598445878:web:b9fa8320216f018e30c597",
  measurementId: "G-FJMJS17QDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase

createApp(App).use(router).mount('#app')
