import { useState } from "react";
import BoardForPC from "./BoardForPc";
const LogInScreenPc = ({
  showLogInPc,
  setshowLogInPc,
  showtableVsPc,
  setshowtableVsPc,
  setshowtableVsPlayer,
}) => {
  const [player1, setPlayer1] = useState("");
  const [msg, setMsg] = useState("");
  const [msg2, setMsg2] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [selectedLvl, setSelectedLvl] = useState(null);
  const [level, setlevel] = useState([
    {
      lvl: 1,
      name: "easy",
    },
    {
      lvl: 2,
      name: "medium",
    },
    {
      lvl: 3,
      name: "hard",
    },
  ]);

  const chooseLevel = (index) => {
    setSelectedLvl(level[index].name);
  };

  const clickHandler2 = (e) => {
    const regex = /^[A-Za-z]+$/;
    if (player1 === "") {
      setMsg(<span className="  bg-light text-danger">please enter name</span>);
    } else if (regex.test(player1) === false) {
      setMsg(
        <span className="  bg-light text-danger">numbers are not allowed</span>
      );
      setBtnDisabled(true);
    } else if (selectedLvl === null) {
      console.log("lvl nije izabran");
      setMsg2(<span>nije ok</span>);
    } else {
      setshowLogInPc(true);
      setshowtableVsPc(false);
      setshowtableVsPlayer(true);
      localStorage.setItem("player1", JSON.stringify(player1));
      localStorage.setItem("Personal Computer", JSON.stringify("PC"));
      console.log("ok");
      setMsg(
        <span hidden={false} className=" bg-light text-success">
          OK
        </span>
      );
      // span1.innerHTML = player1;
    }
  };
  return (
    <>
      <section hidden={showLogInPc} id="logInPart" className="container">
        <section className="sectionLogin row justify-content-center">
          <section className="col 12 col-sm-6 col-md-3">
            <form hidden={false} id="formId" className="form-container">
              <span className="spanTitle">player 1 vs PC</span>
              <>
                <label>player 1:</label>
                <input
                  id="player1"
                  type="text"
                  value={player1}
                  onChange={(e) => setPlayer1(e.target.value)}
                  className="input"
                ></input>
              </>
              <span>please choose level</span>
              {level.map((lvl, index) => (
                <div
                  className="levels"
                  key={index}
                  onClick={() => chooseLevel(index)}
                >
                  {lvl.name}
                </div>
              ))}
              <span className="textPart text-light bg-secondary">{msg2}</span>
              <button
                className="btnStart"
                disabled={btnDisabled}
                type="button"
                onClick={clickHandler2}
              >
                START GAME
              </button>
              <span className="textPart text-light bg-secondary">{msg}</span>
            </form>
          </section>
        </section>
      </section>
      <BoardForPC
        player1={player1}
        showLogInPc={showLogInPc}
        showtableVsPc={showtableVsPc}
        selectedLvl={selectedLvl}
        setPlayer1={setPlayer1}
      />
    </>
  );
};
export default LogInScreenPc;
