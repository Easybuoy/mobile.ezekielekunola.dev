import { CLOSE_MENU, OPEN_MENU } from "../types";

export const closeMenu = () => {
  return {
    type: CLOSE_MENU,
    payload: {},
  };
};

export const openMenu = () => {
  return {
    type: OPEN_MENU,
    payload: {},
  };
};
