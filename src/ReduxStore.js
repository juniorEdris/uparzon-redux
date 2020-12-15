import {createStore,applyMiddleware ,combineReducers,compose} from 'redux'
import {ProductReducer} from './Utility/Reducer/ProductReducer'
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({
    products:ProductReducer,    
}),
composeEnhancers(applyMiddleware(thunk))
)

export default store;