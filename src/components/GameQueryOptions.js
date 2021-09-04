import React from 'react';

const GameQueryOptions = ({ SetSortBy }) => {

    const onChangeSort = (e) => {
        SetSortBy(e.target.value);
    };
    const sortByArr = ['release-date', 'popularity', 'alphabetical']

    const styleFixed = {
        position: 'fixed',
        top: '5rem',
        right: '2rem'
    }

    return (
        <>
            <div style={styleFixed}>
                <select onChange={onChangeSort}>
                    <option value=''>Choose Sort-by</option>
                    {sortByArr.map((sort, index) => {
                        return <option value={sort} key={index} >{sort}</option>
                    })}
                </select>
            </div>
        </>
    )
}

export default GameQueryOptions;