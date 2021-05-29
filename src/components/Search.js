import { FaSearch } from "react-icons/fa";
import "../styles/Search.css";

const Search = ({ searchInput, setSearchInput }) => {
  return (
    <>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="search-input"
          type="text"
        />
      </div>
    </>
  );
};

export default Search;
