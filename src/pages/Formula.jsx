import Layout from '../components/Common/Layout'
import FormInterest from '../components/Formula/FormInterest'
import FormPeriods from '../components/Formula/FormPeriods'
import FormVF from '../components/Formula/FormVF'
import FormVP from '../components/Formula/FormVP'
import Info from '../components/Formula/Info'

import { Container, FormCards } from '../ui/styles'

const Formula = () => {
  return (
    <Layout>
      <Container>
        <Info/>
        <br/>
        <FormCards>
          <FormVF/>
          <FormVP/>
          <FormInterest/>
          <FormPeriods/>
        </FormCards>
      </Container>
    </Layout>
  )
}

export default Formula