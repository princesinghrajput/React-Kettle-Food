// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD57XRkvYNT1zQSfkdiEjZHSfKZcXN9Y5w",
  authDomain: "kettle-fire.firebaseapp.com",
  projectId: "kettle-fire",
  storageBucket: "kettle-fire.appspot.com",
  messagingSenderId: "130754944047",
  appId: "1:130754944047:web:a2f33d2ecdee2659aafada",
  measurementId: "G-DLR16KJJ4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()
const analytics = getAnalytics(app);

export { app, auth, analytics };