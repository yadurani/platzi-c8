import { useContext } from 'react'

import Table from '../Common/Table'
import Body from '../Common/Table/Body'
import Head from '../Common/Table/Head'

import { ContextApp } from '../../context'

import { sumNumber } from '../../helpers'

import { BodyItemContainer, NoData } from '../Common/Table/styles'

const TableSpecial = () => {
  const { specialCharacter } = useContext(ContextApp)
  const columns = 2

  return (
    <Table>
      <Head columns={columns}>
        <li>#</li>
        <li>Special character</li>
      </Head>
      <Body>
        {specialCharacter.length > 0 ? specialCharacter?.map(({ id, character}, i) => (
          <BodyItemContainer key={id} columns={columns}>
            <div>{sumNumber(i)}</div>
            <div>{character}</div>
          </BodyItemContainer>
        )) : <NoData>No data 😓</NoData>}
      </Body>
    </Table>
  )
}

export default TableSpecial