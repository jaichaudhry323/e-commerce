import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import { Route, Link } from 'react-router-dom';

const TopicsList = () => {
  return (
    <div>
      <h1>
        TOPIC LIST PAGE
      </h1>
    </div>
  )
}

const TopicDetail = (props) => (
  <div>
    <h1>TOPIC DETAILS PAGE + {props.match.params.topicId}</h1>
  </div>
)

const homepage = (props) => {

  console.log(props);

  return (
    <div>
      <Link to='/topics'>Topics</Link>
      <h1>
        HOME PAGE
  </h1>
    </div>
  );
}

// writing     exact == get of node express server 
// not writing exact == .use of node expresss server
// without exact all paths that match like / mathces with /homepage 
// all such paths get rendered in the webpage


function App() {
  return (
    <div>

      <Route path='/' component={homepage} />
      <Route exact path='/topics' component={TopicsList} />
      <Route path='/topics/:topicId' component={TopicDetail} />

      {/* topicsId is a param */}

    </div>
  );
}

// NOTE : Any component (like HomePage) gets rendered get passed 3 values
// match 
// history 
// location
// do console.log(props) in that component to see these


export default App;
