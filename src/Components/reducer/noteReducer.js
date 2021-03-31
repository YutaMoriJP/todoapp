import addReducer from "./addReducer";
import removeReducer from "./removeReducer";
import doneReducer from "./doneReducer";

const noteReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, addReducer(action)];
    case "remove":
      return removeReducer(state, action);
    case "done":
      return doneReducer(state, action);
    default:
      return state;
  }
};

export default noteReducer;
