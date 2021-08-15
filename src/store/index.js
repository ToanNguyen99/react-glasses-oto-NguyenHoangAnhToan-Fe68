import { createStore, combineReducers } from 'redux';
import gameOanTuTiReducer from './reducers/gameOanTuTiReducer'

const rootReducer = combineReducers({
    gameOanTuTiReducer,
})

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;