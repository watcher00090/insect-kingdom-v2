import logo from './logo.svg';
import './App.css';
import Board from "./components/Board"
import Hextile from "./components/Hextile"
import Piece from "./components/Piece"

import beePieceImg from "./bee-svg.svg"
import spiderPieceImg from "./spider-svg.svg"
import antPieceImg from "./ant-svg.svg"
import BeeSvg from "./components/BeeSvg"
import AntSvg from "./components/AntSvg"
import SpiderSvg from "./components/SpiderSvg"


function App() {

  return(
    <>
    <BeeSvg fill="green" />
    <AntSvg />
    <SpiderSvg />
      <h1 className="main-title">Insect Kingdom</h1>
      <Board>
        <Hextile>
          <Piece type="bee" player="player-one"/>
        </Hextile>
        <Hextile />
        <Hextile />
        <Hextile />
        <Hextile />
        <Hextile>
          <Piece type="spider" player="player-two" />
        </Hextile> 
        <Hextile />
        <Hextile>          
          <Piece type="ant" isAntPiece={true} player="player-one" />
        </Hextile>
        <Hextile />
        <Hextile />
        <Hextile>
          <Piece type="bee" player="player-two"/>
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
