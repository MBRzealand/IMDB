import React from 'react';
import {useSelector} from "react-redux";

const MovieInfo = () => {

    const state = useSelector(state => state.select.value);

    console.log(state)

    return (
        <div>
            <h1>{state.original_title}</h1>
            <p>{state.overview}</p>
        </div>
    );
};

export default MovieInfo;
