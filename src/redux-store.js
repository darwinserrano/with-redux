import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import loginReducer from "./loginReducer";
import thunk from 'redux-thunk';

const reducers = combineReducers({
  login: loginReducer
})

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

const store = createStore(reducers, enhancer)

export default store