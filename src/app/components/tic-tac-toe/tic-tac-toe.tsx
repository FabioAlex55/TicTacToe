"use client" 
import {useMemo, useState } from 'react';
import { Grid } from './grid';

export type CellValue = ('X' | 'O'| '');

export type GameState = CellValue[];

const initialState: GameState = ["","","","","","","","",""];


export const TicTacToe = () => {
    const [gameState, setGameState] = useState<GameState>(initialState);
    const [count, setCount] = useState(0);

    const toggle = (cellIndex: number) => {
        if(gameState[cellIndex] !=='') return 
        
        const newGameState = [...gameState]
            //circle plays
        
        if(count%2===0){
            //update game state
            newGameState[cellIndex] ='O'

            setGameState(newGameState)

        } else{
            //crossplays
            //update game state
            newGameState[cellIndex] ='X'

            setGameState(newGameState)
        }
        setCount(currentCount => currentCount + 1);
    }

    const handleReset = () => {
        setGameState(initialState)
        setCount(0)
    }

    function checkWin(gameState: GameState): CellValue | "" {
        const winningCombos: number[][] = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6] 
        ];
    
         
        for (const combo of winningCombos) {
            const [a, b, c] = combo;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
                return gameState[a]; 
            }
        }
    
        return ""; // No winner yet
    }


    const winningPlayer: CellValue | "" = checkWin(gameState);
    

    return (
        <div className='game'>
           <h1 className='title'>Tic-Tac-Toe</h1> 
                <Grid gameState={gameState} toggle={toggle} />
                <button className="reset" onClick={handleReset}>Reset</button>
                {/* todo- get winner here */}
                <p>Winner Winner {winningPlayer} !!</p>
        </div>
    )
}