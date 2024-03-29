import React, { useState } from 'react';
import { Grid } from './grid';
import circle_icon from '../resources/circle.jpg';
import cross_icon from '../resources/cross.jpg';

let data = ["","","","","","","","",""];

export const TicTacToe = () => {

    let [count,setCount] = useState(0);
    let [lock,setLock] = useState(false);

    const toggle = (e,num) => {
        if(lock) {
            return 0;
        }
        if(count%2===0)
        {
            e.target.innerHTML = `<img src='${cross_icon}'>`;
            data[num] = "x";
            setCount(++count);
        }
        else{
            e.target.innerHTML = `<img src='${circle_icon}'>`;
            data[num] = "o";
            setCount(++count);
        }
    }



    return (
        <div className='game'>
           <h1 className='title'>Tic-Tac-Toe</h1> 
                <Grid/>
                <button className="reset">Reset</button>
        </div>
    )
}