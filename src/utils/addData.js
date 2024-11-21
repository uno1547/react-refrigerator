import db from "./firebaseDB.js";
import { collection, addDoc } from "firebase/firestore"; 
// Add a new document with a generated id.
/*
const docRef = await addDoc(collection(db, "products"), {
  name: "Tokyo",
  country: "Japan"
});
*/

const addData = async () => {
  const docRef = await addDoc(collection(db, "products"), {
    name : "orange"
  })
}

export default addData;
/*
import { collection, doc, setDoc } from "firebase/firestore"; 

// Add a new document with a generated id
const newCityRef = doc(collection(db, "cities"));
d
// later...
await setDoc(newCityRef, data);
*/