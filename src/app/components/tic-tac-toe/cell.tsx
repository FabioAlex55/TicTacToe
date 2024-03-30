import React, { FC } from 'react'
import { CellValue } from './tic-tac-toe'

type CellProps = {
    value: CellValue
    onClick: () => void
}

export const Cell: FC<CellProps> = props => {
    return(
    <div className="cell" onClick={props.onClick}>
        {props.value === 'X' && <img src='/resources/cross.jpg'/>}
        {props.value === 'O' && <img src='/resources/circle.jpg'/>}
    </div>
    )
}