const HistoryWindowVsPc = ({
  HistoryvsPC,
  showHistoryOfGames,
  setShowHistoryOfGames,
  setshowtableVsPc,
}) => {
  const closeBtn = () => {
    setShowHistoryOfGames(true);
    setshowtableVsPc(false);
  };

  return (
    <div className="container" hidden={showHistoryOfGames}>
      <div id="historyId" className=" historyDiv mx-auto text-light">
        <h5 id="title" className="text">
          Player vs Personal PC
        </h5>
        <table className="table">
          <thead>
            <tr>
              <th>Game #</th>
              <th>Date</th>
              <th>Time</th>
              <th>Player One</th>
              <th>level</th>
              <th>Winner</th>
            </tr>
          </thead>
          <tbody>
            {HistoryvsPC.map((element, index) => (
              <tr key={element.id} className="tableRow">
                <td>{index + 1}</td>
                <td>
                  {element.month}.{element.day}
                </td>
                <td>
                  {element.hour}.{element.minute}
                </td>
                <td>{element.playerOne}</td>
                <td>{element.level}</td>
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
export default HistoryWindowVsPc;
