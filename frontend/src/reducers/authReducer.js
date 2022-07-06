import { AUTH_SIGNUP } from "../type";

const initialState = {
  signup: {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  },
  login: {},
};

const signUpReducer = (state = initialState, action) => {
  const value = action.payload;
  switch (action.type) {
    case AUTH_SIGNUP:
      return {
        ...state,
        ...state.signup,
        email: value.email,
        password: value.password,
        firstName: value.firstName,
        lastName: value.lastName,
      };
    default:
      return state;
  }
};

export default signUpReducer;
