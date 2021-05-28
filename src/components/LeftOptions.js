import Search from "./Search";
import Option from "./Option";
import Selection from "./Selection";

const LeftOptions = ({ stateCats, setStateCats, stateCat, setStateCat }) => {
  return (
    <div style={{ height: "100vh", display: "grid" }}>
      <Option Component={Search} />
      {stateCats.map((cat) => (
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
