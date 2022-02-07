import { _axios } from '@services';
import { IssueDTO, IssueRequestDTO } from '@types';

const baseRoute = '/issues';

// POST

export const create_issue = (data: IssueRequestDTO) => {
  return _axios<IssueDTO>({
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

export const read_issue_by_id = (issueId: string) => {
  return _axios<IssueDTO>({
    url: `${baseRoute}/${issueId}`,
    method: 'GET',
  });
};

// PATCH

export const update_issue_title = (issueId: string, data: IssueRequestDTO) => {
  return _axios<void>({
    url: `${baseRoute}/${issueId}`,
    method: 'PATCH',
    data,
  });
};

export const update_issue_status = (issueId: string) => {
  return _axios<IssueDTO>({
    url: `${baseRoute}/${issueId}/status`,
    method: 'PATCH',
  });
};

// DELETE

export const delete_issue = (issueId: string) => {
  return _axios<void>({
    url: `${baseRoute}/${issueId}`,
    method: 'DELETE',
  });
};

export const delete_issue_comment = (issueId: string, commentId: string) => {
  return _axios<void>({
    url: `${baseRoute}/${issueId}/comment/${commentId}`,
    method: 'DELETE',
  });
};
