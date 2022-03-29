import "./DataStyle.css"

const DataDisplay = (props) => {

    const movieList = props.APIData.map(movie => <li key={movie.id}>{movie.title}</li>)

    return (
        <div className={"data-page"}>

            <div className={"found-results"}>
                <div><h5 className={"result-text"}>Results for: <span>{props.searchInput}</span></h5></div>
                <h5 className={"title-text"}>Titles</h5>
                <div >
                    <ul className={"title-list"}>
                        {movieList.length>0 && movieList}
                    </ul>
                </div>
            </div>

            <div className={"search-cards"}>
                <div className={"category-search"}>
                    <h5 className={"crud-title"}>CRUD Operations</h5>

                </div>
                <div className={"advanced-search"}>

                </div>
            </div>

        </div>
    );
};

export default DataDisplay;
