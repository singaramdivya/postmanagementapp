import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import PostsDisplay from './components/PostsDisplay';
import EditPost from './components/EditPost';
import CreatePost from './components/CreatePost';

const App = () => {
  const [editingPost, setEditingPost] = useState(null);
  const navigate = useNavigate();

  const handleEdit = (postId) => {
    setEditingPost(postId);
    navigate(`/edit/${postId}`);
  };

  return (
    <>
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<PostsDisplay onEdit={handleEdit} />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:postId" element={<EditPost />} />
        </Routes>
        <footer>
          <p>&copy; 2024 My React App</p>
        </footer>
      </div>
    </Provider>
    </>
  );
};

export default App;

