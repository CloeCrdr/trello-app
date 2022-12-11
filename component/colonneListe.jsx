import { useContext, useState, useEffect } from "react";
import { Alert, FlatList, ImageBackground, ScrollView, TouchableOpacity, View } from "react-native";
import { Button } from "@rneui/themed";
import { getAllColonnes, createColonne } from "../api/colonne";
import { TrelloContext } from "../context/trello";
import { styles } from "../styles";
import { Colonne } from "./colonne";
import * as Animatable from 'react-native-animatable'

const keyExtractor = (item, index) => item.id

export function ColonneList({ navigation }) {
    const [colonnes, setColonnes] = useState([]);
    const { user, tableView } = useContext(TrelloContext)
    function handleClick() {
        navigation.push("Ajouter une colonne", { setColonnes: setColonnes })
    }
    useEffect(() => {
        getAllColonnes(user.uid, tableView.id).then(data => {
            setColonnes([...data])
        }).catch(err => Alert.alert(err))
    }, []);

    const renderItem = ({ item, index}) => {
        return (
            <Animatable.View
                animation="fadeInUp"
                duration={1000}
                delai={index * 300}
            >
                <TouchableOpacity>
                    <Colonne 
                        item={item} 
                        navigation={navigation} 
                        modif={setColonnes} 
                    />
                </TouchableOpacity>
            </Animatable.View>
        
        )
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
                        data={colonnes}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}

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