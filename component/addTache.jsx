import { useState, useContext } from "react";
import { TextInput, Button } from "react-native-paper";
import { ImageBackground, StatusBar, View } from "react-native";
import { createTache } from "../api/tache";
import { TrelloContext } from "../context/trello";

import { styles } from "../styles";

export function AddTache({ navigation, route }) {
    const [nameTache, setNameTache] = useState("");
    const { user, tableView, colonneView } = useContext(TrelloContext);
    const [tacheContent, setTacheContent] = useState("")
    const [imageTache, setImageTache] = useState("")

    function handleClick() {
        createTache(user.uid, tableView.id, colonneView.id, nameTache, tacheContent, imageTache).then(data => {
            route.params.setTaches([...data])
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
                    <TextInput placeholder="Colonne" value={nameTache} onChangeText={setNameTache} />
                    <Button onPress={handleClick}>Créer la Tâche</Button>
                    <StatusBar style="auto" />
                </ImageBackground>
            </View>
        </>
    )
}