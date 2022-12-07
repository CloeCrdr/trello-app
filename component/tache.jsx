import { ListItem } from "@rneui/themed";
import { useContext } from "react";
import { Animated, Dimensions, View } from "react-native";
import { TrelloContext } from "../context/trello";
import { Button, Icon } from "react-native-elements";
import { Text } from "react-native-paper";
import { styles } from "../styles";
import { deleteTache } from "../api/tache";

export function Tache({ item, navigation, modif, route }) {
    const { user, tableView, colonneView, setTacheView} = useContext(TrelloContext);
    function handleClick() {
        setTacheView(item)
        navigation.push('Ma tâche', {idTache: item.id, nomTache: item.tache, contentTache : item.content, imageTache : item.image})
    }
    function handleUpdate() {
        setTacheView(item)
        navigation.push("Modifier une tâche", {idTache: item.id, nomTache: item.tache, contentTache : item.content, imageTache : item.image, setTaches: modif}) 
    }
    function handleDelete() {
        deleteTache(user.uid, tableView.id, colonneView.id, item.id).then((data) => {
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
                            onPress={handleClick}>{item.tache}
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