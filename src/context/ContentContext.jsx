import { createContext, useState, useContext, useEffect } from 'react';
import data from '../data.json';

const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState(() => {
    const localData = localStorage.getItem('app_comments');

    if (localData) {
      return JSON.parse(localData);
    }

    return data.comments;
  });
  const currentUser = data.currentUser;

  useEffect(() => {
    localStorage.setItem('app_comments', JSON.stringify(comments));
  }, [comments]);

  const generateId = () => Math.floor(Math.random() * 10000);

  const updateComment = (id, newContent) => {
    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === id) {
          return { ...node, content: newContent };
        }

        if (node.replies && node.replies.length > 0) {
          return { ...node, replies: updateTree(node.replies) };
        }

        return node;
      });
    };

    setComments((prevComments) => updateTree(prevComments));
  };

  const deleteComment = (id) => {
    const deleteRecursive = (list) => {
      return list
        .filter((node) => node.id !== id)
        .map((node) => {
          if (node.replies && node.replies.length > 0) {
            return { ...node, replies: deleteRecursive(node.replies) };
          }
          return node;
        });
    };

    setComments((prevComments) => deleteRecursive(prevComments));
  };

  const addReply = (targetCommentId, content, replyingToUsername) => {
    const newReply = {
      id: generateId(),
      content: content,
      createdAt: new Date().toISOString(),
      score: 0,
      replyingTo: replyingToUsername,
      user: currentUser,
      replies: [],
    };

    const addReplyToTree = (list) => {
      return list.map((node) => {
        if (node.id === targetCommentId) {
          return { ...node, replies: [...(node.replies || []), newReply] };
        }
        if (node.replies && node.replies.length > 0) {
          return { ...node, replies: addReplyToTree(node.replies) };
        }
        return node;
      });
    };

    setComments((prev) => addReplyToTree(prev));
  };

  const addComment = (content) => {
    const newComment = {
      id: generateId(),
      content: content,
      createdAt: new Date().toISOString(),
      score: 0,
      user: currentUser,
      replies: [],
    };
    setComments([...comments, newComment]);
  };

  const updateScore = (id, direction) => {
    const updateRecursive = (list) => {
      return list.map((node) => {
        if (node.id === id) {
          const currentScore = node.score;
          const newScore =
            direction === 'plus' ? currentScore + 1 : currentScore - 1;

          return { ...node, score: newScore };
        }

        if (node.replies && node.replies.length > 0) {
          return { ...node, replies: updateRecursive(node.replies) };
        }

        return node;
      });
    };

    setComments((prev) => updateRecursive(prev));
  };

  const value = {
    comments,
    currentUser,
    addReply,
    deleteComment,
    addComment,
    updateComment,
    updateScore,
  };

  return (
    <CommentContext.Provider value={value}>{children}</CommentContext.Provider>
  );
};

export const useComments = () => {
  return useContext(CommentContext);
};
