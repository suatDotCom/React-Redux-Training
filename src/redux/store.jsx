import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { rootReducer } from "./reducers";
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

let middlewares = [
  routerMiddleware(history),
  ReduxThunk
];

// apply the middleware
let middleware = applyMiddleware(...middlewares);

const store = createStore(
  connectRouter(history)(rootReducer),
  compose(middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);


export { store, history };
