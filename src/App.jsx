import './App.css'
import Home from './components/Home';
import OrderPage from './components/OrderPage';
import Header from './components/Header';
import Success from './components/Success';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [form, setForm] = useState(null);
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/orderpage" >
          <OrderPage setForm={setForm}/>
        </Route>
        <Route path="/success" >
          <Success form={form}/>
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
