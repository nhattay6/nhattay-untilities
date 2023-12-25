function nameRequest(type) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      type === 'a' ? resolve('resolve') : reject('reject')
    }, 2000)
  })
}

const getData = async () => {
  // for lv3
  let error, result

  [error, result] = await handleRequest(nameRequest('a'))
  if(err){
    console.error(`error res1::`, error)
  }

  [error, result] = await handleRequest(nameRequest('b'))
  if(err){
    console.error(`error res2::`, error)
  }

  [error, result] = await handleRequest(nameRequest('c'))
  if(error){
    console.error(`error res3::`, error)
  }
}

const handleRequest = (promise) => {
  return promise
    .then(data => { [undefined, data] })
    .catch(err => { [err, undefined] })
}

getData()