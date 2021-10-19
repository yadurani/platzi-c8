import { NavLink } from 'react-router-dom'
import { Container } from '../../../ui/styles'
import { HeaderContainer, Nav } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <Container hiddenMargin>
        <Nav>
          <NavLink to="/" activeClassName="active" exact>Home</NavLink>
          <NavLink to="/apalabrados" activeClassName="active" exact>Apalabrados</NavLink>
          <NavLink to="/formula" activeClassName="active" exact>Fórmula</NavLink>
        </Nav>
      </Container>
    </HeaderContainer>
  )
}

export default Header