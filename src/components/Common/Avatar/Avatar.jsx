import './Avatar.css';

const Avatar = ({ imgUrl, altText }) => {
  return (
    <div className="form-avatar-container">
      <img src={imgUrl} alt={altText} className="user-avatar" />
    </div>
  );
};

export default Avatar;
