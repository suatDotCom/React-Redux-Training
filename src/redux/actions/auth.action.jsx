import * as actionType from '../types';

export const authStatusUpdate = (payload) => ({
  type: actionType.AUTH_UPDATE,
  payload
})

export const authStatus = (payload) => ({
  type: actionType.AUTH_STATUS,
  payload
})

