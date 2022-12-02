import { uuidv4 } from "@firebase/util";
import { child, get, getDatabase, onValue, ref, set } from "firebase/database";
import { app } from "./app";
import { getDownloadURL, getStorage, ref as refB, uploadBytes, } from "firebase/storage";

const database = getDatabase(app);

export function createColonne(uid, idTable, colonneName){
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

// export function deleteColonne(uid, idColonne){
//     return new Promise((resolve, reject) =>{
//         try {
//             const reference = ref(database);
//             get(child(reference, `tableaux/${uid}`)).then((snapshot) => {
//                 const data = snapshot.val()
//                 data.findIndex((elem) => {
//                     const data_col = snapshot.val();
//                     const num = data_col.findIndex((e) => e.id === idColonne)
//                     data_col.splice(num,1)
                    
                
//                 })
                
//             }) 
//         }
//         catch(e) {
//             reject(e)
//         }
//     })
// }

export function UpdateColonne(){}