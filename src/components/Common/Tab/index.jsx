import React, { useContext } from 'react'

import { ContextApp } from '../../../context'

import { TabItem } from './styles'

const Tab = ({ tabTitle, children }) => {
  const { activeTab, setActiveTab } = useContext(ContextApp)
  const isActive = tabTitle === activeTab

  const handleActive = () => setActiveTab(tabTitle)

  return (
    <TabItem isActive={isActive} onClick={handleActive}>
      {children}
    </TabItem>
  )
}

export default Tab
