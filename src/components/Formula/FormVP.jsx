import { useState } from 'react'

import Input from '../Common/Input'

import { Button, Form, Success, TitleForm } from '../../ui/styles'

import { knowPresentValue } from '../../helpers/formula'

import useForm from '../../hooks/useForm'

const initialValues = {
  future: '',
  interest: '',
  period: ''
}

const FormVP = () => {
  const { values, handleChange, setValues } = useForm(initialValues)
  const [results, setResults] = useState('')
  const isDisabled = !values?.future || !values?.interest || !values?.period
  
  const onSubmit = (e) => {
    e.preventDefault()
    if(!isDisabled) {
      const VP = knowPresentValue({
        vf: values?.future ,
        i: values?.interest,
        n: values?.period
      })
      setResults(VP)
      setValues(initialValues)
    }
  }
  return (
    <Form direction="column" onSubmit={onSubmit}>
      <TitleForm>Present value</TitleForm>
      <Input
        type="number"
        min="0"
        step="any"
        name="future"
        value={values?.future}
        onChange={handleChange}
        text="Enter future value"/>
      <Input 
        type="number"
        min="0"
        step="any"
        name="interest"
        value={values?.interest}
        onChange={handleChange}
        text="Enter interest %"/>
      <Input 
        type="number"
        min="0"
        step="any"
        name="period"
        value={values?.period}
        onChange={handleChange}
        text="Enter number periods"/>
      <Button type="submit" disabled={isDisabled}>Calculate</Button>
      {results && <Success>The value is {results}</Success>}
    </Form>
  )
}

export default FormVP