import { useState } from 'react';
import './ScoreCounter.css';
import { ReactComponent as PlusIcon } from '../../../assets/icons/icon-plus.svg';
import { ReactComponent as MinusIcon } from '../../../assets/icons/icon-minus.svg';
import { useComments } from '../../../context/ContentContext';

const ScoreCounter = ({ score, commentId }) => {
  const { updateScore } = useComments();

  return (
    <div className="score-counter">
      <button
        className="score-btn"
        onClick={() => updateScore(commentId, 'plus')}
        aria-label="Upvote"
      >
        <PlusIcon />
      </button>

      <span className="score-number">{score}</span>

      <button
        className="score-btn"
        onClick={() => updateScore(commentId, 'minus')}
        aria-label="Downvote"
      >
        <MinusIcon />
      </button>
    </div>
  );
};

export default ScoreCounter;
