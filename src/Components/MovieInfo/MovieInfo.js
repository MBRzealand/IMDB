import React from 'react';
import {useSelector} from "react-redux";
import "./MovieStyle.css"
const MovieInfo = () => {

    const selectedState = useSelector(state => state.select.value);
    const confirmState = useSelector(state => state.confirm.value);

    const genres = selectedState.genre_ids.map(genre =>
        confirmState.genres.genres.find(element => element.id === genre)
    )

    const genreDisplay = genres.map(genre => <p className={"genre"} key={genre.id}>{genre.name}</p>)

    return (
        <div className={"site"}>
            <div className={"content"}>
                <h1 className={"movie-title"}>{selectedState.original_title}</h1>
                {selectedState.poster_path && <img className={"poster"} src={"http://image.tmdb.org/t/p/w500/" + selectedState.poster_path}/>}
                <div className={"movie-genres"}>{genreDisplay}</div>
                <p className={"overview"}>{selectedState.overview}</p>
            </div>
        </div>
    );
};

export default MovieInfo;
