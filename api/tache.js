import { uuidv4 } from "@firebase/util";
import { child, get, getDatabase, onValue, ref, set } from "firebase/database";
import { app } from "./app";
import { getDownloadURL, getStorage, ref as refB, uploadBytes, } from "firebase/storage";

const database = getDatabase(app);
const storage = getStorage(app);

export function createTache(uid, idTableau, idColonne, tacheName, tacheContent, imageTache){
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
                data[numTb].colonnes[numCol].taches.push({ id: uuidv4(), tache: tacheName, content: tacheContent, image: imageTache })
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

export function deleteTache(uid, idTableau, idColonne, idTache){
    return new Promise((resolve, reject) =>{
        try {
            const reference = ref(database);
            get(child(reference, `tableaux/${uid}`)).then((snapshot) => {
                const data = snapshot.val()
                const numTb = data.findIndex((elem) => elem.id === idTableau)
                const numCol = data[numTb].colonnes.findIndex((elem)=> elem.id === idColonne)
                const numTabs = data[numTb].colonnes[numCol].taches.findIndex((elem) => elem.id === idTache)
                data[numTb].colonnes[numCol].taches.splice(numTabs, 1)
                set(ref(database, 'tableaux/' + uid), data);
                resolve(data[numTb].colonnes[numCol].taches)
            }) 
        }
        catch(e) {
            reject(e)
        }
    })
}

export function updateTache(uid, idTableau, idColonne, idTache, tacheName, tacheContent, imageTache){
    return new Promise((resolve, reject) =>{
        try {
            const reference = ref(database);
            get(child(reference, `tableaux/${uid}`)).then((snapshot) => {
                const data = snapshot.val()
                const numTb = data.findIndex((elem) => elem.id === idTableau)
                const numCol = data[numTb].colonnes.findIndex((elem)=> elem.id === idColonne)
                if (numCol == -1) reject({ message: "id non trouvé dans la colonne" })
                const numTabs = data[numTb].colonnes[numCol].taches.findIndex((elem) => elem.id === idTache)
                if (numTabs == -1) reject({ message: "id non trouvé dans la liste de tâches" })

                data[numTb].colonnes[numCol].taches[numTabs] = {...data[numTb].colonnes[numCol].taches[numTabs], tache: tacheName, content: tacheContent, image: imageTache,}
                    
                set(ref(database, 'tableaux/' + uid), data);
                resolve(data[numTb].colonnes[numCol].taches)
            }) 
        }
        catch(e) {
            reject(e)
        }
    })
}