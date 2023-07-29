import {Switch, Route} from 'react-router-dom'

import SignUp from './components/SignUp'
import LoginPage from './components/LoginPage'
import Header from './components/Header'
import MoviesRoute from './components/MoviesRoute'
import './App.css'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/movies" component={MoviesRoute} />
    </Switch>
  </>
)

export default App
