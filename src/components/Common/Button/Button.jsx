import './Button.css';

const Button = ({ children, className, ...props }) => {
  return (
    <button className={`comment-button ${className || ''}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
