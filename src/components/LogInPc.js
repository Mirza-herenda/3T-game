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
  const [activeColor, setActiveColor] = useState(-1);
  const [level, setlevel] = useState([
    {
      lvl: 1,
      name: "easy",
      color: "green",
    },
    {
      lvl: 2,
      name: "medium",
      color: "orange",
    },
    {
      lvl: 3,
      name: "hard",
      color: "red",
    },
  ]);

  const chooseLevel = (index) => {
    setSelectedLvl(level[index].name);
    setActiveColor(index);
  };

  const clickHandler2 = (e) => {
    const regex = /^[A-Za-z]+$/;
    if (player1 === "") {
      setMsg(<span className="emptySpan">please enter name</span>);
    } else if (regex.test(player1) === false) {
      setMsg(<span className="emptySpan">numbers are not allowed</span>);
      setBtnDisabled(true);
    } else if (selectedLvl === null) {
      setMsg2(<span className="ErrorSpan">you need to choose level</span>);
    } else {
      setshowLogInPc(true);
      setshowtableVsPc(false);
      setshowtableVsPlayer(true);
      localStorage.setItem("player1", JSON.stringify(player1));
      localStorage.setItem("Personal Computer", JSON.stringify("PC"));
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
              <span className="textPart">{msg}</span>
              <span className="lvlPickSpan">please choose level</span>
              {level.map((lvl, index) => (
                <div
                  className="levels"
                  key={index}
                  onClick={() => chooseLevel(index)}
                  style={{
                    color: activeColor === index ? lvl.color : "black",
                  }}
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
        setshowtableVsPc={setshowtableVsPc}
      />
    </>
  );
};
export default LogInScreenPc;
