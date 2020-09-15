import axios from "axios";
import { REGISTER_SUCCESS, USER_LOADED, LOGIN_SUCCESS } from "./type";

export function register(el) {
  console.log(el);
  return (dispatch) =>
    axios
      .post("http://localhost:1305/inscription/register", el, {
        withCredentials: true,
      })
      .then((res) =>
        dispatch(
          { type: REGISTER_SUCCESS, payload: res.data }
          // console.log("amira", res.data)
        )
      )
      .catch((err) => alert("Créez un compte"));
}

export function login(el) {
  console.log(el);
  return (dispatch) =>
    axios
      .post("http://localhost:1305/inscription/login", el, {
        withCredentials: true,
      })
      .then(
        (res) => {
          console.log(res.data);
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
          });
          localStorage.setItem("Role", res.data.role);
          console.log(res.data._id);
          if (res.data.role === "client") {
            {
              window.location.assign("/client/home/");
              localStorage.setItem(("userid", res.data._id));
            }
          } else if (res.data.role === "sannefa") {
            window.location.pathname = "/sannefa/platjourS/";
            localStorage.setItem(("userid", res.data._id));
          } else if (res.data.role === "undefined") {
            window.location.assign("/");
          }
        }

        // dispatch(getUser())
      )
      .catch((err) => alert("Créez un compte"));
}
export const getUser = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://localhost:1305/inscription/profil",

      {
        withCredentials: true,
      }
    );
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export function logout() {
  return () =>
    axios
      .post(
        "http://localhost:1305/inscription/logout",
        {},
        { withCredentials: true }
      )
      .then((rep) => {
        console.log(rep.data);
        if (rep.data === "token deleted") {
          window.location.href = "/";
        }
      })
      .catch((err) => console.log(err));
}
