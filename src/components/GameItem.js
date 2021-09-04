import React from 'react';
import GameDetail from './GameDetail';

const GameItem = ({ game, selectedGame, onHoverSelect, videoRef, imageRef }) => {

    const styleList = {
        margin: "0.5rem 0",
        cursor: 'pointer'
    }

    const handleHover = () => {
        onHoverSelect(game)
    }

    return (
        <div onClick={handleHover}>
            <li style={styleList}>{game.title}</li>
            {
                selectedGame === game ? <GameDetail selectedGame={selectedGame} videoRef={videoRef} imageRef={imageRef} /> : null
            }
        </div>
    )
} 

export default GameItem;