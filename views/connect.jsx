import {  TextInput, Text, Button } from "react-native-paper";
import {  } from "@rneui/themed";
import { useEffect, useRef, useContext, useState } from "react";
import { Alert, Keyboard, SafeAreaView, StatusBar, View, Image } from "react-native";
import { connectUser, connectGoogle } from "../api/connect";
import { TrelloContext } from "../context/trello";
import { styles } from "../styles";
import { LogGoogle } from "../component/google";
import { LogFacebook } from "../component/facebook";

export function Connect() {
    const [login, setLogin] = useState("");
    const [mdp, setMdp] = useState("");
    const { setUser } = useContext(TrelloContext);
    function handleClick(){
        Keyboard.dismiss();
        connectUser(login, mdp).then(data =>{
            setUser(data)
        }).catch(err => {
            Alert.alert(err)
        })
    }
    function clickGoogle(){
        connectGoogle()
    }
 
    return (
        <View style={{flex: 1}}>
            <SafeAreaView style={styles.form}>
                <Image 
                    resizeMode='contain' 
                    style={styles.imageForm}
                    source={require('../assets/logo.gif')}
                />
                <TextInput 
                    placeholder="Login" 
                    keyboardType="email-address" 
                    value={login} onChangeText={setLogin} 
                    style={styles.input}
                    mode="fat"
                    selectionColor="purple"
                />
                <TextInput 
                    placeholder="Mot de passe" 
                    secureTextEntry={true} 
                    value={mdp} 
                    onChangeText={setMdp} 
                    style={styles.input}
                />
                <Text style={styles.buttonForm}>
                <Button 
                    onPress={handleClick}
                    mode="elevated"
                    style={styles.buttonForm}
                >
                    Connexion
                </Button> 
                </Text>
                <StatusBar style="auto" />
            </SafeAreaView>
        </View>
    );
}