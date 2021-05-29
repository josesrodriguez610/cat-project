import { formatDate } from "../utils/helperFunctions";

const Selection = ({ stateCats, cat, stateCat, setStateCats, setStateCat }) => {
  const { id, thumbnailUrl, birthDate, name } = cat;
  const handlePickCatClick = (id) => {
    let selectedCat = stateCats.find((cat) => cat.id === id);
    if (!stateCat || stateCat.id !== id) {
      selectedCat.viewsCount++;
      setStateCat({ ...selectedCat });
    }
  };

  return (
    <div
      onClick={() => handlePickCatClick(id)}
      key={id}
      style={{ cursor: "pointer" }}
    >
      <div className="col-xs-6 col-md-8">
        <div style={{ display: "flex" }}>
          <img
            style={{
              width: "150px",
              objectFit: "cover",
              boxShadow: "5px 5px 5px rgba(68, 68, 68, 0.6)",
              borderRadius: "5px",
            }}
            src={thumbnailUrl}
            alt={name}
          />
          <span>{name}</span>
        </div>
        <div>
          <span>{formatDate(birthDate)}</span>
        </div>
      </div>
    </div>
  );
};

export default Selection;
