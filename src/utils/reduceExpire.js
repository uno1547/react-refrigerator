function getExpireNum(arr) {
  const today = new Date()
  /*
  console.log(arr.length);
  arr.forEach(element => {
    const dateQuery = element.expire_date.split('-').map(Number)
    let [year, month, date] = [...dateQuery]
    const expireDate = new Date(year, month - 1, date)
    console.log(getDiff(today, expireDate))
    // 1일 = 24시간 = 24 * 60 분 = 24 * 60 * 60초 = 24 * 60 * 60 * 1000 ms
  });
  */
  const expireNum = arr.reduce((acc, val) => {
    // console.log(acc, val)
    const dateQuery = val.expire_date.split('-').map(Number)
    let [year, month, date] = [...dateQuery]
    const expireDate = new Date(year, month - 1, date)
    const result = getDiff(today, expireDate)
    // console.log(result);
    if(result >0 && result <= 7) {
      return acc + 1
    } else {
      return acc
    }
  }, 0)
  // console.log(expires);
  return expireNum
  // const expires = arr.filter((product) => {
  //   return product.
  // })
  // const expireNum = arr.reduce((acc, val) => {
  //   return acc + val
  // }, )
}

function checkExpire(el) {
  const today = new Date()
  const dateQuery = el.expire_date.split('-').map(Number)
  let [year, month, date] = [...dateQuery]
  const expireDate = new Date(year, month - 1, date)
  const result = getDiff(today, expireDate)
  if(result > 0 && result <= 7) {
    return "expire"
  } else if(result <= 0 ) {
    return "discard"
  } else {
    return null
  }
  return (result > 0 && result <= 7)
}

function getDiff(prevDate, nextDate) {
  return Math.round(((nextDate.getTime() - prevDate.getTime()) / (24 * 60 * 60 * 1000))) + 1
}

export {getExpireNum, checkExpire}