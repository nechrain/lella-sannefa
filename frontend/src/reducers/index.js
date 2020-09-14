import { combineReducers } from "redux";
import sannefaReducer from "../reducers/sannefareducer";
import authReducer from "../reducers/authentificationreducer";
import { sannefaIDReducer } from "../reducers/sannfaID";

const AllReducers = combineReducers({
  platdujourSS: sannefaReducer,
  authReducer: authReducer,
  sannefaID: sannefaIDReducer,
});

export default AllReducers;
