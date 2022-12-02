import { useState, useContext } from "react";
import { TextInput, Button } from "react-native-paper";
import { ImageBackground, StatusBar, View } from "react-native";
import { createTable } from "../api/table";
import { TrelloContext } from "../context/trello";

import { styles } from "../styles";

export function AddTableau({ navigation, route }) {
    const [nameTableau, setNameTableau] = useState("");
    const { user } = useContext(TrelloContext);
    function handleClick() {
        createTable(user.uid, nameTableau).then(data => {
            route.params.setTableaux([...data]);
            navigation.goBack()
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <>
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../assets/gradientApp.png')}
                    resizeMode="cover"
                    style={{ flex: 1 }}
                >
                    <TextInput placeholder="Tableau" value={nameTableau} onChangeText={setNameTableau} />
                    <Button onPress={handleClick}>Créer le tableau</Button>
                    <StatusBar style="auto" />
                </ImageBackground>
            </View>
        </>

    )
}