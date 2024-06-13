import PropTypes from 'prop-types';
import SearchIcon from '../../icons/SearchIcon';
import { useState } from 'react';

const SearchBar = ({setSearchQuery}) => {
  const [search, setSearch] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(search);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center my-2">
      <div className="w-full">
        <input
          className="px-3 py-2 border w-full border-black rounded"
          type="text"
          name="search"
          placeholder="cari lowongan"
          id="search"
          onChange={handleSearch}
        />
      </div>
      <button className="bg-primary-blue p-3 rounded">
        <SearchIcon className={'stroke-white w-[20px]'} />
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
};

export default SearchBar;
