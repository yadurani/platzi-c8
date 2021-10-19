import Layout from '../components/Common/Layout'
import CardsMain from '../components/Home/CardsMain'

import { Container } from '../ui/styles'

const Home = () => (
  <Layout hiddenHeader>
    <Container>
      <CardsMain/>
    </Container>
  </Layout>
)

export default Home