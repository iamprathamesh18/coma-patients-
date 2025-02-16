// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your Firebase Configuration
const firebaseConfig = {
    apiKey:"AIzaSyCnmnWhgyVPxt0p_yBe11OFZOXqtPQDvGg",
    authDomain: "coma-project.firebaseapp.com",
    databaseURL: "https://coma-project-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "coma-project",
    storageBucket: "coma-project.firebasestorage.app",
    messagingSenderId: "55928094660",
    appId: "1:55928094660:web:4b677d22c0589308ed2e91",
    
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
