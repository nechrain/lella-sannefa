import { GET_IDSANNEFA } from "../actions/type";

const stateInit = [];

export const sannefaIDReducer = (state = stateInit, action) => {
  if (action.type === GET_IDSANNEFA) {
    return action.payload;
  } else return state;
};
