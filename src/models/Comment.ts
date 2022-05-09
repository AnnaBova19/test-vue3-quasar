export interface Post {
  id: string;
  postId: string;
  name: string;
  email: string;
  body?: string;
  createdAt?: Date;
  deletedAt?: Date;
}