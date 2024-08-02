import React, { useState } from 'react';

const SearchBar = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState('');

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(term);
  };

  return (
    <div className="search-bar">
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          value={term}
          onChange={onInputChange}
          placeholder="Search for images..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
