import { uuidv4 } from "@firebase/util";
import { child, get, getDatabase, onValue, ref, set } from "firebase/database";
import { app } from "./app";
import { getDownloadURL, getStorage, ref as refB, uploadBytes, } from "firebase/storage";

const database = getDatabase(app);

export function createTache(uid, idColonne, tacheName){
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `tableaux/${uid}`)).then((snapshot) => {
                const data = snapshot.val() ?? [];
                const indexColonne = data.findIndex(elem => elem.id === idColonne)
                if (indexColonne == -1) reject({ message: "id non trouvé sur la colonne" })
                if (!data[indexColonne].taches) data[indexColonne].taches = []
                data[indexColonne].taches.push({ id: uuidv4(), tache: tacheName, id_colonne: idColonne })
                set(ref(database, 'tableaux/' + uid), data)
                resolve(data[indexColonne].taches)
            }).catch(err => {
                console.log(err);
            });
        }
        catch (e) {
            reject(e)
        }
    })
}

export function getAllTaches(uid, idColonne){
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `tableaux/${uid}`)).then((snapshot) => {
                const data = snapshot.val() ?? [];
                const indexColonne = data.findIndex(elem => elem.id === idColonne)
                if (indexColonne == -1) reject({ message: "id non trouvé dans la colonne" })
                if (!data[indexColonne].taches) data[indexColonne].taches = []

                resolve(data[indexColonne].taches)
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