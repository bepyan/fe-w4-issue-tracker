import { _axios } from '@services';
import { IssueDTO } from '@types';

const baseRoute = '/issues';

// POST

export const create_issue = (data: any) => {
  return _axios<void>({
    url: `${baseRoute}`,
    method: 'POST',
    data,
  });
};

// GET

export const read_all_issues = () => {
  return _axios<IssueDTO[]>({
    url: `${baseRoute}`,
    method: 'GET',
  });
};

export const read_issue_by_id = (issueId: number) => {
  return _axios<IssueDTO>({
    url: `${baseRoute}/${issueId}`,
    method: 'GET',
  });
};

// PUT

export const update_issue_status = (issueId: number, data: any) => {
  return _axios<void>({
    url: `${baseRoute}/${issueId}/status`,
    method: 'PUT',
    data,
  });
};

export const update_issue_title = (
  issueId: number,
  data: { title: string },
) => {
  return _axios<void>({
    url: `${baseRoute}/${issueId}`,
    method: 'PUT',
    data,
  });
};

// DELETE

export const delete_issue = (issueId: number) => {
  return _axios<void>({
    url: `${baseRoute}/${issueId}`,
    method: 'DELETE',
  });
};
