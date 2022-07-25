


const EndGame=( {winner,newGame})=>{


return(
<div hidden={true} id="modalLook" className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content" >
      <div className="modal-header">
      </div>
      <div className="modal-body">
        <span className="text-light"> {winner}</span>
      </div>
      <div className="modal-footer">
      <button  hidden= {false} id="funcId2" className="btnF btn-outline-success bg-secondary text-light" onClick={newGame} >Wanna try again</button>
      </div>
    </div>
  </div>
);
}

export default EndGame