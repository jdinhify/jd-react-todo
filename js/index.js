import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';
import {Route, Router, hashHistory} from 'react-router'; //eslint-disable-line
import App from './app';
import {CounterContainer} from './Counter/counter';
import AppIntro from './AppIntro/intro';
import { makeStore } from './store';
import {Provider} from 'react-redux'; //eslint-disable-line


// Import the CSS file, which HtmlWebpackPlugin transfers to the build folder
import '../css/main.css';

const store = makeStore();

const routes = <Route component={App}>
    <Route path='/counter' component={CounterContainer} />
    <Route path='/' component={AppIntro} />
</Route>;

// Make reducers hot reloadable,
// see http://stackoverflow.com/questions/34243684/make-redux-reducers-and-other-non-components-hot-loadable
if (module.hot) {
    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers');
        store.replaceReducer(nextRootReducer);
    });
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);
