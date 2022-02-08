declare module '@types' {
  type LabelColor = 'light' | 'dark' | 'line';

  interface LabelDTO {
    id: string;
    name: string;
    description: string;
    color: LabelColor;
    backgroundColor: string;
    userId: string;
  }

  interface LabelRequestDTO {
    name: string;
    description: string;
    color: LabelColor;
    backgroundColor: string;
  }
}
