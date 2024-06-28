import {
  ADD_COLOR_TO_SEQUENCE,
  CHECK_USER_SEQUENCE,
  END_GAME,
  RESET_USER_SEQUENCE,
  START_GAME,
} from "./actions";

const initialGameState = {
  currentSequence: [],
  userSequence: [],
  currentScore: 0,
  gameOver: false,
};

export const gameReducer = (state = initialGameState, action: any) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        currentSequence: [],
        userSequence: [],
        currentScore: 0,
        gameOver: false,
      };
    case ADD_COLOR_TO_SEQUENCE:
      return {
        ...state,
        currentSequence: [...state.currentSequence, action.color],
      };
    case RESET_USER_SEQUENCE:
      return { ...state, userSequence: [] };
    case CHECK_USER_SEQUENCE:
      // Implement logic to check user sequence
      return state;
    case END_GAME:
      return { ...state, gameOver: true };
    default:
      return state;
  }
};
