import React from 'react';

const GameDetail = ({ selectedGame, videoRef, imageRef }) => {

    return (
        <div>
            <h2>{selectedGame.title}</h2>
            <video controls width="500" loop ref={videoRef} className='disableView' >
                <source ref={videoRef} src={selectedGame.videoUrl} type='video/webm'></source>
            </video>
            <img ref={imageRef} width="500" alt={selectedGame.name} src={selectedGame.thumbnail} className='disableView'></img>
            <div>Description: {selectedGame.short_description}</div>
        </div>
    )
};

export default GameDetail;