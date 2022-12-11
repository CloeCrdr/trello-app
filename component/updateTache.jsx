import { useState, useContext } from "react";
import { Button, Text } from "@rneui/themed";
import { ImageBackground, StatusBar, View, TextInput, Image, ScrollView } from "react-native";
import { TrelloContext } from "../context/trello";
import { updateTache } from "../api/tache";
import { styles } from "../styles";

import * as ImagePicker from 'expo-image-picker'

export function UpdateTache({ navigation, route }) {
    const [nameTache, setNameTache] = useState(route.params.nomTache);
    const [contentTache, setContentTache] = useState(route.params.contentTache);
    const [couleurTache, setCouleurTache] = useState(route.params.couleurTache);
    const [image, setImage] = useState(route.params.image);
    console.log(route.params)
    const { user, tableView, colonneView, tacheView } = useContext(TrelloContext);

    function handleClick() {
        updateTache(user.uid, tableView.id, colonneView.id, tacheView.id, nameTache, contentTache, couleurTache, image).then(data => {
            route.params.setTaches([...data]);
            navigation.goBack()
        }).catch(err => {
            console.log(err);
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
                    <ScrollView>
                        <View style={styles.addBck}>
                            <Text style={styles.h1}>Modifier la tâche </Text>
                            <Text style={styles.h2}>{tacheView.tache} </Text>

                            <TextInput
                                value={nameTache}
                                onChangeText={setNameTache}
                                style={styles.inputB}
                                mode="fat"
                                selectionColor="purple"
                                autoCapitalize='none'
                            />

                            <TextInput
                                placeholder="Description"
                                value={contentTache}
                                onChangeText={setContentTache}
                                style={
                                    [
                                        styles.inputB,
                                        {
                                            height: 150,
                                            textAlignVertical: 'top'
                                        }
                                    ]
                                }
                                mode="fat"
                                selectionColor="purple"
                                autoCapitalize='none'
                                multiline={true}
                                numberOfLines={4}
                            />
                            <TextInput
                                placeholder="Couleur de la tâche"
                                value={couleurTache}
                                onChangeText={setCouleurTache}
                                style={styles.inputB}
                                mode="fat"
                                selectionColor="purple"
                                autoCapitalize='none'
                            />
                            <Text style={styles.description}>
                                La couleur est réglée par défaut, mais vous pouvez la changer par un code hexadécimal ou le nom d'une couleur.
                            </Text>
                            <View style={styles.viewImage}>
                                {image ? <View>
                                    <Image
                                        source={{ uri: image }}
                                        style={styles.imageAddUpdt}

                                    />
                                    <Text
                                        onPress={pickImage}
                                        style={styles.textImage}
                                    >
                                        Choisir une autre image
                                    </Text>
                                </View> : image ? <View>
                                    <Image
                                        source={{ uri: tacheView.image }}
                                        style={styles.imageAddUpdt}
                                    />
                                    <Text style={styles.textImage}>
                                        <Text
                                            onPress={pickImage}
                                        >
                                            Choisir une autre image
                                        </Text>
                                        <Text
                                            onPress={deleteImage}
                                        >
                                            Supprimer l'image
                                        </Text>
                                    </Text>
                                </View> : <View>
                                    <Text
                                        onPress={pickImage}
                                        style={styles.textImage}
                                    >
                                        Choisir une image
                                    </Text>
                                </View>
                                }
                            </View>
                            <Button
                                onPress={handleClick}
                                buttonStyle={styles.buttonForm}
                            >
                                Modifier la tâche
                            </Button>
                        </View>
                    </ScrollView>
                    <StatusBar style="auto" />
                </ImageBackground>
            </View>
        </>
    )
}