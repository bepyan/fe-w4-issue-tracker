declare module '@types' {
  interface IUser {
    name: string;
    id: string;
    pw: string;
  }

  interface IIssue {
    num: number;
    title: string;
    labels: ILabel[];
    milestone?: IMilestone;
    assigneer?: IUser;
    writer: IUser;
    isclose: boolean;
    timestamp: string;
  }

  interface ILabel {
    name: string;
    color: string;
    backgroundColor: string;
  }

  interface IMilestone {
    name: string;
  }
}
