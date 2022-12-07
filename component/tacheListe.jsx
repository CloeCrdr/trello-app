import { useContext, useState, useEffect } from "react";
import { Alert, FlatList, ImageBackground, ScrollView, View } from "react-native";
import { Button } from "@rneui/themed";
import { getAllColonnes, createColonne } from "../api/colonne";
import { getAllTaches } from "../api/tache";
import { TrelloContext } from "../context/trello";
import { styles } from "../styles";
import { Colonne } from "./colonne";
import { Tache } from "./tache";

const keyExtractor = (item, index) => item.id

export function TacheList({ navigation }) {
    const [taches, setTaches] = useState([]);
    const { user, tableView, colonneView } = useContext(TrelloContext)
    function handleClick() {
        navigation.push("Ajouter une tâche", { setTaches: setTaches })
    }
    useEffect(() => {
        getAllTaches(user.uid, tableView.id, colonneView.id).then(data => {
            setTaches([...data])
        }).catch(err => console.log(err))
    }, []);

    const renderItem = ({ item }) => {
        return <Tache item={item} navigation={navigation} modif={setTaches} />
    }

    return (
        <>
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../assets/gradientApp.png')}
                    resizeMode="cover" style={{ flex: 1 }}
                >
                    <FlatList
                        keyExtractor={keyExtractor}
                        data={taches}
                        renderItem={renderItem}
                    />

                    <Button
                        mode="contained-tonal"
                        onPress={handleClick}
                        icon={{
                            name: 'add',
                            color: 'white',
                            width: 65,
                        }}
                        buttonStyle={styles.buttonStyle}
                        style={styles.buttonContainerStyle}
                    />
                </ImageBackground>
            </View>


        </>
    )
}