import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Post from './Post/Post'
import Header from './Header/Header';
import Compose from './Compose/Compose';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }
  
  componentDidMount() {
    axios.get('https://practiceapi.devmountain.com/api/posts')
    .then((response) => {
      this.setState({
        posts: response.data
      })
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
      alert("couldnt get post data")
    })

  }

  updatePost(id, text) {
    console.log(text);
    console.log(id);
    axios.put(`https://practiceapi.devmountain.com/api/posts?id=${id}`, {text})
  .then((response) => 
  {
    this.setState({
      posts: response.data
    })
  })
  .catch((error) => 
  {
    console.log(error)
    alert("could not update post")
  })
  
  }

  deletePost(id) {
    axios.delete(`https://practiceapi.devmountain.com/api/posts?id=${id}`)
    .then((response) => 
    {
      this.setState({
        posts: response.data
      })
    })
    .catch((error) => 
    {
      console.log(error)
      alert("couldnt delete post")
    })

  }

  createPost(text) {
    axios.post('https://practiceapi.devmountain.com/api/posts', {text})
    .then((response) => 
    {
      this.setState({
        posts: response.data
      })
    })
    alert("you have created a post");
    console.log(text);

  }

  render() {
    const { posts } = this.state;
    let postsCopy = posts.map((curVal, index) =>
    {
      return (<Post 
        key={index} 
        post={curVal.text} 
        date={curVal.date}
        id={curVal.id}
        updatePostMethod={(postId, text) => this.updatePost(postId, text)}
        deletePostMethod ={(postId) => this.deletePost(postId)}
        />)
    })
    console.log(posts)

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose 
          method={(text) => this.createPost(text)}/>
          {postsCopy}
          
        </section>
      </div>
    );
  }
}

export default App;
