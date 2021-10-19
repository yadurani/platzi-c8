import styled from 'styled-components'
import { Container } from '../../../ui/styles'

export const ContainerFooter = styled.footer`
  padding: 30px 0 0;
  position: relative;
  z-index: 1;
  color: var(--main-light);
  ${Container} {
    display: grid;
    grid-gap: 0 1rem;
  }
  @media(max-width: 767px) {
    padding: 50px 0 0;
  }
`

export const ContainerInfo = styled.div`
  display: grid;
  grid-gap:1rem;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  padding:1rem 0;
  @media(min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: initial;
  }
`
export const ContainerCopy = styled(ContainerInfo)`
  border: none;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.05rem;
  @media(max-width: 767px) {
    align-items: center;
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;
  }
`

export const SocialList = styled.ul`
  align-items: center;
  display: flex;
  gap: 0 1rem;
  justify-content: flex-end;
  list-style: none;
  li {
    transition: transform 0.3s ease;
    path {
      fill: var(--main-light);
    }
    @media(hover: hover) {
      &:hover {
        transform: scale(1.2);
        transition: transform 0.3s ease;
      }
    }
  }
`

export const LinkExternal = styled.a`
  span {
    display: none;
  }
`
