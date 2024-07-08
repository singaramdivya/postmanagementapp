import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import PostItem from './PostItem';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const PostsDisplay = ({ onEdit }) => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleCreatePost = () => {
    navigate('/create');
  };

  return (
    <div className="posts-display">
      <h1 id='heading'>Post Management App</h1>
      <div className='heading-section'>
        <div>
          <h2>Posts</h2>
        </div>
        <div>
        <button className="create-post-button" onClick={handleCreatePost}>
        &#43; Create New
        </button>
        </div>
      </div>
      <div className="card-list">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

export default PostsDisplay;

