import React from 'react';

import { posts } from './store';

const PostDetail = ({ match, history }) => {
  const deletePost = id => {
    const index = posts.findIndex(p => p.id === id);
    if (index < 0) {
      console.log(`No post found for id ${id}`);
      return;
    }

    posts.splice(index, 1);
    history.push('/posts');
  };

  const id = match.params.id;

  const post = posts.find(p => p.id === parseInt(id));
  if (!post) {
    return <div className="alert alert-info">No post found!</div>;
  }

  const { title, body, author, category,start,end } = post;

  return <div>
    <h5>Post Detail</h5>
    <div className="card bg-light mb-3">
      <div className="card-header">
        <h5>
          {title}
        </h5>
      </div>
      <div className="card-body">
        <p className="card-text">
          {body}
        </p>
        <p className="card-text">Author: <em>
          {author}
        </em></p>
        <p className="card-text">Category: <em>
          {start}
        </em></p>
      </div>
      <div className="card-footer">
       
        <button
          className="btn btn-sm btn-outline-danger"
          type="button"
          onClick={() => deletePost(post.id)}
        >Delete</button>
      </div>
    </div>
  </div>
};

export default PostDetail;
