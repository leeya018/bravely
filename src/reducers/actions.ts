// actions.js
export const START_GAME = "START_GAME";
export const ADD_COLOR_TO_SEQUENCE = "ADD_COLOR_TO_SEQUENCE";
export const RESET_USER_SEQUENCE = "RESET_USER_SEQUENCE";
export const CHECK_USER_SEQUENCE = "CHECK_USER_SEQUENCE";
export const END_GAME = "END_GAME";
export const SHOW_SEQUENCE = "SHOW_SEQUENCE";
export const HIDE_SEQUENCE = "HIDE_SEQUENCE";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const UPDATE_PLAYER_NAME = "UPDATE_PLAYER_NAME";
export const ADD_HIGH_SCORE = "ADD_HIGH_SCORE";

export const startGame = () => ({ type: START_GAME });
export const addColorToSequence = (color) => ({
  type: ADD_COLOR_TO_SEQUENCE,
  color,
});
export const resetUserSequence = () => ({ type: RESET_USER_SEQUENCE });
export const checkUserSequence = () => ({ type: CHECK_USER_SEQUENCE });
export const endGame = () => ({ type: END_GAME });
export const showSequence = () => ({ type: SHOW_SEQUENCE });
export const hideSequence = () => ({ type: HIDE_SEQUENCE });
export const toggleModal = () => ({ type: TOGGLE_MODAL });
export const updatePlayerName = (name) => ({ type: UPDATE_PLAYER_NAME, name });
export const addHighScore = (score) => ({ type: ADD_HIGH_SCORE, score });
