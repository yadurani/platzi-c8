import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Apalabrados from '../pages/Apalabrados'
import Formula from '../pages/Formula'
import Home from '../pages/Home'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/apalabrados" exact>
          <Apalabrados/>
        </Route>
        <Route path="/formula" exact>
          <Formula/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes