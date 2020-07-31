import { CLOSE_MENU, OPEN_MENU, OPEN_CARD, CLOSE_CARD } from "../types";

const INITIALSTATE = {
  action: "",
};

export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return {
        action: "openMenu",
      };
    case CLOSE_MENU:
      return {
        action: "closeMenu",
      };
    case OPEN_CARD:
      return {
        action: "openCard",
      };
    case CLOSE_CARD:
      return {
        action: "closeCard",
      };
    default:
      return state;
  }
};
