import { _axios } from '@services';
import { CommentDTO } from '@types';

const baseRoute = '/comments';

// POST

export const create_comment = (data: CommentDTO) => {
  return _axios<void>({
    url: `${baseRoute}`,
    method: 'POST',
    data,
  });
};

// GET

// PUT

export const update_comment = (commentId: number, data: any) => {
  return _axios<void>({
    url: `${baseRoute}/${commentId}`,
    method: 'PUT',
    data,
  });
};

// DELETE

export const delete_comment = (commentId: number) => {
  return _axios<void>({
    url: `${baseRoute}/${commentId}`,
    method: 'DELETE',
  });
};
