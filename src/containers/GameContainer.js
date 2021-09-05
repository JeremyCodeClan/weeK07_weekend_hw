import React, { useState, useEffect, useRef } from 'react';
import GameHeader from '../components/GameHeader';
import GameList from '../components/GameList';
const api_key = process.env.REACT_APP_API_KEY;

const GameContainer = () => {

    const [freeGames, SetFreeGames] = useState([]);
    const [freeSortGames, SetFreeSortGames] = useState([]);
    const [selectedGame, SetSelectedGame] = useState(null);
    const [selectCancel, SetSelectedCancel] = useState(false);

    const [sortBy, SetSortBy] = useState('');
    const [category, SetCategory] = useState('');
    const [search, SetSearch] = useState('');

    const videoRef = useRef('');
    const imageRef = useRef('');

    // api call request on conditions
    useEffect(() => getSortFreeGames(sortBy, category, search), [])
    useEffect(() => {
        if (sortBy === '' && category === '' && search === '') {getSortFreeGames([]); return;}
        if (sortBy !== '' || category !== '' || search !== '') {
            getSortFreeGames(sortBy, category, search);
        }
    }, [sortBy, category, search])
    useEffect(() => {
        if (selectCancel === true) SetSelectedGame(null);
        SetSelectedGame(!selectedGame);
    }, [selectCancel])

    // addVideoUrl
    const addVideoMap = (data) => {
        data.map((addVideo) => {
            addVideo.videoUrl = `https://www.freetogame.com/g/${addVideo.id}/videoplayback.webm`
            return addVideo;
        })}

    // get api function
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
            if (sortBy === '' && category === ''  && search === '') SetFreeGames(data);
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
    const onClickSelect = (game) => SetSelectedGame(game);
    const onClickCancel = () => SetSelectedCancel(!selectCancel);

    return (
        <>
            <GameHeader search={search} SetSearch={SetSearch} SetSortBy={SetSortBy} SetCategory={SetCategory} />
            <GameList
                freeGames={freeGames}
                freeSortGames={freeSortGames}
                videoRef={videoRef}
                imageRef={imageRef}
                selectedGame={selectedGame}
                onClickSelect={onClickSelect}
                onClickCancel={onClickCancel}
            />
        </>
    )
};

export default GameContainer;
