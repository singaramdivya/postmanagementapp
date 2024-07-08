import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../actions/postActions';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const CreatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState({ title: '', content: '' });
  const [submitMessage, setSubmitMessage] = useState('');

  const validateForm = () => {
    let valid = true;
    const newErrors = { title: '', content: '' };

    if (title.trim() === '') {
      newErrors.title = 'Title is required';
      valid = false;
    }

    if (content.trim() === '') {
      newErrors.content = 'Content is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(createPost({ title, body: content }));
      setSubmitMessage('Post created successfully!');
      setTimeout(() => {
        setSubmitMessage('');
        navigate('/');
      }, 3000);
    }
  };

  return (
    <div className="create-post-container">
      <div className="create-post">
        <h2>Create New Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <div className="error">{errors.title}</div>}
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          {errors.content && <div className="error">{errors.content}</div>}
          <div className="submit-btn">
            <button type="submit">Create Post</button>
          </div>
          {submitMessage && <p className="submit-message">{submitMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default CreatePost;

