import { BodyContainer } from './styles'

const Body = ({ columns, children }) => {
  return (
    <BodyContainer columns={columns}>
      {children}
    </BodyContainer>
  )
}

export default Body