import { useState } from "react";


const FilterEpi = ({ characters, onFilterChange }) => {
  const [filters, setFilters] = useState({
    name: 'all',
    episode : 'all'
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

      {/* for Episodes */}
      <div className="filter">
        <label>Episode</label>
        <select value={filters.episode} onChange={(e) => handleFilterChange(e, 'episode')}>
          <option value="all">All</option>
          {characters &&
            characters.map((item, index) => (
              <option key={index} value={item.episode}>
                {item.episode}
              </option>
            ))}
        </select>
      </div>

    </div>
  );
};

export default FilterEpi;