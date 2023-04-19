import "../Css/EndGame.css";

const EndGame = ({ winner, newGame, showmodal }) => {
  return (
    <div
      hidden={showmodal}
      className="modal-div modal-div-centered"
      role="document"
    >
      <div className="modal-content">
        <div className="modal-header"></div>
        <div className="modal-body">
          <span className="text-light"> {winner}</span>
        </div>
        <div className="modal-footer">
          <button
            hidden={false}
            id="funcId2"
            className="btnF"
            onClick={newGame}
          >
            Wanna try again
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndGame;
