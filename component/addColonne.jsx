import { useState, useContext } from "react";
import { Button, Text } from "@rneui/themed";
import { ImageBackground, StatusBar, View, TextInput } from "react-native";
import { createColonne } from "../api/colonne";
import { TrelloContext } from "../context/trello";

import { styles } from "../styles";

export function AddColonne({ navigation, route }) {
    const [nameColonne, setNameColonne] = useState("");
    const { user, tableView } = useContext(TrelloContext);

    function handleClick() {
        createColonne(user.uid, tableView.id, nameColonne).then(data => {
            route.params.setColonnes([...data])
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
                    <View style={styles.addBck}>
                        <Text style={styles.h1}>Nouvelle colonne</Text>
                        <TextInput
                            placeholder="Colonne"
                            value={nameColonne}
                            onChangeText={setNameColonne}
                            style={styles.inputB}
                            mode="fat"
                            selectionColor="purple"
                            autoCapitalize='none'
                        />
                        <Button
                            onPress={handleClick}
                            buttonStyle={styles.buttonForm}
                        >
                            Créer la colonne
                        </Button>

                    </View>
                    <StatusBar style="auto" />
                </ImageBackground>
            </View>
        </>
    )
}