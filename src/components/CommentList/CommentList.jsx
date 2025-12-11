import CommentNode from '../CommentNode/CommentNode.jsx';
import './CommentList.css';

const CommentList = ({ comments }) => {
  return (
    <section className="comment-list">
      {comments.map((comment) => (
        <CommentNode key={comment.id} comment={comment} />
      ))}
    </section>
  );
};

export default CommentList;
