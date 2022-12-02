import { ListItem} from "@rneui/themed";
import { useContext } from "react";
import {Dimensions, View} from "react-native";
import { deleteTable } from "../api/table";
import { TrelloContext } from "../context/trello";
import { Button, Icon } from "react-native-elements";
import { Text } from "react-native-paper";
import { styles } from "../styles";
import { deleteColonne } from "../api/colonne";

export function Colonne({item, navigation, modif, route}) {
    const {user, setColonneView} = useContext(TrelloContext);

    function handleClick() {
        setColonneView(item)
        navigation.push("Tâches")
    }
    function handleUpdate(){
        //navigation.push("Modifier une colonne", {idColonne: item.id, nomColonne: item.colonne, setColonnes: modif}) 
    }
    function handleDelete(){
        // deleteColonne(user.uid, item.id).then((data) => {
        //     modif([...data]);
        // }).catch(err => {
        //     console.log(err);
        // })
    }

    return (
        <View style={{width: Dimensions.get('window').width}}>
            <ListItem
                bottomDivider
                style={styles.listItem}
            >
                <ListItem.Title >
                        <Text 
                            style={styles.textList}
                            onPress={handleClick}>{item.colonne}
                        </Text>
                        <Text style={styles.buttonRight}>
                        <Button 
                            onPress={handleUpdate}
                            icon={{ 
                                name : 'edit', 
                                color: 'red'
                            }}
                            buttonStyle={{
                                color: 'white' ,
                                backgroundColor: 'white'
                            }}
                        />
                        <Button 
                            onPress={handleDelete}
                            icon={{ 
                                name : 'delete', 
                                color: 'red'
                            }}
                            buttonStyle={{
                                color: 'white' ,
                                backgroundColor: 'white'
                            }}
                        />
                        </Text>

                    
                </ListItem.Title> 
                
                
            </ListItem>
        </View>
    )
}