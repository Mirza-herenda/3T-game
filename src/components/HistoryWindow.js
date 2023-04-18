const HistoryWindow = ({
  HistoryvsPlayer,
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
          CURRENT GAMES
        </h5>
        <h6 id="historyOfGames">
          {HistoryvsPlayer.map((index) => (
            <span id="historyOfGames" className="spanHistory" key={index.id}>
              <span id="historyOfGames" className="text" key={index.id}>
                game#: {index.Game}{" "}
              </span>
              {index.day}.{index.month} {index.hour}.{index.minute}{" "}
              {index.playerOne} vs {index.playerTwo} {index.winner}
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
export default HistoryWindow;
