import { useState, useEffect } from "react";
import HistoryWindow from "./HistoryWindow";
import EndGame from "./EndGame";
import Field from "./Field";
import ".//..//Css/Board.css";

const BoardForPlayer = ({
  player1,
  player2,
  showtableVsPlayer,
  setshowtableVsPlayer,
}) => {
  const [box, setBox] = useState(Array(9).fill(null));
  const [showmodal, setShowmodal] = useState(true);
  const [winner, setwinner] = useState("");
  const [counterPL1, setCounterPL1] = useState(0);
  const [counterPL2, setCounterPL2] = useState(0);
  const [counterDraw, setCounterDraw] = useState(0);
  const [HistoryvsPlayer, setHistoryvsPlayer] = useState([]);
  const [counterGames, setCounterGames] = useState(0);
  const [showHistoryOfGames, setShowHistoryOfGames] = useState(true);
  const [lastMoveIndex, setlastMoveIndex] = useState(null);
  const [checkisPlayerTurn1, setcheckisPlayerTurn1] = useState(true);
  const [messageClick, setmessageClick] = useState("");
  const [disabledBtn, setdisabledBtn] = useState(false);
  const linesOfGrid = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function clickField(index) {
    if (box[index] !== null) {
      setmessageClick("field is already taken");
      return;
    }
    setmessageClick("");
    const isPlayer1Turn =
      box.filter((square) => square !== null).length % 2 === 0;
    const isPlayer2Turn =
      box.filter((square) => square !== null).length % 2 === 1;

    if (isPlayer1Turn && !winner && !box[index]) {
      let newField = box.slice();
      newField[index] = "x";
      setBox([...newField]);
      setlastMoveIndex(index);
    }
    if (isPlayer2Turn && !winner && !box[index]) {
      let newField = box.slice();
      newField[index] = "o";
      setBox([...newField]);
      setlastMoveIndex(index);
    }
    if (isPlayer1Turn) {
      let newField = box.slice();
      newField[index] = "x";
      setBox([...newField]);
    }
    if (isPlayer2Turn) {
      let newField = box.slice();
      newField[index] = "o";
      setBox([...newField]);
    }
  }
  const checklines = (a, b, c) => {
    return linesOfGrid.filter((squareIndexes) => {
      const squareValues = squareIndexes.map((index) => box[index]);
      return (
        JSON.stringify([a, b, c].sort()) === JSON.stringify(squareValues.sort())
      );
    });
  };
  useEffect(() => {
    const player1Wom = checklines("x", "x", "x").length > 0;
    const player2Wom = checklines("o", "o", "o").length > 0;

    if (!box.includes(null) && !player1Wom && !player2Wom) {
      setwinner(" its draw");
      setShowmodal(false);
      setBox(Array(9).fill(null));
      setCounterDraw(counterDraw + 1);

      setHistoryvsPlayer([
        ...HistoryvsPlayer,
        {
          id: HistoryvsPlayer.length + 1,
          Game: counterGames + 1,
          day: new Date().getDate(),
          month: new Date().getMonth() + 1,
          hour: new Date().getHours(),
          minute: new Date().getMinutes(),
          playerOne: JSON.parse(localStorage.getItem("player1")),
          playerTwo: JSON.parse(localStorage.getItem("player2")),
          winner: "draw",
        },
      ]);
    }
    if (player1Wom) {
      setShowmodal(false);
      setwinner(player1 + " is winner");
      setBox(Array(9).fill(null));
      setCounterPL1(counterPL1 + 1);
      setHistoryvsPlayer([
        ...HistoryvsPlayer,
        {
          id: HistoryvsPlayer.length + 1,
          Game: counterGames + 1,
          day: new Date().getDate(),
          month: new Date().getMonth() + 1,
          hour: new Date().getHours(),
          minute: new Date().getMinutes(),
          playerOne: JSON.parse(localStorage.getItem("player1")),
          playerTwo: JSON.parse(localStorage.getItem("player2")),
          winner: player1,
        },
      ]);

      localStorage.setItem(
        "History",
        JSON.stringify([
          ...HistoryvsPlayer,
          {
            id: HistoryvsPlayer.length + 1,
            Game: counterGames + 1,
            day: new Date().getDate(),
            month: new Date().getMonth() + 1,
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            playerOne: JSON.parse(localStorage.getItem("player1")),
            playerTwo: JSON.parse(localStorage.getItem("player2")),
            winner: player1,
          },
        ])
      );
    }
    if (player2Wom) {
      setShowmodal(false);
      setwinner(player2 + " is winner");
      setBox(Array(9).fill(null));
      setCounterPL2(counterPL2 + 1);
      setHistoryvsPlayer([
        ...HistoryvsPlayer,
        {
          id: HistoryvsPlayer.length + 1,
          Game: counterGames + 1,
          day: new Date().getDate(),
          month: new Date().getMonth() + 1,
          hour: new Date().getHours(),
          minute: new Date().getMinutes(),
          playerOne: JSON.parse(localStorage.getItem("player1")),
          playerTwo: JSON.parse(localStorage.getItem("player2")),
          winner: player2,
        },
      ]);
    }
  }, [box, counterPL1, counterPL2, HistoryvsPlayer]);

  const newGame = () => {
    setwinner("");
    setShowmodal(true);
  };

  const reset = () => {
    let newField = box.slice();
    newField[lastMoveIndex] = null;
    setBox(newField);
    setcheckisPlayerTurn1(checkisPlayerTurn1);
  };
  const HistoryList = () => {
    setShowHistoryOfGames(false);
    setshowtableVsPlayer(true);
    setShowmodal(true);
  };

  return (
    <>
      <div
        className="wrapper"
        style={{ display: showtableVsPlayer ? "none" : "block" }}
      >
        <span className="MessageClick">{messageClick}</span>
        <div className="board" hidden={showtableVsPlayer}>
          {box.map((obj, index) => (
            <Field
              x={obj === "x" ? 1 : 0}
              o={obj === "o" ? 1 : 0}
              key={index}
              onClick={() => clickField(index)}
            />
          ))}
        </div>
        <div className="BtnContainer">
          <button onClick={reset} id="btnR" className="btnH">
            reset last move
          </button>
          <button
            hidden={false}
            id="btnListId"
            className=" btnF"
            onClick={HistoryList}
          >
            Show History
          </button>
        </div>
        <div className="info">
          <span>
            Player 1: <span style={{ color: "orange" }}>{player1}:</span>
            <span style={{ color: "orange" }}>{counterPL1}</span>
          </span>
          <span>
            player 2: <span style={{ color: "orange" }}>{player2}:</span>
            <span style={{ color: "orange" }}>{counterPL2}</span>
          </span>
          <span>
            draw: <span style={{ color: "orange" }}>{counterDraw}</span>
          </span>
        </div>
      </div>

      <HistoryWindow
        HistoryList={HistoryList}
        HistoryvsPlayer={HistoryvsPlayer}
        counterGames={counterGames}
        player1={player1}
        player2={player2}
        winner={winner}
        showHistoryOfGames={showHistoryOfGames}
        setShowHistoryOfGames={setShowHistoryOfGames}
        setshowtableVsPlayer={setshowtableVsPlayer}
      />
      <EndGame winner={winner} showmodal={showmodal} newGame={newGame} />
    </>
  );
};
export default BoardForPlayer;
