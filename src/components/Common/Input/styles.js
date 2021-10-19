import styled from 'styled-components'

export const InputContainer = styled.input`
  border: none;
  border-radius: 0;
  width: 100%;
  height: 40px;
  padding: 0 1rem;
  font-size: 0.95rem;
  box-sizing: border-box;
`

export const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  text-align: left;
  color: var(--main-light);
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  p {
    font-size: 0.85rem;
    color: red;
  }
`