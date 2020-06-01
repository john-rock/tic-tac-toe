import React from 'react'
import Square from './Square'

const style = {
    border: '4px solid #222',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
    fontFamily: 'Open Sans',
};

const square = {
    color: '#fff'
}

const Board = ({ squares, onClick }) => {
    return (
        <div style={style}>
            {squares.map((square, i) => (
                <Square style={square} key={i} value={square} onClick={() => onClick(i)} />
            ))}
        </div>
    )
}

export default Board
