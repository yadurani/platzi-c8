import styled, { keyframes } from 'styled-components'

export const ContainerAbout = styled.section`
  margin: 130px 0 100px;
  padding: 70px 0;
  @media(max-width: 960px) {
    margin: 50px 0 0;
    padding: 70px 0 0;
    z-index: 1;
    position: relative;
  }
`

export const TabList = styled.ul`
  list-style: none;
  display: flex;
  gap: 0 1rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  color: var(--main-light);
  @media(max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`

export const TabItem = styled.li`
  cursor: pointer;
  padding: 0.5rem;
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 0.05rem;
  text-align: center;
  display: flex;
  align-items: center;
  pointer-events: ${({ isActive }) => isActive && 'none' };
  position: relative;
  color: ${({ isActive }) => isActive && 'var(--main-dark)' };
  background-color: ${({ isActive }) => isActive && 'var(--main-platzi)' };
  @media(hover: hover) {
    &:hover {
      color: var(--main-platzi);
    }
  }
  @media(max-width: 767px) {
    font-size: 1rem;
    padding: 0.5rem;
    text-align: center;
    justify-content: center;
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  } 
  to {
    opacity: 1;
  }
`

export const TabPanelItem = styled.div`
  animation: ${fadeIn} 0.5s ease-in;
`
