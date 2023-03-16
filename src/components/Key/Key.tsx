import React from "react";
import "./key.css";
import {useSelector, useDispatch} from "react-redux/es/exports";
import boardSlice, {setBoard} from "../../redux/boardSlice";
import {rootState} from "../interface";
interface Iprops {
  letter: string;
}
const Key: React.FC<Iprops> = (props) => {
  const board = useSelector((state: rootState) => state.board.board);
  const {letter} = props;
  const dispatch = useDispatch();
  const chooseLetter = () => {
    const newBoard = [...board];
    dispatch(setBoard(newBoard));
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
