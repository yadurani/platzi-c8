import { useContext } from 'react'

import Input from '../Common/Input'

import { createObjAlpha, createObjNumber, createObjSpecial, isAlphaNumeric, isNumber } from '../../helpers'

import useInput from '../../hooks/useInput'

import { ContextApp } from '../../context'

import { Button, Form, P, Subtitle, TitleMain } from '../../ui/styles'
import { SchemaTable } from '../../constants'

const FormAdd = () => {
  const { value, onChange, hasError, setHasError, handleEmpty } = useInput()
  const { numberList, createData, setActiveTab } = useContext(ContextApp)
  
  const handleSumit = (e) => {
    e.preventDefault()
    handleEmpty()
    if(!value) {
      setHasError(true)
      return
    }

    if(isNumber(value)) {
      const objNumber = createObjNumber(value, numberList)
      createData(SchemaTable.Numbers, objNumber)
      setActiveTab(SchemaTable.Numbers)
      return
    }

    if(isAlphaNumeric(value)) {
      const objAlpha = createObjAlpha(value)
      createData(SchemaTable.AlphaNumeric, objAlpha)
      setActiveTab(SchemaTable.AlphaNumeric)
      return
    }

    const objSpecial = createObjSpecial(value)
    createData(SchemaTable.Special, objSpecial)
    setActiveTab(SchemaTable.Special)
  }

  return (
    <>
      <Subtitle>Workshop # 1 | PLATZI MASTER [C8] 💚</Subtitle>
      <TitleMain>Apalabrados</TitleMain>
      <P>Apalabrados is a classification game for numerical data, alfanumeric and special characters.</P>
      <Form onSubmit={handleSumit}>
        <Input
          placeholder="Enter your data"
          value={value}
          onChange={onChange}
          helperText={hasError}/>
        <Button type="submit">Add</Button>
      </Form>
    </>
  )
}

export default FormAdd