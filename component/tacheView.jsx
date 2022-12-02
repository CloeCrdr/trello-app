import { useContext, useEffect, useState } from "react";
import { Text } from "@rneui/themed";
import { getSingleTache } from "../api/singleTache";
import { TrelloContext } from "../context/trello";
import { ImageBackground, View } from "react-native";

export function TacheView({ navigation }) {
    const [tache, setTache] = useState([])
    const { user, tableView, colonneView, tacheView } = useContext(TrelloContext)

    useEffect(() => {
        getSingleTache(user.uid, tableView.id, colonneView.id, tacheView.id).then(data => {
            setTache(data)
        }).catch(err => console.log(err))
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
                    <Text>
                        {tache.tache}
                    </Text>
                </ImageBackground>
            </View>
        </>
    )

}