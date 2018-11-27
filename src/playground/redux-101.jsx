import { createStore } from "redux";

// Action generators - function that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const reset = () => ({
  type: "RESET"
});

const set = ({ newCount = 0 } = {}) => ({
  type: "SET",
  newCount
});

//Reducers
//Reducers are pure functions
//Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "RESET":
      return {
        count: (state.count = 0)
      };
    case "SET":
      return {
        count: (state.count = action.newCount)
      };
    default:
      return state;
  }
};
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 2 }));
store.dispatch(reset());
store.dispatch(set({ newCount: 1 }));
