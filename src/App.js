import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
