import{useState} from "react"
import Board from "../Board";

 const LogInScreen=()=>{
    const [player1,setPlayer1]=useState("");
    const [player2,setPlayer2]=useState("");
    const[msg,setMsg]=useState("");
    const[btnDisabled,setBtnDisabled]=useState(false);
    //const[BoardShow,setBoardShow]=useState(false)

    const clickHandler=(e)=>
    {
        const regex = /^[A-Za-z]+$/;
        if(player1==="" || player2==="") 
        {
            setMsg(<span className="  bg-light text-danger">empty is not allowed</span>);
            //setBtnDisabled(true);
        }
        else if(regex.test(player1)===false)
        {
            setMsg(<span className="  bg-light text-danger">numbers are not allowed</span>);
            setBtnDisabled(true);
        }
        else
        {
            setMsg(<span hidden={false} className=" bg-light text-success">OK</span>);
                
            let table=document.getElementById("tableDiv");
            if(table.hidden===true)
            {
                table.hidden=false
            }
            

        }
    }
    const showGame=()=>{
        let showCont=document.getElementById("logInPart");
        let btn=document.getElementById("btnShow")
        if(showCont.hidden===true)
        {
          showCont.hidden=false
          btn.hidden=true;

        }
        else{
            alert("aaa")
        }
    }
    return(

        <>
        <button  id="btnShow" hidden={false} type="button" className="btn position-absolute top-50 start-50 translate-middle" onClick={showGame}>START THE GAME</button>
         <section hidden={true} id="logInPart" className="container">
            <section  className="row justify-content-center">
            <section className="col 12 col-sm-6 col-md-3">
            <form className="form-container">
                <>
                    <label>player 1:</label>
                    <input id="player1"   type="text" value={player1} onChange={(e)=>setPlayer1(e.target.value)} className="input" ></input>
                    </>
                    <>
                    <label>player 2:</label>
                    <input id="player2"   value={player2} onChange={(e)=>setPlayer2(e.target.value)} className="input" ></input>
                    </>
                    <button  disabled={btnDisabled} type="button" onClick={clickHandler}>START</button>
                    <span className="text-light bg-secondary">{msg}</span><br></br>
                    </form>
                    </section>
        </section>
        </section>
        <Board player1={player1} player2={player2}/>
        </>

        
    );
}
export default LogInScreen;