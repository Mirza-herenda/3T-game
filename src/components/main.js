import LogInPlayer from "./LogIn/LogInPlayer";
import LogInScreenPc from "./LogInPc";
import MainScreen from "./MainScreen";
import { useState } from "react";

const MainPart = () => {
  const [showLogIn, setshowLogIn] = useState(true);
  const [showMode, setShowMode] = useState(false);
  const [showLogInPc, setshowLogInPc] = useState(true);
  const [showtableVsPc, setshowtableVsPc] = useState(true); //hidden na true
  const [showtableVsPlayer, setshowtableVsPlayer] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // const fillField = () => {
  //   new Array(9).fill(null);
  // };
  return (
    <div>
      <MainScreen
        showMode={showMode}
        showLogIn={showLogIn}
        showLogInPc={showLogInPc}
        setshowLogIn={setshowLogIn}
        setShowMode={setShowMode}
        setshowLogInPc={setshowLogInPc}
        setshowtableVsPlayer={setshowtableVsPlayer}
        setshowtableVsPc={setshowtableVsPc}
      />
      <LogInPlayer
        showLogIn={showLogIn}
        setshowLogIn={setshowLogIn}
        showtableVsPlayer={showtableVsPlayer}
        setshowtableVsPc={setshowtableVsPc}
        setshowtableVsPlayer={setshowtableVsPlayer}
        buttonDisabled={buttonDisabled}
      />
      <LogInScreenPc
        showLogInPc={showLogInPc}
        setshowLogInPc={setshowLogInPc}
        showtableVsPc={showtableVsPc}
        setshowtableVsPc={setshowtableVsPc}
        setshowtableVsPlayer={setshowtableVsPlayer}
      />
    </div>
  );
};
export default MainPart;
