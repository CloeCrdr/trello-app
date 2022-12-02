import { uuidv4 } from "@firebase/util";
import { child, get, getDatabase, onValue, ref, set } from "firebase/database";
import { app } from "./app";
import { getDownloadURL, getStorage, ref as refB, uploadBytes, } from "firebase/storage";

const database = getDatabase(app);

export function createTache(uid, idTableau, idColonne, tacheName, tacheContent){
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `tableaux/${uid}`)).then((snapshot) => {
                const data = snapshot.val() ?? [];
                const numTb = data.findIndex((elem) => elem.id === idTableau)
                const numCol = data[numTb].colonnes.findIndex((elem) => elem.id === idColonne)
                if (numCol == -1) reject({ message: "id non trouvé sur la colonne" })
                if (numTb == -1) reject({ message: "id non trouvé sur le tableau" })
                if (!data[numTb].colonnes[numCol].taches) data[numTb].colonnes[numCol].taches = []
                data[numTb].colonnes[numCol].taches.push({ id: uuidv4(), tache: tacheName, content: tacheContent })
                set(ref(database, 'tableaux/' + uid), data)
                resolve(data[numTb].colonnes[numCol].taches)
            }).catch(err => {
                console.log(err);
            });
        }
        catch (e) {
            reject(e)
        }
    })
}

export function getAllTaches(uid, idTableau, idColonne){
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `tableaux/${uid}`)).then((snapshot) => {
                const data = snapshot.val() ?? []; 
                const numTb = data.findIndex((elem) => elem.id === idTableau)
                const numCol = data[numTb].colonnes.findIndex((elem) => elem.id === idColonne)
                if (numCol == -1) reject({ message: "id non trouvé sur la colonne" })
                if (numTb == -1) reject({ message: "id non trouvé sur le tableau" })

                if (!data[numTb].colonnes[numCol].taches) data[numTb].colonnes[numCol].taches = []

                resolve(data[numTb].colonnes[numCol].taches)
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