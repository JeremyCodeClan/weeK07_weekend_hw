import React, { useState, useEffect } from 'react';
import GameItem from './GameItem';
import NotFound from './NotFound';

const GameList = ({ delaySearch, category, selectedGame, onClickSelect, onClickCancel, freeGames, freeRefinedGames, videoRef, imageRef }) => {

    const games = freeRefinedGames === null ? freeGames : freeRefinedGames;

    useEffect(() => {
        result();
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
                    onClickCancel={onClickCancel}
                    videoRef={videoRef}
                    imageRef={imageRef}
                />
    });

    const listStyle = {
        marginTop: '27.5vh'
    }

    return (
        <div style={listStyle}>
            <ul>
                {gameLists}
            </ul>
            { (category !== '' || delaySearch !== '') && freeRefinedGames !== null && freeRefinedGames.length === 0 && 
                <NotFound />
            }
        </div>

    )
} 

export default GameList;