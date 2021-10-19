import { useState } from 'react'
import Input from '../Common/Input'

import useForm from '../../hooks/useForm'

import { knowPeriods } from '../../helpers/formula'

import { Button, Form, Success, TitleForm } from '../../ui/styles'

const initialValues = {
  future: '',
  present: '',
  interest: ''
}

const FormPeriods = () => {
  const { values, handleChange, setValues } = useForm(initialValues)
  const [results, setResults] = useState('')
  const isDisabled = !values?.future || !values?.present || !values?.interest
  
  const onSubmit = (e) => {
    e.preventDefault()
    if(!isDisabled) {
      const VP = knowPeriods({
        vf: values?.future,
        vp: values?.present,
        i: values?.interest
      })
      setResults(VP)
      setValues(initialValues)
    }
  }

  return (
    <Form direction="column" onSubmit={onSubmit}>
      <TitleForm>Periods value</TitleForm>
      <Input 
        name="future"
        value={values?.future}
        onChange={handleChange}
        type="number" 
        min="0"
        step="any"
        text="Enter future value"/>
      <Input 
        name="present"
        value={values?.present}
        onChange={handleChange}
        type="number" 
        min="0"
        step="any"
        text="Enter present value"/>
      <Input 
        name="interest"
        value={values?.interest}
        onChange={handleChange}
        type="number" 
        min="0"
        step="any"
        text="Enter interest"/>
      <Button type="submit" disabled={isDisabled}>Calculate</Button>
      {results && <Success>The value is {results}</Success>}
    </Form>
  )
}

export default FormPeriods