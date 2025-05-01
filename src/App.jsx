import './App.css'
import Home from './components/Home';
import OrderPage from './components/OrderPage';
import Header from './components/Header';
import Success from './components/Success';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/orderpage">
          <OrderPage/>
        </Route>
        <Route path="/success">
          <Success/>
        </Route>
        <Route path="/" exact>
          <Home/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App;
