import { useState, useEffect } from "react";
import LeftOptions from "./components/LeftOptions";
import RightDisplay from "./components/RightDisplay";
import { cats } from "./utils/data";
import "./App.css";
import Modal from "./components/Modal";
import FormEdit from "./components/FormEdit";

function App() {
  const [stateCats, setStateCats] = useState(cats);
  const [stateCat, setStateCat] = useState(null);
  const [editCatModalOpen, setEditCatModalOpen] = useState(false);
  const [deleteConfirmationModalOpen, setDeleteConfirmationModalOpen] =
    useState(false);
  const [thumbnail, setThumbnail] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [owner, setOwner] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("stateCats");
    try {
      if (data) {
        setStateCats(JSON.parse(data));
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("stateCats", JSON.stringify(stateCats));
  });

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const findCat = stateCats.find((cat) => cat.id === stateCat.id);
    findCat.thumbnailUrl =
      !thumbnail || /^\s*$/.test(thumbnail) ? stateCat.thumbnailUrl : thumbnail;
    findCat.name = !name || /^\s*$/.test(name) ? stateCat.name : name;
    findCat.birthDate = !date || /^\s*$/.test(date) ? stateCat.birthDate : date;
    findCat.ownerName =
      !owner || /^\s*$/.test(owner) ? stateCat.ownerName : owner;
    setStateCat(findCat);
    setEditCatModalOpen(false);
    setThumbnail("");
    setName("");
    setDate("");
    setOwner("");
  };

  const handleDeleteFromList = () => {
    if (stateCat) {
      let updatedCats = stateCats.filter((cat) => cat.id !== stateCat.id);
      setStateCats(updatedCats);
      setStateCat(null);
      setDeleteConfirmationModalOpen(false);
    }
  };

  return (
    <div className="app">
      <div className="row">
        <div className="col-md-4 leftOption">
          <LeftOptions
            stateCats={stateCats}
            setStateCats={setStateCats}
            stateCat={stateCat}
            setStateCat={setStateCat}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        </div>
        <div className="col-md-7">
          <RightDisplay cat={stateCat} />
          {stateCat && (
            <div className="options-bottom">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => setEditCatModalOpen(true)}
              >
                edit
              </button>{" "}
              <button
                className="btn btn-danger btn-lg"
                onClick={() => setDeleteConfirmationModalOpen(true)}
              >
                delete
              </button>
            </div>
          )}
        </div>
      </div>
      {editCatModalOpen && stateCat && (
        <div className="edit-modal">
          <Modal
            title={`Edit ${stateCat.name}`}
            leftButtonTitle="Save"
            leftButtonColor="btn-primary"
            handleDeleteFromList={handleDeleteFromList}
            setModalCancel={setEditCatModalOpen}
            Component={FormEdit}
            thumbnail={thumbnail}
            setThumbnail={setThumbnail}
            name={name}
            setName={setName}
            date={date}
            setDate={setDate}
            owner={owner}
            setOwner={setOwner}
            handleSubmit={handleEditSubmit}
          />
        </div>
      )}
      {deleteConfirmationModalOpen && stateCat && (
        <div className="delete-modal">
          <Modal
            title={`Delete ${stateCat.name}`}
            leftButtonTitle="Delete"
            leftButtonColor="btn-danger"
            handleSubmit={handleDeleteFromList}
            setModalCancel={setDeleteConfirmationModalOpen}
          />
        </div>
      )}
    </div>
  );
}

export default App;
