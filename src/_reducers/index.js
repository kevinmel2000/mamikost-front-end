import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import Router from '.././../Router';
import rentlist from './rentlist'
import viewDetailRentlist from './viewDetailRentlist'

const router = createNavigationReducer(Router);

const appReducer = combineReducers({
    router,
    rentlist,
    viewDetailRentlist
})

export default appReducer



