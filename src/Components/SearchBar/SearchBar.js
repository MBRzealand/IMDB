import React from 'react';
import "./SearchStyle.css"
import Search from "./search.png"
import IMDb from "./logo.png"

const SearchBar = (props) => {

    return (
        <div className={"search-bar"}>
            <img src={IMDb} className={"logo"}/>
            <input
                type="text"
                className="text-input"
                placeholder="Search IMDb"
                name="searchInput"
                value={props.searchInput}
                onChange={props.handleChange}
                onKeyPress={props.handleKeyPress}
            />
            <img
                className={"search-button"}
                src={Search}
                onClick={props.handleSubmit}
            />
        </div>
    );
}

export default SearchBar;
