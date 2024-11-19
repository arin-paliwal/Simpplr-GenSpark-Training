const { createStore, combineReducers, compose } = require('redux');

const incrementAction = { type: "INCREMENT" };
const decrementAction = { type: "DECREMENT" };
const resetAction = { type: "RESET" };

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

const nameReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_NAME":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
  name: nameReducer,
});


const store = createStore(rootReducer);

store.subscribe(() => {
  console.log("State updated:", store.getState());
});

store.dispatch(incrementAction);
store.dispatch(incrementAction);

