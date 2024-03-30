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

    const cellWinner : CellValue = useMemo(()=> {
        // verification of winner or false

        //if O win
        return 'O'

        //if X win

        return 'X'

        //if draw

        return ''
    
    },[gameState])



    return (
        <div className='game'>
           <h1 className='title'>Tic-Tac-Toe</h1> 
                <Grid gameState={gameState} toggle={toggle} />
                <button className="reset" onClick={handleReset}>Reset</button>
                {/* todo- get winner here */}
                <p>winner winner chicken dinner</p>
        </div>
    )
}