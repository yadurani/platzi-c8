import styled from 'styled-components'

export const TableContainer = styled.div`
  width: 100%;
  border: 1px solid black;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  background: #26052f;
`

export const HeadContainer = styled.ul`
  display: grid;
  grid-template-columns: ${({ columns }) => columns && `repeat(${columns}, 1fr)`};
  border-bottom: 1px solid black;
  text-align: center;
  font-weight: bold;
  background-color: var(--main-secondary);
  li {
    border-right: 1px solid black;
    padding: 0.5rem;
    &:last-child {
      border-right: none;
    }
  }
`

export const BodyContainer = styled.ul`
  width: 100%;
  li {
    background-color: var(--main-light);;
    &:nth-child(odd) {
      background-color: lightgray;
    }
  }
`

export const BodyItemContainer = styled.li`
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: ${({ columns }) => columns && `repeat(${columns}, 1fr)`};
  text-align: center;
  div {
    border-right: 1px solid black;
    padding: 0.5rem;
    &:first-child {
      font-weight: bold;
    }
    &:last-child {
      border-right: none;
    }
  }
  &:last-child {
    border-bottom: none;
  }
`

export const NoData = styled.div`
  color: var(--main-light);
  text-align: center;
  margin: 2rem 0;
`