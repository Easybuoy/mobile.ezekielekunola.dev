import { CLOSE_MENU, OPEN_MENU } from "../types";

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
    default:
      return state;
  }
};
