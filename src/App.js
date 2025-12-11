import './App.css';
import CommentList from './components/CommentList/CommentList.jsx';
import CommentForm from './components/CommentsForm/CommentForm.jsx';
import { useComments } from './context/ContentContext.jsx';
import data from './data.json';

function App() {
  const { comments, addComment } = useComments();

  return (
    <main className="App">
      <CommentList comments={comments} />
      <CommentForm handleSubmit={(text) => addComment(text)} />
    </main>
  );
}

export default App;
