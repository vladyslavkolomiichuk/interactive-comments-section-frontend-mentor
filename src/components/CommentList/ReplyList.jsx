import CommentNode from '../CommentNode/CommentNode';
import './ReplyList.css';

const ReplyList = ({ replies }) => {
  return (
    <div className="reply-container">
      <div className="reply-line" />
      <div className="reply-list">
        {replies.map((reply) => (
          <CommentNode key={reply.id} comment={reply} />
        ))}
      </div>
    </div>
  );
};

export default ReplyList;
