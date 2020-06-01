import React, { useState } from 'react'
import { calculateWinner } from '../helpers'
import Board from './Board'
import { IoMdClose, IoIosRadioButtonOff } from "react-icons/io";

const styles = {
    width: '250px',
    margin: '20px auto',
}

const title = {
    textAlign: 'center',
    fontSize: '2rem'
}

const historyBtns = {
    cursor: 'pointer',
    boxSizing: 'border-box',
    padding: '.5rem',
    borderBottom: 'solid #333 2px'
}

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);


    const handleClick = (i) => {
        const timeInHisotry = history.slice(0, stepNumber + 1);
        const current = timeInHisotry[stepNumber]
        const squares = [...current];
        // If users clicks occupied tile or if game is won
        if (winner || squares[i]) return;
        // Put an X or O in the clicked square
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory([...timeInHisotry, squares])
        setStepNumber(timeInHisotry.length);
        setXisNext(!xIsNext);
    }

    const jumpTo = step => {
        setStepNumber(step);
        setXisNext(step % 2 === 0)
    };

    const renderMoves = () => (
        history.map((_step, move) => {
            const destination = move ? `Go to move #${move}` : 'Restart Game'
            return (
                <div key={move} style={historyBtns} className='historyBtn' onClick={() => jumpTo(move)}>{destination}</div>
            )
        })

    )

    return (
        <>
            <p style={title}>{winner ?  winner + ' is the winner!' : 'It is ' + (xIsNext ? 'X' : 'O') + "'s" + ' turn.'}</p>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div style={styles}>
                {renderMoves()}
            </div>
        </>
    )
}

export default Game
