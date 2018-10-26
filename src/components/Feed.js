import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';

class Feed extends Component {
  render() {
    return <PostList />;
  }
}

export default Feed;
