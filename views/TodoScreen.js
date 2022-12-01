import React, { useState, useEffect } from 'react';
import {View, Image, Text, StyleSheet, FlatList} from 'react-native'
import { ListItem } from 'react-native-elements';
import { database } from '../api/app';

export const TodoScreen = () => {
    const [data, setData] = useState([1, 2, 3, 4]);
    const current = 'todo';
    const table = 'tâche' ;

    useEffect(() => {
        database
        .collection(table)
        .where('status', '==', current)
        .onSnapshot((query) => {
            query.forEach((doc) => {

            });
        })
    }, [])
    console.log(database)
    const renderItem = () => (
        <ListItem bottomDivider
          title='test'
        />
      )
    return (
        <View style={styles.container}>
            <FlatList data={data} renderItem={renderItem}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});