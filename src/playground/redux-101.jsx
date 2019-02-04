import { createStore } from "redux";

//Action generators - functions that return action object
const incrementCount = (payload = {}) => ({
  type: "INCREMENT",
  incrementBy: payload.incrementBy
});

// redux store
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
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
});

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

store.dispatch({
  type: "RESET"
});

store.dispatch({
  type: "DECREMENT"
});

store.dispatch({
  type: "DECREMENT",
  decrementBy: 10
});

store.dispatch({
  type: "SET",
  count: 101
});
