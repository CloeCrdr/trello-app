import { uuidv4 } from "@firebase/util";
import { child, get, getDatabase, onValue, ref, set} from "firebase/database";
import { app } from "./app";

const database = getDatabase(app);


export function createTable(uid, tableName) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `tableaux/${uid}`)).then((snapshot) => {
                const data = snapshot.val() ?? [];
                data.push({ id: uuidv4(), nom: tableName, colonnes: [], taches: []})
                set(ref(database, 'tableaux/' + uid), data)
                resolve(data)
            }).catch(err => {
                console.log(err);
            });
        }
        catch (e) {
            reject(e)
        }
    })

}

export function getAllTables(uid) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database, 'tableaux/' + uid);
            onValue(reference, (snapshot) => {
                const data = snapshot.val();
                resolve(data)
            });
        }
        catch(e) {
            reject(e)
        }
    })
}

export function deleteTable(uid, idTable) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `tableaux/${uid}`)).then((snapshot) => {
                const data = snapshot.val();
                const num = data.findIndex((elem) => elem.id === idTable)
                data.splice(num,1) 
                set(ref(database, 'tableaux/' + uid), data);
                resolve(data)
            });
        }
        catch (e){
            reject(e)
        }
    })
}

export function updateTable(uid, idTable, tableName) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `tableaux/${uid}`)).then((snapshot) => {
                const data = snapshot.val();
                const num = data.findIndex((elem) => elem.id === idTable)
                data[num] = {...data[num], nom: tableName}
                set(ref(database, 'tableaux/' + uid), data);
                resolve(data)
            });
        }
        catch (e) {
            reject(e)
        }
    })

}