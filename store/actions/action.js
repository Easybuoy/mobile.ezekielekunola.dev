import { CLOSE_MENU, OPEN_MENU, OPEN_CARD, CLOSE_CARD } from "../types";

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

export const openCard = () => {
  return {
    type: OPEN_CARD,
    payload: {},
  };
};

export const closeCard = () => {
  return {
    type: CLOSE_CARD,
    payload: {},
  };
};
