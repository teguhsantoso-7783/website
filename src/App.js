import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Home from './Home';
import {
 BrowserRouter as Router,
 Switch,
 Route,
} from "react-router-dom";

import { Button } from 'semantic-ui-react';
import { Header } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
import { Segment } from 'semantic-ui-react';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Register/>
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
       </Switch>
    </Router>
  
      
   );
}
 
export default App;
