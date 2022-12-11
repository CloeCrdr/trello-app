import { useState, useContext } from "react";
import { Button, Text } from "@rneui/themed";
import { ImageBackground, StatusBar, View, TextInput, Image } from "react-native";
import { createTache } from "../api/tache";
import { TrelloContext } from "../context/trello";
import * as ImagePicker from 'expo-image-picker'

import { styles } from "../styles";

export function AddTache({ navigation, route }) {
    const [nameTache, setNameTache] = useState("");
    const { user, tableView, colonneView } = useContext(TrelloContext);
    const [tacheContent, setTacheContent] = useState("");
    const [tacheCouleur, setTacheCouleur] = useState("#C3C3C3");
    const [image, setImage] = useState(null);

    function handleClick() {
        createTache(user.uid, tableView.id, colonneView.id, nameTache, tacheContent, tacheCouleur, image).then(data => {
            route.params.setTaches([...data])
            navigation.goBack()
        }).catch(err => {
            Alert.alert(err);
        })
    }
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    function deleteImage() {
        setImage(null)
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
                        <Text style={styles.h1}>Nouvelle tâche</Text>
                        <TextInput
                            placeholder="Colonne"
                            value={nameTache}
                            onChangeText={setNameTache}
                            style={styles.inputB}
                            mode="fat"
                            selectionColor="purple"
                            autoCapitalize='none'
                        />
                        <TextInput
                            placeholder="Description"
                            value={tacheContent}
                            onChangeText={setTacheContent}
                            style={
                                [
                                    styles.inputB,
                                    {
                                        height: 150,
                                        textAlignVertical: 'top'
                                    }
                                ]}
                            mode="fat"
                            selectionColor="purple"
                            autoCapitalize='none'
                            multiline={true}
                            numberOfLines={4}
                        />
                        <TextInput
                            placeholder="Couleur de la tâche"
                            value={tacheCouleur}
                            onChangeText={setTacheCouleur}
                            style={styles.inputB}
                            mode="fat"
                            selectionColor="purple"
                            autoCapitalize='none'
                        />
                        <Text
                            style={styles.description}
                        >
                             La couleur est réglée par défaut, mais vous pouvez la changer par un code hexadécimal ou le nom d'une couleur.
                        </Text>
                        {!image && <Button
                            mod="contained-tonal"
                            onPress={pickImage}
                            buttonStyle={{
                                backgroundColor: '#b6A19E',
                                width: 100, height: 100,
                                alignSelf: 'center',
                                borderRadius: 100,
                                marginTop: 15,
                            }}
                        >
                            Choisir une image
                        </Button>}
                        {image && <>
                            <View style={styles.viewImage}>
                                <Image source={{ uri: image }} style={styles.imageAddUpdt} />
                                <Text onPress={deleteImage} style={styles.textImage}>
                                    Effacer l'image
                                </Text>
                            </View>
                        </>}



                        <Button
                            onPress={handleClick}
                            buttonStyle={styles.buttonForm}
                            style={{ margin: 10 }}
                        >
                            Créer la Tâche
                        </Button>
                    </View>
                    <StatusBar style="auto" />
                </ImageBackground>
            </View>
        </>
    )
}