import { useContext } from "react"
import { ContextApp } from "../../../context"
import { LoaderContainer } from "./styles"

const Loader = () => {
  const { loaderNumbers, loaderAlpha, loaderSpecial } = useContext(ContextApp)
  
  return loaderNumbers || loaderAlpha || loaderSpecial ?  
    <LoaderContainer>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderContainer> :
  null
}

export default Loader