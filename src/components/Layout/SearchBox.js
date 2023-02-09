import React, { useState } from "react";

function SearchBox() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = event => {
    setSearchValue(event.target.value);

    const results = document.querySelectorAll("[data-searchable]");
    const filteredResults = Array.from(results).filter(result =>
      result.textContent.toLowerCase().includes(searchValue.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearch}
        placeholder="Search..."
      />
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result.textContent}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBox;