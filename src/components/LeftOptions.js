import Search from "./Search";
import Option from "./Option";
import Selection from "./Selection";
import "../styles/leftOption.css";

const LeftOptions = ({
  stateCats,
  setStateCats,
  stateCat,
  setStateCat,
  searchInput,
  setSearchInput,
}) => {
  return (
    <div className="row left-container bg-primary">
      <div className="left-container-search">
        <Option
          Component={Search}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </div>
      <div className="left-container-catOptions">
        {stateCats
          .filter((cat) =>
            !searchInput || /^\s*$/.test(searchInput)
              ? cat
              : cat.name.toLowerCase().includes(searchInput.toLowerCase())
          )
          .map((cat) => (
            <div className="option-container">
              <Option
                Component={Selection}
                stateCats={stateCats}
                stateCat={stateCat}
                setStateCats={setStateCats}
                cat={cat}
                setStateCat={setStateCat}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default LeftOptions;
