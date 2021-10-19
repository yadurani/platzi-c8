import { useContext } from 'react'

import Tab from '../Common/Tab'
import TabPanel from '../Common/Tab/TabPanel'
import TableAlphaNumeric from './TableAlphaNumeric'
import TableNumbers from './TableNumbers'
import TableSpecial from './TableSpecial'

import { ContextApp } from '../../context'
import { SchemaTable } from '../../constants'

import { TabList } from '../Common/Tab/styles'

const Tabs = () => {
  const { loaderNumbers, loaderAlpha, loaderSpecial } = useContext(ContextApp)
  const showLoader = !loaderNumbers || !loaderAlpha || !loaderSpecial 
  return (
    <>
      <TabList>
        <Tab tabTitle={SchemaTable.Numbers}>Numbers</Tab>
        <Tab tabTitle={SchemaTable.AlphaNumeric}>Alphanumeric</Tab>
        <Tab tabTitle={SchemaTable.Special}>Special characters</Tab>
      </TabList>
      {showLoader && 
        <>
          <TabPanel whenActive={SchemaTable.Numbers}>
            <TableNumbers/>
          </TabPanel>
          <TabPanel whenActive={SchemaTable.AlphaNumeric}>
            <TableAlphaNumeric/>
          </TabPanel>
          <TabPanel whenActive={SchemaTable.Special}>
            <TableSpecial/>
          </TabPanel>
        </>
      }
    </>
  )
}

export default Tabs