import Loader from '../components/Common/Loader'
import FormAdd from '../components/Apalabrados/FormAdd'
import Tabs from '../components/Apalabrados/Tabs'
import Layout from '../components/Common/Layout'

import { Container } from '../ui/styles'

const Apalabrados = () => {
  return (
    <Layout>
      <Container>
        <Loader/>
        <FormAdd/>
        <br/>
        <Tabs/>
      </Container>
    </Layout>
  )
}

export default Apalabrados
