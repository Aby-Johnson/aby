import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import ProductList from './components/ProductList';
import Default from './components/Default';
import Details from './components/Details';
 
function App() {
  return (
    <React.Fragment>
    <NavBar />

    <Switch>
    
     <Route exact path="/" component={ProductList} ></Route>
      <Route path="/details" component={Details} ></Route>

      <Route  component={Default} ></Route>

    </Switch>
    </React.Fragment>
  );
}

export default App;
