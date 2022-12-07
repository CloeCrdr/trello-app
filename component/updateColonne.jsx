import { useState, useContext } from "react";
import { Button, Text } from "@rneui/themed";
import { ImageBackground, StatusBar, View, TextInput} from "react-native";
import { TrelloContext } from "../context/trello";
import { styles } from "../styles";
import { updateColonne } from "../api/colonne";

export function UpdateColonne({ navigation, route }) {
    const [nameColonne, setNameColonne] = useState(route.params.nomColonne);
    const { user, tableView, colonneView } = useContext(TrelloContext);

    function handleClick() {
        updateColonne(user.uid, tableView.id, colonneView.id, nameColonne).then(data => {
            route.params.setColonnes([...data]);
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
                        <Text style={styles.h1}>Modifier la colonne </Text>
                        <Text style={styles.h2}>{nameColonne} </Text>
                        <TextInput
                            value={nameColonne}
                            onChangeText={setNameColonne}
                            style={styles.inputB}
                            mode="fat"
                            selectionColor="purple"
                        />
                        <Button
                            onPress={handleClick}
                            buttonStyle={styles.buttonForm}
                        >
                            Modifier la colonne
                        </Button>
                    </View>


                    <StatusBar style="auto" />
                </ImageBackground>
            </View>
        </>

    )
}