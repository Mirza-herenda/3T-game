import React from "react";
import "../Css/MainScreen.css";

function MainScreen({
  setshowLogIn,
  setshowLogInPc,
  showMode,
  setShowMode,
  setshowtableVsPlayer,
  setshowtableVsPc,
}) {
  const showGameVsPc = () => {
    setshowLogInPc(false);
    setShowMode(true);
    console.log("test pc");
  };
  const showGamePvsP = () => {
    setshowLogIn(false);
    setShowMode(true);
  };
  return (
    <>
      <h3>WELCOME TO TIC TAC TOE GAME</h3>
      <div className="mainDiv" hidden={showMode}>
        <span> please choose game mode:</span>
        <div className="btnDiv">
          <button className="btn1" onClick={showGameVsPc}>
            vs PC
          </button>
          <button className="btn2" onClick={showGamePvsP}>
            player1 vs player2
          </button>
        </div>
      </div>
    </>
  );
}

export default MainScreen;
