import React from "react";
import "./key.css";
import {useSelector, useDispatch} from "react-redux/es/exports";
import boardSlice, {incPos, setBoard} from "../../redux/boardSlice";
import {rootState} from "../interface";
interface Iprops {
  letter: string;
}
const Key: React.FC<Iprops> = (props) => {
  const board = useSelector((state: rootState) => state.board.board);
  const {letter} = props;
  const position = useSelector((state: rootState) => state.board.pos);
  const dispatch = useDispatch();
  const row = useSelector((state: rootState) => state.board.row);
  const currentrow = Math.floor(position / 5);
  const chooseLetter = () => {
    if (position >= 30) return;
    if (currentrow > row) return;
    const newBoard = [...board];
    newBoard[position] = letter;
    dispatch(setBoard(newBoard));
    dispatch(incPos());
  };
  return (
    <div>
      <div className="letter" onClick={chooseLetter}>
        {letter}
      </div>
    </div>
  );
};

export default Key;
