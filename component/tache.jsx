import { ListItem } from "@rneui/themed";
import { useContext, useState } from "react";
import { Alert, Animated, Dimensions, StyleSheet, View } from "react-native";
import { TrelloContext } from "../context/trello";
import { Button, Icon } from "react-native-elements";
import { Text } from "react-native-paper";
import { styles } from "../styles";
import { deleteTache } from "../api/tache";

export function Tache({ item, navigation, modif, route }) {
    const { user, tableView, colonneView, setTacheView } = useContext(TrelloContext);
    const [showBox, setShowBox] = useState(true);

    function handleClick() {
        setTacheView(item)
        navigation.push('Ma tâche', { idTache: item.id, nomTache: item.tache, contentTache: item.content, couleurTache: item.couleur, image: item.image })
    }
    function handleUpdate() {
        setTacheView(item)
        navigation.push("Modifier une tâche", { idTache: item.id, nomTache: item.tache, contentTache: item.content, couleurTache: item.couleur, image: item.image, setTaches: modif })
    }
    function handleDelete() {
        return Alert.alert(
            `Supprimer \n "${item.tache}" ?`,
            `Êtes vous sûr.e de vouloir supprimer cette tâche ?`,
            [
                //bouton oui
                {
                    text: "Oui",
                    onPress: () => {
                        deleteTache(user.uid, tableView.id, colonneView.id, item.id).then((data) => {
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
            <ListItem
                bottomDivider
                containerStyle={[
                    { borderLeftColor: `${item.couleur}` },
                    styles.listTaches
                ]}
            >
                <View style={styles.listTache}>
                    <View style={styles.titleCol}>
                        <ListItem.Title>
                            <Text
                                style={[styles.textList, {
                                    textShadowColor: `${item.couleur}`,
                                    textShadowOffset: { width: 0, height: 0 },
                                    textShadowRadius: 1,
                                    elevation: 5
                                }]}
                                onPress={handleClick}>{item.tache}
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
                                    size: 15,
                                }}
                                buttonStyle={{
                                    color: 'white',
                                    backgroundColor: '#FBA100',
                                    marginRight: 4,
                                    width: 40,
                                    height: 40,
                                    borderRadius: 100,
                                }}
                            />
                            <Button
                                onPress={handleDelete}
                                icon={{
                                    name: 'delete',
                                    color: 'white',
                                    size: 15
                                }}
                                buttonStyle={{
                                    color: 'white',
                                    backgroundColor: '#6C648B',
                                    marginLeft: 4,
                                    width: 40,
                                    height: 40,
                                    borderRadius: 100,
                                }}
                            />
                        </Text>
                    </View>
                </View>




            </ListItem>
        </View>
    )
}