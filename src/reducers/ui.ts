import { HIDE_SEQUENCE, SHOW_SEQUENCE, TOGGLE_MODAL } from "./actions";

export const uiReducer = (state = initialUIState, action: any) => {
  switch (action.type) {
    case SHOW_SEQUENCE:
      return { ...state, isShowingSequence: true };
    case HIDE_SEQUENCE:
      return { ...state, isShowingSequence: false };
    case TOGGLE_MODAL:
      return { ...state, isModalVisible: !state.isModalVisible };
    default:
      return state;
  }
};

const initialUIState = {
  isGameActive: false,
  isShowingSequence: false,
  isModalVisible: false,
  errorMessage: "",
};
