const getFirstDuplicateValueOfArray = (array) => {
  let obj = {}

  for (const value of array){
    if(obj[value]) return obj[value]
    obj[value] = value
  }
  
  return -1
}


/// example
const arrayTest = ['a', 'b', 'c', 'd', 'e', 'a', 'm']
const valueDuplicate = getFirstDuplicateValueOfArray(arrayTest)
console.log(valueDuplicate) // value 'a'