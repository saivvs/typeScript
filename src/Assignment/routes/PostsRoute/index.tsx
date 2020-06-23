import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import LoadingWrapperWithFailure from '../../components/common/LoadingWrapperWithFailure'
import PostStore from '../../stores/PostStore'
import PostList from '../../components/PostList'
import { PostsWrapper } from './styledComponents'

interface PostsRouteProps {}

interface InjectedProps extends PostsRouteProps {
  postStore: PostStore
}

@inject('postStore')
@observer
class PostsRoute extends Component<PostsRouteProps> {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.getPosts()
  }

  getInjectedProps = (): InjectedProps => this.props as InjectedProps

  getPostStore = () => {
    return this.getInjectedProps().postStore
  }

  getPosts = () => {
    this.getPostStore().getPostsList()
  }

  renderSuccessUI = () => {
    const { PostsList } = this.getPostStore()
    return (
      <PostsWrapper>
        <PostList PostsList={PostsList} />
      </PostsWrapper>
    )
  }
  render() {
    const { getPostListAPIStatus, getPostListAPIError } = this.getPostStore()
    return (
      <LoadingWrapperWithFailure
        apiStatus={getPostListAPIStatus}
        apiError={getPostListAPIError}
        onRetry={this.getPosts}
        renderSuccessUI={this.renderSuccessUI}
      />
    )
  }
}

export default PostsRoute
