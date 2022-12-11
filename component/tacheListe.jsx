import { useContext, useState, useEffect } from "react";
import { Alert, FlatList, ImageBackground, ScrollView, TouchableOpacity, View } from "react-native";
import { Button } from "@rneui/themed";
import { getAllTaches } from "../api/tache";
import { TrelloContext } from "../context/trello";
import { styles } from "../styles";
import { Tache } from "./tache";
import DraggableFlatList, { ScaleDecorator, } from 'react-native-draggable-flatlist';

const keyExtractor = (item) => item.id

export function TacheList({ navigation }) {
    const [taches, setTaches] = useState([]);
    const { user, tableView, colonneView } = useContext(TrelloContext)
    function handleClick() {
        navigation.push("Ajouter une tâche", { setTaches: setTaches })
    }
    useEffect(() => {
        getAllTaches(user.uid, tableView.id, colonneView.id).then(data => {
            setTaches([...data])
        }).catch(err => Alert.alert(err))
    }, []);

    const renderItem = ({ item, drag, isActive }) => {
        return (
            <ScaleDecorator>
                <TouchableOpacity
                    onLongPress={drag}
                    disabled={isActive}>
                    <Tache item={item} navigation={navigation} modif={setTaches} />
                </TouchableOpacity>
            </ScaleDecorator>
        )
    }

    return (
        <>
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../assets/gradientApp.png')}
                    resizeMode="cover" style={{ flex: 1 }}
                >

                    <DraggableFlatList
                        keyExtractor={keyExtractor}
                        data={taches}
                        renderItem={renderItem}
                        onDragEnd={({ data }) => setTaches(data)}
                        style={styles.draggable}
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