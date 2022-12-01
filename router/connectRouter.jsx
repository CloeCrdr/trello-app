import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Connect } from '../views/connect';
import { Register } from '../views/register';
import { styles } from '../styles';
import { View } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

export function ConnectRouter() {
    return( 
        <NavigationContainer >
            <Tab.Navigator >
                <Tab.Screen name="CONNEXION" component={Connect} style={styles.tab}/>
                <Tab.Screen name="INSCRIPTION" component={Register} style={styles.tab}/>
            </Tab.Navigator>
        </NavigationContainer>
        
    )
}