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

    const {user} = useContext(TrelloContext)
    function handleClick() {
        //navigation.push("Ajouter une colonne")
    }
    useEffect(() => {
        getAllColonnes(user.uid).then(data => {
            setColonnes([...data])
        }).catch(err => console.log(err))
    }, []);

    const renderItem = ({ item }) => {
        return <Colonne item={item} navigation={navigation} modif={setColonnes}/>
    }

    return (
        <>
        <ScrollView>
            <FlatList 
                keyExtractor={keyExtractor} 
                data={colonnes} 
                renderItem={renderItem}
            />
        </ScrollView>
        

        <Button mode="contained-tonal" onPress={handleClick}>++</Button>
    </>
    )
}