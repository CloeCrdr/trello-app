import { useState, useContext } from "react";
import { TextInput } from "react-native-paper";
import { Button } from "@rneui/themed";
import { ImageBackground, StatusBar, View } from "react-native";
import { TrelloContext } from "../context/trello";
import { updateTache } from "../api/tache";

import {styles} from "../styles";

export function UpdateTache({navigation, route}) {
    const [nameTache, setNameTache] = useState(route.params.nomTache);
    const [contentTache, setContentTache] = useState(route.params.contentTache)
    const [imageTache, setImageTache] = useState(route.params.imageTache)
    const {user, tableView, colonneView, tacheView} = useContext(TrelloContext);
    console.log(route.params)
    console.log(tacheView)
    function handleClick() {
        updateTache(user.uid, tableView.id, colonneView.id, tacheView.id, nameTache, contentTache, imageTache ).then(data => {
            route.params.setTaches([...data]);
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
                    <TextInput value={nameTache} onChangeText={setNameTache} />
                    <Button onPress={handleClick}>Modifier la tâche</Button>
                    <StatusBar style="auto" />
                </ImageBackground>
            </View>
        </>
    )
}