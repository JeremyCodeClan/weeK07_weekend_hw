import React from 'react';
import GameQueryOptions from './GameQueryOptions'

const GameHeader = ({ search, SetSearch, SetSortBy, SetCategory }) => {

    const logoStyle = {
        fontSize: '3rem',
        fontFamily: 'Rampart One',
        color: '#ff4a50',
        fontWeight: 'bold',
        margin: '0.5rem 0',
    }
    const headerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: '0',
        left: '0',
        height: '22.5vh',
        width: '100vw',
        zIndex: '5',
        background: 'white',
    }

    return (
        <div style={headerStyle}>
            <div style={logoStyle}><a href='/free_to_play_games/'>Free To Play Games</a></div>
            <GameQueryOptions search={search} SetSearch={SetSearch} SetSortBy={SetSortBy} SetCategory={SetCategory} />
        </div>
    )
};

export default GameHeader;