import { useState } from 'react';
import CommentCard from '../CommentCard/CommentCard';
import CommentForm from '../CommentsForm/CommentForm';
import ReplyList from '../CommentList/ReplyList';
import './CommentNode.css';
import { useComments } from '../../context/ContentContext';

const CommentNode = ({ comment }) => {
  const { updateComment, addReply } = useComments();

  const [activeAction, setActiveAction] = useState({ type: null });

  const toggleAction = (type) => {
    if (activeAction.type === type) {
      setActiveAction({ type: null });
    } else {
      setActiveAction({ type: type });
    }
  };
  return (
    <div className="comment-node-container">
      <div>
        <CommentCard
          comment={comment}
          onReply={() => toggleAction('REPLY')}
          onEdit={() => toggleAction('EDIT')}
        />

        {activeAction.type === 'REPLY' && (
          <div className="reply-form-container" style={{ marginTop: '10px' }}>
            <CommentForm
              submitLabel="REPLY"
              handleSubmit={(text) => {
                addReply(comment.id, text, comment.user.username);
                setActiveAction({ type: null });
              }}
              initialText={`@${comment.user.username}, `}
            />
          </div>
        )}

        {activeAction.type === 'EDIT' && (
          <div className="reply-form-container" style={{ marginTop: '10px' }}>
            <CommentForm
              submitLabel="UPDATE"
              initialText={comment.content}
              handleSubmit={(text) => {
                updateComment(comment.id, text);
                setActiveAction({ type: null });
              }}
            />
          </div>
        )}
      </div>

      {comment.replies && comment.replies.length > 0 && (
        <ReplyList replies={comment.replies} />
      )}
    </div>
  );
};

export default CommentNode;
