const FormEdit = () => {
  return (
    <form>
      <div class="form-group row">
        <label for="inputThumbnail" class="col-sm-2 col-form-label">
          Thumbnail URL
        </label>
        <div class="col-sm-7">
          <input
            type="text"
            class="form-control"
            id="inputThumbnail"
            // placeholder="Email"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputName" class="col-sm-2 col-form-label">
          Name
        </label>
        <div class="col-sm-7">
          <input
            type="text"
            class="form-control"
            id="inputName"
            // placeholder="Email"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputBirthDate" class="col-sm-2 col-form-label">
          Date
        </label>
        <div class="col-sm-7">
          <input
            class="form-control"
            type="date"
            value="2011-08-19"
            id="inputBirthDate"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputBirthDate" class="col-sm-2 col-form-label">
          Owner
        </label>
        <div class="col-sm-7">
          <select class="form-control" id="exampleSelect1">
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
