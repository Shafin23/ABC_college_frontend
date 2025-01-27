import { useState } from 'react';

const Banner = ({ search, setSearch }) => {
  const handleSearchChange = (e) => setSearch(e.target.value);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      alert(`Searching for: ${search}`);
    }
  };

  const handleClearSearch = () => {
    setSearch("");
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Find Your Dream College</h1>
      <p className="text-lg mb-6">Discover the best colleges and book your spot!</p>
      <form onSubmit={handleSearchSubmit} className="flex justify-center">
        <input
          type="text"
          placeholder="Search for a college..."
          className="input input-ghost w-full max-w-xs text-gray-700 border-none rounded-l-lg px-4 py-2 focus:outline-none"
          value={search}
          onChange={handleSearchChange}
        />
        {search ? (
          <button
            type="button"
            onClick={handleClearSearch}
            className="btn btn-secondary rounded-r-lg"
          >
            Clear
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-primary rounded-r-lg"
          >
            Search
          </button>
        )}
      </form>
    </div>
  );
};

export default Banner;
