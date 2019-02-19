import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//Add_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

//Expenses Reducer

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return state.concat(action.expense);
    default:
      return state;
  }
};

//Filters Reducer

const filtersReducer = (
  state = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  },
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

//Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addExpense({ description: "Rent", amount: 100 }));

const demoState = {
  expenses: [
    {
      id: "pfdpadfpdal",
      description: "Janunary Rent",
      note: "This was the final paymant",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
