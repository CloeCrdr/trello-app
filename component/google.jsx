
import { View } from "react-native";
import { Button } from "react-native-paper";

export function LogGoogle() {
    function handleClick(){
        Keyboard.dismiss();
       
    }
    return (
        <View>
            <Button 
                    onPress={handleClick}
                    mode="text"
                >
                    Sign in with Google
                </Button> 
        </View>
    )
}