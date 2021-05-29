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
    <div className="row" style={{ height: "100vh", padding: "0px" }}>
      <div
        style={{
          height: "20%",
          borderBottom: "1px solid",
          borderLeft: "1px solid",
          padding: "0px",
        }}
      >
        <Option
          Component={Search}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </div>
      <div style={{ height: "80%", overflow: "auto" }}>
        {stateCats
          .filter((cat) =>
            !searchInput || /^\s*$/.test(searchInput)
              ? cat
              : cat.name.toLowerCase().includes(searchInput.toLowerCase())
          )
          .map((cat) => (
            <div
              style={{
                height: "34%",
                borderTop: "1px solid",
                paddingLeft: "40px",
              }}
            >
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
