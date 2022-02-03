import { _axios } from '@services';
import { LabelDTO, LabelRequestDTO } from '@types';

const baseRoute = '/labels';

// POST

export const create_label = (data: LabelRequestDTO) => {
  return _axios<void>({
    url: `${baseRoute}`,
    method: 'POST',
    data,
  });
};

// GET

export const read_all_labels = () => {
  return _axios<LabelDTO[]>({
    url: `${baseRoute}`,
    method: 'GET',
  });
};

// PUT

export const update_label = (labelId: number, data: LabelRequestDTO) => {
  return _axios<void>({
    url: `${baseRoute}/${labelId}`,
    method: 'PUT',
    data,
  });
};

// DELETE

export const delete_label = (labelId: number) => {
  return _axios<void>({
    url: `${baseRoute}/${labelId}`,
    method: 'DELETE',
  });
};
