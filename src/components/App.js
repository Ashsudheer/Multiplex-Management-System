import React from 'react';
// import Navbar from './Navbar';
// import Movies from './Movies';
// import Screens from './Screens';
import Home from './Home';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/home" exact component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
