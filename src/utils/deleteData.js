import db from "./firebaseDB.js";
import { doc, deleteDoc } from "firebase/firestore"

// await deleteDoc(doc(db, "products", id));
const deleteData = async (id) => {
  await deleteDoc(doc(db, "products", id))
}

export default deleteData