import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { TableauList } from "../../component/tableauListe";

const Tab = createMaterialBottomTabNavigator()


export function trelloTableRouter() {
    return (
        <Tab.Navigator>
            <Tab.Scren name="Mes tableaux" component={TableauList} />
        </Tab.Navigator>
    )
}