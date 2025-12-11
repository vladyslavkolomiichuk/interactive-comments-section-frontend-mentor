import Button from '../Common/Button/Button';
import './DeleteModal.css';

const DeleteModal = ({ onCancel, onDelete }) => {
  return (
    <div className="modal-backdrop">
      <dialog className="modal-container">
        <h3 className="modal-title">Delete comment</h3>
        <p className="modal-text">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>

        <div className="modal-actions">
          <Button onClick={onCancel} className="btn-cancel">
            No, Cancel
          </Button>

          <Button onClick={onDelete} className="btn-delete">
            Yes, Delete
          </Button>
        </div>
      </dialog>
    </div>
  );
};

export default DeleteModal;
