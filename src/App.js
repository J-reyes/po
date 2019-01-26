import React, { Component } from 'react';
import {  Switch, Route } from 'react-router-dom';

import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import Dashboard from './components/dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App-header container'>
        <Switch>
         <Route exact path="/" component={Login}/>
         <Route path="/register" component={Register} />
         <Route path="/home" component={Home}/>
         <Route path="/dashboard" component={Dashboard}/>
        </Switch>
      </div>
    );
  }
}

export default App;
