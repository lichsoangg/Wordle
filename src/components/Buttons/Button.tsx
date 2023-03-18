import React from "react";
import "./button.css";
interface Iprops {
  text: string;
  color: string;
  onclick: any;
}
const Button: React.FC<Iprops> = (props) => {
  const {text, color, onclick} = props;
  return (
    <button className="btn" style={{backgroundColor: color}} onClick={onclick}>
      {text}
    </button>
  );
};

export default Button;
