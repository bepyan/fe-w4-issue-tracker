declare module '@types' {
  type CommentStatus = 'initial' | 'closed' | 'reopen';

  interface CommentDTO {
    id: number;
    content: string;
    author: IUser;
    status: CommentStatus;
  }

  interface CommentRequestDTO {
    content: string;
  }
}
