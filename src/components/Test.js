import { useState, useEffect } from "react"

// const data = [1, 2, 3, 4, 5]
const Test = () => {
  const [state, setState] = useState([])
  console.log('component');
  console.log(state);
  useEffect(() => {
    console.log('useEffect!');
    setState(prev => [...prev, 3])
  }, [])
  // const onClick = () => {
  //   setState(prev => prev + 1)
  // }

  return (
    <>
      {/* <h1>{state}</h1> */}
      {/* <button onClick={onClick}>state change</button> */}
      {/* <button>state change</button> */}
    </>
  )
}
export default Test