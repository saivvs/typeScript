import getPostResponse from '../../fixtures/getPostResponse.json.js'

import { resolveWithTimeout } from '../../utils/TestUtils'

import PostService from './index'

class PostFixtureService implements PostService {
  getPostsAPI() {
    return resolveWithTimeout(getPostResponse)
  }
}

export default PostFixtureService
