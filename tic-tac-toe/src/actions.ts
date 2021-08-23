
export function setStepNumber(stepNumber: number) {
  return { type: STEP_NUMBER, stepNumber };
}

export const STEP_NUMBER = "STEP_NUMBER";

export function setHistory(history: any[]) {
  console.log(history);
  return { type: HISTORY, history };
}

export const HISTORY = "HISTORY";

export function setXIsNext(xIsNext: boolean) {
  return { type: X_IS_NEXT, xIsNext };
}

export const X_IS_NEXT = "X_IS_NEXT";

export function setResetGame(resetGame:) {
  console.log(resetGame);
  return { type: RESET_GAME, resetGame };
}

export const RESET_GAME = "RESET_GAME";
