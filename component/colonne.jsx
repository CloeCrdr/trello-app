import { ListItem } from "@rneui/themed";
import { useContext } from "react";
import { Dimensions, View } from "react-native";
import { deleteTable } from "../api/table";
import { TrelloContext } from "../context/trello";
import { Button, Icon } from "react-native-elements";
import { Text } from "react-native-paper";
import { styles } from "../styles";
import { deleteColonne } from "../api/colonne";

export function Colonne({ item, navigation, modif, route }) {
    const { user, tableView, setColonneView } = useContext(TrelloContext);

    function handleClick() {
        setColonneView(item)
        navigation.push("Tâches")
    }
    function handleUpdate() {
        navigation.push("Modifier une colonne", {idColonne: item.id, nomColonne: item.colonne, setColonnes: modif}) 
    }
    function handleDelete() {
        deleteColonne(user.uid, tableView.id, item.id).then((data) => {
            modif([...data]);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <View style={{ width: Dimensions.get('window').width }}>
            <ListItem bottomDivider>
                <View style={styles.listItem}>
                    <ListItem.Title>
                        <Text
                            style={styles.textList}
                            onPress={handleClick}>{item.colonne}
                        </Text>
                    </ListItem.Title>
                    <Text style={styles.buttonRight}>
                        <Button
                            onPress={handleUpdate}
                            icon={{
                                name: 'edit',
                                color: 'white',
                            }}
                            buttonStyle={{
                                color: 'white',
                                backgroundColor: '#FBA100',
                                marginRight: 4,
                                width: 50,
                                height: 50,
                                borderRadius: 100,
                            }}
                        />
                        <Button
                            onPress={handleDelete}
                            icon={{
                                name: 'delete',
                                color: 'white',
                            }}
                            buttonStyle={{
                                color: 'white',
                                backgroundColor: '#6C648B',
                                marginLeft: 4,
                                width: 50,
                                height: 50,
                                borderRadius: 100,
                            }}
                        />
                    </Text>
                </View>


            </ListItem>
        </View>
    )
}