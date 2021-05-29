import { formatDate } from "../utils/helperFunctions";
import "../styles/RightDisplay.css";
const RightDisplay = ({ cat }) => {
  // const { id, thumbnailUrl, name, birthDate, ownerName, viewsCount } = cat;
  return (
    <div className="rightDisplay">
      {cat && (
        <div className="col-sm-6 col-md-4 rightDisplay-container">
          <div>
            <img
              className="rightDisplay-img"
              src={cat.thumbnailUrl}
              alt={cat.name}
            />
            <div className="caption">
              <h3>{cat.name}</h3>
              <p>{formatDate(cat.birthDate)}</p>
              <p>{cat.ownerName}</p>
              <p>Number of views: {cat.viewsCount} times</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightDisplay;
