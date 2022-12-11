import { useState, useContext } from "react";
import { Button, Text } from "@rneui/themed";
import { ImageBackground, StatusBar,  View, TextInput } from "react-native";
import { updateTable } from "../api/table";
import { TrelloContext } from "../context/trello";

import { styles } from "../styles";

export function UpdateTableau({ navigation, route }) {
    const [nameTableau, setNameTableau] = useState(route.params.nomTableau);
    const { user } = useContext(TrelloContext);
    function handleClick() {
        updateTable(user.uid, route.params.idTableau, nameTableau).then(data => {
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
                    <View style={styles.addBck}>
                        <Text style={styles.h1}>Modifier le tableau </Text>
                        <Text style={styles.h2}>{nameTableau}</Text>
                        <TextInput value={nameTableau} onChangeText={setNameTableau}
                            style={styles.inputB}
                            mode="fat"
                            selectionColor="purple"
                            autoCapitalize='none'
                        />
                        <Button
                            onPress={handleClick}
                            buttonStyle={styles.buttonForm}
                        >Modifier le tableau</Button>
                    </View>
                    <StatusBar style="auto" />
                </ImageBackground>
            </View >
        </>
    )
}