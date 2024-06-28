import { combineReducers } from "@reduxjs/toolkit";
import { gameReducer } from "./game";
import { uiReducer } from "./ui";
import { playerReducer } from "./player";

const rootReducer = combineReducers({
  game: gameReducer,
  ui: uiReducer,
  player: playerReducer,
});

export default rootReducer;
