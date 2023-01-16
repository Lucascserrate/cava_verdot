// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, setDoc, deleteDoc } = require("firebase/firestore") 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const {
  REACT_APP_APIKEY,
  REACT_APP_AUTHDOMAIN,
  REACT_APP_PROJECTID,
  REACT_APP_STORAGEBUCKET,
  REACT_APP_MESSAGINGSENDERID,
  REACT_APP_APPID,
  REACT_APP_MEASUREMENTID,
} = process.env;
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const db = getFirestore()
const colRef = collection(db, 'usuario')


getDocs(colRef).then((snapshot) => {
  let usuarios = []
  snapshot.docs.forEach((doc) => {
    usuarios.push({...doc.data(), id: doc.id})
  })
  console.log(usuarios);
} ).catch(err => {
  console.log(err.message);
})

