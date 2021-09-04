import React from 'react';
import GameItem from './GameItem';

const GameList = ({ freeGames }) => {

    const gameLists = freeGames.map((game) => {
        return <GameItem title={game.title} />
    });

    return (
        <div>
            <h2>I am a game!</h2>
            <ul>
                {gameLists}
            </ul>
        </div>

    )
} 

export default GameList;