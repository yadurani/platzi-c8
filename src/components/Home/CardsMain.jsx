import { NavLink } from "react-router-dom"
import { Caption, ContainerCard, ItemCard, P, Subtitle, TitleCard, TitleMain } from "../../ui/styles"

const CardsMain = () => {
  return (
    <>
      <br/>
      <br/>
      <Subtitle>PLATZI MASTER [C8] 💚</Subtitle>
      <TitleMain>Technical Test</TitleMain>
      <P>This is an application where all my technical knowledge is tested.</P>
      <br/>
      <ContainerCard>
        <NavLink to="/apalabrados" activeClassName="active">
          <ItemCard>
            <Caption>Workshop # 1</Caption>
            <TitleCard>Apalabrados</TitleCard>
            <P>Apalabrados is a classification game for numerical data, alfanumeric and special characters.</P>
          </ItemCard>
        </NavLink>
        <NavLink to="/formula" activeClassName="active">
          <ItemCard>
            <Caption>Workshop # 2</Caption>
            <TitleCard>Fórmula</TitleCard>
            <P>Calculate the future value, present value, interest or number of periods of your investment.</P>
          </ItemCard>
        </NavLink>
      </ContainerCard>
    </>
  )
}

export default CardsMain