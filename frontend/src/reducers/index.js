import { combineReducers } from "redux";
import sannefaReducer from "../reducers/sannefareducer"
import authReducer from "../reducers/authentificationreducer"


const AllReducers = combineReducers({
 platdujourSS: sannefaReducer,
 authReducer:authReducer

});

export default AllReducers;