import { useState } from 'react'

import Input from '../Common/Input'

import { knowInteres } from '../../helpers/formula'

import useForm from '../../hooks/useForm'

import { Button, Form, Success, TitleForm } from '../../ui/styles'

const initialValues = {
  future: '',
  present: '',
  period: ''
}

const FormInterest = () => {
  const { values, handleChange, setValues } = useForm(initialValues)
  const [results, setResults] = useState('')
  const isDisabled = !values?.future || !values?.present || !values?.period
  
  const onSubmit = (e) => {
    e.preventDefault()
    if(!isDisabled) {
      const VP = knowInteres({
        vf: values?.future,
        vp: values?.present,
        n: values?.period
      })
      setResults(VP)
      setValues(initialValues)
    }
  }

  return (
    <Form direction="column" onSubmit={onSubmit}>
      <TitleForm>Interest value</TitleForm>
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
        name="period"
        value={values?.period}
        onChange={handleChange}
        type="number" 
        min="0" 
        step="any"
        text="Enter number periods"/>
      <Button type="submit" disabled={isDisabled}>Calculate</Button>
      {results && <Success>The value is {results}</Success>}
    </Form>
  )
}

export default FormInterest