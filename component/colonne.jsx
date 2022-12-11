import { ListItem, Text } from "@rneui/themed";
import { useContext, useState } from "react";
import { Alert, Dimensions, View } from "react-native";
import { TrelloContext } from "../context/trello";
import { Button } from "react-native-elements";
import { styles } from "../styles";
import { deleteColonne } from "../api/colonne";

export function Colonne({ item, navigation, modif, route }) {
    const { user, tableView, setColonneView } = useContext(TrelloContext);
    const [showBox, setShowBox] = useState(true);

    function handleClick() {
        setColonneView(item)
        navigation.push("Tâches")
    }
    function handleUpdate() {
        setColonneView(item)
        navigation.push("Modifier une colonne", { idColonne: item.id, nomColonne: item.colonne, setColonnes: modif })
    }
    function handleDelete() {
        return Alert.alert(
            `Supprimer \n "${item.colonne}" ?`,
            `Êtes vous sûr.e de vouloir supprimer cette colone ? \n Cela entraînera la suppression de toutes les tâches contenues dans celle-ci.`,
            [
                //bouton oui
                {
                    text: "Oui",
                    onPress: () => {
                        deleteColonne(user.uid, tableView.id, item.id).then((data) => {
                            modif([...data])
                        }).catch(err => {
                            Alert.alert(err);
                        })
                    }
                },
                //bouton annuler
                {
                    text: "Annuler",
                    onPress: () => {
                        setShowBox(false)
                    }
                }
            ]
        )
    }
    return (
        <View style={{ width: Dimensions.get('window').width }}>
            <ListItem bottomDivider>
                <View style={styles.listCol}>
                    <View style={styles.titleCol}>
                        <ListItem.Title>
                            <Text
                                onPress={handleClick}
                                style={styles.h1}
                            >
                                {item.colonne}
                            </Text>
                        </ListItem.Title>
                    </View>
                    <View>

                        <Text>
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
                                    width: 100,
                                    height: 40,
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
                                    width: 100,
                                    height: 40,
                                }}
                            />
                        </Text>
                    </View>
                </View>


            </ListItem>
        </View>
    )
}