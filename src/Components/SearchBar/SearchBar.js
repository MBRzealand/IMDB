import React from 'react';
import "./SearchStyle.css"
import Search from "./search.png"
import IMDb from "./logo.png"

const SearchBar = () => {
    return (
        <div className={"search-bar"}>
            <img src={IMDb} className={"logo"}/>
            <input className="text-input" type="text" placeholder="Search IMDb"/>
            <img className={"search-button"} src={Search}/>
        </div>
    );
};

export default SearchBar;
