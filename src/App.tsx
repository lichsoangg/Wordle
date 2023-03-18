import "./App.css";
import Board from "./components/Board/Board";
import Heading from "./components/Heading/Heading";
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux/es/exports";
import Keyboard from "./components/Keyboard/Keyboard";
import {rootState} from "./components/interface";
import Button from "./components/Buttons/Button";

function App() {
  const board = useSelector((state: rootState) => state.board.board);
  const newGame = () => {};
  return (
    <div className="App">
      <Heading type="h1" text="Wordle" />
      <Heading type="subtitle" text="Another Wordle Clone" />
      <div className="board-container">
        <Board board={board} />
      </div>
      <div className="keyboard">
        <Keyboard />
      </div>
      <div className="button">
        <Button text="New Games" color="#2ecc71" onclick={newGame} />
        <Button text="Suggest" color="#2980b9" onclick={newGame} />
      </div>
    </div>
  );
}

export default App;
