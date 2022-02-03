declare module '@types' {
  interface LabelDTO {
    id: number;
    name: string;
    description: string;
    color: string;
    backgroundColor: string;
  }

  interface LabelRequestDTO {
    name: string;
    description: string;
    color: string;
    backgroundColor: string;
  }
}
