import { useContext } from 'react'

import { ContextApp } from '../../../context'

const TabPanel = ({ whenActive, children }) => {
  const { activeTab } = useContext(ContextApp)
  const renderPanel = whenActive === activeTab ? children : null
  return renderPanel
}

export default TabPanel
