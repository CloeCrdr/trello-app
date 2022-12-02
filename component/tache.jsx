import { ListItem} from "@rneui/themed";
import { useContext } from "react";
import {Dimensions, View} from "react-native";
import { deleteTable } from "../api/table";
import { TrelloContext } from "../context/trello";
import { Button, Icon } from "react-native-elements";
import { Text } from "react-native-paper";
import { styles } from "../styles";

export function Tache({item, navigation, modif, route}) {
    const {user, setTaskView} = useContext(TrelloContext);
    console.log(item)
    function handleClick() {
        setTaskView(item)
        //navigation.push('Ma tâche')
    }
    function handleUpdate(){
        //navigation.push("Modifier une colonne", {idTableau: item.id, nomTableau: item.nom, setTableaux: modif}) 
    }
    function handleDelete(){
        // deleteTable(user.uid, item.id).then((data) => {
        //     modif([...data]);
        // }).catch(err => {
        //     console.log(err);
        // })
    }

    return (
        <View style={{ width: Dimensions.get('window').width }}>
            <ListItem bottomDivider>
                <View style={styles.listItem}>
                    <ListItem.Title>
                        <Text
                            style={styles.textList}
                            onPress={handleClick}>{item.tache}
                        </Text>
                    </ListItem.Title>
                    <Text style={styles.buttonRight}>
                        <Button
                            onPress={handleUpdate}
                            icon={{
                                name: 'edit',
                                color: 'red'
                            }}
                            buttonStyle={{
                                color: 'white',
                                backgroundColor: 'white'
                            }}
                        />
                        <Button
                            onPress={handleDelete}
                            icon={{
                                name: 'delete',
                                color: 'red'
                            }}
                            buttonStyle={{
                                color: 'white',
                                backgroundColor: 'white'
                            }}
                        />
                    </Text>
                </View>


            </ListItem>
        </View>
    )
}