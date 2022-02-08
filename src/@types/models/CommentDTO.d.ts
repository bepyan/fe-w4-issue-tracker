declare module '@types' {
  type CommentStatus = 'initial' | 'closed' | 'reopen';

  interface CommentDTO {
    id: string;
    content: string;
    author: string;
    status: CommentStatus;
  }

  interface CommentRequestDTO {
    content: string;
    status?: CommentStatus;
  }
}
