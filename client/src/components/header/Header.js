import React, { useState } from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import TurnersLogo from "./assets/turners-cars-logo.png";
import Axios from "axios";
import Button from "../Button/Button";

const validateString = require("./ValidateString");

export default function Header({
  searchResults,
  setSearchResults,
  setModalState,
  inputQuery,
  setInputQuery,
}) {
  //   const [searchResults, setSearchResults] = useState(null);
  const [notFound, setNotFound] = useState(false);

  // takes search box input, removes punctuation and assigns to inputQuery variable,
  //   ready to be searched
  const handleChange = (e) => {
    const userInput = e.target.value;
    setInputQuery(validateString(userInput));
  };

  // run when user searches, checks for response to have data, if it does will add data
  //   to searchResults state, otherwise turns notFound state to be true
  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(inputQuery);
    try {
      const response = await Axios.post("http://localhost:4000/search", {
        query: inputQuery,
      });
      const data = response.data;
      if ("webPages" in data) {
        setSearchResults(data.webPages.value);
        setModalState(true);
      } else {
        setNotFound(true);
      }
      console.log(searchResults);
      console.log(notFound);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="header">
      <div id="header-top-row">
        <img src={TurnersLogo} alt="Turners Logo" id="header-turners-logo" />
        <div className="header-btns">
          <Button value="LOGIN" className="nav-btn" />
          <Button value="REGISTER" className="nav-btn" />
        </div>
      </div>
      <div id="nav-bar">
        <span className="nav-links">
          <a href="/" className="br-find-car">
            Find a Car
          </a>
          <a href="/" className="br-how-to-buy">
            How to Buy
          </a>
          <a href="/" className="br-sell-car">
            Sell your Car
          </a>
          <a href="/" className="br-finance">
            Finance
          </a>
          <a href="/" className="br-insurance active">
            Insurance
          </a>
          <a href="/" className="br-auctions">
            Auctions
          </a>
          <a href="/" className="br-services-info">
            Services &amp; Info
          </a>
        </span>
        <form
          action=""
          onSubmit={handleSearch}
          className={notFound ? "not-found" : "search-form"}
        >
          <input
            type="text"
            onChange={handleChange}
            id="search-bar-input"
            placeholder="Search"
          />
        </form>
      </div>
    </div>
  );
}
