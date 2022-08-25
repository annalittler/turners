import React from "react";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Modal({
  setModalState,
  modalState,
  searchResults,
  setSearchResults,
  inputQuery,
}) {
  console.log(modalState);
  console.log(searchResults);
  return (
    <div id="modal-bg">
      <div id="modal">
        <FontAwesomeIcon
          icon={faXmark}
          className="x-mark"
          onClick={() => setModalState(false)}
        />
        <div id="results-div">
          <h1>Showing search results for: {inputQuery}</h1>
          {searchResults != null &&
            searchResults.map((obj, index) => {
              return (
                <div className="results" key={obj.index}>
                  <h2 key={obj.index}>{obj.name}</h2>
                  <a target="_blank" href={obj.url} key={obj.index}>
                    {obj.url}
                  </a>
                  <p key={obj.index}>{obj.snippet}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
