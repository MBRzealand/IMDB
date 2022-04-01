import SearchBar from "./Components/SearchBar/SearchBar";
import DataDisplay from "./Components/DataDisplay/DataDisplay";
import {useEffect} from "react";
import "./App.css"
import {useDispatch, useSelector} from "react-redux";
import {getMovieThunk} from "./features/confirm";
import {
    Routes,
    Route,
} from "react-router-dom";
import MovieInfo from "./Components/MovieInfo/MovieInfo";

function App() {

    const confirmState = useSelector(state => state.confirm.value);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getMovieThunk(confirmState.selected))

    }, [confirmState.selected]);



  return (
    <div className="App">
      <SearchBar/>
      <Routes>
        <Route
            path="/"
            element={
                <DataDisplay/>
            }
        />
        <Route
            path="/details/:id"
            element={
                <MovieInfo/>
            }
        />
      </Routes>
    </div>
  );
}

export default App;
