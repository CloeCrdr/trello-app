import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-paper';
import { useContext } from 'react';

import { TrelloContext } from '../context/trello';

import { TableauList } from '../component/tableauListe';
import { ColonneList } from '../component/colonneListe';

import { AddTableau } from '../component/addTableau';
import { AddColonne } from '../component/addColonne';

import { UpdateTableau } from '../component/updateTableau';
import { TacheList } from '../component/tacheListe';
import { AddTache } from '../component/addTache';
import { UpdateColonne } from '../component/updateColonne';


const Stack = createStackNavigator();

export function TrelloRouter() {
    const {tableView, colonneView, taskView} = useContext(TrelloContext)

    return (
        
         <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Mes Tableaux" component={TableauList} />
                <Stack.Screen name="Ajouter un tableau" component={AddTableau} />
                <Stack.Screen name="Modifier un tableau" component={UpdateTableau} />

                <Stack.Screen name="Colonnes" options={{title: 'Tableau " ' + tableView.nom + '"'}} component={ColonneList} />
                <Stack.Screen name="Ajouter une colonne" component={AddColonne} />
                <Stack.Screen name="Modifier une colonne" component={UpdateColonne} />

                <Stack.Screen name="Tâches" options={{title: 'Colonne "' + colonneView.colonne + '"'}} component={TacheList} />
                <Stack.Screen name="Ajouter une tâche" component={AddTache} />
                <Stack.Screen name="Modifier une tâche" component={UpdateTableau} />
            </Stack.Navigator> 
         </NavigationContainer>

    );
}