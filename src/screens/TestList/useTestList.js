import { useState, useEffect } from 'react'

const useTestList = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    globalThis
      .fetch('https://jsonplaceholder.typicode.com/users')
      .then(oResponse => {
        if (!oResponse.ok) {
          throw new Error('Connection Error')
        }
        return oResponse.json()
      })
      .then(aResponse => {
        setUsers(aResponse)
      })
      .catch(oError => {
        console.log(oError)
      })
  }, [])

  return [{}, users]
}

export default useTestList
