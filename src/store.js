import { createStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";
// import reducer from "./reducers";
import RootReducer from "./redux/RootReducer";
// import { locationSlice } from "./redux/ducks/locationDuck";

const store = createStore(
  RootReducer,
  // this enables the react dev tools
  typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

// const store = configureStore({ reducer: RootReducer });
// const store = createStore(RootReducer);

export default store;

// const configureStore = (preloadedState = RootReducer(undefined, {})) => {
//   const store = createStore(RootReducer, preloadedState);

//   return store;
// };

// export default configureStore();
