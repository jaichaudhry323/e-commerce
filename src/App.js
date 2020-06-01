import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import { Route } from 'react-router-dom';

const HatsPage = () => (

  <div>
    <h1>HATS PAGE</h1>
  </div>

)

// writing     exact == get of node express server 
// not writing exact == .use of node expresss server
// without exact all paths that match like / mathces with /homepage 
// all such paths get rendered in the webpage

function App() {
  return (
    <div>

      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatsPage} />

      {/* <HomePage /> */}
    </div>
  );
}

export default App;
