import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  background-color: #100114;
  z-index: 1;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  a {
    color: var(--main-light);
    text-decoration: none;
    padding: 0 0.5rem;
    font-weight: 500;
    font-size: 1.1rem;
    &.active {
      color: var(--main-secondary);
      text-decoration: underline;
    }
  }
`