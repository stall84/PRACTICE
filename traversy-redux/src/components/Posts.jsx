import React, { Component } from 'react'



class Posts extends Component {

constructor(props) {
    super(props) 

    this.state = {
        posts: []
    }
}


componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => this.setState({ posts:data }))
    .catch(error => console.log(error))
}

    render() {
        const postsRender = this.state.posts.map(post => {
            return (
                <div>
                <h3>{post.id} - {post.title}</h3>
                <h4><strong>{post.body}</strong></h4>
                <h5>By: {post.userId}</h5> 
                </div>
                )
        })
        return (
            <div>
               <h1>Posts</h1>
               <div className="PostsRender">
                   {postsRender}
                </div> 
            </div>
        )
    }
}


export default Posts;