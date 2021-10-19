import Footer from '../Footer'
import Header from '../Header'

const Layout = ({ children, hiddenHeader }) => {
  return (
    <>
      {!hiddenHeader && <Header/>}
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout