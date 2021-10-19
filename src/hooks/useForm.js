import { useState } from 'react'

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues(prevState => ({ ...prevState, [name]: value }))
  }

  return {
    handleChange,
    values,
    setValues
  }
}

export default useForm