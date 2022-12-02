import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, GoogleAuthProvider, getRedirectResult} from 'firebase/auth';
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

// export function logoutUser(email, password){
//     return new Promise((resolve, reject) => {
//         signOut()
//             .then(() => {
//                 console.log('logged out')
//                 // Signed in 
//                 resolve(userCredential.user);
//                 // ...
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 reject(errorMessage)
//                 // ..
//             });
//     })
// }
export const logOut = async () => {
    await firebase.auth().signOut();
};
export function connectGoogle(){
    return new Promise((resolve, reject) => {
     
        getRedirectResult(auth)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access Google APIs.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                // The signed-in user info.
                const user = result.user;
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

    })
}