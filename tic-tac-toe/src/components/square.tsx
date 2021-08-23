import React from "react";
import { MouseEvent } from "react";

interface SquareProps {
  onClick: () => void,
  value: number
}

const Square = (props : SquareProps) =>  {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
export default Square;
