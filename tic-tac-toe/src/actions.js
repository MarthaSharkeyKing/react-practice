export function setStepNumber(stepNumber) {
  return { type: STEP_NUMBER, stepNumber };
}

export const STEP_NUMBER = "STEP_NUMBER";

export function setHistory(history) {
  return { type: HISTORY, history };
}

export const HISTORY = "HISTORY";

export function setXIsNext(xIsNext) {
  return { type: X_IS_NEXT, xIsNext };
}

export const X_IS_NEXT = "X_IS_NEXT";
