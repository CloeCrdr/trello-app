import { useState, useContext } from "react";
import { TextInput, Button } from "react-native-paper";
import { StatusBar, View } from "react-native";
import { createTache } from "../api/tache";
import { TrelloContext } from "../context/trello";

import {styles} from "../styles";

export function AddTache({navigation, route}) {
    const [nameTache, setNameTache] = useState("");
    const {user, colonneView} = useContext(TrelloContext);
    
    console.log(colonneView.id)
    function handleClick() {
        createTache(user.uid, colonneView.id , nameTache).then(data => {
            route.params.setTache([...data])
            navigation.goBack()
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <View>
            <TextInput placeholder="Colonne" value={nameTache} onChangeText={setNameTache} />
            <Button onPress={handleClick}>Créer la Tâche</Button>
            <StatusBar style="auto" />
        </View>
    )
}