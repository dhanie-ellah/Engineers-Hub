import { LOGINUSER } from "./types";

export const User = (payload) => {
  return {
    type: LOGINUSER,
    payload,
  };
};
