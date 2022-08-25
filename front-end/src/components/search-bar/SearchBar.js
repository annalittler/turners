import { useState } from "react";
import Axios from "axios";
import "./SearchBar.css";

function SearchBar() {
  const [inputQuery, setInputQuery] = useState(undefined);
  const [searchResults, setSearchResults] = useState(null);
  const [notFound, setNotFound] = useState(false);

  // takes search box input, removes punctuation and assigns to inputQuery variable, ready to be searched
  const handleChange = (e) => {
    const userInput = e.target.value;
    const inputSpecCharsRemoved = userInput.replace(/[^a-z0-9]/gi, "").trim();
    setInputQuery(inputSpecCharsRemoved);
  };

  // run when user searches, checks for response to have data, if it does will add data to searchResults state, otherwise
  // turns notFound state to be true
  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(inputQuery);
    try {
      const response = await Axios.post("http://localhost:4000/search", {
        query: inputQuery,
      });
      const data = response.data;
      "webPages" in data
        ? setSearchResults(data.webPages.value)
        : setNotFound(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="search-bar">
      <form action="" onSubmit={handleSearch}>
        {/* <label htmlFor="">Search our FAQs:</label> */}
        <input
          type="text"
          onChange={handleChange}
          id="search-bar-input"
          placeholder="Search Our FAQs"
        />
        <button id="submit-btn">Search</button>
      </form>
      {searchResults != null &&
        searchResults.map((obj, index) => {
          return (
            <div className="result">
              <h2>{obj.name}</h2>
              <a target="_blank" href={obj.url}>
                {obj.url}
              </a>
              <p>{obj.snippet}</p>
            </div>
          );
        })}
      {notFound != false && <div>Not Found. Try again</div>}
    </div>
  );
}

export default SearchBar;
