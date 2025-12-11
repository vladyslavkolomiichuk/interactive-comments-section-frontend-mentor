import './TextArea.css';

const TextArea = ({ value, onChange, placeholder = 'Add a comment...' }) => {
  return (
    <textarea
      className="comment-input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextArea;
