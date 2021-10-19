import { useState } from "react"
import { knowFutureValue } from "../../helpers/formula"
import useForm from "../../hooks/useForm"
import { Button, Form, Success, TitleForm } from "../../ui/styles"
import Input from "../Common/Input"

const initialValues = {
  present: '',
  interest: '',
  period: ''
}

const FormVF = () => {
  const { values, handleChange, setValues } = useForm(initialValues)
  const [results, setResults] = useState('')
  const isDisabled = !values?.present || !values?.interest || !values?.period
  
  const onSubmit = (e) => {
    e.preventDefault()
    if(!isDisabled) {
      const VF = knowFutureValue({
        vp: values?.present ,
        i: values?.interest,
        n: values?.period
      })
      setResults(VF)
      setValues(initialValues)
    }
  }

  return (
    <Form direction="column" onSubmit={onSubmit}>
      <TitleForm>Future value</TitleForm>
      <Input 
        type="number"
        min="0"
        step="any"
        name="present" 
        value={values.present} 
        text="Enter present value" 
        onChange={handleChange}/>
      <Input 
        type="number"
        min="0"
        step="any"
        name="interest" 
        value={values.interest}  
        text="Enter interest %" 
        onChange={handleChange}/>
      <Input 
        type="number"
        min="0"
        step="any"
        name="period" 
        value={values.period} 
        text="Enter number periods" 
        onChange={handleChange}/>
      <Button type="submit" disabled={isDisabled}>Calculate</Button>
      {results && <Success>The value is {results}</Success>}
    </Form>
  )
}

export default FormVF