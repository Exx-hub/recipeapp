import React, { useState } from "react";

function Form({ getQuery }) {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
    setInput("");
    getQuery(query);
  };

  // idk why this is not working as expected. i need to click twice for the
  // set functions to manifest

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
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
    </div>
  );
}

export default Form;
