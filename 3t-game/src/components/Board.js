
import { useState } from "react"
import FuncBtn from "./Buttons/FunctionalButtons";
import Header from "./Header"
import HistoryWindow from "./HistoryWindow";
import EndGame from "../components/EndGame"

const Board=({player1,player2})=>{
   

    const[TurnX,setTurnX]=useState("x")
    //kreiramo niz od 9 elemenata setovanih na prazan string
    const[square,setSquare]=useState(Array(9).fill(""));
    const [message,setMessage]=useState("");
    const[counterPL1,setCounterPL1]=useState(0);
    const[counterGames,setCounterGames]=useState(0);
    const[counterPL2,setCounterPl2]=useState(0);
    const[counterDraw,setCounterDraw]=useState(0);
    const[winner,setWinner]=useState();
    const[History,setHistory]=useState([]);
    //pristupamo vrijednostima komponenti preko js:
     let modalHidden=document.getElementById("modalLook");
    let game=document.getElementById("tableId");
    let inputShow=document.getElementById("logInPart");
    let buttonReset=document.getElementById("funcId2")
    let btnListId=document.getElementById("btnListId");
    let header=document.getElementById("headerId");
    let logIn=document.getElementById("formId");


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
    if(!square.includes("") && winner !=="x" && winner !=="o")
    {
        setMessage(setWinner("DRAW!"))
        setSquare(Array(9).fill(""))
        setCounterDraw(counterDraw+1);
        setCounterGames(counterGames+1);
        setHistory([
            ...History,
            {
              id: counterGames+1,
              Game:counterGames+1,
              day: new Date().getDate(),
              month: new Date().getMonth() + 1,
              hour: new Date().getHours(),
              minute: new Date().getMinutes(),
              playerOne: JSON.parse(localStorage.getItem("player1")),
              playerTwo: JSON.parse(localStorage.getItem("player2")),
              winner: "DRAW"
            }]
          );

          localStorage.setItem("History",JSON.stringify([
            ...History,
            {
              
                id:counterGames+1,
                Game:counterGames+1,
                day: new Date().getDate(),
                month: new Date().getMonth() + 1,
                hour: new Date().getHours(),
                minute: new Date().getMinutes(),
                playerOne: JSON.parse(localStorage.getItem("player1")),
                playerTwo: JSON.parse(localStorage.getItem("player2")),
                winner: "DRAW",
                
              }

          ]));
        if(modalHidden.hidden===true)
        {
            modalHidden.hidden=false
            game.hidden=true;
            inputShow=true;
            buttonReset.hidden=true
            btnListId.hidden=true;
            header.hidden=true;
            setMessage("")
        }



    }
   else if(winner==="x")
    {
        setWinner( player1+ " WINS ")
       setSquare(Array(9).fill(""))
        setCounterPL1(counterPL1+1);
        setCounterGames(counterGames+1);
      
            setHistory([
                ...History,
                {
                  
                    id:counterGames+1,
                    Game:counterGames+1,
                    day: new Date().getDate(),
                    month: new Date().getMonth() + 1,
                    hour: new Date().getHours(),
                    minute: new Date().getMinutes(),
                    playerOne: JSON.parse(localStorage.getItem("player1")),
                    playerTwo: JSON.parse(localStorage.getItem("player2")),
                    winner: player1,
                    
                  }
              ]);
          
              localStorage.setItem("History",JSON.stringify([
                ...History,
                {
                  
                    id:counterGames+1,
                    Game:counterGames+1,
                    day: new Date().getDate(),
                    month: new Date().getMonth() + 1,
                    hour: new Date().getHours(),
                    minute: new Date().getMinutes(),
                    playerOne: JSON.parse(localStorage.getItem("player1")),
                    playerTwo: JSON.parse(localStorage.getItem("player2")),
                    winner: player1,
                    
                  }

              ]));
        if(modalHidden.hidden===true)
        {
            modalHidden.hidden=false
            game.hidden=true;
            inputShow.hidden=true;
            buttonReset.hidden=true
            btnListId.hidden=true
            header.hidden=true;
            setMessage("")
        }
        
        }
 else if(winner==="o")
    {
        setWinner( player2+ " WINS ")
        setSquare(Array(9).fill(""))
        setCounterPl2(counterPL2+1);
        console.log( player1+"broj pobjeda:"+counterPL2+1);
        setCounterGames(counterGames+1);
        setHistory([
            ...History,
            {
              id:counterGames+1,
              Game:counterGames+1,
              day: new Date().getDate(),
              month: new Date().getMonth() + 1,
              hour: new Date().getHours(),
              minute: new Date().getMinutes(),
              playerOne: JSON.parse(localStorage.getItem("player1")),
              playerTwo: JSON.parse(localStorage.getItem("player2")),
              winner: player2
            }
          ]);

          localStorage.setItem("History",JSON.stringify([
            ...History,
            {
              
                id:counterGames+1,
                Game:counterGames+1,
                day: new Date().getDate(),
                month: new Date().getMonth() + 1,
                hour: new Date().getHours(),
                minute: new Date().getMinutes(),
                playerOne: JSON.parse(localStorage.getItem("player1")),
                playerTwo: JSON.parse(localStorage.getItem("player2")),
                winner: player1,
                
              }

          ]));
        if(modalHidden.hidden===true)
        {
            modalHidden.hidden=false
            game.hidden=true;
            inputShow.hidden=true;
            buttonReset.hidden=true
            btnListId.hidden=true
            header.hidden=true;
            setMessage("")
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
           setMessage(<span id="span" className=" sp1 text-light"> its {player2}`s turn</span>)
           localStorage.setItem("player1",JSON.stringify(player1))
         
       }
       else{
           //popunjavamo niz sa o ako je na redu o
           boxes[position]="o"
           setTurnX("x");
           setMessage(<span id="span" className=" sp1 text-light"> its {player1}`s turn</span>)
           localStorage.setItem("player2",JSON.stringify(player2))
       }
       //setujemo vrijednost tako da budu zapamcene
       setSquare(boxes)
       WinningLogic(boxes)
      //setSquare(boxes);

       }
    }
   
    const Cell=({position})=>{
        return <td  onClick={()=>clickHandler(position)}><span  id="spanClick"className="spanClick text-light d-flex justify-content-center">{square[position]}</span></td>
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
            header.hidden=false;

        }
    }
    const reset=()=>{
         setSquare(Array(9).fill(""))
         localStorage.clear()
         window.location.reload();

       
        if(logIn.hidden===true)
        {
            logIn.hidden=false;
            buttonReset.hidden=true;
            btnListId.hidden=true;
            game.hidden=true
            

        }
    }
    const List=()=>{
        let historyId=document.getElementById("historyId");
        let button=document.getElementById("closeBtnId");
        let buttonNG=document.getElementById("funcId2") 
        let buttonReset=document.getElementById("funcId2")
        let listBtn=document.getElementById("btnListId");
        let  table=document.getElementById("tableId");
        if(historyId.hidden===true)
        {
            historyId.hidden=false;
            game.hidden=true;
            button.hidden=false
            buttonNG.hidden=true;
            buttonReset.hidden=true;
            listBtn.hidden=true;
            header.hidden=true;
            table.hidden=true;
            setMessage("")
     
        }     
    }

    return(
        
        <div className="everything">
        
        <Header 
         counterPL1={counterPL1}
        counterPL2={counterPL2}
        counterDraw={counterDraw}
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
            <span  className=" sp1 text-light">{message}</span>
           <div className="BtnContainer">
           <FuncBtn p-1 reset={reset}/>
            <button hidden={false} id="btnListId" className=" btnF btn-outline-success  bg-secondary text-light p-1"  onClick={List}>Show History</button>
           </div>
        </div>
        </section>
        </section>
        <HistoryWindow List={List}
        History={History}
        counterGames={counterGames}
             player1={player1}
             player2={player2}  
             winner={winner}
             //RoundWinner={RoundWinner}

             />
              <EndGame winner={winner} newGame={newGame}/>
        </div>

      
    );
}
export default Board;