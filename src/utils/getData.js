import db from "./firebaseDB.js";
import { collection, getDocs } from "firebase/firestore";

const data = []
const querySnapshot = await getDocs(collection(db, "products"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  data.push(doc.data())
});

export default data;