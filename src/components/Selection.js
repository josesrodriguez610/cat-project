import { formatDate } from "../utils/helperFunctions";
import "../styles/Selection.css";

const Selection = ({ stateCats, cat, stateCat, setStateCat }) => {
  const { id, thumbnailUrl, birthDate, name } = cat;
  const handlePickCatClick = (id) => {
    let selectedCat = stateCats.find((cat) => cat.id === id);
    if (!stateCat || stateCat.id !== id) {
      selectedCat.viewsCount++;
      setStateCat({ ...selectedCat });
    }
  };

  return (
    <div className="selection" onClick={() => handlePickCatClick(id)} key={id}>
      <div className="col-xs-6 col-md-8">
        <div>
          <img className="selection-img" src={thumbnailUrl} alt={name} />
          <span className="selection-name">{name}</span>
        </div>
        <div>
          <span className="selection-birthday">{formatDate(birthDate)}</span>
        </div>
      </div>
    </div>
  );
};

export default Selection;
