import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import './App.css';
import NotFound from './NotFound';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import AdminRoute from './AdminRoute';
import UserRoute from './UserRoute';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Header />

          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <UserRoute exact path="/user/dashboard" component={UserDashboard} />
          <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
        </Switch>
        {/* <Route component={NotFound} /> */}
      </Router>
    );
  }
}

export default App;