import './CommentActions.css';
import { ReactComponent as ReplyIcon } from '../../../assets/icons/icon-reply.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/icons/icon-delete.svg';
import { ReactComponent as EditIcon } from '../../../assets/icons/icon-edit.svg';

const CommentActions = ({ isOwn, onReply, onDelete, onEdit }) => {
  return (
    <div className="comment-actions">
      {isOwn ? (
        <>
          <button className="action-btn delete-btn" onClick={onDelete}>
            <DeleteIcon />
            Delete
          </button>

          <button className="action-btn" onClick={onEdit}>
            <EditIcon />
            Edit
          </button>
        </>
      ) : (
        <button className="action-btn" onClick={onReply}>
          <ReplyIcon />
          Reply
        </button>
      )}
    </div>
  );
};

export default CommentActions;
