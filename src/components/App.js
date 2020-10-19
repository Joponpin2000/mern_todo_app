import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header';
import Home from './Home';
import ProductScreen from './ProductScreen';
import Login from './Login';
import Signup from './Signup';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import AdminRoute from './AdminRoute';
import UserRoute from './UserRoute';

import Cart from './Cart';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <UserRoute exact path="/user/dashboard" component={UserDashboard} />
          <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
}

export default App;