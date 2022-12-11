import { uuidv4 } from "@firebase/util";
import { child, get, getDatabase, onValue, ref, set } from "firebase/database";
import { Alert } from "react-native";
import { app } from "./app";

const database = getDatabase(app);

export function createColonne(uid, idTable, colonneName) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `tableaux/${uid}`)).then((snapshot) => {
                const data = snapshot.val() ?? [];
                const indexTable = data.findIndex(elem => elem.id === idTable)
                if (indexTable == -1) reject({ message: "id non trouvé sur le tableau" })
                if (!data[indexTable].colonnes) data[indexTable].colonnes = []
                data[indexTable].colonnes.push({ id: uuidv4(), colonne: colonneName, taches: [] })
                set(ref(database, 'tableaux/' + uid), data)
                resolve(data[indexTable].colonnes)
            }).catch(err => {
                Alert.alert(err);
            });
        }
        catch (e) {
            reject(e)
        }
    })
}

export function getAllColonnes(uid, idTable) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `tableaux/${uid}`)).then((snapshot) => {
                const data = snapshot.val() ?? [];
                const indexTable = data.findIndex(elem => elem.id === idTable)
                if (indexTable == -1) reject({ message: "id non trouvé dans le tableau" })
                if (!data[indexTable].colonnes) data[indexTable].colonnes = []

                resolve(data[indexTable].colonnes)
            });
        }
        catch (e) {
            reject(e)
        }
    })
}

export function deleteColonne(uid, idTableau, idColonne) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `tableaux/${uid}`)).then((snapshot) => {
                const data = snapshot.val()
                const numTb = data.findIndex((elem) => elem.id === idTableau)
                const numCol = data[numTb].colonnes.findIndex((elem) => elem.id === idColonne)
                data[numTb].colonnes.splice(numCol, 1)
                set(ref(database, 'tableaux/' + uid), data);
                resolve(data[numTb].colonnes)
            })
        }
        catch (e) {
            reject(e)
        }
    })
}

export function updateColonne(uid, idTableau, idColonne, colonneName) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `tableaux/${uid}`)).then((snapshot) => {
                const data = snapshot.val()
                const numTb = data.findIndex((elem) => elem.id === idTableau)
                if (numTb == -1) reject({ message: "id non trouvé dans le tableau" })
                const numCol = data[numTb].colonnes.findIndex((elem) => elem.id === idColonne)
                if (numCol == -1) reject({ message: "id non trouvé dans la colonne" })
                data[numTb].colonnes[numCol] = { ...data[numTb].colonnes[numCol], colonne: colonneName, }
                set(ref(database, 'tableaux/' + uid), data);
                resolve(data[numTb].colonnes)
            })
        }
        catch (e) {
            reject(e)
        }
    })
}