import { combineReducers } from "redux";
import CartReducer from "./Reducer";

const rootReducer = combineReducers({
  CartReducer: CartReducer,
});

export default rootReducer;
