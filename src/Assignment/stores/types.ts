export interface PostObject {
  userId: number
  id: number
  title: string
  body: string
}

export type GetPostsResponses = Array<PostObject>
