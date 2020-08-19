import React, { useState, useEffect } from "react";
import "./App.css";

import RecipeList from "./components/RecipeList";

function App() {
  const APP_ID = "e7f7546c";
  const APP_KEY = "8132d01ca10a402f52afd972b6ad7460";

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("chicken");
  const [input, setInput] = useState("");

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  // const getQuery = (q) => {
  //   setQuery(q);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
    setInput("");
    // getQuery(query);
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-bar"
          type="text"
          value={input}
          onChange={onChange}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {/*<Form getQuery={getQuery} />*/}
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
