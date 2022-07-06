import { AUTH_SIGNUP } from "../type";

export const signUpAction = (list) => {
  return {
    type: AUTH_SIGNUP,
    payload: list,
  };
};
