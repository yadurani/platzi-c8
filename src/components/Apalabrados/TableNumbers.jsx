import { useContext } from 'react'

import Table from '../Common/Table'
import Body from '../Common/Table/Body'
import Head from '../Common/Table/Head'

import { ContextApp } from '../../context'

import { sumNumber } from '../../helpers'

import { BodyItemContainer, NoData } from '../Common/Table/styles'

const TableNumbers = () => {
  const { numberList } = useContext(ContextApp)
  const columns = 3

  return (
    <Table>
      <Head columns={columns}>
        <li>#</li>
        <li>Number</li>
        <li>Accumulator</li>
      </Head>
      <Body>
        {numberList.length > 0 ? numberList?.map(({ id, number, acc}, i) => (
          <BodyItemContainer key={id} columns={columns}>
            <div>{sumNumber(i)}</div>
            <div>{number}</div>
            <div>{acc}</div>
          </BodyItemContainer>
        )) : <NoData>No data 😓</NoData>}
      </Body>
    </Table>
  )
}

export default TableNumbers