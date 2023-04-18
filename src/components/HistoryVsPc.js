const HistoryWindowVsPc = ({
  HistoryvsPC,
  showHistoryOfGames,
  setShowHistoryOfGames,
  setshowtableVsPlayer,
}) => {
  const closeBtn = () => {
    setShowHistoryOfGames(true);
    setshowtableVsPlayer(false);
  };

  return (
    <div className="container" hidden={showHistoryOfGames}>
      <div id="historyId" className=" historyDiv mx-auto text-light">
        <h5 id="title" className="text-success d-flex justify-content-center">
          Player vs Personal PC
        </h5>
        <h6 id="historyOfGames">
          {HistoryvsPC.map((index) => (
            <span id="historyOfGames" className="spanHistory" key={index.id}>
              <span id="historyOfGames" className="text-success" key={index.id}>
                <span style={{ color: "orange" }}> game#: {index.Game} </span>
              </span>
              {index.day}.{index.month} {index.hour}.{index.minute}{" "}
              {index.playerOne} vs {index.PersonalComputer} {index.level}{" "}
              <span style={{ color: "orange" }}>{index.winner}</span>
            </span>
          ))}
        </h6>
      </div>
      <button
        id="closeBtnId"
        className="closeBtn btn-outline-success bg-secondary text-light"
        onClick={closeBtn}
      >
        x
      </button>
    </div>
  );
};
export default HistoryWindowVsPc;
