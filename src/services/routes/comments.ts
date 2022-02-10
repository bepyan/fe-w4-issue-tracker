import { _axios } from '@services';
import { CommentRequestDTO } from '@types';

const baseRoute = '/comments';

// PATCH

export const update_comment = (commentId: string, data: CommentRequestDTO) => {
  return _axios<void>({
    url: `${baseRoute}/${commentId}`,
    method: 'PATCH',
    data,
  });
};
