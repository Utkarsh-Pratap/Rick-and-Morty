import { useState } from "react";


const FilterChar = ({ characters, onFilterChange }) => {
  const [filters, setFilters] = useState({
    name: 'all',
    status: 'all',
    species: 'all',
    type: 'all',
    gender: 'all',
  });

  const handleFilterChange = (e, filterType) => {
    const newFilters = { ...filters, [filterType]: e.target.value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="filter-box">
      {/* for Name */}
      <div className="filter">
        <label>Name</label>
        <select value={filters.name} onChange={(e) => handleFilterChange(e, 'name')}>
          <option value="all">All</option>
          {characters &&
            characters.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
        </select>
      </div>

      {/* for Status */}
      <div className="filter">
        <label>Status</label>
        <select value={filters.status} onChange={(e) => handleFilterChange(e, 'status')}>
          <option value="all">All</option>
              <option>Dead</option>
              <option>Alive</option>
        </select>
      </div>

      {/* for species */}
      <div className="filter">
        <label>Species</label>
        <select value={filters.species} onChange={(e) => handleFilterChange(e, 'species')}>
          <option value="all">All</option>
              <option>Human</option>
              <option>Alien</option>
        </select>
      </div>

      {/* for Type */}
      <div className="filter">
        <label>Type</label>
        <select value={filters.type} onChange={(e) => handleFilterChange(e, 'type')}>
          <option value="all">All</option>
          <option>Genetic experiment</option>
          <option>Superhuman (Ghost trains summoner)</option>
          <option>Parasite</option>
          <option>Human with antennae</option>
          <option>Human with ants in his eyes</option>
        </select>
      </div>

      {/* for Gender */}
      <div className="filter">
        <label>Gender</label>
        <select value={filters.gender} onChange={(e) => handleFilterChange(e, 'gender')}>
          <option value="all">All</option>
          <option>Male</option>
          <option>Female</option>
          <option>unknown</option>
        </select>
      </div>
    </div>
  );
};

export default FilterChar;