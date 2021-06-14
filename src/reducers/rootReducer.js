import { combineReducers } from "redux";
import stateReducer from './stateReducer';
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  stateReducer,
  cartReducer,
})

export default rootReducer
