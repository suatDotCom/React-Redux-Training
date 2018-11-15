import * as actionType from "../types";

const initialState = {
  signingProgress: false,
  isAuthenticated: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.AUTH_UPDATE:
      return { ...state, ...payload };

    case actionType.AUTH_STATUS:
      return { ...state, ...payload };

    default:
      return state;
  }
};
