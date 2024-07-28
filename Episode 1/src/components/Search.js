import React from "react";

const Search = () => {

    return (
        <div className="search">
            <input type="text" placeholder="Search for restaurants"/>
            <button onClick={seachClick} className="search-btn">Search</button>
        </div>
    )
};

export default Search;