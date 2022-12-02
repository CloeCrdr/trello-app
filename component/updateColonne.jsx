import { useState, useContext } from "react";
import { TextInput } from "react-native-paper";
import { Button } from "@rneui/themed";
import { ImageBackground, StatusBar, View } from "react-native";
import { TrelloContext } from "../context/trello";
import {styles} from "../styles";
import { updateColonne } from "../api/colonne";

export function UpdateColonne({navigation, route}) {
    console.log('hello world', route.params)
    const [nameColonne, setNameColonne] = useState(route.params.nomColonne);
    const {user, tableView, colonneView} = useContext(TrelloContext);
    function handleClick() {
        updateColonne(user.uid, tableView.id, colonneView, nameColonne ).then(data => {
            route.params.setColonnes([...data]);
            navigation.goBack()
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <>
             <View style={{flex: 1}}>
                <ImageBackground 
                    source={require('../assets/gradientApp.png')} 
                    resizeMode="cover" 
                    style={{flex: 1}}
                >
                    <TextInput value={nameColonne} onChangeText={setNameColonne} />
                    <Button onPress={handleClick}>Modifier la colonne</Button>
                    <StatusBar style="auto" />
                </ImageBackground>
            </View>
        </>
       
    )
}