import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-paper';
import { TableauList } from '../component/tableauListe';
import { ColonneList } from '../component/colonneListe';
import { AddTableau } from '../component/addTableau';
import { useContext } from 'react';
import { TrelloContext } from '../context/trello';


const Stack = createStackNavigator();

export function TrelloRouter() {
    const {tableView} = useContext(TrelloContext)

    return (
        
         <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Mes Tableaux" component={TableauList} />
                <Stack.Screen name="Ajouter un tableau" component={AddTableau} />
                <Stack.Screen name="Colonnes" options={{title: tableView.nom}} component={ColonneList} />
                <Stack.Screen name="Tâches" component={AddTableau} />
            </Stack.Navigator> 
         </NavigationContainer>

    );
}