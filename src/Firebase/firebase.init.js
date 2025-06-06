// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCa-aoJWp8xm15K55zyLaHdPVgk1-XV3Lo",
    authDomain: "venmart-f0b2a.firebaseapp.com",
    projectId: "venmart-f0b2a",
    storageBucket: "venmart-f0b2a.firebasestorage.app",
    messagingSenderId: "483602565621",
    appId: "1:483602565621:web:cb475f45cdfdb6d413b8bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);