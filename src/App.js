import { useState } from "react";
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

  const handleDeleteFromList = () => {
    if (stateCat) {
      let updatedCats = stateCats.filter((cat) => cat.id !== stateCat.id);
      setStateCats(updatedCats);
      setStateCat(null);
      setDeleteConfirmationModalOpen(false);
    }
  };

  return (
    <div className=" app container">
      <div className="row">
        <div className="col-md-4">
          <LeftOptions
            stateCats={stateCats}
            setStateCats={setStateCats}
            stateCat={stateCat}
            setStateCat={setStateCat}
          />
        </div>
        <div className="col-md-8">
          <RightDisplay cat={stateCat} />
          {stateCat && (
            <>
              <h1 onClick={() => setEditCatModalOpen(true)} disabled={true}>
                edit
              </h1>{" "}
              |
              <h1 onClick={() => setDeleteConfirmationModalOpen(true)}>
                Delete
              </h1>
            </>
          )}
        </div>
      </div>
      {editCatModalOpen && stateCat && (
        <div className="edit-modal">
          <Modal
            title={`Edit ${stateCat.name}`}
            leftButtonTitle="Save"
            handleDeleteFromList={handleDeleteFromList}
            setModalCancel={setEditCatModalOpen}
            Component={FormEdit}
          />
        </div>
      )}
      {deleteConfirmationModalOpen && stateCat && (
        <div className="delete-modal">
          <Modal
            title="Are you sure you want to delete this cat?"
            leftButtonTitle="Delete"
            handleDeleteFromList={handleDeleteFromList}
            setModalCancel={setDeleteConfirmationModalOpen}
          />
        </div>
      )}
    </div>
  );
}

export default App;
