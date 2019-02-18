import { createStore } from "redux";

//Action generators - functions that return action object

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const set = ({ count }) => ({ type: "SET", count });
const reset = () => ({ type: "RESET" });

// Reducers
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case "SET":
      return {
        count: action.count
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
};

// Store
const store = createStore(countReducer);

const unsubscibe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount());

// without action generators
//
/* store.dispatch({
 *   type: "INCREMENT",
 *   incrementBy: 5
 * }); */

// with action generators
//
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(reset());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(set({ count: 101 }));
