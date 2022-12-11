import { Button, Text } from "@rneui/themed";
import { useContext, useState } from "react";
import { Alert, Keyboard, SafeAreaView, StatusBar, View, Image, TextInput, ImageBackground } from 'react-native'
import { createUser } from "../api/connect";
import { TrelloContext } from "../context/trello";
import { styles } from "../styles";

export function Register() {
    const [login, setLogin] = useState("");
    const [mdp, setMdp] = useState("");
    const [confirm, setConfirm] = useState("");
    const { setUser } = useContext(TrelloContext);
    function handleClick() {
        //Keyboard.dismiss()
        if (confirm === mdp) {
            createUser(login, mdp).then(data => {
                setUser(data)
            }).catch(err => {
                Alert.alert(err)
            })
        } else {
            Alert.alert("Mots de passe différents")
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/gradientApp.png')} resizeMode="cover"
                style={{ flex: 1 }}>
                <SafeAreaView style={styles.form}>
                    <View style={styles.fondImage}>
                        <Image
                            resizeMode='contain'
                            style={styles.imageForm}
                            source={require('../assets/logo.png')}
                        />
                    </View>
                    <TextInput
                        placeholder="Login"
                        keyboardType="email-address"
                        value={login}
                        onChangeText={setLogin}
                        style={styles.input}
                        autoCapitalize='none'
                    />
                    <TextInput
                        placeholder="Mot de passe"
                        secureTextEntry={true}
                        value={mdp}
                        onChangeText={setMdp}
                        style={styles.input}
                        autoCapitalize='none'
                    />
                    <TextInput
                        placeholder="Confirmer le mot de passe"
                        secureTextEntry={true} value={confirm}
                        onChangeText={setConfirm}
                        style={styles.input}
                        autoCapitalize='none'
                    />
                    <Text style={styles.buttonForm}>
                        <Button
                            onPress={handleClick}
                            mode="elevated"
                            buttonStyle={styles.buttonForm}
                        >
                            Inscription
                        </Button>
                    </Text>
                    <StatusBar style="auto" />
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}