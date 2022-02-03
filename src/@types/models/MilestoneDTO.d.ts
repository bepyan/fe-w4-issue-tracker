declare module '@types' {
  type MilestoneStatus = 'open' | 'closed';

  interface MilestoneDTO {
    id: number;
    title: string;
    description: string;
    deadline: string;
    issues: IssueDTO[];
    status: MilestoneStatus;
  }

  interface MilestoneRequestDTO {
    title: string;
    description: string;
    deadline: string;
  }
}
