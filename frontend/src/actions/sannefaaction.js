import {
  GET_Platjour,
  ADD_Platjour,
  DELETE_Platjour,
  EDIT_Platjour,
} from "./type";
import axios from "axios";

//get plat jour//
export const getPlatJourS = (payload) => {
  return {
    type: GET_Platjour,
    payload,
  };
};

export const getPlatJourSData = () => {
  return (dispatch) =>
    axios.get("http://localhost:1305/platjour/gettallplats").then((res) => {
      dispatch(getPlatJourS(res.data));
      console.log(res.data);
    });
};

// ajouter plat jour//
export const addPlatJourS = (payload) => {
  return {
    type: ADD_Platjour,
    payload,
  };
};
export const addPlatJourSToApi = (el) => {  return (dispatch) =>
  axios
    .post("http://localhost:1305/platjour/ajouter",  el )
    .then((res) => window.location.reload(false));
};

//supprimer plat du jour//
export const supprimerPlat = (payload) => {
  return {
    type: DELETE_Platjour,
    payload,
  };
};
export const supprimerPlatduData = (id) => {
  return (dispatch) =>
    axios.delete(`http://localhost:1305/platjour/supprimer/${id}`).then((res) =>
      dispatch(
        supprimerPlat(res.data),

        window.location.reload(false)
      )
    );
};

// changer dans le plat du jour "
export const changerPlat = (payload) => {
  return {
    type: EDIT_Platjour,
    payload,
  };
};
export const changeeDataPlatjour = (el) => {
  return (dispatch) => {
    console.log(el);

    axios
      .patch(`http://localhost:1305/platjour/changer/${el.id}`, el)
      .then((res) =>
        dispatch(changerPlat(res.data), window.location.reload(false))
      );
  };
};
