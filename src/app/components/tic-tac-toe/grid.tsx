import React, { FC } from "react"
import "./globals.css";

type GridProps = {
    gameState: string[]
}

export const Grid: FC<GridProps> = (props) => {
    const gameState = props.gameState

    return (
        <div className="grid">
            <div className="row1">
                <div className="cell">
                    <img src='/resources/cross.jpg' />
                    {gameState[0]}
                </div>
                <div className="cell">{gameState[1]}</div>
                <div className="cell">{gameState[2]}</div>
            </div>
            <div className="row2">
                <div className="cell">{gameState[3]}</div>
                <div className="cell">{gameState[4]}</div>
                <div className="cell">{gameState[5]}</div>
            </div>
            <div className="row3">
                <div className="cell">{gameState[6]}</div>
                <div className="cell">{gameState[7]}</div>
                <div className="cell">{gameState[8]}</div>
            </div>
        </div> 
    )
}