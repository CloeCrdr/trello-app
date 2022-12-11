import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from "react-native-elements";
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
import { UpdateTache } from '../component/updateTache';
import { TacheView } from '../component/tacheView';
import { logOutUser } from '../api/connect';

const Stack = createStackNavigator();

export function TrelloRouter() {
    const { tableView, colonneView, tacheView } = useContext(TrelloContext)
    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Mes Tableaux"
                    component={TableauList}
                    options={{
                        headerRight: () => (
                            <Button
                                onPress={() => logOutUser()}
                                title=""
                                icon={{
                                    name: 'logout',
                                    color: '#8b6465',
                                    size: 25,
                                }}
                                // buttonColor='white'
                                buttonStyle={{
                                    backgroundColor: 'transparent'
                                }}
                            />
                        ),
                    }}
                />
                <Stack.Screen
                    name="Ajouter un tableau"
                    component={AddTableau}
                    options={{
                        headerRight: () => (
                            <Button
                                onPress={() => logOutUser()}
                                title=""
                                icon={{
                                    name: 'logout',
                                    color: '#8b6465',
                                    size: 25,
                                }}
                                // buttonColor='white'
                                buttonStyle={{
                                    backgroundColor: 'transparent'
                                }}
                            />
                        ),
                    }}
                />
                <Stack.Screen
                    name="Modifier un tableau"
                    component={UpdateTableau}
                    options={{
                        headerRight: () => (
                            <Button
                                onPress={() => logOutUser()}
                                title=""
                                icon={{
                                    name: 'logout',
                                    color: '#8b6465',
                                    size: 25,
                                }}
                                // buttonColor='white'
                                buttonStyle={{
                                    backgroundColor: 'transparent'
                                }}
                            />
                        ),
                    }}
                />

                <Stack.Screen
                    name="Colonnes"
                    options={{
                        title: 'Colonnes de "' + tableView.nom + '"',
                        headerRight: () => (
                            <Button
                                onPress={() => logOutUser()}
                                title=""
                                icon={{
                                    name: 'logout',
                                    color: '#8b6465',
                                    size: 25,
                                }}
                                // buttonColor='white'
                                buttonStyle={{
                                    backgroundColor: 'transparent'
                                }}
                            />
                        ),
                    }}
                    component={ColonneList}
                />
                <Stack.Screen
                    name="Ajouter une colonne"
                    component={AddColonne}
                    options={{
                        headerRight: () => (
                            <Button
                                onPress={() => logOutUser()}
                                title=""
                                icon={{
                                    name: 'logout',
                                    color: '#8b6465',
                                    size: 25,
                                }}
                                // buttonColor='white'
                                buttonStyle={{
                                    backgroundColor: 'transparent'
                                }}
                            />
                        ),
                    }}
                />
                <Stack.Screen
                    name="Modifier une colonne"
                    component={UpdateColonne}
                    options={{
                        headerRight: () => (
                            <Button
                                onPress={() => logOutUser()}
                                title=""
                                icon={{
                                    name: 'logout',
                                    color: '#8b6465',
                                    size: 25,
                                }}
                                // buttonColor='white'
                                buttonStyle={{
                                    backgroundColor: 'transparent'
                                }}
                            />
                        ),
                    }}
                />

                <Stack.Screen
                    name="Tâches"
                    options={{
                        title: 'Tâches de "' + colonneView.colonne + '"',
                        headerRight: () => (
                            <Button
                                onPress={() => logOutUser()}
                                title=""
                                icon={{
                                    name: 'logout',
                                    color: '#8b6465',
                                    size: 25,
                                }}
                                // buttonColor='white'
                                buttonStyle={{
                                    backgroundColor: 'transparent'
                                }}
                            />
                        ),
                    }}
                    component={TacheList}
                />
                <Stack.Screen
                    name="Ajouter une tâche"
                    component={AddTache}
                    options={{
                        headerRight: () => (
                            <Button
                                onPress={() => logOutUser()}
                                title=""
                                icon={{
                                    name: 'logout',
                                    color: '#8b6465',
                                    size: 25,
                                }}
                                // buttonColor='white'
                                buttonStyle={{
                                    backgroundColor: 'transparent'
                                }}
                            />
                        ),
                    }}
                />
                <Stack.Screen
                    name="Modifier une tâche"
                    component={UpdateTache}
                    options={{
                        headerRight: () => (
                            <Button
                                onPress={() => logOutUser()}
                                title=""
                                icon={{
                                    name: 'logout',
                                    color: '#8b6465',
                                    size: 25,
                                }}
                                // buttonColor='white'
                                buttonStyle={{
                                    backgroundColor: 'transparent'
                                }}
                            />
                        ),
                    }}
                />

                <Stack.Screen
                    name="Ma tâche"
                    options={{
                        title: 'Voir une tâche',
                        headerRight: () => (
                            <Button
                                onPress={() => logOutUser()}
                                title=""
                                icon={{
                                    name: 'logout',
                                    color: '#8b6465',
                                    size: 25,
                                }}
                                // buttonColor='white'
                                buttonStyle={{
                                    backgroundColor: 'transparent'
                                }}
                            />
                        ),
                    }}
                    component={TacheView}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
}