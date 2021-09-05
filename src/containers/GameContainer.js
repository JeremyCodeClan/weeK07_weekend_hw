import React, { useState, useEffect, useRef } from 'react';
import GameList from '../components/GameList';
import GameQueryOptions from '../components/GameQueryOptions'
const api_key = process.env.REACT_APP_API_KEY;

const GameContainer = () => {

    const [freeGames, SetFreeGames] = useState([]);
    const [freeSortGames, SetFreeSortGames] = useState([]);
    const [selectedGame, SetSelectedGame] = useState(null);

    const [sortBy, SetSortBy] = useState('');
    const [category, SetCategory] = useState('');
    const [search, SetSearch] = useState('');


    const videoRef = useRef('');
    const imageRef = useRef('');

    // run api function
    useEffect(() => {
        getFreeGames();
    }, [])
    useEffect(() => {
        if (sortBy === '' && category === '' && search === '') {
            getSortFreeGames([]);
            return;
        }
        getSortFreeGames(sortBy, category, search);
    }, [sortBy, category, search])

    // addVideoUrl
    const addVideoMap = (data) => {
        data.map((addVideo) => {
            addVideo.videoUrl = `https://www.freetogame.com/g/${addVideo.id}/videoplayback.webm`
            return addVideo
        })
    }

    // get api function
    const getFreeGames = () => {
        SetSelectedGame(null);
        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical`, 
        {   "method": "GET", 
            "headers":{
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
            "x-rapidapi-key": api_key}  })
        .then(res => res.json())
        .then((data) => { 
            addVideoMap(data);
            SetFreeGames(data);
        })
        .catch(err => console.error(err))
    }
    const getSortFreeGames = (sortBy, category, search) => {
        SetSelectedGame(null);
        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?${sortBy}${category}`, 
        {   "method": "GET", 
            "headers":{
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
            "x-rapidapi-key": api_key}  })
        .then(res => res.json())
        .then((data) => { 
            addVideoMap(data);
            if (search !== '') {
                let match = [];
                const matchFnc = (gameLists) => {
                    match = gameLists.filter((game) => {
                        const regex = new RegExp(`${search}`, "gi");
                        return game.title.match(regex);
                    })
                }
                matchFnc(data);
                SetFreeSortGames(match);
                SetSearch(search);
            } else {
                SetFreeSortGames(data);
            }
        })
        .catch(err => console.error(err))
    }

    // event functions
    const onClickSelect = (game) => {
        SetSelectedGame(game);
    }
    // const onChangeSearch = (text) => {
    //     let match = [];
    //     const matchFnc = (gameLists) => {
    //         match = gameLists.filter((game) => {
    //             const regex = new RegExp(`${text}`, "gi");
    //             return game.title.match(regex);
    //         })
    //     }
    //     if (text.length > 0) {
    //         if (freeSortGames.length === 0) matchFnc(freeGames)
    //         if (freeSortGames.length !== 0) matchFnc(freeSortGames)
    //     }
    //     SetFreeSortGames(match);
    //     SetSearch(text);
    // }
    
    return (
        <>
            <h1>I am a game container!</h1>
            <GameQueryOptions search={search} SetSearch={SetSearch} SetSortBy={SetSortBy} SetCategory={SetCategory}  />
            <GameList
                freeGames={freeGames}
                freeSortGames={freeSortGames}
                videoRef={videoRef}
                imageRef={imageRef}
                selectedGame={selectedGame}
                onClickSelect={onClickSelect}
            />
        </>
    )
};

export default GameContainer;
