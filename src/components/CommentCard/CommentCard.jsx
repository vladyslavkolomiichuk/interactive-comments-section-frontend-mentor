import Card from '../Card/Card.jsx';
import ScoreCounter from './ScoreCounter/ScoreCounter.jsx';
import './CommentCard.css';
import Avatar from '../Common/Avatar/Avatar.jsx';
import CommentActions from './CommentActions/CommentActions.jsx';
import { useComments } from '../../context/ContentContext.jsx';
import DeleteModal from '../Modal/DeleteModal.jsx';
import { useState } from 'react';
import { timeAgo } from '../../utils/timeAgo.js';
import useIsMobile from '../../hooks/useIsMobile.js';

const CommentCard = ({ comment, onReply, onEdit }) => {
  const isMobile = useIsMobile();

  const { currentUser, deleteComment } = useComments();

  const [isDeleting, setIsDeleting] = useState(false);

  const isOwnComment = currentUser.username === comment.user.username;

  if (isMobile) {
    return (
      <>
        <Card>
          <div className="comment-info">
            <Avatar
              imgUrl={comment.user.image.png}
              altText={comment.user.username}
            />

            <p className="username">{comment.user.username}</p>

            {isOwnComment && <span className="your-badge">you</span>}

            <p className="comment-data">{timeAgo(comment.createdAt)}</p>
          </div>

          <p className="comment-text">
            {comment.replyingTo && (
              <span className="replyingTo">@{comment.replyingTo}, </span>
            )}
            {comment.content}
          </p>

          <div className="nav">
            <ScoreCounter score={comment.score} commentId={comment.id} />
            <CommentActions
              isOwn={isOwnComment}
              onEdit={onEdit}
              onReply={onReply}
              onDelete={() => setIsDeleting(!isDeleting)}
            />
          </div>
        </Card>

        {isDeleting && (
          <DeleteModal
            onDelete={() => deleteComment(comment.id)}
            onCancel={() => setIsDeleting(false)}
          />
        )}
      </>
    );
  }

  return (
    <>
      <Card>
        <ScoreCounter score={comment.score} commentId={comment.id} />

        <div className="main-section">
          <div className="nav">
            <div className="comment-info">
              <Avatar
                imgUrl={comment.user.image.png}
                altText={comment.user.username}
              />

              <p className="username">{comment.user.username}</p>

              {isOwnComment && <span className="your-badge">you</span>}

              <p className="comment-data">{timeAgo(comment.createdAt)}</p>
            </div>

            <CommentActions
              isOwn={isOwnComment}
              onEdit={onEdit}
              onReply={onReply}
              onDelete={() => setIsDeleting(!isDeleting)}
            />
          </div>

          <p className="comment-text">
            {comment.replyingTo && (
              <span className="replyingTo">@{comment.replyingTo}, </span>
            )}
            {comment.content}
          </p>
        </div>
      </Card>

      {isDeleting && (
        <DeleteModal
          onDelete={() => deleteComment(comment.id)}
          onCancel={() => setIsDeleting(false)}
        />
      )}
    </>
  );
};

export default CommentCard;
