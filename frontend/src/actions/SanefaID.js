import { GET_IDSANNEFA } from "./type";
import axios from "axios";

//get plat jour//
export const getIDsannefa = (payload) => {
  return {
    type: GET_IDSANNEFA,
    payload,
  };
};

export const getET_IDSANNEFAData = (idplat) => {
  return (dispatch) =>
    axios
      .get(`http://localhost:1305/platjour/getidplat/${idplat}`)
      .then((res) => {
        dispatch(getIDsannefa(res.data));
        console.log(res.data);
      });
};
