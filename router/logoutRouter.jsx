import React, {FC, ReactElement} from "react";
import { StackActions, useNavigation } from "@react-navigation/native"
import { View, Alert, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import Parse from 'react-native';
import { logoutUser } from "../api/connect";

export function LogoutRouter() {
    function handleClick(){
        //Keyboard.dismiss();
        logoutUser().then(() =>{
            console.log('you did logout')
        }).catch(err => {
            Alert.alert(err)
        })
    }
    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => handleClick()}>
                    <View>
                        <Text>{'Logout'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}