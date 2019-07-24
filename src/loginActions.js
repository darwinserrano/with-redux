import { Login } from "./actions-types";

const loginAction = (name) => ({
  type: Login.LOGIN,
  payload: {
    name: name
  }
})

const logoutAction = () => ({
  type: Login.LOGOUT
})

export const login = (dispatch) => ({
  singIn: () => {
    api().then((resp) => {
      dispatch(loginAction("Boruska"))
      return resp
    }).then(() => {
      dispatch(logoutAction())
    })
  },
  singOut: () => dispatch(logoutAction())
})


const api = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok")
    }, 1000);
  })
}