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
        <table>
          <thead>
            <tr>
              <th>Game #</th>
              <th>Date</th>
              <th>Time</th>
              <th>Player One</th>
              <th>Level</th>
              <th>Winner</th>
            </tr>
          </thead>
          <tbody>
            {HistoryvsPC.map((index, i) => (
              <tr key={index.id} className="tableRow">
                <td>{i + 1}</td>
                <td>
                  {index.month}.{index.day}
                </td>
                <td>
                  {index.hour}.{index.minute}
                </td>
                <td>{index.playerOne}</td>
                <td>{index.level}</td>
                <td style={{ color: "orange" }}>{index.winner}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button id="closeBtnId" className="closeBtn" onClick={closeBtn}>
          x
        </button>
      </div>
    </div>
  );
};
export default HistoryWindowVsPc;
