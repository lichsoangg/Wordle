import React from "react";
import "./square.css";
interface Iprops {
  val: string;
  squareIdx: number;
}
const Square: React.FC<Iprops> = (props) => {
  const {val, squareIdx} = props;
  return (
    <>
      <div className="square">{val}</div>
    </>
  );
};

export default Square;
