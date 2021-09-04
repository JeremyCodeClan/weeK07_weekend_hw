import React from 'react';

const GameDetail = ({ selectedGame, videoRef, imageRef }) => {

    return (
        <div>
            <h2>{selectedGame.title}</h2>
            <div>
                <video controls width="500" loop ref={videoRef} className='disableView' >
                    <source ref={videoRef} src={selectedGame.videoUrl} type='video/webm'></source>
                </video>
                <img ref={imageRef} width="500" alt={selectedGame.name} src={selectedGame.thumbnail} className='disableView'></img>
            </div>
            <div>Platform: {selectedGame.platform}</div>
            <div>Release Date: {selectedGame.release_date}</div>

            <div>Developer: {selectedGame.developer}</div>
            <div>Publisher: {selectedGame.publisher}</div>
            <div>Description: {selectedGame.short_description}</div>

        </div>
    )
};

export default GameDetail;