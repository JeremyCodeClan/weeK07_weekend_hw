import React from 'react';

const NotFound = () => {


    const notFoundBlock = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1.5rem auto',
        height: '5rem', 
        cursor: 'pointer',
        borderRadius: '1rem',
        background: '#fafafa',
        borderBottom: '3px solid #adadad',
        borderRight: '3px solid #adadad',
        position: 'relative',
        width: '85%',
        minWidth: '500px',
    }

    return (
        <div style={notFoundBlock}>
            <h1>Not Found</h1>
        </div>      
    )
};

export default NotFound;