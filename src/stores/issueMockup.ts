import { IIssue } from '@types';

export const getIssueList = (): IIssue[] => [
  {
    num: 1,
    title: '이슈제목',
    isclose: false,
    timestamp: '2022-01-29',
    writer: {
      id: 'edward',
      name: 'edward',
      pw: 'a',
    },
    assigneer: {
      id: 'edward',
      name: 'edward',
      pw: '',
    },
    milestone: {
      name: '마일스톤',
    },
    labels: [
      {
        name: '이름',
        color: '#888',
        backgroundColor: '#eee',
      },
    ],
  },
  {
    num: 2,
    title: '이슈제목 2',
    isclose: false,
    timestamp: '2022-01-29',
    writer: {
      id: 'edward',
      name: 'edward',
      pw: 'a',
    },
    assigneer: {
      id: 'edward',
      name: 'edward',
      pw: '',
    },
    milestone: {
      name: '마일스톤 2',
    },
    labels: [
      {
        name: '이름 2',
        color: '#888',
        backgroundColor: '#eee',
      },
    ],
  },
  {
    num: 3,
    title: '이슈제목',
    isclose: false,
    timestamp: '2022-01-29',
    writer: {
      id: 'edward',
      name: 'edward',
      pw: 'a',
    },
    assigneer: {
      id: 'edward',
      name: 'edward',
      pw: '',
    },
    milestone: {
      name: '마일스톤',
    },
    labels: [
      {
        name: '이름',
        color: '#888',
        backgroundColor: '#eee',
      },
    ],
  },
];
