import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './containers/homepage.component';

const HatsPsge = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPsge} />
      </Switch>
    </div>
  );
}

export default App;
