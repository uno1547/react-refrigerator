import db from "./firebaseDB.js";
import { collection, doc, setDoc } from "firebase/firestore"; 
// Add a new document with a generated id.
/*
const docRef = await addDoc(collection(db, "products"), {
  name: "Tokyo",
  country: "Japan"
});
*/

const addDataFunc = async () => {
  console.log('데이터 추가하기');
  const docRef = doc(collection(db, "products")) // 무작위 docRef를생성한다.
  await setDoc(docRef, {
    name : "해리",
    category : ["person", "fridge"],
    amount : 1,
    id : docRef["_key"].path.segments[1],
    add_date : "2024-12-01",
    expire_date : "2024-12-12"
  })
  console.log('데이터 추가하기 완료');
/*
  console.log('데이터 추가하기');
  const docRef = await addDoc(collection(db, "products"), {
    name : "주은", // 품목명
    category : ["person"], // 품목구분
    amount : 5, //수량
    add_date : "2024-12-01", // 추가날짜
    expire_date : "2024-12-12"// 만료날짜(유통기한)
  })
  console.log('데이터 추가완료');
  */
}

export default addDataFunc;
/*
import { collection, doc, setDoc } from "firebase/firestore"; 

const createTodo = async (text) => {
  const docRef3 = doc(collection(db, "todo")) // 무작위 docRef를생성한다.
  console.log(docRef3);
  await setDoc(docRef3, {
    text : text,
    id : docRef3["_key"].path.segments[1],
    isDone : false,
    time : new Date()
  })
}

export default createTodo
*/