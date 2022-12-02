import { useState, useContext } from "react";
import { TextInput, Button } from "react-native-paper";
import { StatusBar, View } from "react-native";
import { TrelloContext } from "../context/trello";

import {styles} from "../styles";

export function UpdateColonne({navigation, route}) {
    console.log(route.params)
    //const [nameTableau, setNameTableau] = useState(route.params.nomTableau);
    const {user} = useContext(TrelloContext);
    function handleClick() {
        // updateTable(user.uid, route.params.idTableau, nameTableau ).then(data => {
        //     route.params.setTableaux([...data]);
        //     navigation.goBack()
        // }).catch(err => {
        //     console.log(err);
        // })
    }

    return (
        <View>
            <TextInput value={nameTableau} onChangeText={setNameTableau} />
            <Button onPress={handleClick}>Modifier la colonne</Button>
            <StatusBar style="auto" />
        </View>
    )
}