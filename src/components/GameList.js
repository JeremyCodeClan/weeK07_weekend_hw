import React from 'react';
import GameItem from './GameItem';

const GameList = ({ freeGames, selectedGame, onHoverSelect }) => {


    const gameLists = freeGames.map((game, index) => {
        return <GameItem game={game} key={index} selectedGame={selectedGame} onHoverSelect={onHoverSelect} />
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