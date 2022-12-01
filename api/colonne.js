import { uuidv4 } from "@firebase/util";
import { child, get, getDatabase, onValue, ref, set } from "firebase/database";
import { app } from "./app";
import { getDownloadURL, getStorage, ref as refB, uploadBytes, } from "firebase/storage";

const database = getDatabase(app);

export function createColonne(uid, colonneName, idTable){
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `colonnes/${uid}`)).then((snapshot) => {
                const data = snapshot.val() ?? [];
                const indexTable = data.findIndex(elem => elem.id === idTable)
                if (indexTable == -1) reject({ message: "id non trouvé sur le tableau" })
                if (!data[indexTable].colonnes) data[indexTable].photos = []
                data[indexTable].colonnes.push({ nom, url })
                set(ref(database, 'colonnes/' + uid), data)
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

export function getAllColonnes(uid, idTable){
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            console.log(reference);
            get(child(reference, `tableaux/${uid}`)).then((snapshot) => {
                const data = snapshot.val() ?? [];
                //console.log("coucou", idTable, data, uid, snapshot.val());
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

export function deleteColonne(uid, idColonne, idTable){}