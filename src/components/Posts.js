import React, { Component } from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



import { posts, categoryAll } from './store';

class Posts extends Component {

  constructor() {
    super();

    this.state = {
      posts: posts,
      selectedCategory: categoryAll
    };
  }

  handleCategorySelect = category => {
    this.setState({ selectedCategory: category });
  }

  handleDeletePost = postId => {
    this.setState((prevState) => {
      return {
        posts: prevState.posts.filter(p => p.id !== postId)
      };
    });
  }

  renderPosts(filteredPosts) {
   
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Start-Date</th>
            <th scope="col">End-Date</th>
            <th scope="col">Value in %</th>
            
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map(p => <tr key={p.id}>
            <td>{p.title}</td>
           
            <td>{p.start}</td>
            <td>{p.end}</td>
            <td style={{ width: 104}}>
            
            <CircularProgressbar value={p.author} text={`${p.author}%`}   />;
          
             </td>
            <td>
              <div className="btn-group btn-sm">
                <button className="btn btn-danger" onClick={() => this.handleDeletePost(p.id)}>Delete</button>
              </div>
            </td>
          </tr>)}
        </tbody>
      </table>
    );
  }

  render() {
    const { posts, selectedCategory } = this.state;

    const filteredPosts = selectedCategory.id === 'all' ?
      posts : posts.filter(p => p.category === selectedCategory.id);

    return <div className="row">
  
      <div className="col-md-9">
        <h5>Detail Report</h5>
        {
          filteredPosts.length > 0
            ? this.renderPosts(filteredPosts)
            : <div className="alert alert-info">No users created yet</div>
        }
      </div>
    </div>;
  }

}

export default Posts;
