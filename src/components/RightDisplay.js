import { formatDate } from "../utils/helperFunctions";
const RightDisplay = ({ cat }) => {
  // const { id, thumbnailUrl, name, birthDate, ownerName, viewsCount } = cat;
  return (
    <div className="row">
      {cat && (
        <div className="col-sm-6 col-md-4" style={{ border: "none" }}>
          <div>
            <img
              width={600}
              style={{ objectFit: "contain" }}
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
