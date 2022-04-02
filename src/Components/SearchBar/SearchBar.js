import React from 'react';
import "./SearchStyle.css"
import Search from "./search.png"
import IMDb from "./logo.png"
import {useDispatch, useSelector} from "react-redux";
import {searchMovie} from "../../features/search";
import {setSelected} from "../../features/confirm";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

    const searchState = useSelector(state => state.search.value);
    const confirmState = useSelector(state => state.confirm.value);
    const dispatch = useDispatch()
    let navigate = useNavigate();

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

            return navigate("/")
        }
    }

    const handleSubmit = () => {
        dispatch(setSelected({
                ...confirmState,
                selected: searchState.searchInput
            }
        ))

        return navigate("/")
    }

    return (
        <div className={"search-bar"}>
            <img onClick={() => {return navigate("/")}} src={IMDb} className={"logo"}/>
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
