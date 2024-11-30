import { useEffect, useState } from 'react';

const Test = (show) => {
  const [test, setTest] = useState(1)
  console.log('랜더링', test);
  // useEffect(() => {
  //   console.log('마운트', test);
  //   return () => {
  //     console.log('언마운트', test);
  //   }
  // }, [])

  // console.log('useEffect이후');
  return (
    <>
      <h1>Test{test}</h1>
      <button onClick={() => {setTest(1)}}>test 의 state1 변경</button>
      <button onClick={() => {setTest(2)}}>test 의 state2 변경</button>
    </>
  )
}
console.log('hi');
console.log();
console.log();

export default Test