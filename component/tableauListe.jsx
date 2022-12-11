import { useEffect } from "react";
import { useContext, useState } from "react";
import { Alert, Animated, FlatList, ImageBackground, ScrollView, View } from "react-native";
import { Button } from "@rneui/themed";

import { getAllTables } from "../api/table";
import { TrelloContext } from "../context/trello";
import { styles } from "../styles";
import { Tableau } from "./tableau";

const keyExtractor = (item, index) => item.id

export function TableauList({ navigation }) {
    const [tableaux, setTableaux] = useState([]);
    const { user } = useContext(TrelloContext)

    function handleClick() {
        navigation.push("Ajouter un tableau", { setTableaux: setTableaux })
    }
    useEffect(() => {
        getAllTables(user.uid).then(data => {
            setTableaux([...data])
        }).catch(err => Alert.alert(err))
    }, []);
    const renderItem = ({ item }) => {
        return <Tableau item={item} navigation={navigation} modif={setTableaux} />
    }
    return (
        <>
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../assets/gradientApp.png')}
                    resizeMode="cover" style={{ flex: 1 }}
                >
                    <FlatList
                        keyExtractor={keyExtractor}
                        data={tableaux}
                        renderItem={renderItem}
                    />

                    <Button
                        mode="contained-tonal"
                        onPress={handleClick}
                        icon={{
                            name: 'add',
                            color: 'white',
                            width: 65,
                        }}
                        buttonStyle={styles.buttonStyle}
                        style={styles.buttonContainerStyle}
                    />
                </ImageBackground>
            </View>

        </>
    )

}