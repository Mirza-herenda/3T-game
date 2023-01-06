


const FuncBtn =({reset})=>{
  
    return(
        <div className="btn-toolbar">
            <button  hidden= {false} id="funcId2" className="btnF btn-outline-success bg-secondary text-light" onClick={reset} >Reset</button>

        </div>
    );
}

export default FuncBtn;