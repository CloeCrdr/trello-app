import { useContext, useState, useEffect } from "react";
import { Alert, FlatList, ImageBackground, ScrollView, TouchableOpacity, View } from "react-native";
import { Button } from "@rneui/themed";
import { getAllColonnes, createColonne } from "../api/colonne";
import { getAllTaches } from "../api/tache";
import { TrelloContext } from "../context/trello";
import { styles } from "../styles";
import { Colonne } from "./colonne";
import { Tache } from "./tache";
import { Animated } from "react-native";
import DraggableFlatList, {
    ScaleDecorator,
  } from 'react-native-draggable-flatlist';

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
        }).catch(err => console.log(err))
    }, []);

    const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);
    const y = new Animated.Value(0);
    const onScroll = Animated.event([{ nativeEvent: { contentOffset : { y } } }], {
        useNativeDriver : true
    })

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
                        onDragEnd={({data}) => setTaches(data)}
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