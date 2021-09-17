import albumReducer from "../reducers/albumReducer";
import thunk from "redux-thunk";

import { createStore, applyMiddleware, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const initialState = {
  loading: false,
  albums: {},
  error: "",
};

const configureStore = createStore(
  albumReducer,
  initialState,
  process.env.REACT_APP_DEVELOPMENT
    ? composeEnhancers(applyMiddleware(thunk))
    : compose(applyMiddleware(thunk))
);

export default configureStore;
