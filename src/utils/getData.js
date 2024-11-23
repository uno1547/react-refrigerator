import db from "./firebaseDB.js";
import { collection, getDocs } from "firebase/firestore";

/*
const datas = []
const querySnapshot = await getDocs(collection(db, "products"));

querySnapshot.forEach((doc) => {
  datas.push(doc.data())
});

export default datas;
*/

const getDataFunc = async () => {
  const datas = []
  const querySnapshot = await getDocs(collection(db, "products"));

  querySnapshot.forEach((doc) => {
    datas.push(doc.data())
  });
  return datas
}

export default getDataFunc