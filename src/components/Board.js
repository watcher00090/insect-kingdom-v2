import React from 'react'

export default function Board(props) {
    return (
        <div>
            <ul id="hexGrid">
                {props.children}
            </ul>
        </div>
    )
}
