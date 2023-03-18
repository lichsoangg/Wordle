import React from "react";
import Square from "../Square/Square";
import "./board.css";
interface iProps {
  board: string[];
}
const Board: React.FC<iProps> = (props) => {
  const {board} = props;
  return (
    <>
      <div className="board">
        {board.map((square, idx) => {
          return (
            <>
              <Square key={idx} val={square} squareIdx={idx} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Board;
