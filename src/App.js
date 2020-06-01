import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';

// writing     exact == get of node express server 
// not writing exact == .use of node expresss server
// without exact all paths that match like / mathces with /homepage 
// all such paths get rendered in the webpage

function App() {
  return (
    <div> 
      <Header/>

    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>

    </div>
  );
}

export default App;
