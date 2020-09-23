import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Header from './header';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <Header />

        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Router>
    );
  }
}

export default App;