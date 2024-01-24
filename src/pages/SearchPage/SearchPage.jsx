import React, { useState } from "react";
import "./SearchPage.css";
import axios from "axios";

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Handle search logic here
    alert(`Searching for books with term: ${searchTerm}`);
  };

  return (
    <div className="book-search-container">
      <input
        type="text"
        placeholder="Enter title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchPage;
