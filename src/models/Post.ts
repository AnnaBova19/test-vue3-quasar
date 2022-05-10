export interface Post {
  id: string;
  userId: string;
  title: string;
  body: string;
  createdAt?: Date;
  deletedAt?: Date;
}