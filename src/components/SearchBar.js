import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Search for a Video</label>
          <input type="text" value={term} onChange={onInputChange}></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
