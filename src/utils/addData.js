import db from "./firebaseDB.js";
import { collection, addDoc } from "firebase/firestore"; 
// Add a new document with a generated id.
/*
const docRef = await addDoc(collection(db, "products"), {
  name: "Tokyo",
  country: "Japan"
});
*/

const addDataFunc = async () => {
  console.log('데이터 추가하기');
  const docRef = await addDoc(collection(db, "products"), {
    name : "orange"
  })
  console.log('데이터 추가완료');
}

export default addDataFunc;
/*
import { collection, doc, setDoc } from "firebase/firestore"; 

// Add a new document with a generated id
const newCityRef = doc(collection(db, "cities"));
d
// later...
await setDoc(newCityRef, data);
*/