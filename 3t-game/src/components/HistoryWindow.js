

             
  const HistoryWindow=({History})=>{
    const closeBtn =()=>{
      let history=document.getElementById("historyId");
      let game=document.getElementById("tableId");
      let button=document.getElementById("closeBtnId");
      let buttonNG=document.getElementById("funcId2") 
       let buttonReset=document.getElementById("funcId2")
      let listBtn=document.getElementById("btnListId");

      //console.log(dan+"."+mjesec)
    

     if(history.hidden===false)
     {
      history.hidden=true;
      game.hidden=false;
      button.hidden=true
      buttonNG.hidden=false
      listBtn.hidden=false;
      buttonReset.hidden=false
     }
     else
     {
         console.log("blaa");
     }
  
  }
  return(
    < div className="container">
   <div hidden={true} id="historyId" className=" historyDiv mx-auto text-light">
    <h5 className="text-success d-flex justify-content-center">HistoryWindow</h5>
    <h6>{History.map(index=>(
      <span className="spanHistory" key={index.id}><span className="text-success" key={index.id}>game#: {index.NumberOfGames } </span>
      {index.day}.{index.month}   {index.hour}.{index.minute} {index.playerOne} vs {index.playerTwo} {index.winner}</span>
    ))}</h6>

   </div>
   <button id="closeBtnId" hidden={true} className="closeBtn btn-outline-success bg-secondary text-light" onClick={closeBtn}>x</button>
  </div>
  );

}
export default HistoryWindow;