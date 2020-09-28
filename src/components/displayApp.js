import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Cart from './Cart';
import Navbar from './Navbar';
import store from '../store';
import Display from './display';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Display} />
                        <Route path="/cart" component={Cart} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;