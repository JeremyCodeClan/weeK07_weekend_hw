import React, { useState, useEffect, useRef } from 'react';
import GameHeader from '../components/GameHeader';
import GameList from '../components/GameList';
const api_key = process.env.REACT_APP_API_KEY;

const GameContainer = () => {

    const [freeGames, SetFreeGames] = useState([]);
    const [freeRefinedGames, SetFreeRefinedGames] = useState(null);
    const [selectedGame, SetSelectedGame] = useState(null);
    const [selectCancel, SetSelectedCancel] = useState(false);

    const [sortBy, SetSortBy] = useState('');
    const [category, SetCategory] = useState('');
    const [search, SetSearch] = useState('');
    const [delaySearch, SetDelaySearch] = useState('');

    const videoRef = useRef();
    const imageRef = useRef();

    useEffect(() => {
        // https://stackoverflow.com/questions/53071774/reactjs-delay-onchange-while-typing
        // request delay api on purpose
        const timeOutId = setTimeout(() => SetDelaySearch(search), 100);
        return () => clearTimeout(timeOutId);
      }, [search]);

    useEffect(() => {
        getFreeGames();
    }, [])
    useEffect(() => onChangeSortBy(sortBy), [sortBy])
    useEffect(() => categoryFnc(category), [category])
    useEffect(() => onChangeSearch(), [delaySearch])

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
    
    const getFreeGames = () => {
        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games`, 
        {   "method": "GET", 
            "headers":{
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
            "x-rapidapi-key": api_key}  })
        .then(res => res.json())
        .then((data) => {
            addVideoMap(data);
            SetFreeGames(data);
            SetFreeRefinedGames(data);
            console.log('API activated: ')
        })
    };

    const categoryFnc = (category) => {
        const newGames = [...freeGames];
        if (category === '') { 
            SetFreeRefinedGames(newGames);
            return;
        }
        const result = newGames.filter((game) => { 
            return game.genre.toLowerCase() === category.toLowerCase()
        });
        result.length !== 0 ? SetFreeRefinedGames(result) : SetFreeRefinedGames([])
    }

    const onChangeSortBy = (sortBy) => {
        if (sortBy === 'alphabetical') {
            const newGames = [...freeRefinedGames];
            const result = newGames.sort((a, b) => a.title.localeCompare(b.title));
            return SetFreeRefinedGames(result);
        }
        if (sortBy === 'release-date') {
            const newGames = [...freeRefinedGames];
            const result = newGames.sort((a, b) => b.release_date.localeCompare(a.release_date));
            return SetFreeRefinedGames(result);
        }
        if (sortBy === '') {
            const newGames = [...freeGames];
            return SetFreeRefinedGames(newGames);
        }
    }

    const onChangeSearch = () => {
        if (freeGames !== [] && freeRefinedGames !== null && delaySearch !== '') {
            let match = [];
            const matchFnc = (gameLists) => {
                match = gameLists.filter((game) => {
                    return game.title.toLocaleLowerCase().includes(delaySearch.toLocaleLowerCase());
                })
            }
            matchFnc(freeGames);
            SetFreeRefinedGames(match);
        } else {
            SetFreeRefinedGames(freeGames);
        }
    }

    // event functions
    const onClickSelect = (game) => SetSelectedGame(game);
    const onClickCancel = () => SetSelectedCancel(!selectCancel);

    if (freeRefinedGames !== null && freeRefinedGames.length !== 0) {
        console.log(freeRefinedGames)
    }


    return (
        <>
            <GameHeader search={search} SetSearch={SetSearch} SetSortBy={SetSortBy} SetCategory={SetCategory} onChangeSortBy={onChangeSortBy} />
            <GameList
                category={category}
                delaySearch={delaySearch}
                freeGames={freeGames}
                freeRefinedGames={freeRefinedGames}
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
