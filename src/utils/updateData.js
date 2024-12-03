import db from "./firebaseDB.js";
import { doc, updateDoc } from "firebase/firestore";

const updateData = async (id, value) => {
  await updateDoc(doc(db, "products", id), {
    amount : value
  })
}

// const washingtonRef = doc(db, "cities", "DC");

// Set the "capital" field of the city 'DC'
// await updateDoc(washingtonRef, {
  // capital: true
// });



export default updateData