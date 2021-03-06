import {
  CLOSE_MENU,
  OPEN_MENU,
  OPEN_CARD,
  CLOSE_CARD,
  OPEN_LOGIN,
  CLOSE_LOGIN,
  UPDATE_NAME,
  OPEN_NOTIFICATION,
  CLOSE_NOTIFICATION,
} from "../types";

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

export const openLogin = () => {
  return {
    type: OPEN_LOGIN,
    payload: {},
  };
};

export const closeLogin = () => {
  return {
    type: CLOSE_LOGIN,
    payload: {},
  };
};

export const updateName = (name, avatar) => {
  return {
    type: UPDATE_NAME,
    payload: { name, avatar },
  };
};

export const openNotif = () => {
  return {
    type: OPEN_NOTIFICATION,
    payload: {},
  };
};

export const closeNotif = () => {
  return {
    type: CLOSE_NOTIFICATION,
    payload: {},
  };
};
