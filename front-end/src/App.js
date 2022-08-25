import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header";
import SearchBar from "./components/search-bar/SearchBar";
import BodyPlaceholder from "./components/body-placeholder/BodyPlaceholder";
import Modal from "./components/modal/Modal";

function App() {
  const [modalState, setModalState] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [inputQuery, setInputQuery] = useState(undefined);

  return (
    <div className="App">
      {modalState === true && (
        <Modal
          modalState={modalState}
          setModalState={setModalState}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          inputQuery={inputQuery}
          setInputQuery={setInputQuery}
        />
      )}
      <Header
        inputQuery={inputQuery}
        setInputQuery={setInputQuery}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        modalState={modalState}
        setModalState={setModalState}
      />
      <BodyPlaceholder />
    </div>
  );
}

export default App;
