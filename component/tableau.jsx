import { ListItem } from "@rneui/themed";
import { useContext, useState } from "react";
import { Alert, Dimensions, ImageBackground, View } from "react-native";
import { deleteTable } from "../api/table";
import { TrelloContext } from "../context/trello";
import { Button, Icon } from "react-native-elements";
import { Text } from "react-native-paper";
import { styles } from "../styles";
import TouchableScale from 'react-native-touchable-scale';

export function Tableau({ item, navigation, modif, route }) {
    const { user, setTableView } = useContext(TrelloContext);
    const [showBox, setShowBox] = useState(true); 
    function handleClick() {
        setTableView(item)
        navigation.push('Colonnes')
    }
    function handleUpdate() {
        navigation.push("Modifier un tableau", { idTableau: item.id, nomTableau: item.nom, setTableaux: modif })
    }
    function handleDelete() {
        return Alert.alert(
            `Supprimer \n "${item.nom}" ?`, 
            `Êtes vous sûr.e de vouloir supprimer ce tableau ? \n Cela entraînera la suppression des colonnes et des tâches contenues dans celui-ci.`, 
            [
                //bouton oui
                {
                    text: "Oui",
                    onPress: () => {
                        deleteTable(user.uid, item.id).then((data) => {
                            modif([...data])
                        }).catch(err => {
                            console.log(err);
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
                containerStyle={styles.listTableau}
                Component={TouchableScale}
                friction={90} 
                tension={100} 
                activeScale={0.95}
            >
            <View style={styles.listItem}>
                <ListItem.Title 
                style={styles.textList}
                onPress={handleClick}>
                    <Text>
                        {item.nom}
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