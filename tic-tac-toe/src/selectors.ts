interface Store{
  history: any[],
  stepNumber: number,  
  xIsNext: true,
  getResetGame: null
}

export function getStepNumber(store: Store) {
  return store.stepNumber;
}

export function getXIsNext(store: Store) {
  return store.xIsNext;
}

export function getHistory(store: Store) {
  return store.history;
}

export function getResetGame(store: Store) {
  return store.getResetGame;
}
