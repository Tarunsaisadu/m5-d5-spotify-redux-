import albumReducer from "../reducers/albumReducer";

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
