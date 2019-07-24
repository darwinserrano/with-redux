import { Login } from "./actions-types";

const initialState = {
  user: null,
  isLogged: false
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case Login.LOGIN:
      return {
        ...state,
        isLogged: true,
        user: action.payload
      }

    case Login.LOGOUT:
      return {
        ...state,
        isLogged: false,
        user: null
      }

    default:
      return state
  }
}

export default loginReducer