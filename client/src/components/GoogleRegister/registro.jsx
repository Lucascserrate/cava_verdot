import { auth, provider } from "../../firebase/firebase.js"
import { signInWithRedirect, getRedirectResult, GoogleAuthProvider } from "firebase/auth"
function Registro() {

    const handleSubmit = e => {
        e.preventDefault()
        let signUpForm = document.getElementById('signup')
        const email = signUpForm.email.value
        const password = signUpForm.password.value
        signInWithRedirect(auth, provider)
        getRedirectResult(auth).then(result => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }
    return (
        <div>
            <form action="" id="signup">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" />
                <label htmlFor="password">password:</label>
                <input type="password" name="password" />
                <button onClick={e => handleSubmit(e)}>Sign up with Google</button>
            </form>
        </div>
    )
}

export default Registro