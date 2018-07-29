import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';
import PostIndex from './components/posts_index';
import rootReducer from './reducers';
import PostsNew from './components/posts_new';
import PostShow from './components/post_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <Switch>              
                <Route path ="/posts/new" component={PostsNew} />
                <Route path="/posts/:id" component={PostShow} />
                <Route path="/" component={PostIndex} />
            </Switch>
        </BrowserRouter>
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();
