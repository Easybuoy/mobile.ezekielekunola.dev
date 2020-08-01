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

const INITIALSTATE = {
  action: "",
  name: "Stranger",
};

export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return {
        ...state,
        action: "openMenu",
      };
    case CLOSE_MENU:
      return {
        ...state,
        action: "closeMenu",
      };
    case OPEN_CARD:
      return {
        ...state,
        action: "openCard",
      };
    case CLOSE_CARD:
      return {
        ...state,
        action: "closeCard",
      };
    case OPEN_LOGIN:
      return {
        ...state,
        action: "openLogin",
      };
    case CLOSE_LOGIN:
      return {
        ...state,
        action: "closeLogin",
      };
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    case OPEN_NOTIFICATION:
      return {
        ...state,
        action: "openNotif",
      };
    case CLOSE_NOTIFICATION:
      return {
        ...state,
        action: "closeNotif",
      };
    default:
      return state;
  }
};
