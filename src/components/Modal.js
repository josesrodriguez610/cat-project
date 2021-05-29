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
    <div className="modal-dialog" style={{ width: "60%" }}>
      <div className="modal-content">
        <div className="modal-header hey">
          <h3 className="modal-title" style={{ paddingRight: "80%" }}>
            {title}
          </h3>
          <button
            onClick={() => setModalCancel(false)}
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true" style={{ padding: "0px", margin: "0px" }}>
              &times;
            </span>
          </button>
        </div>
        {Component && (
          <div className="modal-body" style={{ height: "400px" }}>
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
