import { useContext, useEffect, useState } from "react";
import { Button, Icon, Text } from "@rneui/themed";
import { getSingleTache } from "../api/singleTache";
import { TrelloContext } from "../context/trello";
import { ImageBackground, View, Image } from "react-native";
import { styles } from "../styles";

export function TacheView({ navigation }) {
    const [tache, setTache] = useState([])
    const { user, tableView, colonneView, tacheView } = useContext(TrelloContext)

    useEffect(() => {
        getSingleTache(user.uid, tableView.id, colonneView.id, tacheView.id).then(data => {
            setTache(data)
        }).catch(err => Alert.alert(err))
    }, []);

    const renderItem = ({ item }) => {
        return <TacheView item={item} navigation={navigation} />
    }

    return (
        <>
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../assets/gradientApp.png')}
                    resizeMode="cover"
                    style={{ flex: 1 }}
                >
                    <View style={styles.addBck}>
                        <View>
                            <Text style={styles.h1}>
                                {tache.tache}
                            </Text>
                            <Text style={styles.contentDescription}>
                                {tache.content}
                            </Text>
                        </View>
                        <Text style={styles.taskColor}>
                            <Text>Couleur de la tâche :</Text>
                            <Button buttonStyle={[styles.buttonCouleur, { backgroundColor: `${tache.couleur}` }]} />
                        </Text>

                        {tache.image ? <Image source={{ uri: tache.image }} style={[styles.imageTache, { borderColor: `${tache.couleur}` }]} /> :
                            <></>}
                    </View>

                </ImageBackground>
            </View>
        </>
    )

}