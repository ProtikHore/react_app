import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount () {
        axios.get('http://localhost:8000/api/get/data').then(response => {
            console.log(response);
            this.setState({
                posts: response.data.slice(0, 10)
            });
        })
    }
    render() {
        const { posts } = this.state
        const postList = posts.length ? (
        posts.map(post => {
            return (
            <div className="post card" key={post.id}>
                <div className="card-content">
                <span className="card-title">{post.name}</span>
                <span className="card-body">{post.mobile_no}</span>
                <p>{post.body}</p>
                </div>
            </div>
            )
        })
        ) : (
            <div className="center">No posts to show</div>
        );
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

export default Home