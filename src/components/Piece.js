import React from 'react'
import BeeSvg from "./BeeSvg"

export default function Piece(props) {
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
            <BeeSvg />
        </React.Fragment>
    )
}
