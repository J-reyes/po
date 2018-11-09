import React, { Component } from 'react';
import Login from './components/login'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
         <Route exact path="/" component={Login}/>
         <Route path="/register" component={Register} />
         <Route path="/home" component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
