import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator();
export function NavigTab(){
    return (
        <NavigationContainer>
        <SafeAreaView style={{ flex: 1}}>
          <Tab.Navigator>
            <Tab.Screen name="Todo" component={TodoScreen} />
            <Tab.Screen name="En cours" component={SettingsScreen} />
            <Tab.Screen name="Terminé" component={SettingsScreen} />
          </Tab.Navigator>
        </SafeAreaView>
        <StatusBar style="auto" />
      </NavigationContainer>  
    )
}