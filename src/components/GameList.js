import React, { useEffect } from 'react';
import GameItem from './GameItem';

const GameList = ({ selectedGame, onClickSelect, onClickCancel, freeGames, freeSortGames, videoRef, imageRef }) => {

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
        </div>

    )
} 

export default GameList;