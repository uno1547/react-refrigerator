import { useEffect, useState} from 'react'
import getData from '../utils/getData'

const Test1 = () => {
  const [category, setCategory] = useState('date')
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchDatas = async () => {
    const response = await getData()
    setList(response)
    setLoading(true)
  }

  // console.log(list);
  useEffect(() => {
    console.log('데이터불러오기');
    // 최초 마운트에 데이터를 불러오기
    fetchDatas()
  }, [])

  console.log('전체 컴포넌트 랜더링');
  const changeHandler = (evt) => {
    // console.log(evt.target.value);
    setCategory(evt.target.value)
  }
  // useEffect(() => {

  // })
  // 컴포넌트 랜더링의 초기화, 종료시에 동작할당을 원함?
  // 컴포넌트의 특정 의존성값에 따라 특정 동작할당을 원함?
  return (
    <>
        <span>select view</span>
        <select onChange={changeHandler}>
          <option>날짜</option>
          <option>이름</option>
          <option>카테고리</option>
        </select>
      <h1>{category} view</h1>
      {loading ? list.map(el => {
        return (
            <div key={el.id}>{el.name}{el.date}{el.category}</div>
        )
      }): "로딩중이에요"}
    </>
  )
}

export default Test1