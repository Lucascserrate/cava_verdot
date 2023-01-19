import { auth, provider, faceProvider } from "../../firebase/firebase.js";
import {
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
function Registro() {
  const handleClickGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(result.user);
      })
      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const handleClickFacebook = (e) => {
    e.preventDefault();
    signInWithPopup(auth, faceProvider);
    getRedirectResult(auth)
      .then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
      })
      .catch((error) => {
        const credential = FacebookAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div>
      <button onClick={(e) => handleClickGoogle(e)}>Sign up with Google</button>
      <button onClick={(e) => handleClickFacebook(e)}>
        Sign up with Facebook
      </button>
    </div>
  );
}

export default Registro;
