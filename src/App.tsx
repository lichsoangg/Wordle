import "./App.css";
import Board from "./components/Board/Board";
import Heading from "./components/Heading/Heading";
import {useState} from "react";
import {useSelector} from "react-redux/es/exports";
import Keyboard from "./components/Keyboard/Keyboard";
import {rootState} from "./components/interface";
function App() {
  const board = useSelector((state: rootState) => state.board.board);
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
    </div>
  );
}

export default App;
