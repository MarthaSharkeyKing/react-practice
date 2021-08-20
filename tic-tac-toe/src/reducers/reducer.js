import { X_IS_NEXT } from "../actions";
import { HISTORY } from "../actions";
import { STEP_NUMBER } from "../actions";
import { RESET_GAME } from "../actions";

export const initialState = {
  stepNumber: 0,
  xIsNext: true,
  history: [{ squares: Array(9).fill(null) }],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case RESET_GAME:
      return initialState;
    case STEP_NUMBER:
      return { ...state, stepNumber: action.stepNumber };
    case X_IS_NEXT:
      return { ...state, xIsNext: action.xIsNext };
    case HISTORY:
      return { ...state, history: action.history };
    default:
      return state;
  }
}
