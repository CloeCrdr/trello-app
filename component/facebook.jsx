
import { View } from "react-native";
import { Button } from "react-native-paper";
import App from "../api/app";

//const provider = new FacebookAuthProvider();
export function LogFacebook() {
    function handleClick(){
        Keyboard.dismiss();
        // signInWithPopup(auth, provider)
        //     .then((result) => {
        //         // The signed-in user info.
        //         const user = result.user;

        //         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        //         const credential = FacebookAuthProvider.credentialFromResult(result);
        //         const accessToken = credential.accessToken;

        //         // ...
        //     })
        //     .catch((error) => {
        //         // Handle Errors here.
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         // The email of the user's account used.
        //         const email = error.customData.email;
        //         // The AuthCredential type that was used.
        //         const credential = FacebookAuthProvider.credentialFromError(error);

        //         // ...
        //     });
    }
    return (
        <View>
            <Button 
                    onPress={handleClick}
                    mode="text"
                >
                    Sign in with Facebook
                </Button> 
        </View>
    )
}