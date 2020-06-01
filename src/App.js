import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import { Route, Link } from 'react-router-dom';

// DYNAMIC LINKS
// RENDERING A BUNCH OF TOPICS TO A BUNCH OF LINKS
const TopicsList = (props) => {
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>

      <Link to={`${props.match.url}/13`}>TO TOPIC 13</Link> 
      &nbsp;&nbsp;&nbsp;
      <Link to={`${props.match.url}/17`}>TO TOPIC 17</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to={`${props.match.url}/21`}>TO TOPIC 21</Link>

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
      <h1>HOME PAGE </h1>

      <Link to='/topics'>To Topics List Page</Link>
       &nbsp;&nbsp;&nbsp;
      <button onClick={() => props.history.push('/topics')}>To Topics List Page</button>

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

      <Route exact path='/' component={homepage} />
      <Route exact path='/topics' component={TopicsList} />
      <Route path='/topics/:topicId' component={TopicDetail} />

      {/* topicsId is a param */}

    </div>
  );
}

// NOTE : Any component (like HomePage) gets rendered get passed 3 values
// match 
// history 
// location -> gives us the path /absn/./.. where ever we are currently
// do console.log(props) in that component to see these


export default App;
