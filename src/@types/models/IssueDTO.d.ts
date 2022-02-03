declare module '@types' {
  type IssueStatus = 'open' | 'close';

  interface IssueDTO {
    id: number;
    num: number;
    title: string;
    comments: CommentDTO[];
    labels: ILabel[];
    assigneers?: IUser[];
    milestone?: IMilestone;
    writer: IUser;
    status: IssueStatus;
    timestamp: string;
  }

  interface IssueRequestDTO {
    num: number;
    title: string;
    comment: string;
    labels: ILabel[];
    assigneers: IUser[];
    milestone?: IMilestone;
  }
}
