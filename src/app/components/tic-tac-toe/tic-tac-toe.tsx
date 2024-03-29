"use client" 
import React, { useState } from 'react';
import { Grid } from './grid';

export const TicTacToe = () => {
    const [gameState, setGameState] = useState(["X","O","X","","","","","",""]);
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);

    const toggle = (e : any, num : any) => {
        if(lock) {
            return 0;
        }
        if(count%2===0)
        {
            e.target.innerHTML = `<img src='/resources/cross.jpg'>`;
            data[num] = "x";
            setCount(++count);
        }
        else{
            e.target.innerHTML = `<img src='/resources/circle.jpg'>`;
            data[num] = "o";
            setCount(++count);
        }
    }



    return (
        <div className='game'>
           <h1 className='title'>Tic-Tac-Toe</h1> 
                <Grid gameState={gameState} />
                <button className="reset">Reset</button>
        </div>
    )
}