import React, { useState, useEffect } from 'react';
import GameList from '../components/GameList';
const api_key = process.env.REACT_APP_API_KEY;

const GameContainer = () => {

    const [freeGames, SetFreeGames] = useState([]);
    const [selectedGame, SetSelectedGame] = useState(null);

    // run api function
    useEffect(() => {
        getFreeGames();
    }, [])

    // get api function
    const getFreeGames = () => {
        fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", 
        {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
            "x-rapidapi-key": api_key,
            }
        })
        .then(res => res.json())
        .then(data => SetFreeGames(data))
        .catch(err => console.error(err))
    }

    // event functions
    const onHoverSelect = (game) => {
        SetSelectedGame(game);
    }

    return (
        <>
            <h1>I am a game container!</h1>
            <GameList freeGames={freeGames} selectedGame={selectedGame} onHoverSelect={onHoverSelect} />
        </>
    )
};

export default GameContainer;
