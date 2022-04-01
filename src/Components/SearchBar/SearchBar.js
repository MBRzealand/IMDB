import React from 'react';
import "./SearchStyle.css"
import Search from "./search.png"
import IMDb from "./logo.png"
import {useDispatch, useSelector} from "react-redux";
import {searchMovie} from "../../features/search";
import {setSelected} from "../../features/confirm";

const SearchBar = () => {

    const searchState = useSelector(state => state.search.value);
    const confirmState = useSelector(state => state.confirm.value);
    const dispatch = useDispatch()

    const handleChange = (event) => {
        const {value} = event.target
        dispatch(searchMovie({
                ...searchState,
                searchInput: value
            }
        ))
        console.log(searchState.searchInput)
    }

    const handleKeyPress = (event) => {
        if(event.key === "Enter"){
            dispatch(setSelected({
                    ...confirmState,
                    selected: searchState.searchInput
                }
            ))
            console.log(searchState.searchInput)
        }
    }

    const handleSubmit = () => {
        dispatch(setSelected({
                ...confirmState,
                selected: searchState.searchInput
            }
        ))
    }

    return (
        <div className={"search-bar"}>
            <img src={IMDb} className={"logo"}/>
            <input
                type="text"
                className="text-input"
                placeholder="Search IMDb"
                name="searchInput"
                value={searchState.searchInput}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
            <img
                className={"search-button"}
                src={Search}
                onClick={handleSubmit}
            />
        </div>
    );
}

export default SearchBar;
