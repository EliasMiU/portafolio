import React, { Component } from "react";

export default class Keyslist extends Component {

  posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ]

    sidebar = (
      <ul>
        {this.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    content = this.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );


    render() {
        return (
            <div>
                {this.sidebar}
                <hr />
                {this.content}
            </div>
        );     
    }

}