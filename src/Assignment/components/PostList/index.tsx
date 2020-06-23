import React, { Component } from 'react'
import PostModel from '../../stores/models/PostModel'
import Post from '../Post'
import { PostListWrapper, Heading } from './styledComponents'
//Todo make noload view

type PostListProps = {
  PostsList: Array<PostModel>
}
class PostList extends Component<PostListProps> {
  render() {
    const { PostsList } = this.props
    //NodataView is need
    return (
      <PostListWrapper>
        <Heading>POSTS</Heading>
        {PostsList.map(eachPost => {
          return <Post key={eachPost.id} post={eachPost} />
        })}
      </PostListWrapper>
    )
  }
}

export default PostList
