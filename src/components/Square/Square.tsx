import React from "react";
import "./square.css";
import {motion} from "framer-motion";
interface Iprops {
  val: string;
  squareIdx: number;
}
const Square: React.FC<Iprops> = (props) => {
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
  const {val, squareIdx} = props;
  return (
    <motion.div animate={val ? "filled" : "unfilled"} variants={varients}>
      <div className="square">{val}</div>
    </motion.div>
  );
};

export default Square;
