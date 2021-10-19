import { useEffect, useState } from 'react'
import { fetchData } from '../server/api'

const useFetch = (nameList) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getData = async () => {
    setLoading(true)
    try {
      const data = await fetchData(nameList)
      setData(data)
    } catch(e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { data, loading, error, getData }
}

export default useFetch