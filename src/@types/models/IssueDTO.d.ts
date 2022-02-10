declare module '@types' {
  type IssueStatus = 'open' | 'close';

  interface IssueDTO {
    id: string;
    num: number;
    title: string;
    comments: CommentDTO[];
    labels: LabelDTO[];
    assignees: UserDTO[];
    milestone?: MilestoneDTO;
    writer: UserDTO;
    status: IssueStatus;
    timestamp: string;
  }

  interface IssueFormDTO {
    title: string;
    comment: string;
    labels: LabelDTO[];
    assignees: UserDTO[];
    milestone?: MilestoneDTO;
  }

  interface IssueRequestDTO {
    title: string;
    comment: string;
    labels: string[];
    assignees: string[];
    milestone?: string | null;
  }

  interface IssueUpdateDTO {
    labels?: string[];
    assignees?: string[];
    milestone?: string | null;
  }
}
