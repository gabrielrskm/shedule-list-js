import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

  export  default function auth(){
    const auth = getAuth();
    const result = signInWithEmailAndPassword(auth, 'gabriel.rskm@gmail.com', '32801684')
      .then(  (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('autentificacion realizada');
        return true;
        // ...
      })
      .catch( (error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('error');
        return false;
      });
      return result;
  }