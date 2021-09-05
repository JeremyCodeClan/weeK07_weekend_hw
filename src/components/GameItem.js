import React from 'react';
import GameDetail from './GameDetail';

const GameItem = ({ game, selectedGame, onClickSelect, onClickCancel, videoRef, imageRef }) => {
    
    const handleClickOrHover = () => {
        onClickSelect(game)
    }

    const styleList = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '1.5rem auto',
        height: '50px', 
        cursor: 'pointer',
        borderRadius: '1rem',
        background: '#fafafa',
        borderBottom: '3px solid #adadad',
        borderRight: '3px solid #adadad',
        position: 'relative',
        width: '85%',
        minWidth: '500px',
    }

    const imgStyle = {
        borderTopLeftRadius: '1rem',
        borderBottomLeftRadius: '1rem',
        borderTopRightRadius: '0.2rem',
        borderBottomRightRadius: '0.2rem',
    }

    const titleStyle= {
        marginLeft: '2rem',
        color: '#ff7878',
        fontSize: '1.35rem',
        fontWeight: 'bold',
        width: '500px'
    }
    const genreStyle= {
        color: '#ffa3a3',
        fontSize: '1.1rem',
        width: '150px'
    }

    return (
        <div onClick={handleClickOrHover}>
            {
                selectedGame === game ? <GameDetail selectedGame={selectedGame} onClickCancel={onClickCancel} videoRef={videoRef} imageRef={imageRef} /> : 
                <li style={styleList}>
                    <img style={imgStyle} alt={game.title} src={game.thumbnail} height='50px'></img>
                    <div style={titleStyle}>{game.title}</div>
                    <div style={genreStyle}>{game.genre}</div>
                </li>
            }
        </div>
    )
} 

export default GameItem;