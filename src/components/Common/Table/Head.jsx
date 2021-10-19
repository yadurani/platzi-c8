import { HeadContainer } from "./styles"

const Head = ({ children, columns }) => {
  return (
    <HeadContainer columns={columns}>
      {children}
    </HeadContainer>
  )
}

export default Head