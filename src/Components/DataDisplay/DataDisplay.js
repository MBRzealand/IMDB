import "./DataStyle.css"
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {selectMovie} from "../../features/select";

const DataDisplay = () => {

    const dispatch = useDispatch();
    const confirmState = useSelector(state => state.confirm.value);

    const handleClick = (id) => {
        confirmState.apiResponse.find(movie => {
            if (movie.id === id) {
                dispatch(selectMovie(movie))
            }
        })
    }

    const movieList = confirmState.apiResponse.map(movie => <li key={movie.id}><Link onClick={() => handleClick(movie.id)} className={"Link"} to={"/details/" + movie.title}>{movie.title}</Link></li>)

    return (
        <div className={"data-page"}>

            <div className={"found-results"}>
                <div><h5 className={"result-text"}>Results for: <span>{confirmState.selected}</span></h5></div>
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
