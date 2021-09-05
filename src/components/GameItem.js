import React from 'react';
import GameDetail from './GameDetail';

const GameItem = ({ game, selectedGame, onClickSelect, videoRef, imageRef }) => {

    const styleList = {
        margin: "0.5rem 0",
        cursor: 'pointer'
    }

    const handleHover = () => {
        onClickSelect(game)
    }

    return (
        <div onClick={handleHover}>
            {
                selectedGame === game ? <GameDetail selectedGame={selectedGame} videoRef={videoRef} imageRef={imageRef} /> : <li style={styleList}>{game.title}</li>
            }
        </div>
    )
} 

export default GameItem;