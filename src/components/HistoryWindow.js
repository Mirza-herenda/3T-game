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
        <h5 id="title" className="text">
          player 1 vs player 2
        </h5>
        <table>
          <thead>
            <tr>
              <th>Game #</th>
              <th>Date</th>
              <th>Time</th>
              <th>Player One</th>
              <th>Player Two</th>
              <th>Winner</th>
            </tr>
          </thead>
          <tbody>
            {HistoryvsPlayer.map((element, index) => (
              <tr key={element.id} className="tableRow">
                <td>{index + 1}</td>
                <td>
                  {element.month}.{element.day}
                </td>
                <td>
                  {element.hour}.{element.minute}
                </td>
                <td>{element.playerOne}</td>
                <td>{element.playerTwo}</td>
                <td style={{ color: "orange" }}>{element.winner}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button id="closeBtnId" className="closeBtn" onClick={closeBtn}>
          close
        </button>
      </div>
    </div>
  );
};
export default HistoryWindow;
