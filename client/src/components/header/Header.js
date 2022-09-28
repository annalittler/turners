import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
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
        <Link to="/">
          <img src={TurnersLogo} alt="Turners Logo" id="header-turners-logo" />
        </Link>
        <div className="header-btns">
          <Button value="LOGIN" className="nav-btn" />
          <Button value="REGISTER" className="nav-btn" />
        </div>
      </div>
      <div id="nav-bar">
        <nav>
          <NavLink
            to="cars"
            className={({ isActive }) => (isActive ? "active" : "nav-link")}
          >
            Find a Car
          </NavLink>
          <NavLink
            to="/how-to-buy"
            className={({ isActive }) => (isActive ? "active" : "nav-link")}
          >
            How To Buy
          </NavLink>
          <NavLink
            to="/sell"
            className={({ isActive }) => (isActive ? "active" : "nav-link")}
          >
            Sell your Car
          </NavLink>
          <NavLink
            to="/finance"
            className={({ isActive }) => (isActive ? "active" : "nav-link")}
          >
            Finance
          </NavLink>
          <NavLink
            to="/insurance"
            className={({ isActive }) => (isActive ? "active" : "nav-link")}
          >
            Insurance
          </NavLink>
          <NavLink
            to="/auctions"
            className={({ isActive }) => (isActive ? "active" : "nav-link")}
          >
            Auctions
          </NavLink>
          <NavLink
            to="/info"
            className={({ isActive }) => (isActive ? "active" : "nav-link")}
          >
            Services &amp; Info
          </NavLink>
        </nav>
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
