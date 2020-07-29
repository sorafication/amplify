const first = () => {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        console.log("FIRST FUNCTION");
        resolve('First Response')
        }, 5000)
  })

  }

  const second = () => {
    return new Promise((resolve, reject) => {
      console.log("SECOND FUNCTION")
      resolve('Second Response')
    })

  }

  const third = () => {
    return new Promise((resolve, reject) => {
      console.log("Third FUNCTION")
      resolve('Third Response')
    })
  }

  const doWork = async () => {
  const first_resp = await first()
  console.log(first_resp)
  await third()
  await second()
  await first()
  await third()

  }
  doWork()
