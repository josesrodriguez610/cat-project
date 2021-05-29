const FormEdit = ({
  thumbnail,
  setThumbnail,
  name,
  setName,
  date,
  setDate,
  owner,
  setOwner,
}) => {
  return (
    <form>
      <div className="form-group row">
        <label htmlFor="inputThumbnail" className="col-sm-2 col-form-label">
          Thumbnail URL
        </label>
        <div className="col-sm-7">
          <input
            type="text"
            className="form-control"
            id="inputThumbnail"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            // placeholder="Email"
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="inputName" className="col-sm-2 col-form-label">
          Name
        </label>
        <div className="col-sm-7">
          <input
            type="text"
            className="form-control"
            id="inputName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            // placeholder="Email"
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="inputBirthDate" className="col-sm-2 col-form-label">
          Birth date
        </label>
        <div className="col-sm-7">
          <input
            className="form-control"
            type="date"
            pattern="\d{4}-\d{2}-\d{2}"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="inputOwner" className="col-sm-2 col-form-label">
          Owner
        </label>
        <div className="col-sm-7">
          <select
            className="form-control"
            id="inputOwner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          >
            <option>Select</option>
            <option>John Doe</option>
            <option>Jane Doe</option>
            <option>Kate Debarros</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default FormEdit;
