import { Table } from '@components';
import React from 'react';
import { IssueTableHeader } from './IssueTableHeader';

type IssueTableProps = {
  children: React.ReactNode;
};

export const IssueTable = ({ children }: IssueTableProps) => {
  return <Table header={<IssueTableHeader />}>{children}</Table>;
};
