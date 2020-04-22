import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
            <div className="App">
              <Navbar/>
              <Switch>
                  <Route exact path="/reactjs-shooping-cart" component={Home}/>
                  <Route path="/reactjs-shooping-cart/cart" component={Cart}/>
                  <Route path="/reactjs-shooping-cart/product/*" component={ProductDetails}/>
              </Switch>
            </div>
       </BrowserRouter>
  );
}

export default App;