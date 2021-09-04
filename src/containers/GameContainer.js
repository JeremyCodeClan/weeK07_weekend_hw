import React, { useState, useEffect } from 'react';
const api_key = process.env.REACT_APP_API_KEY

const GameContainer = () => {

    const [freeGames, SetFreeGames] = useState([])

    useEffect(() => {
        getFreeGames();
    }, [])

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
        .then(data => {
            SetFreeGames(data);})
        .catch(err => console.error(err))
    }

    console.log(freeGames);

    return (
        <>
            <h1>I am game container!</h1>
        </>
    )
};

export default GameContainer;
