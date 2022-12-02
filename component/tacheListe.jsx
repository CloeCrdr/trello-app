import { useContext, useState, useEffect } from "react";
import { Alert, FlatList, ImageBackground, ScrollView, View } from "react-native";
import { Button } from "react-native-paper";
import { getAllColonnes, createColonne } from "../api/colonne";
import { getAllTaches } from "../api/tache";
import { TrelloContext } from "../context/trello";
import {styles} from "../styles";
import { Colonne } from "./colonne";
import { Tache } from "./tache";

const keyExtractor = (item, index) => item.id

export function TacheList({navigation}) {
    const [taches, setTaches] = useState([]);
    const {user, tableView, colonneView} = useContext(TrelloContext)
    function handleClick() {
        navigation.push("Ajouter une tâche", {setTaches: setTaches})
    }
    console.log(colonneView)
    useEffect(() => {
        getAllTaches(user.uid, tableView.id, colonneView.id ).then(data => {
            setTaches([...data])
        }).catch(err => console.log(err))
    }, []);

    const renderItem = ({ item }) => {
        return <Tache item={item} navigation={navigation} modif={setTaches}/>
    }

    return (
        <>
            <View style={{flex: 1}}>
                <ImageBackground
                    source={require('../assets/gradientApp.png')} 
                    resizeMode="cover" style={{flex: 1}}
                >
                    <FlatList 
                        keyExtractor={keyExtractor} 
                        data={taches} 
                        renderItem={renderItem}
                    />
                </ImageBackground>
            </View>     

        <Button mode="contained-tonal" onPress={handleClick}>++</Button>
    </>
    )
}