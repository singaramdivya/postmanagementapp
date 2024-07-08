import React from 'react';
import './styles.css';

const PostItem = ({ post, onEdit }) => {
  return (
    <div className="post-item">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <div className='btn-container'>
      <button onClick={() => onEdit(post.id)}>Edit</button>
      </div>
    </div>
  );
};

export default PostItem;
