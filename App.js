import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { TrelloContext } from './context/trello';
import { TrelloRouter } from './router/trelloRouter';
import { ConnectRouter } from './router/connectRouter';
import  {getAuth} from 'firebase/auth'

export default function App() {
  const [user, setUser] = useState({});
  const [tableView, setTableView] = useState("");
  const [colonneView, setColonneView] = useState("");
  const [tacheView, setTacheView] = useState("");
  const [singleView, setSingleView] = useState("")
  const [initializing, setInitializing] = useState(true);

   // Handle user state changes
   function onAuthStateChanged(userChange) {
    // setUser(user);
    setUser({user: userChange})
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = getAuth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  return (

    <TrelloContext.Provider value={{
      user, setUser, 
      tableView, setTableView, 
      colonneView, setColonneView, 
      tacheView, setTacheView,
      singleView, setSingleView
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
