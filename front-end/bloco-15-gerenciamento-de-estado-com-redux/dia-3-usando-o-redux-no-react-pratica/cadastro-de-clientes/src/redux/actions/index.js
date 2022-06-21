export const LOGIN_REQUEST = 'LOGIN_REQUEST';

export const sendUserLogin = (payload) => ({
  type: LOGIN_REQUEST,
  payload,
})