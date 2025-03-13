import React from "react";

const Filter = ({ titleFilter, rateFilter, setTitleFilter, setRateFilter }) => {
  return (
    <div className="">
      <input
        type="text"
        placeholder="Search by title"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />

      <div className="">
        <label htmlFor="ratings">Minimum Rating:</label>
        <input
          name="ratings"
          type="number"
          min={0}
          max={10}
          step={0.5}
          value={rateFilter}
          onChange={(e) => setRateFilter(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Filter;
