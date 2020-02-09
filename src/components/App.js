import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Posts from './Posts';
import PostForm from './PostForm';


const App = () => {
  return <div className="container">

    <Header />
    {/* <Route path="/" component={PostForm} /> */}
    <Route path="/new-post" component={PostForm} />

    <Route  path="/posts" component={Posts} />
   
    {/* <Route exact path="/new-post" component={PostForm} /> */}
    
  </div>;
};

export default App;
