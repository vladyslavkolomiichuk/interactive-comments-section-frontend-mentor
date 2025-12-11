import { useState } from 'react';
import Card from '../Card/Card';
import Button from '../Common/Button/Button.jsx';
import './CommentForm.css';
import Avatar from '../Common/Avatar/Avatar.jsx';
import TextArea from '../Common/TextArea/TextArea.jsx';
import { useComments } from '../../context/ContentContext.jsx';
import useIsMobile from '../../hooks/useIsMobile.js';

const CommentForm = ({
  handleSubmit,
  submitLabel = 'Send',
  initialText = '',
}) => {
  const isMobile = useIsMobile();

  const { currentUser } = useComments();

  const [text, setText] = useState(initialText);

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(text);
    setText('');
  };

  if (isMobile) {
    return (
      <form onSubmit={onSubmit}>
        <Card>
          <TextArea value={text} onChange={(e) => setText(e.target.value)} />

          <div className="mobile-nav">
            <Avatar
              imgUrl={currentUser.image.png}
              altText={currentUser.username}
            />
            <div className="form-button-container">
              <Button type="submit">{submitLabel}</Button>
            </div>
          </div>
        </Card>
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <Card>
        <Avatar imgUrl={currentUser.image.png} altText={currentUser.username} />

        <TextArea value={text} onChange={(e) => setText(e.target.value)} />

        <div className="form-button-container">
          <Button type="submit">{submitLabel}</Button>
        </div>
      </Card>
    </form>
  );
};

export default CommentForm;
