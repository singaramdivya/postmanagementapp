import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePost, fetchPosts } from '../actions/postActions';
import { useNavigate, useParams } from 'react-router-dom';
import './styles.css';

const EditPost = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === parseInt(postId))
  );
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.body || '');
  const [errors, setErrors] = useState({ title: '', content: '' });
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.body);
    }
  }, [post]);

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
      dispatch(updatePost({ id: postId, title, body: content }));
      setSubmitMessage('Post updated successfully!');
      setTimeout(() => {
        setSubmitMessage('');
        dispatch(fetchPosts()); 
        navigate('/');
      }, 1000);
    }
  };

  return (
    <div className="edit-post">
      <h2>Edit Post</h2>
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
        <button className='updateBtn' type="submit">Update Post</button>
        {submitMessage && <p className="submit-message">{submitMessage}</p>}
      </form>
    </div>
  );
};

export default EditPost;
