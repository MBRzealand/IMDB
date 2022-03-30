import React from 'react';

const MovieInfo = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.original_language}</p>
            <p>{props.release_date}</p>
            <p>{props.overview}</p>
        </div>
    );
};

export default MovieInfo;
