import React, { useState } from 'react';

const DestinationFilter = ({ destinations, onFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleApplyFilter = () => {
    const filteredDestinations = destinations.filter((destination) =>
      destination.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    onFilter(filteredDestinations);
  };

  return (
    <div>
      <h2>Filter Destinasi Favorit</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Cari destinasi berdasarkan nama..."
      />
      <button onClick={handleApplyFilter}>Terapkan Filter</button>
    </div>
  );
};

export default DestinationFilter;
