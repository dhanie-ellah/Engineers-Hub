import { LOGINUSER } from "./types";

const initialState = {
  userData: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGINUSER:
      return {
        ...state,
        userData: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
