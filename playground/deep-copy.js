// 深拷贝js实现

function deepCopy(object) {
  const newObj = Array.isArray(object) ? [] : {}
  if (typeof object !== 'object') {
    return object
  }
  Object.keys(object).forEach(objKey => {
    newObj[objKey] = deepCopy(object[objKey])
  })
  return newObj
}



const obj = {
  f: 2,
  a: {
    b: {
      c: {
        d: {
          e: [1, 2]
        }
      }
    }
  }
}
const newObj = deepCopy(obj)

newObj.f = 3

console.log(JSON.stringify(newObj))