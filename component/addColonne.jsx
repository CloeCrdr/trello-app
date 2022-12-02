import { useState, useContext } from "react";
import { TextInput, Button } from "react-native-paper";
import { StatusBar, View } from "react-native";
import { createColonne } from "../api/colonne";
import { TrelloContext } from "../context/trello";

import {styles} from "../styles";

export function AddColonne({navigation, route}) {
    const [nameColonne, setNameColonne] = useState("");
    const {user, tableView} = useContext(TrelloContext);
    
    function handleClick() {
        createColonne(user.uid, tableView.id , nameColonne).then(data => {
            route.params.setColonnes([...data])
            navigation.goBack()
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <View>
            <TextInput placeholder="Colonne" value={nameColonne} onChangeText={setNameColonne} />
            <Button onPress={handleClick}>Créer la colonne</Button>
            <StatusBar style="auto" />
        </View>
    )
}