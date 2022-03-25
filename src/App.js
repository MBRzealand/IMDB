import SearchBar from "./Components/SearchBar/SearchBar";
import DataDisplay from "./Components/DataDisplay/DataDisplay";
import {useState} from "react";
import "./App.css"

function App() {

    const [search, setSearch] = useState({
        searchInput: "",
    });

    const [selectedSearch, setSelectedSearch] = useState("");


    const handleChange = (event) => {
        const {name,value} = event.target
        setSearch(prevSearch => {
            return {
                ...prevSearch,
                [name]: value
            }
        })
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
      />
      <DataDisplay
          searchInput={selectedSearch}
      />
    </div>
  );
}

export default App;
