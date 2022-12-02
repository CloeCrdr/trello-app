import { useContext, useState, useEffect } from "react";
import { Alert, FlatList, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { getAllColonnes, createColonne } from "../api/colonne";
import { TrelloContext } from "../context/trello";
import {styles} from "../styles";
import { Colonne } from "./colonne";
import { Tache } from "./tache";

const keyExtractor = (item, index) => item.id_tache

export function TacheList({navigation}) {
    const [taches, setTaches] = useState([]);
    const {user, colonneView} = useContext(TrelloContext)
    function handleClick() {
        navigation.push("Ajouter une tâche", {setTaches: setTaches})
    }
    console.log(colonneView)
    useEffect(() => {
        getAllColonnes(user.uid, colonneView.id ).then(data => {
            setTaches([...data])
        }).catch(err => console.log(err))
    }, []);

    const renderItem = ({ item }) => {
        return <Tache item={item} navigation={navigation} modif={setTaches}/>
    }

    return (
        <>
            <FlatList 
                keyExtractor={keyExtractor} 
                data={taches} 
                renderItem={renderItem}
            />
        

        <Button mode="contained-tonal" onPress={handleClick}>++</Button>
    </>
    )
}