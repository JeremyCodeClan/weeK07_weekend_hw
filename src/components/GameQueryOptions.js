import React from 'react';

const GameQueryOptions = ({ search, SetSearch, SetSortBy ,SetCategory }) => {

    const handleSortChange = (e) => SetSortBy(e.target.value);
    const handleCategoryChange = (e) => SetCategory(e.target.value);

    const sortByArr = ['alphabetical', 'release-date']
    const categoryArr = ['mmorpg', 'shooter', 'strategy', 'moba', 'racing', 'sports',
        'social', 'sandbox', 'open-world', 'survival', 'pvp', 'pve', 'pixel', 'voxel', 'zombie',
        'turn-based', 'first-person', 'third-Person', 'top-down', 'tank', 'space', 'sailing', 
        'side-scroller', 'superhero', 'permadeath', 'card', 'battle-royale', 'mmo', 'mmofps', 
        'mmotps', '3d', '2d', 'anime', 'fantasy', 'sci-fi', 'fighting', 'action-rpg', 'action', 
        'military', 'martial-arts', 'flight', 'low-spec', 'tower-defense', 'horror', 'mmorts']

    const handleChange = (e) => {
        SetSearch(e.target.value);
    }

    // style
    const optionsStyle = {
        display: 'flex',
        margin: '0.5rem 0'
    }
    const inputStyle = {
        height: '1.5rem',
        padding: '0 0.5rem',
        marginRight: '2rem',
        border: 'none',
        borderBottom: '2px solid #f0f0f0',
        borderColor: '#ff6166',
        color: '#ff6166',
        textAlign: 'center',
        fontSize: '1rem' 
    }
    const optionStyle = {
        padding: '0 0.5rem',
        borderColor: '#ff6166',
        color: '#ff6166',
        borderRadius: '0.5rem',
        fontSize: '1rem',
        marginLeft: '0.5rem',
    }

    // sort-by category input
    // smallImage name releasedate category

    return (
        <div style={optionsStyle}>
            <input className='searchInput' onChange={handleChange} style={inputStyle} type='text' placeholder='search a game name' value={search} />
            <select style={optionStyle} onChange={handleSortChange}>
                <option style={optionStyle} value=''>Sort-by:</option>
                {sortByArr.map((sort, index) => {
                    return <option style={optionStyle} value={sort} key={index} >{sort}</option>
                })}
            </select>
            <select style={optionStyle} onChange={handleCategoryChange}>
                <option style={optionStyle} value=''>Categories</option>
                {categoryArr.map((category, index) => {
                    return <option style={optionStyle} value={category} key={index} >{category}</option>
                })}
            </select>
        </div>
    )
}

export default GameQueryOptions;