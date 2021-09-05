import React, { useEffect } from 'react';
import GameItem from './GameItem';

const GameList = ({ selectedGame, onClickSelect, freeGames, freeSortGames, videoRef, imageRef }) => {

    const games = freeSortGames.length === 0 ? freeGames : freeSortGames;

    useEffect(() => {
        result()
    })

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

    const gameLists = games.map((game, index) => {
        return <GameItem 
                    game={game} 
                    key={index} 
                    selectedGame={selectedGame} 
                    onClickSelect={onClickSelect}
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