import React from 'react'
import beeImageSvg from "../bee-svg.svg"

export default function Piece(props) {
    return (
        <React.Fragment>
           <h1>Hello from Piece!</h1> 
           <p>Hallo there</p>
           <img src={props.image} alt="piece" />
        </React.Fragment>
    )
}
