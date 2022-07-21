

const Header=({counterPL1,counterPL2,counterDraw,player1,player2})=>{

    return(

            <div className="mainContainer">
            <header className="header">
             <span className="sp2 p-4">{player1}: <span className="miniSpan text-dark">{counterPL1}</span> </span>
            <span className="sp2 p-4">{player2}: <span className="miniSpan text-dark">{counterPL2}</span></span>
            <span className="sp2 p-4">draw: <span className="miniSpan text-dark">{counterDraw}</span> </span>
            </header>
            </div>
    );
}

export default Header