import React from "react";
import Key from "../Key/Key";
import "./keyboard.css";
import {useSelector, useDispatch} from "react-redux/es/exports";
import {rootState} from "../interface";
import {decPos, incRow, setBoard} from "../../redux/boardSlice";
const Keyboard: React.FC = () => {
  const position = useSelector((state: rootState) => state.board.pos);
  const board = useSelector((state: rootState) => state.board.board);
  const row = useSelector((state: rootState) => state.board.row);
  const dispatch = useDispatch();
  const rows: string[] = ["q w e r t y u i o p", "a s d f g h j k l", "z x c v b n m"];
  const back = () => {
    if (Math.floor((position - 1) / 5) < row) return;
    dispatch(decPos());
    const newBoard = [...board];
    newBoard[position - 1] = "";
    dispatch(setBoard(newBoard));
  };
  const Enter = () => {
    if (position % 5 === 0 && position !== 0) {
      dispatch(incRow());
    }
  };
  return (
    <div className="keyboard-container">
      {rows.map((row, idx) => {
        return (
          <div className="row">
            {idx === 2 && (
              <span className="letter" onClick={Enter}>
                Enter
              </span>
            )}
            {row.split(" ").map((letter, idx) => {
              return (
                <div className="letter-row">
                  <Key letter={letter.toLocaleUpperCase()} />
                  {letter === "m" && (
                    <span className="letter" onClick={back}>
                      Back
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;
