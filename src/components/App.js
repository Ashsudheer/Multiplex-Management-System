import React from 'react';
// import Navbar from './Navbar';
// import Movies from './Movies';
// import Screens from './Screens';
import Home from './Home';
import UserLogin from './UserLogin';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SelectUser from './SelectUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={SelectUser}/>
          <Route path="/userlogin" exact component={UserLogin}/>
          <Route path="/home" exact component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
