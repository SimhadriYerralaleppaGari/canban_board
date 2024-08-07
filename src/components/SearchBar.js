import React from 'react';

function SearchBar({ setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search tasks..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ width: '100%', padding: '8px', marginBottom: '16px' }}
    />
  );
}

export default SearchBar;