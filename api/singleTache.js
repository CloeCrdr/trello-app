import { child, get, getDatabase, ref} from "firebase/database";
import { app } from "./app";

const database = getDatabase(app);

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