const Modal = (props) => {
  const {
    handleDeleteFromList,
    setModalCancel,
    title,
    leftButtonTitle,
    Component,
  } = props;

  return (
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{title}</h5>
          <button
            onClick={() => setModalCancel(false)}
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {Component && (
          <div class="modal-body">
            <Component {...props} />
          </div>
        )}
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            onClick={handleDeleteFromList}
          >
            {leftButtonTitle}
          </button>
          <button
            type="button"
            class="btn btn-secondary"
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
