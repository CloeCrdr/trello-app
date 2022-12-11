import { useState, useContext } from "react";
import { Button, Text } from "@rneui/themed";
import { ImageBackground, StatusBar, View, TextInput, SafeAreaView } from "react-native";
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
            Alert.alert(err);
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
                        <Text style={styles.h1}>Nouveau tableau</Text>
                        <TextInput
                            placeholder="Nom du tableau"
                            value={nameTableau}
                            onChangeText={setNameTableau}
                            style={styles.inputB}
                            mode="fat"
                            selectionColor="purple"
                            autoCapitalize='none'
                        />
                        <Button
                            onPress={handleClick}
                            buttonStyle={styles.buttonForm}
                        >
                            Créer le tableau
                        </Button>


                    </View>
                    <StatusBar style="auto" />
                </ImageBackground>
            </View>
        </>

    )
}