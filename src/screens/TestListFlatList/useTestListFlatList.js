import { useState, useEffect } from 'react'

const useTestListFlatList = () => {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    fetch('https://dogapi.dog/api/v2/breeds')
      .then(oResponse => {
        if (!oResponse.ok) {
          throw new Error('Connection Error')
        }
        return oResponse.json()
      })
      .then(oResponse => {
        setDogs(oResponse.data)
      })
      .catch(oError => {
        console.log(oError)
      })
  }, [])

  return [{}, dogs]
}

export default useTestListFlatList
