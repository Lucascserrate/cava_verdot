import { auth, provider } from "../../firebase/firebase.js";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
function Registro() {
  const handleClickGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(result);
      })
      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div>
      <button onClick={(e) => handleClickGoogle(e)}>Sign up with Google</button>
    </div>
  );
}

export default Registro;
