import { child, get, getDatabase, ref} from "firebase/database";
import { app } from "./app";
import { getDownloadURL, getStorage, ref as refB, uploadBytes, } from "firebase/storage";

const database = getDatabase(app);
const storage = getStorage(app);

export function getSingleTache(uid, idTableau, idColonne, idTache){
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `tableaux/${uid}`)).then((snapshot) => {
                const data = snapshot.val() ?? []; 
                const numTb = data.findIndex((elem) => elem.id === idTableau)
                const numCol = data[numTb].colonnes.findIndex((elem) => elem.id === idColonne)
                const numTache = data[numTb].colonnes[numCol].taches.findIndex((elem) => elem.id === idTache)
                if (numTache == -1) reject({ message: "id non trouvé sur la liste de tâches" })
                if (numCol == -1) reject({ message: "id non trouvé sur la colonne" })
                if (numTb == -1) reject({ message: "id non trouvé sur le tableau" })

                if (!data[numTb].colonnes[numCol].taches) data[numTb].colonnes[numCol].taches[numTache] = []
                resolve(data[numTb].colonnes[numCol].taches[numTache])
            });
        }
        catch (e) {
            reject(e)
        }
    }) 
}

export function uploadFile(fich, nom) {
    return new Promise((res, rej) => {
        new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function (e) {
                console.log(e);
                reject(new TypeError("Network request failed"));
            };
            xhr.responseType = "blob";
            xhr.open("GET", fich, true);
            xhr.send(null);
        }).then(blob => {
            const fileRef = refB(storage, nom);
            uploadBytes(fileRef, blob).then(snapshot => {
                // We're done with the blob, close and release it 
                blob.close();
                res(getDownloadURL(fileRef))
            })
        }).catch(err => rej(err.message))
    })
}

export function ajoutPhoto(uid, idTableau, idColonne, idTache, fichier) {
    return new Promise((resolve, reject) => {
        try {
            let spNomUri = fichier.split('/')
            let nom = spNomUri[spNomUri.length - 1]
            uploadFile(fichier, nom).then(url => {
                const reference = ref(database);
                get(child(reference, `tableaux/${uid}`)).then((snapshot) => {
                    const data = snapshot.val() ?? [];
                    const numTb = data.findIndex((elem) => elem.id === idTableau)
                    const numCol = data[numTb].colonnes.findIndex((elem) => elem.id === idColonne)
                    const numTache = data[numTb].colonnes[numCol].taches.findIndex((elem) => elem.id === idTache)
                    if (numCol == -1) reject({ message: "id non trouvé sur la colonne" })
                    if (numTb == -1) reject({ message: "id non trouvé sur le tableau" })
                    if (numTache == -1) reject({ message: "id non trouvé sur la tâche" })
    
                    
                    if (!data[numTb].colonnes[numCol].taches[numTache].image) data[numTb].colonnes[numCol].taches[numTache].image = []
                    data[numTb].colonnes[numCol].taches[numTache].image.push({ nom, url })
                    console.log(data);
                    set(ref(database, 'tableaux/' + uid), data);
                    resolve(data)
                }).catch(err => {
                    console.log(err);
                });
            })
        }
        catch (e) {
            reject(e)
        }
    })
}