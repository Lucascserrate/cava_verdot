const { auth } = require("../firebase")
const { signInWithEmailAndPassword } = require("firebase/auth")
signInWithEmailAndPassword(auth, "miguizindex@gmail.com", "Mi19378264")
    .then((userCredential) => {
        // Signed in 
        console.log(userCredential.user);
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });