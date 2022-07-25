import{useState} from "react"
import Board from "../Board";

 const LogInScreen=()=>{
    const [player1,setPlayer1]=useState("");
    const [player2,setPlayer2]=useState("");
    const[msg,setMsg]=useState("");
    const[btnDisabled,setBtnDisabled]=useState(false);
    //const[BoardShow,setBoardShow]=useState(false)
 let table=document.getElementById("tableDiv");
 let logIn=document.getElementById("formId");
 let span1=document.getElementById("headerSpan1")
 let span2=document.getElementById("headerSpan2")
 //let headerPart=document.getElementById("containerId");
    const clickHandler=(e)=>
    {
        let header=document.getElementById("headerId");
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
            span1.innerHTML=player1;
            span2.innerHTML=player2;


                
           
            if(table.hidden===true)
            {
                table.hidden=false
               logIn.hidden=true;
               header.hidden=false

            }
            

        }
    }
    const showGame=()=>{
        let showCont=document.getElementById("logInPart");
        let btn=document.getElementById("btnShow")
        let header=document.getElementById("headerId");
        if(showCont.hidden===true)
        {
          showCont.hidden=false
          btn.hidden=true;
         header.hidden=true;


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
            <form hidden={false} id="formId" className="form-container">
                <>
                    <span  className="spanTitle text-success">PLEASE LOG IN</span><br></br>
                    <label>player 1:</label>
                    <input id="player1"   type="text" value={player1} onChange={(e)=>setPlayer1(e.target.value)} className="input" ></input>
                    </>
                    <>
                    <label>player 2:</label>
                    <input id="player2"   value={player2} onChange={(e)=>setPlayer2(e.target.value)} className="input" ></input>
                    </>
                    <button  className="btnStart text-light bg-success" disabled={btnDisabled} type="button" onClick={clickHandler}>START</button><br></br>
                    <span className="textPart text-light bg-secondary">{msg}</span><br></br>
                    </form>
                    </section>
        </section>
        </section>
        <Board player1={player1} player2={player2}/>
        </>

        
    );
}
export default LogInScreen;