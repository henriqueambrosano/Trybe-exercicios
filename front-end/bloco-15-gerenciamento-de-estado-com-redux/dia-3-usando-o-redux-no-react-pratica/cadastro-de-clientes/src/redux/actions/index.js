export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const SAVE_USER = 'SAVE_USER'

export const sendUserLogin = (payload) => ({
  type: LOGIN_REQUEST,
  payload,
})

export const saveUser = (payload) => ({
  type:SAVE_USER,
  payload,
})