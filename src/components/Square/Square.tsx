import React, {useEffect} from "react";
import "./square.css";
import {motion} from "framer-motion";
import {useSelector} from "react-redux/es/exports";
import {rootState} from "../interface";
import {useState} from "react";
interface Iprops {
  val: string;
  squareIdx: number;
}
const Square: React.FC<Iprops> = (props) => {
  const {val, squareIdx} = props;
  // redux state
  const correctWord = useSelector((state: rootState) => state.board.correctWord);
  const position = useSelector((state: rootState) => state.board.pos);
  const reduxRow = useSelector((state: rootState) => state.board.row);
  //state check
  const [correct, setCorrect] = useState<Boolean>(false);
  const [almost, setAlmost] = useState<Boolean>(false);
  const [wrong, setWrong] = useState<Boolean>(false);
  let wordLast = 4;
  const status: any =
    Math.floor(squareIdx / 5) < reduxRow &&
    (correct ? "correct" : almost ? "almost" : wrong ? "wrong" : "");
  let curPos = (position - 1) % 5;
  const varients = {
    filled: () => ({
      scale: [1.2, 1],
      transition: {
        duration: 0.2,
      },
    }),
    unfilled: () => ({
      scale: [1.2, 1],
      transition: {
        duration: 0.2,
      },
    }),
  };
  useEffect(() => {
    if (correctWord[curPos] === val) {
      setCorrect(true);
    } else if (!correct && val !== "" && correctWord.includes(val)) {
      setAlmost(true);
    } else if (!correct && val !== "" && !correctWord.includes(val)) {
      setWrong(true);
    }
    return () => {
      setCorrect(false);
      setAlmost(false);
      setWrong(false);
    };
  }, [val.toUpperCase()]);

  return (
    <motion.div animate={val ? "filled" : "unfilled"} variants={varients}>
      <div className="square" id={status}>
        {val}
      </div>
    </motion.div>
  );
};

export default Square;
