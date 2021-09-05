import React from 'react';
import { AiFillCloseSquare } from "react-icons/ai";

const GameDetail = ({ selectedGame, onClickCancel, videoRef, imageRef }) => {

    const handleCancel = () => {
        onClickCancel();
    }

    const detailBlock = {
        margin: '1.5rem auto',
        padding: '1rem 3rem',
        borderRadius: '1rem',
        width: '75%',
        minWidth: '500px',
        background: '#fafafa',
        borderBottom: '0.25rem solid #adadad',
        borderRight: '0.25rem solid #adadad',
        position: 'relative',
    }

    const detailStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    const titleBlock = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '500px',
    }

    const iconStyle = {
        color: '#808080',
        cursor: 'pointer',
    }

    const titleStyle = {
        margin: '1rem 0',
        color: '#ff7878',
        fontSize: '2rem',
        fontWeight: 'bold',
    }

    const itemsStyle = {
        margin: '1rem 0',
        color: '#575757',
        fontSize: '1rem',
        width: '500px'
    }

    return (
        <div style={detailBlock}>
            <div style={detailStyle}>
                <div style={titleBlock}>
                    <div style={titleStyle}>{selectedGame.title}</div>
                    <div onClick={handleCancel}>
                        <AiFillCloseSquare style={iconStyle} size={36}/>
                    </div>
                </div>
                <div>
                    <video controls width="500" height='281' loop ref={videoRef} className='disableView' >
                        <source ref={videoRef} src={selectedGame.videoUrl} type='video/webm'></source>
                    </video>
                    <img ref={imageRef} width="500" alt={selectedGame.name} src={selectedGame.thumbnail} className='disableView'></img>
                </div>
                <div style={itemsStyle}>
                    <div>Platform: {selectedGame.platform}</div>
                    <div>Release Date: {selectedGame.release_date}</div>
                    <div>Developer: {selectedGame.developer}</div>
                    <div>Publisher: {selectedGame.publisher}</div>
                    <div>Description: {selectedGame.short_description}</div>
                </div>
            </div>
        </div>

    )
};

export default GameDetail;