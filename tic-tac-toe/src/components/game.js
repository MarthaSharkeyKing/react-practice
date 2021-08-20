import Board from "./board";
import React from "react";
import ReactDOM from "react-dom";
import "../index.css";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions";
import * as selectors from "../selectors";
import calculateWinner from "./winner";

const Game = () => {
  const dispatch = useDispatch();

  const history = useSelector((state) => selectors.getHistory(state));

  const stepNumber = useSelector((state) => selectors.getStepNumber(state));

  const xIsNext = useSelector((state) => selectors.getXIsNext(state));

  const setStepNumber = (stepNumber) => {
    dispatch(actions.setStepNumber(stepNumber));
  };

  const setHistory = (history) => {
    dispatch(actions.setHistory(history));
  };

  const setXIsNext = (xIsNext) => {
    dispatch(actions.setXIsNext(xIsNext));
  };

  const setResetGame = () => {
    dispatch(actions.setResetGame());
  }

  const handleClick = (i) => {
    const hist = history.slice(0, stepNumber + 1);
    const current = hist[hist.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory(hist.concat([{ squares: squares }]));
    setStepNumber(hist.length);
    setXIsNext(!xIsNext);
  }

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  }

  const restartGame = () => {
    setResetGame()
  }

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
      <div> 
      <button onClick = {() => restartGame()}>X</button>
      </div>
  </div>
  );
}

export default Game;