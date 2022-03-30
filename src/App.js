import SearchBar from "./Components/SearchBar/SearchBar";
import DataDisplay from "./Components/DataDisplay/DataDisplay";
import {useEffect} from "react";
import "./App.css"
import {useDispatch, useSelector} from "react-redux";
import {getMovieThunk, searchMovie} from "./features/search";

function App() {

    const input = useSelector(state => state.search.value);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getMovieThunk(input.selected))

    }, [input.selected]);

    const handleChange = (event) => {
        const {name,value} = event.target
        dispatch(searchMovie({
                ...input,
                [name]: value
            }
        ))
    }

    const handleKeyPress = (event) => {
        if(event.key === "Enter"){
            dispatch(searchMovie({
                ...input,
                selected: input.searchInput
            }
        ))
        }
    }

    const handleSubmit = (event) => {
            dispatch(searchMovie({
                    ...input,
                    selected: input.searchInput
                }
            ))
    }

  return (
    <div className="App">
      <SearchBar
        searchInput={input.searchInput}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleKeyPress={handleKeyPress}
      />
      <DataDisplay
          searchInput={input.selected}
          APIData={input.apiResponse}
      />
    </div>
  );
}

export default App;
