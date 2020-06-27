import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';

// NOTE that the extension imports auth from ./firebase but we need it from ./firebase/firebase.utils
import { auth } from './firebase/firebase.utils';

// writing     exact === get of node express server 
// not writing exact === .use of node expresss server
// without exact all paths that match like / mathces with /homepage 
// all such paths get rendered in the webpage

// dont forget this that below word class has c in small caps
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  // we need to close the subscription as well to get rid of any memory leak error
  // we set up a property
  unsubscribeFromAuth = null;

  // tracking the signed in and signed out status of user
  componentDidMount() {
    /// auth.onAuthStateChanged gives us a funciton which when called unsubscribes the subscription
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(this)
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  // SignOut button appears in header if the user is signed in
  // So we need to send some msg regarding sign in and sign out to header
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>

      </div>
    );
  }

}

export default App;