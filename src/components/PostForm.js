import React, { Component } from 'react';
import { format } from "date-fns";
import { DatePicker } from '@progress/kendo-react-dateinputs';
import '@progress/kendo-theme-default/dist/all.css';

import { posts } from './store';

class PostForm extends Component {

  state = {
    id: 0,
    title: '',
    body: '',
    author: '',
    category: '',
    start:null,
    end:null,
    success: false
  };

  componentDidMount() {
    this.getPost();
    console.log('PostForm component mounted.');
  }

  componentWillUnmount() {
    console.log('PostForm component got destroyed.');
  }

  getPost = () => {
    const id = this.props.match.params.id;

    const post = posts.find(p => p.id === parseInt(id));
    if (!post) {
      return;
    }

    this.setState({
      id: post.id,
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category,
      start:post.start,
      end:post.end
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    const id = this.state.id;

  

    


    if (id === 0 ) {
      // Create new post
      const newPost = { ...this.state, id: Date.now() };
      posts.push(newPost);
    } else {
      // Update existing post
      const post = posts.find(p => p.id === id);

      if (post) {
        post.title = this.state.title;
        post.body = this.state.body;
        post.author = this.state.author;
        post.category = this.state.category;
        post.start=this.state.start;
        post.end=this.state.end;
      } else {
        console.log(`No post found for id: ${this.state.id}`);
      }
    }

    this.props.history.push('/posts');
  }

  

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
       
    const { title, end, author, start } = this.state;

    return <div>
      <h5>Enter User Details</h5>

      <div className="card bg-light">
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Enter your full-name"
                value={title}
                onChange={this.handleChange}
                required
              // onChange={e => this.setState({ title: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="body"></label>
              Start Date: <input type="date" name="start" value={start}  onChange={this.handleChange } required /><span>        </span>
              End Date: <input type="date" name="end" value={end}  onChange={this.handleChange} required /> 
            </div>
            <div className="form-group">
              <label htmlFor="author">Value (1-100)</label>
              <input
                type="number"
                min="1"
                max="100"
                className="form-control"
                id="author"
                name="author"
                placeholder="Enter the value"
                value={author}
                onChange={this.handleChange}
                required
              // onChange={e => this.setState({ author: e.target.value })}
              />
            </div>
            

            <button type="submit" className="btn btn-primary">Save User</button>
          </form>
        </div>
      </div>

    </div>;
  }

}

export default PostForm;
