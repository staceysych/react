import React from 'react';

const searchText = 'Type here to search';
const SearchPanel = () => (
  <input
    type="text"
    placeholder={searchText}
    className="form-control search-input"
  />
);

export default SearchPanel;
