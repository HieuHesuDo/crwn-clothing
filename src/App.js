import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
