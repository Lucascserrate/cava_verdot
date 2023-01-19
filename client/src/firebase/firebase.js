// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getAuth, GoogleAuthProvider, FacebookAuthProvider } = require("firebase/auth");
const { getFirestore/* , collection, addDoc, getDocs, doc, getDoc, query, where, setDoc, deleteDoc  */ } = require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDDC_W0cDPmcfsWACTd_KhCfiHbqpxUIQM",
  authDomain: "cava-berdot.firebaseapp.com",
  projectId: "cava-berdot",
  storageBucket: "cava-berdot.appspot.com",
  messagingSenderId: "137882118715",
  appId: "1:137882118715:web:1465981e500904f9964a1e",
  measurementId: "G-0ER69GWL74"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()
const provider = new GoogleAuthProvider();
const faceProvider = new FacebookAuthProvider();
exports.auth = auth
exports.provider = provider
exports.faceProvider = faceProvider
