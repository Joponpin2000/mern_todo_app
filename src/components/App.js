import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './header';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import AdminRoute from './AdminRoute';
import UserRoute from './UserRoute';


class App extends Component {
  render() {
    return (
      <Router>
        <Header />

        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <UserRoute exact path="/user/dashboard" component={UserDashboard} />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
      </Router>
    );
  }
}

export default App;