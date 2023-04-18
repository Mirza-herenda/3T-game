import ".//../Css/Header.css";
const Header = ({ counterPL1, counterPL2, counterDraw }) => {
  return (
    <div className="mainContainer" hidden={true}>
      <header hidden={true} id="headerId" className="header">
        <span id="headerTittle" className="spanTittle">
          TIC TAC TOE
        </span>
        <span id="headerSpan1" className="sp2 p-2"></span>
        <span className="miniSpan p-2">:{counterPL1}</span>
        <span id="headerSpan2" className="sp2 p-2"></span>
        <span className="miniSpan p-1">:{counterPL2}</span>
        <span className="sp2 p-4">
          draw: <span className="miniSpan">{counterDraw}</span>{" "}
        </span>
      </header>
    </div>
  );
};

export default Header;
