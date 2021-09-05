import React from 'react';

const GameQueryOptions = ({ search, SetSearch, SetSortBy, SetCategory, onChangeSearch }) => {

    const onChangeSort = e => SetSortBy(e.target.value);
    const onChangeCategory = e => SetCategory(e.target.value);

    const sortByArr = ['alphabetical', 'popularity', 'relevance', 'release-date']
    const categoryArr = ['mmorpg', 'shooter', 'strategy', 'moba', 'racing', 'sports',
        'social', 'sandbox', 'open-world', 'survival', 'pvp', 'pve', 'pixel', 'voxel', 'zombie',
        'turn-based', 'first-person', 'third-Person', 'top-down', 'tank', 'space', 'sailing', 
        'side-scroller', 'superhero', 'permadeath', 'card', 'battle-royale', 'mmo', 'mmofps', 
        'mmotps', '3d', '2d', 'anime', 'fantasy', 'sci-fi', 'fighting', 'action-rpg', 'action', 
        'military', 'martial-arts', 'flight', 'low-spec', 'tower-defense', 'horror', 'mmorts']

    const styleFixed = {
        position: 'fixed',
        top: '5rem',
        right: '2rem'
    }

    const handleChange = (e) => {
        SetSearch(e.target.value);
    }

    // sort-by category input
    // smallImage name releasedate category

    return (
        <>
            <div style={styleFixed}>
                <input type='text' value={search} onChange={handleChange} />
                <select onChange={onChangeSort}>
                    <option value=''>Sort-by:</option>
                    {sortByArr.map((sort, index) => {
                        return <option value={'sort-by=' + sort} key={index} >{sort}</option>
                    })}
                </select>
                <select onChange={onChangeCategory}>
                    <option value=''>Categories</option>
                    {categoryArr.map((category, index) => {
                        return <option value={'&category=' + category} key={index} >{category}</option>
                    })}
                </select>
            </div>
        </>
    )
}

export default GameQueryOptions;