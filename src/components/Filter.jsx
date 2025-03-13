import React from "react";

const Filter = ({ titleFilter, rateFilter, setTitleFilter, setRateFilter }) => {
  return (
    <div className=" w-full flex flex-col gap-4 my-4 py-4 px-5">
      <h1 className="font-bold text-2xl text-center">Search Movie</h1>
      <div className="flex flex-col px-4">
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="text"
          placeholder="Search by title"
          value={titleFilter}
          onChange={(e) => setTitleFilter(e.target.value)}
          className="p-4 w-full outline  rounded-md"
        />
      </div>

      <div className="flex flex-col px-4">
        <label htmlFor="ratings">Minimum Rating:</label>
        <input
          name="ratings"
          type="number"
          min={0}
          max={10}
          step={0.5}
          value={rateFilter}
          onChange={(e) => setRateFilter(parseFloat(e.target.value))}
          className="p-4 outline rounded-md"
        />
      </div>
    </div>
  );
};

export default Filter;
