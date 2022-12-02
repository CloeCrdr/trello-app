import { ListItem} from "@rneui/themed";
import { useContext } from "react";
import {Dimensions, View} from "react-native";
import { deleteTable } from "../api/table";
import { TrelloContext } from "../context/trello";
import { Button, Icon } from "react-native-elements";
import { Text } from "react-native-paper";
import { styles } from "../styles";

export function Tableau({item, navigation, modif, route}) {
    const {user, setTableView} = useContext(TrelloContext);
    function handleClick() {
        setTableView(item)
        navigation.push('Colonnes')
    }
    function handleUpdate(){
        navigation.push("Modifier un tableau", {idTableau: item.id, nomTableau: item.nom, setTableaux: modif}) 
    }
    function handleDelete(){
        deleteTable(user.uid, item.id).then((data) => {
            modif([...data]);
        }).catch(err => {
            console.log(err);
        })
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
                            onPress={handleClick}>{item.nom}
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