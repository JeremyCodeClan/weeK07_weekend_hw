import React, { useState, useEffect, useRef } from 'react';
import GameList from '../components/GameList';
const api_key = process.env.REACT_APP_API_KEY;

const GameContainer = () => {

    const [freeGames, SetFreeGames] = useState([]);
    const videoRef = useRef('');
    const imageRef = useRef('');

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
        .then((data) => {
            data.map((addVideo) => {
                addVideo.videoUrl = `https://www.freetogame.com/g/${addVideo.id}/videoplayback.webm`
                return addVideo
            })
            SetFreeGames(data);
        })
        .catch(err => console.error(err))
    }

    return (
        <>
            <h1>I am a game container!</h1>
            <GameList 
                freeGames={freeGames}
                videoRef={videoRef}
                imageRef={imageRef}
            />
        </>
    )
};

export default GameContainer;
