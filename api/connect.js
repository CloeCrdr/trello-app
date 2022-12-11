import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, sendSignInLinkToEmail } from 'firebase/auth';
import { app } from "./app";


const auth = getAuth(app);
//const provider = new GoogleAuthProvider();

export function createUser(email, password) {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // signed in 
                resolve(userCredential.user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                reject(errorMessage)
            })
    })
}
export function connectUser(email, password) {
    return new Promise((resolve, reject) => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                resolve(userCredential.user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                reject(errorMessage)
                // ..
            });
    })
}

export function logOutUser() {
    return new Promise((resolve, reject) => {

        signOut(auth)
            .then(() => {
                alert('Utilisateur déconnecté')
            })
            .catch((err) => {
                const errMessage = err.message;
                reject(errMessage)
                // ..
            });
    })
}

export function LinkAuth() {

    return new Promise((resolve, reject) => {

        sendSignInLinkToEmail(auth, email, actionCodeSettings)
            .then(() => {
                // The link was successfully sent. Inform the user.
                // Save the email locally so you don't need to ask the user for it again
                // if they open the link on the same device.
                window.localStorage.setItem('emailForSignIn', email);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ...
            });

    })
}