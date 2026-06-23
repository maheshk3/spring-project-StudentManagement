import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-box-container glass-card">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        placeholder="Instantly isolate by Name, Email, or Specialization Course..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input-field"
      />
      {searchTerm && (
        <button className="clear-search" onClick={() => setSearchTerm('')}>&times;</button>
      )}
    </div>
  );
}

export default SearchBar;