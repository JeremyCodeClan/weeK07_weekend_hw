import React, { useState, useEffect } from 'react';
import GameItem from './GameItem';

const GameList = ({ freeGames, videoRef, imageRef }) => {

    const [selectedGame, SetSelectedGame] = useState(null);

    useEffect(() => {
        result()
    })

    // event functions
    const onHoverSelect = (game) => {
        SetSelectedGame(game);
    }

    const result = () => {
        if (imageRef.current) {
            imageRef.current.classList.remove('disableView');
        }
        setTimeout(() => {
            if (imageRef.current && videoRef.current && videoRef.current.networkState === 1) {
                imageRef.current.classList.add('disableView');
                videoRef.current.classList.remove('disableView');
                videoRef.current.play();
            }
        }, 500)
    }

    const gameLists = freeGames.map((game, index) => {
        return <GameItem 
                    game={game} 
                    key={index} 
                    selectedGame={selectedGame} 
                    onHoverSelect={onHoverSelect}
                    videoRef={videoRef}
                    imageRef={imageRef}
                />
    });

    return (
        <div>
            <h2>I am a game item!</h2>
            <ul>
                {gameLists}
            </ul>
        </div>

    )
} 

export default GameList;