import React, { Component } from 'react'
import PostModel from '../../stores/models/PostModel'
import { PostCard, PostTitle, PostBody } from './styledComponents'

type PostProps = {
  post: PostModel
}

class Post extends Component<PostProps> {
  render() {
    const { post } = this.props
    const { title, body } = post
    return (
      <PostCard>
        <PostTitle>{title}</PostTitle>
        <PostBody>{body}</PostBody>
      </PostCard>
    )
  }
}

export default Post
