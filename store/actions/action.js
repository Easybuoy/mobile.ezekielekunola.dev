import { CLOSE_MENU } from "../types";

export const closeMenu = () => {
  return {
    type: CLOSE_MENU,
    payload: {},
  };
};
