import logo from './logo.svg';
import './App.css';
import Board from "./components/Board"
import Hextile from "./components/Hextile"
import Piece from "./components/Piece"

import beePieceImg from "./bee-svg.svg"
import spiderPieceImg from "./spider-svg.svg"
import antPieceImg from "./ant-svg.svg"


function App() {

  return(
    <>
      <h1 className="main-title">Insect Kingdom</h1>
      <Board>
        <Hextile>
          <Piece image={beePieceImg} />
        </Hextile>
        <Hextile />
        <Hextile />
        <Hextile />
        <Hextile />
        <Hextile>
          <Piece image={spiderPieceImg} />
        </Hextile> 
        <Hextile />
        <Hextile>          
          <Piece image={antPieceImg} isAntPiece={true}/>
        </Hextile>
        <Hextile />
        <Hextile />
        <Hextile>
          <Piece image={beePieceImg} />
        </Hextile>
        <Hextile />
        <Hextile />
        <Hextile />
        <Hextile />
        <Hextile />
        <Hextile />
        <Hextile />
        <Hextile />
      </Board>
    </>
  )

}

export default App;
