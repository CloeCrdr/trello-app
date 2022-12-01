import { useEffect } from "react";
import { useContext, useState } from "react";
import { Alert, FlatList, ScrollView } from "react-native";
import { Button } from "react-native-paper";

import { getAllTables, createTable } from "../api/table";
import { TrelloContext } from "../context/trello";
import {styles} from "../styles";
import { Tableau } from "./tableau";

const keyExtractor = (item, index) => item.id

export function TableauList({navigation}) {
    const [tableaux, setTableaux] = useState([]);
    const [tableName, setTableName] = useState("");
    const {user} = useContext(TrelloContext)

    function handleClick() {
        navigation.push("Ajouter un tableau", {setTableaux: setTableaux})  
    }
    useEffect(() => {
        getAllTables(user.uid).then(data => {
            setTableaux([...data])
        }).catch(err => console.log(err))
    }, []);
    const renderItem = ({ item }) => {
        return <Tableau item={item} navigation={navigation} modif={setTableaux}/>
    }
    return(
            <>
                <ScrollView>
                    <FlatList 
                        keyExtractor={keyExtractor} 
                        data={tableaux} 
                        renderItem={renderItem}
                    />
                </ScrollView>
                

                <Button mode="contained-tonal" onPress={handleClick}>++</Button>
            </>
    )
   
}