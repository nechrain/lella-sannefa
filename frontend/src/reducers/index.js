import { combineReducers } from "redux";
import sannefaReducer from "../reducers/sannefareducer"


const AllReducers = combineReducers({
 platdujourSS: sannefaReducer,

});

export default AllReducers;