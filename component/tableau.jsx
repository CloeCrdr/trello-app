import { ListItem,Button} from "@rneui/themed";
import { List  } from "react-native-paper";
import { useContext } from "react";
import {Dimensions, View} from "react-native";
import { deleteTable } from "../api/table";
import { TrelloContext } from "../context/trello";

export function Tableau({item, navigation, modif, route}) {
    const {user, setTableView} = useContext(TrelloContext);
    function handleClick() {
        setTableView(item)
        navigation.push('Colonnes')
    }
    function handleDelete(){
        deleteTable(user.uid, item.id).then((data) => {
            route.params.setTableaux([...data]);
            modif(data)
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <View style={{width: Dimensions.get('window').width}}>
            <ListItem.Swipeable
                bottomDivider
                onPress={handleClick}
                rightElement = {
                    <View>
                        <Button 
                            onPress={handleClick}
                            icon={{ 
                                name : 'edit', 
                                color: 'white'
                            }}
                            buttonStyle={{
                                minHeight: '100%',
                                color: 'white',
                                backgroundColor: 'blue'
                            }}
                        />
                        <Button 
                            onPress={handleDelete}
                            icon={{ 
                                name : 'delete', 
                                color: 'white'
                            }}
                            buttonStyle={{
                                minHeight: '100%',
                                color: 'white' ,
                                backgroundColor: 'red'
                            }}
                        />
                    </View>
                }
            >
                <ListItem.Title>{item.nom}</ListItem.Title> 
                
                
            </ListItem.Swipeable>
        </View>
    )
}