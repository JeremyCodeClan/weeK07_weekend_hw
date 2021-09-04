import React from 'react';
import GameDetail from './GameDetail';

const GameItem = ({ game, selectedGame, onHoverSelect }) => {

    const styleList = {
        margin: "0.5rem 0",
        cursor: 'pointer'
    }

    const handleHover = () => {
        onHoverSelect(game)
    }


    return (
        <div onMouseOver={handleHover}>
            <li style={styleList}>{game.title}</li>
            {
                selectedGame === game ? <GameDetail selectedGame={selectedGame} /> : null
            }
        </div>
    )
} 

export default GameItem;