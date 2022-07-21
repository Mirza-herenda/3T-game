
import { useState } from "react"
import FuncBtn from "./Buttons/FunctionalButtons";
import Header from "./Header"
import HistoryWindow from "./HistoryWindow";
import Modal from "../components/Modal"
const Board=({player1,player2})=>{
    const[TurnX,setTurnX]=useState("x")
    //kreiramo niz od 9 elemenata setovanih na prazan string
    const[square,setSquare]=useState(Array(9).fill(""));
    const [message,setMessage]=useState("");
    const[counterPL1,setCounterPL1]=useState(0);
    const[counterGames,setCounterGames]=useState(0);
    const[counterPL2,setCounterPl2]=useState(0);
    const[counterDraw,setCounterDraw]=useState(0);
    const[winner,setWinner]=useState()
    const[History,setHistory]=useState([])
    let modalHidden=document.getElementById("modalLook");
    let game=document.getElementById("tableId");
    let inputShow=document.getElementById("logInPart");
    let buttonReset=document.getElementById("funcId2")
    let btnListId=document.getElementById("btnListId");


    let RoundWinner="";

    const WinningLogic=(boxes)=>{
        let combinations={
            across:[
                [0,1,2],
                [3,4,5],
                [6,7,8]
            ],
            down:[
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ],
            diagonal:[
                [0,4,8],
                [2,4,6]
            ],
        };
        for(let singleCombo in combinations){
            combinations[singleCombo].forEach((pattern) => {
                if(boxes[pattern[0]]==="" ||
                boxes[pattern[1]]==="" ||
                boxes[pattern[2]]==="" )
                {
                    //console.log("nothing")
                }
           else if(boxes[pattern[0]] && boxes[pattern[0]]===boxes[pattern[1]] && boxes[pattern[1]]===boxes[pattern[2]])
            {   
            
                setWinner(boxes[pattern[0]])
            }
            });
        } 

    };

    //glavno ispitivanje pobjednika
    if(!square.includes(""))
    {
        setMessage(setWinner("DRAW"))
        setSquare(Array(9).fill(""))
        setCounterDraw(counterDraw+1);
        RoundWinner="DRAW "
        setCounterGames(counterGames+1);
        console.log(counterGames)
        setHistory([
            ...History,
            {
              id: new Date().getTime(),
              NumberOfGames:counterGames,
              day: new Date().getDate(),
              month: new Date().getMonth() + 1,
              hour: new Date().getHours(),
              minute: new Date().getMinutes(),
              playerOne: player1,
              playerTwo: player1,
              winner: "DRAW"
            }
          ]);
        console.log(History)
        if(modalHidden.hidden===true)
        {
            modalHidden.hidden=false
            game.hidden=true;
            inputShow=true;
            buttonReset.hidden=true
            btnListId.hidden=true;
        }



    }
   else if(winner==="x")
    {
        setMessage(setWinner(player1))
       setSquare(Array(9).fill(""))
        setCounterPL1(counterPL1+1);
        RoundWinner=player1;
        console.log(RoundWinner)
        setCounterGames(counterGames+1);
      
        setHistory([
            ...History,
            {
              id: new Date().getTime(),
              NumberOfGames:counterGames,
              day: new Date().getDate(),
              month: new Date().getMonth() + 1,
              hour: new Date().getHours(),
              minute: new Date().getMinutes(),
              playerOne: player1,
              playerTwo: player1,
              winner: player1
            }
          ]);
        console.log(History)
        if(modalHidden.hidden===true)
        {
            modalHidden.hidden=false
            game.hidden=true;
            inputShow.hidden=true;
            buttonReset.hidden=true
            btnListId.hidden=true
        }

        
        }
 else if(winner==="o")
    {
        setMessage(setWinner(player2))
        setSquare(Array(9).fill(""))
        setCounterPl2(counterPL2+1);
        console.log( player1+"broj pobjeda:"+counterPL2+1);
        RoundWinner=player2
        setCounterGames(counterGames+1);
        console.log(RoundWinner)
        setHistory([
            ...History,
            {
              id: new Date().getTime(),
              NumberOfGames:counterGames,
              day: new Date().getDate(),
              month: new Date().getMonth() + 1,
              hour: new Date().getHours(),
              minute: new Date().getMinutes(),
              playerOne: player1,
              playerTwo: player1,
              winner: player2
            }
          ]);
        console.log(History)

        if(modalHidden.hidden===true)
        {
            modalHidden.hidden=false
            game.hidden=true;
            inputShow.hidden=true;
            buttonReset.hidden=true
            btnListId.hidden=true
        }

    }
    
    const clickHandler=(position)=>{
       if(square[position] !=="")
       {
        setMessage("you already clicked this field");
        let span=document.getElementById("span");
        if(span.hidden===false)
        {
            span.hidden=true;
        }
       }
       else{
          // u varijablu boxes kopiramo nas niz 
       let boxes=[...square];
       if(TurnX==="x")
       {


           //popunjavamo niz sa x ako je na redu x
           boxes[position]="x"
           setTurnX("o");
           setMessage(<span id="span" className=" sp1 text-success"> turn:{TurnX}</span>)
         
       }
       else{
           //popunjavamo niz sa o ako je na redu o
           boxes[position]="o"
           setTurnX("x");
           setMessage(<span id="span" className=" sp1 text-success"> turn:{TurnX}</span>)
       }
       //setujemo vrijednost tako da budu zapamcene
       setSquare(boxes)
       WinningLogic(boxes)
      //setSquare(boxes);

       }
    }
   
   
    const Cell=({position})=>{
        return <td  onClick={()=>clickHandler(position)}><span  id="spanClick"className="spanClick text-success d-flex justify-content-center">{square[position]}</span></td>
    }

    const newGame=()=>{
        setSquare(Array(9).fill(""))
        setWinner("")
        if(modalHidden.hidden===false)
        {
            modalHidden.hidden=true
            game.hidden=false;
            inputShow.hidden=false;
            buttonReset.hidden=false
            btnListId.hidden=false

        }
    }

    const reset=()=>{
        setSquare(Array(9).fill(""))
        setCounterDraw(0);
        setCounterPL1(0);
        setCounterPl2(0);


    }

    const List=()=>{
        let historyId=document.getElementById("historyId");
        let button=document.getElementById("closeBtnId");
        let buttonNG=document.getElementById("funcId2") 
        let buttonReset=document.getElementById("funcId2")
        let listBtn=document.getElementById("btnListId");
        if(historyId.hidden===true)
        {
            historyId.hidden=false;
            game.hidden=true;
            button.hidden=false
            buttonNG.hidden=true;
            buttonReset.hidden=true;
            listBtn.hidden=true;
     
        }
        else
        {
            console.log("blaa");
        }
     
     
     }
    return(
        
        <div className="everything">
        
        <Header 
         counterPL1={counterPL1}
        counterPL2={counterPL2}
        counterDraw={counterDraw}
        player1={player1}
        player2={player2}
        />


         <section  className="row justify-content-center">
            <section className="col 12 col-sm-6 col-md-3">
            <div id="tableDiv" hidden={true}>
            <table  id="tableId" className="tableClass">
                <tbody>
                    <tr id="tr">
                        <Cell  position={0}/>
                        <Cell position={1}/>
                        <Cell position={2}/>
                    </tr>
                    <tr>
                        <Cell position={3}/>
                        <Cell position={4}/>
                        <Cell position={5}/>
                    </tr>
                    <tr>
                        <Cell position={6}/>
                        <Cell position={7}/>
                        <Cell position={8}/>
                    </tr>
                </tbody>
            </table>
            <span  className=" sp1 text-success">{message}</span>
            <FuncBtn reset={reset}/>
            <button hidden={false} id="btnListId" className="btnF btn-outline-success  bg-secondary text-light"  onClick={List}>List</button>
        </div>
        </section>
        </section>
       
  <Modal winner={winner} newGame={newGame}/>
       
        <HistoryWindow List={List}
        History={History}
        counterGames={counterGames}
             player1={player1}
             player2={player2}  
             winner={winner}
             //RoundWinner={RoundWinner}
             />
        </div>
      
    );
}
export default Board;