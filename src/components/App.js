import React from 'react';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UserLogin from './UserLogin';
import UserSignUp from './UserSignUp';
import UserHome from './UserHome';
import UserTickets from './UserTickets';
import SelectUser from './SelectUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={SelectUser}/>
          <Route path="/UserLogin" exact component={UserLogin}/>
          <Route path="/UserSignUp" exact component={UserSignUp}/>
          <Route path="/UserHome" exact component={UserHome}/>
          <Route path="/UserTickets" exact component={UserTickets}/>
          <Route path="/admin" exact component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
