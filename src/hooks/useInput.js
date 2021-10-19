import { useState } from 'react'

const useInput = () => {
  const [value, setValue] = useState('')
  const [hasError, setHasError] = useState(false)

  const onChange = (e) => {
    const { value } = e.target
    setValue(value)
    if(!value) {
      setHasError(true) 
      return
    }
    setHasError(false) 
  }

  const handleEmpty = () => setValue('')

  return { value, onChange, hasError, setHasError, handleEmpty }
   
}

export default useInput

