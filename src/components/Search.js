import { FaSearch } from "react-icons/fa";
import "../styles/Search.css";

const Search = () => {
  return (
    <>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input className="search-input" type="text" />
      </div>
    </>
  );
};

export default Search;
