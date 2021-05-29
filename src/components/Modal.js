import "../styles/Modal.css";

const Modal = (props) => {
  const {
    handleSubmit,
    setModalCancel,
    title,
    leftButtonTitle,
    Component,
    leftButtonColor,
  } = props;

  return (
    <div className="modal-dialog modalContainer">
      <div className="modal-content">
        <div className="modal-header header-style">
          <h3 className="modal-title modalTitle">{title}</h3>
          <button
            onClick={() => setModalCancel(false)}
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {Component && (
          <div className="modal-body body-container">
            <Component {...props} />
          </div>
        )}
        <div className="modal-footer">
          <button
            type="button"
            className={`btn ${leftButtonColor}`}
            onClick={handleSubmit}
          >
            {leftButtonTitle}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
            onClick={() => setModalCancel(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
