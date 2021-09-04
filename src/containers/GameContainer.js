import React, { useState, useEffect, useRef } from 'react';
import GameList from '../components/GameList';
import GameQueryOptions from '../components/GameQueryOptions'
const api_key = process.env.REACT_APP_API_KEY;

const GameContainer = () => {

    const [freeGames, SetFreeGames] = useState([]);
    const [sortBy, SetSortBy] = useState('');
    const [category, SetCategory] = useState('');
    const videoRef = useRef('');
    const imageRef = useRef('');

    // run api function
    useEffect(() => {
        getFreeGames(sortBy, category);
    }, [sortBy, category])

    const addVideoMap = (data) => {
        data.map((addVideo) => {
            addVideo.videoUrl = `https://www.freetogame.com/g/${addVideo.id}/videoplayback.webm`
            return addVideo
        })
        SetFreeGames(data);
    }

    // get api function
    const getFreeGames = (sortBy, category) => {
            fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?${sortBy}${category}`, 
            {   "method": "GET", 
                "headers":{
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": api_key}  })
        .then(res => res.json())
        .then((data) => addVideoMap(data))
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
            <GameQueryOptions SetSortBy={SetSortBy} SetCategory={SetCategory} />
        </>
    )
};

export default GameContainer;
