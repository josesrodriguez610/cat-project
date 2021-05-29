const Modal = (props) => {
  const { handleSubmit, setModalCancel, title, leftButtonTitle, Component } =
    props;

  return (
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{title}</h5>
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
          <div className="modal-body">
            <Component {...props} />
          </div>
        )}
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-primary"
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
