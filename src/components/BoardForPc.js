import React, { useState, useEffect } from "react";
import Field from "./Field";
import EndGame from "./EndGame";
import HistoryWindowVsPc from "../components/HistoryVsPc";

function BoardForPc({ showtableVsPc, player1, selectedLvl, setPlayer1 }) {
  const [box, setBox] = useState(Array(9).fill(null));
  const [winner, setwinner] = useState("");
  const [showmodal, setShowmodal] = useState(true);
  const [counterPL1, setCounterPL1] = useState(0);
  const [counterPC, setCounterPC] = useState(0);
  const [counterDraw, setCounterDraw] = useState(0);
  const [checkisPlayerTurn, setIsPlayerTurn] = useState(true);
  const [lastMoveIndex, setLastMoveIndex] = useState(null);
  // const [message, setMessage] = useState("");
  // const [result, setresult] = useState(null);
  // const [PCmove, setPCmove] = useState(false);
  const [counterGames, setCounterGames] = useState(0);
  const [HistoryvsPC, setHistoryvsPC] = useState([]);
  const [showHistoryOfGames, setShowHistoryOfGames] = useState(true);

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
  useEffect(() => {
    const isPCturn = box.filter((square) => square !== null).length % 2 === 1;

    const pcMove = (index) => {
      let newField = box;
      newField[index] = "o";
      setBox([...newField]);
    };
    if (isPCturn) {
      if (selectedLvl === "easy") {
        const emptyField = box
          .map((square, index) => (square === null ? index : null))
          .filter((val) => val !== null);

        const randomIndex =
          emptyField[Math.ceil(Math.random() * emptyField.length)];
        pcMove(randomIndex);
      }

      if (selectedLvl === "medium") {
        const checklines = (a, b, c) => {
          return linesOfGrid.filter((squareIndexes) => {
            const squareValues = squareIndexes.map((index) => box[index]);
            return (
              JSON.stringify([a, b, c].sort()) ===
              JSON.stringify(squareValues.sort())
            );
          });
        };
        const linesToBlock = checklines("x", "x", null);
        if (linesToBlock.length > 0) {
          const blockIndex = linesToBlock[0].filter(
            (index) => box[index] === null
          )[0];
          pcMove(blockIndex);
          return;
        }
        const emptyField = box
          .map((square, index) => (square === null ? index : null))
          .filter((val) => val !== null);

        const randomIndex =
          emptyField[Math.ceil(Math.random() * emptyField.length)];
        pcMove(randomIndex);
      }
      if (selectedLvl === "hard") {
        const checklines = (a, b, c) => {
          return linesOfGrid.filter((squareIndexes) => {
            const squareValues = squareIndexes.map((index) => box[index]);
            return (
              JSON.stringify([a, b, c].sort()) ===
              JSON.stringify(squareValues.sort())
            );
          });
        };
        const winningLines = checklines("o", "o", null);
        if (winningLines.length > 0) {
          const winningIndex = winningLines[0].filter(
            (index) => box[index] === null
          )[0];
          pcMove(winningIndex);
          return;
        }

        const emptyField = box
          .map((square, index) => (square === null ? index : null))
          .filter((val) => val !== null);

        const randomIndex =
          emptyField[Math.ceil(Math.random() * emptyField.length)];
        pcMove(randomIndex);
      }
    }
    //check lines
    const checklines = (a, b, c) => {
      return linesOfGrid.filter((squareIndexes) => {
        const squareValues = squareIndexes.map((index) => box[index]);
        return (
          JSON.stringify([a, b, c].sort()) ===
          JSON.stringify(squareValues.sort())
        );
      });
    };

    //check player win

    const playerWom = checklines("x", "x", "x").length > 0;

    if (playerWom) {
      setShowmodal(false);
      setwinner(player1 + " WINS ");
      setBox(Array(9).fill(null));
      setCounterPL1(counterPL1 + 1);

      // setCounterGames(counterGames + 1);
      setHistoryvsPC([
        ...HistoryvsPC,
        {
          id: counterGames + 1,
          Game: counterGames + 1,
          level: selectedLvl,
          day: new Date().getDate(),
          month: new Date().getMonth() + 1,
          hour: new Date().getHours(),
          minute: new Date().getMinutes(),
          playerOne: JSON.parse(localStorage.getItem("player1")),
          PersonalComputer: JSON.parse(
            localStorage.getItem("Personal Computer")
          ),
          winner: player1,
        },
      ]);

      localStorage.setItem(
        "History",
        JSON.stringify([
          ...HistoryvsPC,
          {
            id: counterGames + 1,
            Game: counterGames + 1,
            level: selectedLvl,
            day: new Date().getDate(),
            month: new Date().getMonth() + 1,
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            playerOne: JSON.parse(localStorage.getItem("player1")),
            PersonalComputer: JSON.parse(
              localStorage.getItem("personal Computer")
            ),
            winner: player1,
          },
        ])
      );

      console.log(HistoryvsPC);
    }

    //check pc

    const computerWon = checklines("o", "o", "o").length > 0;
    if (computerWon) {
      setwinner("PC");
      setShowmodal(false);
      setBox(Array(9).fill(null));
      setCounterPC(counterPC + 1);
      setHistoryvsPC([
        ...HistoryvsPC,
        {
          id: counterGames + 1,
          Game: counterGames + 1,
          day: new Date().getDate(),
          month: new Date().getMonth() + 1,
          hour: new Date().getHours(),
          minute: new Date().getMinutes(),
          playerOne: JSON.parse(localStorage.getItem("player1")),
          PersonalComputer: JSON.parse(
            localStorage.getItem("personal Computer")
          ),
          winner: "Personal Computer",
        },
      ]);

      localStorage.setItem(
        "History",
        JSON.stringify([
          ...HistoryvsPC,
          {
            id: counterGames + 1,
            Game: counterGames + 1,
            day: new Date().getDate(),
            month: new Date().getMonth() + 1,
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            playerOne: JSON.parse(localStorage.getItem("player1")),
            PersonalComputer: JSON.parse(
              localStorage.getItem("personal Computer")
            ),
            winner: "Personal Computer",
          },
        ])
      );
    }

    // if (!computerWon && !playerWom) {
    //   console.log("draw");
    //   setCounterDraw(counterDraw + 1);
    // }
  }, [box, counterPC, counterPL1, player1, selectedLvl, History]);

  function clickField(index) {
    const isPlayerTurn =
      box.filter((square) => square !== null).length % 2 === 0;

    if (isPlayerTurn) {
      let newField = box.slice();
      newField[index] = "x";
      setBox([...newField]);
    }
  }

  const newGame = () => {
    setwinner("");
    setShowmodal(true);
  };

  function reset() {
    if (checkisPlayerTurn) {
      let newField = box.slice();
      newField[lastMoveIndex] = null;
      setBox(newField);
      setIsPlayerTurn(false);
      setLastMoveIndex(null);
    }
  }
  const HistoryList = () => {
    setShowHistoryOfGames(false);
    console.log(HistoryvsPC);
  };
  //save player

  return (
    <div
      className="wrapper"
      style={{ display: showtableVsPc ? "none" : "block" }}
    >
      <div className="board" hidden={showtableVsPc}>
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
        <button onClick={reset} className="btnF">
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
          PC: <span style={{ color: "orange" }}>PC:</span>
          <span style={{ color: "orange" }}>{counterPC}</span>
        </span>
        <span>
          draw: <span style={{ color: "orange" }}>{counterDraw}</span>
        </span>
        <span>
          level: <span style={{ color: "orange" }}>{selectedLvl}</span>
        </span>
      </div>
      <HistoryWindowVsPc
        HistoryList={HistoryList}
        HistoryvsPC={HistoryvsPC}
        counterGames={counterGames}
        player1={player1}
        winner={winner}
        showHistoryOfGames={showHistoryOfGames}
        setShowHistoryOfGames={setShowHistoryOfGames}
      />
      <EndGame winner={winner} showmodal={showmodal} newGame={newGame} />
    </div>
  );
}

export default BoardForPc;
