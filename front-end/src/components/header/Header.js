import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faChevronDown,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import TurnersLogo from "./assets/turners-cars-logo.png";
import Axios from "axios";

export default function Header({
  searchResults,
  setSearchResults,
  setModalState,
  inputQuery,
  setInputQuery,
}) {
  //   const [searchResults, setSearchResults] = useState(null);
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
        <a href="">Cars</a>|<a href="">Turners Subscription</a>|
        <a href="">Trucks &amp; Machinery</a>|
        <a href="">Damages &amp; End of Life</a>|<a href="">Motorcycles</a>|
        <a href="">General Goods</a>|
        <a href="">Buses, Caravans &amp; Motorhomes</a>
      </div>
      <div id="header-middle-row">
        <img src={TurnersLogo} alt="Turners Logo" id="header-turners-logo" />
        <span id="header-middle-row-links">
          <p className="header-login">
            <FontAwesomeIcon icon={faUser} id="user-icon" />
            <a href="">LOGIN </a>
            OR
            <a href=""> REGISTER</a>
          </p>
          <p className="header-phone">
            <FontAwesomeIcon icon={faPhone} id="phone-icon" />
            0800 887 637
          </p>
          <p className="header-find-us">
            <FontAwesomeIcon icon={faLocationDot} id="location-icon" />
            Find Us
          </p>
          <p className="header-chinese" id="chinese">
            中文
          </p>
        </span>
      </div>
      <div id="bottom-row">
        <span className="bottom-row-left-span">
          <p className="br-find-car">
            <FontAwesomeIcon icon={faMagnifyingGlass} id="mag-glass" />
            Find a Car
          </p>
          <p className="br-how-to-buy">
            How to Buy
            <FontAwesomeIcon icon={faChevronDown} id="down-arrow" />
          </p>
          <p className="br-sell-car">
            Sell your Car
            <FontAwesomeIcon icon={faChevronDown} id="down-arrow" />
          </p>
          <p className="br-finance">
            Finance &amp; Insurance
            <FontAwesomeIcon icon={faChevronDown} id="down-arrow" />
          </p>
          <p className="br-subscription">
            Turners Subscription
            <FontAwesomeIcon icon={faChevronDown} id="down-arrow" />
          </p>
          <form
            action=""
            onSubmit={handleSearch}
            className={notFound ? "not-found" : "search-form"}
          >
            <input
              type="text"
              onChange={handleChange}
              id="search-bar-input"
              placeholder="Search Our FAQs"
            />
            <button id="submit-btn">Search</button>
          </form>
        </span>
        <span className="bottom-row-right-span">
          <p className="br-auctions">
            Auctions
            <FontAwesomeIcon icon={faChevronDown} id="down-arrow" />
          </p>
          <p className="br-services-info">
            Services &amp; Info
            <FontAwesomeIcon icon={faChevronDown} id="down-arrow" />
          </p>
        </span>
      </div>
    </div>
  );
}
