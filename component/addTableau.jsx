import { useState, useContext } from "react";
import { TextInput, Button } from "react-native-paper";
import { StatusBar, View } from "react-native";
import { createTable } from "../api/table";
import { TrelloContext } from "../context/trello";

import {styles} from "../styles";

export function AddTableau({navigation, route}) {
    const [nameTableau, setNameTableau] = useState("");
    const {user} = useContext(TrelloContext);
    function handleClick() {
        createTable(user.uid, nameTableau).then(data => {
            route.params.setTableaux([...data]);
            navigation.push("Mes Tableaux")
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <View>
            <TextInput placeholder="Tableau" value={nameTableau} onChangeText={setNameTableau} />
            <Button onPress={handleClick}>Créer le tableau</Button>
            <StatusBar style="auto" />
        </View>
    )
}