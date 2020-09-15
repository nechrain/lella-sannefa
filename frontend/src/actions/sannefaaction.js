import {
  GET_Platjour,
  ADD_Platjour,
  DELETE_Platjour,
  EDIT_Platjour,
  PUBLISH_Platjour,
} from "./type";
import axios from "axios";
import swal from "sweetalert";
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
export const addPlatJourSToApi = (el) => {
  return (dispatch) =>
    axios
      .post("http://localhost:1305/platjour/ajouter", el)
      .then((res) => swal(res.data).then((button) => window.location.reload()));
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
    axios
      .delete(`http://localhost:1305/platjour/supprimer/${id}`)
      .then((res) => {
        swal("Produit supprimé").then((button) =>
          dispatch(
            supprimerPlat(res.data),

            window.location.reload()
          )
        );
      });
};

// changer dans le plat du jour "
export const changerPlat = (payload) => {
  return {
    type: EDIT_Platjour,
    payload,
  };
};
export const changeeDataPlatjour = (el, id) => {
  return (dispatch) => {
    console.log(el);
    console.log(id);
    axios
      .patch(`http://localhost:1305/platjour/changer/${id}`, el)

      .then((res) => {
        swal("produit updated").then((button) =>
          dispatch(changerPlat(res.data), window.location.reload())
        );
      });
  };
};

export const publierPlat = (payload) => {
  return {
    type: PUBLISH_Platjour,
    payload,
  };
};
export const publierDataPlatjour = (el) => {
  return (dispatch) => {
    axios
      .patch(
        `http://localhost:1305/platjour/publier/${el._id}`,
        {},
        { withCredentials: true }
      )
      .then((res) => {
        swal("Produit Publier").then((button) =>
          dispatch(publierPlat(res.data))
        );
      });
  };
};
