import Search from "./Search";
import Option from "./Option";
import Selection from "./Selection";

const LeftOptions = ({
  stateCats,
  setStateCats,
  stateCat,
  setStateCat,
  searchInput,
  setSearchInput,
}) => {
  return (
    <div style={{ height: "100vh", display: "grid" }}>
      <Option
        Component={Search}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      {stateCats
        .filter((cat) =>
          !searchInput || /^\s*$/.test(searchInput)
            ? cat
            : cat.name.toLowerCase().includes(searchInput.toLowerCase())
        )
        .map((cat) => (
          <>
            <Option
              Component={Selection}
              stateCats={stateCats}
              stateCat={stateCat}
              setStateCats={setStateCats}
              cat={cat}
              setStateCat={setStateCat}
            />
          </>
        ))}
    </div>
  );
};

export default LeftOptions;
