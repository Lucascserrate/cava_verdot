const { createUserWithEmailAndPassword } = require("firebase/auth")
const { auth } = require("../firebase")
createUserWithEmailAndPassword(auth, "miguizindex@gmail.com", "Mi19378264").then((userCredential) => {
    console.log(userCredential.user);
}).catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message
})  