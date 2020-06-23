import { observable, action } from 'mobx'

import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL, APIStatus } from '@ib/api-constants'

import PostService from '../../services/PostService'

import PostModel from '../models/PostModel'

import { PostObject } from '../types'
class PostStore {
  postService!: PostService
  @observable getPostListAPIStatus!: APIStatus
  @observable getPostListAPIError!: Error | null
  @observable PostsList!: Array<PostObject>

  constructor(postService: PostService) {
    this.postService = postService
    this.init()
  }

  @action.bound
  init() {
    this.getPostListAPIStatus = API_INITIAL
    this.getPostListAPIError = null
    this.PostsList = []
  }

  @action.bound
  setPostListAPIStatus(status) {
    this.getPostListAPIStatus = status
  }

  @action.bound
  setPostListAPIError(error) {
    this.getPostListAPIError = error
  }

  @action.bound
  setPostListResponse(response: Array<PostObject> | null) {
    if (response) {
      this.PostsList = response.map(post => {
        return new PostModel(post)
      })
    }
  }

  @action.bound
  getPostsList() {
    const getPostsPromise = this.postService.getPostsAPI()
    return bindPromiseWithOnSuccess(getPostsPromise)
      .to(this.setPostListAPIStatus, this.setPostListResponse)
      .catch(this.setPostListAPIError)
  }
}

export default PostStore
