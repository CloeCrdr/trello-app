import { useContext, useState, useEffect } from "react";
import { Alert, FlatList, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { getAllColonnes, createColonne } from "../api/colonne";
import { TrelloContext } from "../context/trello";
import {styles} from "../styles";
import { Colonne } from "./colonne";

const keyExtractor = (item, index) => item.id

export function ColonneList({navigation}) {
    const [colonnes, setColonnes] = useState([]);
    const {user, tableView} = useContext(TrelloContext)
    function handleClick() {
        navigation.push("Ajouter une colonne", {setColonnes: setColonnes})
    }
    useEffect(() => {
        getAllColonnes(user.uid, tableView.id ).then(data => {
            setColonnes([...data])
        }).catch(err => console.log(err))
    }, []);

    const renderItem = ({ item }) => {
        return <Colonne item={item} navigation={navigation} modif={setColonnes}/>
    }

    return (
        <>
       
            <FlatList 
                keyExtractor={keyExtractor} 
                data={colonnes} 
                renderItem={renderItem}
            />
        

        <Button mode="contained-tonal" onPress={handleClick}>++</Button>
    </>
    )
}