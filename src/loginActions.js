import { Login } from "./actions-types";

export const loginAction = (name) => ({
  type: Login.LOGIN,
  payload: {
    name: name
  }
})

export const logoutAction = () => ({
  type: Login.LOGOUT
})

export const login = (dispatch) => {
  return {
    singIn: () => {
      api().then((resp) => {
        dispatch(loginAction("Boruska"))
        return resp
      })
    },
    singOut: () => dispatch(logoutAction())
  }
}


export const api = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok")
    }, 1000);
  })
}

export const singIn = () => {
  return (dispatch, getState) => {
    dispatch(loginAction("Boruska"))
  }
}

export const singOut = () => {
  return (dispatch) => dispatch(logoutAction())
}