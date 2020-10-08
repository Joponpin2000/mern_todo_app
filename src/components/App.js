import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

// import { Provider } from 'react-redux';
import Cart from './Cart';
// import store from '../store';

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <UserRoute exact path="/user/dashboard" component={UserDashboard} />
          <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
      // </Provider>
    );
  }
}

export default App;