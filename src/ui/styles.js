import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 1rem;
  max-width: 1200px;
  width: 100%;
  margin: ${({ hiddenMargin }) => hiddenMargin ? '0 auto' : '5rem auto 2rem'};
  box-sizing: border-box;
`

export const Title = styled.h3`
  font-size: 2rem;
`

export const P = styled.p`
  color: var(--main-light);
  font-family: var(--text-secondary);
`

export const Button = styled.button`
  width:${({ fullwidth }) => fullwidth ? '100%' : 'auto'};
  padding: 0 1rem;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  border: none;
  background-color: var(--main-secondary);
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  &:hover:not(:disabled) {
    background-color: var(--main-third)
  }
  &:disabled {
    color: var(--main-dark);
    opacity: 0.5;
  }
`

export const TitleMain = styled.h2`
  font-family: var(--text-main);
  color: var(--main-light);
  font-weight: 900;
  letter-spacing: 0.03rem;
  font-size: 2.5rem;
  margin: 1rem 0 ;
`

export const Subtitle = styled.h4`
  color: var(--main-platzi);
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.03rem;
  margin: var(--padding-medium) 0;
`

export const Form = styled.form`
  display: flex;
  grid-gap: 1rem;
  gap: 1rem;
  margin-top: 2rem;
  flex-direction: ${({ direction }) => direction};
`

export const ContainerCard = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-gap: 1rem;
  @media(max-width: 767px) {
    grid-template-columns: 1fr;
  }
  a {
    text-decoration: none;
  }
`

export const ItemCard = styled.div`
  background-color: var(--main-secondary);
  color: var(--main-dark);
  padding: 2rem;
  transition: transform ease 0.5s;
  @media(hover: hover) {
    &:hover {
      transition: transform ease 0.5s;
      transform: scale(0.95);
      cursor: pointer;
    }
  }
  p {
    color: var(--main-dark);
  }
`

export const Caption = styled.small`
  color: var(--main-secondary);
  font-size: 0.875rem;
  letter-spacing: 0.03rem;
  text-transform: uppercase;
  background: var(--main-dark);
  padding: 0 var(--padding-small);
  text-align: right;
  float: right;
`

export const TitleCard = styled.h5`
  color: var(--main-dark);
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.03rem;
  margin: 0;
`

export const FormCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-gap: 1rem;
  form {
    padding: 2rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.8);
    background: #26052f;
    margin: 0;
  }
`

export const TitleForm = styled.h3`
  color: var(--main-light);
  font-size: 1.8rem;
  margin: 0;
`

export const Success = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--main-platzi);
  box-sizing: border-box;
  color: var(--main-platzi);
  font-size: 1.2rem;
  text-align: center;
  font-weight: 500;
`