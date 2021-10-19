import { useContext } from 'react'

import Table from '../Common/Table'
import Body from '../Common/Table/Body'
import Head from '../Common/Table/Head'

import { ContextApp } from '../../context'

import { sumNumber } from '../../helpers'

import { BodyItemContainer, NoData } from '../Common/Table/styles'

const TableAlphaNumeric = () => {
  const { alphaNumeric } = useContext(ContextApp)
  const columns = 3

  return (
    <Table>
      <Head columns={columns}>
        <li>#</li>
        <li>First character</li>
        <li>Last character</li>
      </Head>
      <Body>
        {alphaNumeric.length > 0 ? alphaNumeric?.map(({ id, first, last}, i) => (
          <BodyItemContainer key={id} columns={columns}>
            <div>{sumNumber(i)}</div>
            <div>{first}</div>
            <div>{last}</div>
          </BodyItemContainer>
        )) : <NoData>No data 😓</NoData>}
      </Body> 
    </Table>
  )
}

export default TableAlphaNumeric