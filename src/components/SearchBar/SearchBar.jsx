import PropTypes from "prop-types";
import SearchIcon from "../../icons/SearchIcon";

const SearchBar = ({ setSearchQuery }) => {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value); // Update the search query state in the parent component
  };

  return (
    <div className="flex gap-2 items-center my-2">
      <div className="w-full">
        <input
          className="px-3 py-2 border w-full border-black rounded"
          type="text"
          placeholder="cari lowongan"
          id="search"
          onChange={handleInputChange} // Handle input change
        />
      </div>
      <button className="bg-primary-blue p-3 rounded">
        <SearchIcon className={"stroke-white w-[20px]"} />
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
};

export default SearchBar;
