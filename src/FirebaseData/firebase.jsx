import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5wJrX3k9dihXxVKi7mZ2sqkOZzmfpKbI",
  authDomain: "basictodoapp-ced68.firebaseapp.com",
  projectId: "basictodoapp-ced68",
  storageBucket: "basictodoapp-ced68.firebasestorage.app",
  messagingSenderId: "590516817228",
  appId: "1:590516817228:web:5bfd05a53d44e2dc57d3e9",
  measurementId: "G-SQHTM3LTGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB5wJrX3k9dihXxVKi7mZ2sqkOZzmfpKbI",
//   authDomain: "basictodoapp-ced68.firebaseapp.com",
//   projectId: "basictodoapp-ced68",
//   storageBucket: "basictodoapp-ced68.firebasestorage.app",
//   messagingSenderId: "590516817228",
//   appId: "1:590516817228:web:5bfd05a53d44e2dc57d3e9",
//   measurementId: "G-SQHTM3LTGS"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);