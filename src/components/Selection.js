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
      <div className="col-xs-6 col-md-5">
        <div className="thumbnail">
          <img src={thumbnailUrl} alt={name} />
        </div>
        <span>{name}</span>
      </div>
      <span>{birthDate}</span>
    </div>
  );
};

export default Selection;
