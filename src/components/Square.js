import React from 'react'

const style = {
    background: '#222',
    border: '1px solid #444',
    fontSize: '30px',
    fontWeight: '700',
    cursor: 'pointer',
    outline: 'none',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const Square = ({ value, onClick }) => {
    return (
        <div style={style} className={`gameBtn ${value}`} onClick={onClick}>
            {value}
        </div>
    )
}

export default Square
