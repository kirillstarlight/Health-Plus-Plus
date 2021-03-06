import { TOGGLE_MODAL } from "../constants/common";

export function toggleClose() {
  return dispatch => {
    dispatch({ type: TOGGLE_MODAL, modalMode: false });
  };
}
export function toggleOpen() {
  return dispatch => {
    dispatch({ type: TOGGLE_MODAL, modalMode: true });
  };
}
