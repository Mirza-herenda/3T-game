import { useState } from "react";
import BoardForPlayer from "../BoardForPlayer";
const LogInPlayer = ({
  showLogIn,
  showtableVsPlayer,
  setshowtableVsPc,
  setshowtableVsPlayer,
  setshowLogIn,
}) => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [msg, setMsg] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const BtnStartPc = (e) => {
    const regex = /^[A-Za-z]+$/;
    if (player1 === "" || player2 === "") {
      setMsg(
        <span className="  bg-light text-danger">empty is not allowed</span>
      );
      //setBtnDisabled(true);
    } else if (regex.test(player1) === false) {
      setMsg(
        <span className="  bg-light text-danger">numbers are not allowed</span>
      );
      setBtnDisabled(true);
    } else {
      setshowtableVsPc(true);
      setshowtableVsPlayer(false);
      setshowLogIn(true);
      localStorage.setItem("player1", JSON.stringify(player1));
      localStorage.setItem("player2", JSON.stringify(player2));
      setMsg(
        <span hidden={false} className=" bg-light">
          OK
        </span>
      );
    }
  };
  return (
    <>
      <section hidden={showLogIn} id="logInPart" className="container">
        <section className="sectionLogin row justify-content-center">
          <section className="col 12 col-sm-6 col-md-3">
            <form hidden={false} id="formId" className="form-container">
              <>
                <span className="spanTitle">player 1 vs player 2</span>
                <br></br>
                <label>player 1:</label>
                <input
                  id="player1"
                  type="text"
                  value={player1}
                  onChange={(e) => setPlayer1(e.target.value)}
                  className="input"
                ></input>
              </>
              <>
                <label>player 2:</label>
                <input
                  id="player2"
                  value={player2}
                  onChange={(e) => setPlayer2(e.target.value)}
                  className="input"
                ></input>
              </>
              <button
                className="btnStart text-light"
                disabled={btnDisabled}
                type="button"
                onClick={BtnStartPc}
              >
                START
              </button>
              <br></br>
              <span className="textPart text-light bg-secondary">{msg}</span>
              <br></br>
            </form>
          </section>
        </section>
      </section>
      <BoardForPlayer
        player1={player1}
        player2={player2}
        showLogIn
        showtableVsPlayer={showtableVsPlayer}
        setshowtableVsPlayer={setshowtableVsPlayer}
      />
    </>
  );
};
export default LogInPlayer;
