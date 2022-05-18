export interface Order {
  id: string;
  userId: string;
  title: string;
  body: string;
  createdAt?: Date;
  deletedAt?: Date;
}