import React from 'react'
import BeeSvg from "./BeeSvg"
import AntSvg from "./AntSvg"
import SpiderSvg from "./SpiderSvg"

class Piece extends React.Component {

    constructor(props) {
        super(props)
    }

    getPieceSvgComponent(pieceType) {
        switch(pieceType) {
            case "ant":
                return <AntSvg className={this.props.player}/>
            case "bee": 
                return <BeeSvg className={this.props.player} />
            case "spider":
                return <SpiderSvg className={this.props.player} />
            default:
                return null;    
        }
    }
    
    render() {

        const pieceType = this.props.type

        return (
            <React.Fragment>
            <h1>Hello from Piece!</h1> 
            <p>Hallo there</p>

           {/*<img src={props.image} alt="piece" 
                className = 
                {
                    (props.isAntPiece ? " ant-piece-image " : " piece-image ") 
                    . concat(props.className)
                }
            />*/}

           
           {this.getPieceSvgComponent(pieceType)}
           
           </React.Fragment>
    )
    }
}

export default Piece