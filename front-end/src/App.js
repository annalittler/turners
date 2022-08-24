import "./App.css";

import { useState } from "react";
import Search from "./Search";
import Axios from "axios";

function App() {
  const [inputQuery, setInputQuery] = useState("hello");

  const handleChange = (e) => {
    setInputQuery(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post("http://localhost:4000/search", {
        query: inputQuery,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      hello
      <form action="" onSubmit={handleSearch}>
        <input type="text" onChange={handleChange} />
        <button>Submit</button>
      </form>
      sdfsdfsdf
    </div>
  );
}

export default App;
