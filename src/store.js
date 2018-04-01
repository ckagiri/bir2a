import { createStore } from "redux";

const initialState = {
  items: {
    "1": "Orange",
    "2": "Banana",
    "3": "Apple"
  }
};

const appReducer = (state = initialState) => state;

const store = createStore(appReducer);

export default store;
