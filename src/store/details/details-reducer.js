import {
  SET_COUNTRY,
  SET_ERROR,
  SET_LOADING,
  CLEAR_DETAILS,
} from "./details-actions";

const initialState = {
  currentCountry: null,
  status: "idle",
  error: null,
};

export const detailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COUNTRY: {
      return {
        ...state,
        currentCountry: payload,
        status: "received",
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: payload,
        status: "rejected",
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        error: null,
        status: "loading",
      };
    }
    case CLEAR_DETAILS: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
