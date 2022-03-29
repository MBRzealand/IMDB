import SearchBar from "./Components/SearchBar/SearchBar";
import DataDisplay from "./Components/DataDisplay/DataDisplay";
import React, {useState} from "react";
import {useEffect} from "react";
import "./App.css"

function App() {

    // const search = useSelector((state) => state.search.value);

    const [search, setSearch] = useState({
        searchInput: "",
    });

    const [selectedSearch, setSelectedSearch] = useState("");

    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        if(selectedSearch !== ""){
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&include_adult=true&query=${selectedSearch}`)
            .then(res => res.json())
            .then(data => {
                setAPIData(data.results);
            }).catch(error => console.log('error', error));
        }
        return () => {
            setAPIData([]);
        }

    }, [selectedSearch]);

    const handleChange = (event) => {

        const {name,value} = event.target
        setSearch(prevSearch => {
            return {
                ...prevSearch,
                [name]: value
            }
        })
    }

    const handleKeyPress = (event) => {
        if(event.key === "Enter"){
            setSelectedSearch(prevSelectedSearch => search.searchInput)
        }

    }

    function handleSubmit(event) {
        event.preventDefault()
        setSelectedSearch(prevSelectedSearch => search.searchInput)

    }

  return (
    <div className="App">
      <SearchBar
        searchInput={search.searchInput}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleKeyPress={handleKeyPress}
      />
      <DataDisplay
          searchInput={selectedSearch}
          APIData={APIData}
      />
    </div>
  );
}

export default App;
