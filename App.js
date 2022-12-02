import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { TrelloContext } from './context/trello';
import { TrelloRouter } from './router/trelloRouter';
import { ConnectRouter } from './router/connectRouter';
import  {LinearGradient} from 'react-native-linear-gradient'

export default function App() {
  const [user, setUser] = useState({});
  const [tableView, setTableView] = useState("");
  const [colonneView, setColonneView] = useState("");
  const [taskView, setTaskView] = useState("");
  return (

    <TrelloContext.Provider value={{
      user, setUser, 
      tableView, setTableView, 
      colonneView, setColonneView, 
      taskView, setTaskView
    }}>

      {(user.email) ? <TrelloRouter /> : <ConnectRouter />}  

    </TrelloContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
