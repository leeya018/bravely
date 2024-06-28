import { Action } from "@reduxjs/toolkit";
import { ADD_HIGH_SCORE, UPDATE_PLAYER_NAME } from "./actions";

const initialPlayerState = {
  playerName: "",
  highScores: [],
};

export const playerReducer = (state = initialPlayerState, action: any) => {
  switch (action.type) {
    case UPDATE_PLAYER_NAME:
      return { ...state, playerName: action.name };
    case ADD_HIGH_SCORE:
      return { ...state, highScores: [...state.highScores, action.score] };
    default:
      return state;
  }
};