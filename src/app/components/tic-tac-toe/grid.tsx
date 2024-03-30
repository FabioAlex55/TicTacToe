import React, { FC } from "react"
import "./globals.css"
import { Cell } from "./cell"
import { GameState } from "./tic-tac-toe"


type GridProps = {
    gameState: GameState
    toggle: ( cellIndex: number) => void
}

export const Grid: FC<GridProps> = (props) => {
    const gameState = props.gameState

    const handleClickCell = (cellIndex: number) => () => props.toggle(cellIndex)

    return (
        <div className="grid">
            {[0,1,2].map((rowIndex) => (
                <div className="row">
                    {[0,1,2].map((cellIndex) => (
                    <Cell
                        onClick={handleClickCell(rowIndex * 3 + cellIndex)}
                        value={gameState[rowIndex * 3 + cellIndex]}
                    />
                    ))}
                    </div>
            ))}
        </div>
    )
}