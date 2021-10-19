import { useState } from 'react'
import { SchemaTable } from '../constants'
import { addData } from '../server/api'
import useFetch from './useFetch'

const useInitialState = () => {
  const { data: numberList, loading: loaderNumbers, getData: getNumbers } = useFetch(SchemaTable.Numbers)
  const { data: alphaNumeric, loading: loaderAlpha, getData: getAlpha} = useFetch(SchemaTable.AlphaNumeric)
  const { data: specialCharacter, loading: loaderSpecial, getData: getSpecial} = useFetch(SchemaTable.Special)
  const [activeTab, setActiveTab] = useState(SchemaTable.Numbers)

  const objAction = {
    numbers: getNumbers,
    alphaNumeric: getAlpha,
    special: getSpecial
  }

  const createData = async (nameList, obj) => {
    try {
      await addData(nameList, obj)
      if(objAction[nameList]) {
        objAction[nameList]()
      }
    } catch {}
  }

  return {
    numberList,
    alphaNumeric,
    specialCharacter,
    createData,
    loaderNumbers,
    loaderAlpha,
    loaderSpecial,
    activeTab,
    setActiveTab
  }
}

export default useInitialState