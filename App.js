import React, { Component } from 'react'
import Router from './Router'
import RouterLatihan from './RouteLatihan'
import PopularCity from './src/pages/PopularCity'
import { Provider } from 'react-redux';
import { store } from './src/_redux/store'
class App extends Component {
    render() {
        return (
        <Provider store={store}>
            <Router />
        </Provider>
        )
    }
}

export default App;
